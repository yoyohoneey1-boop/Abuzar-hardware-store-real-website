"use client"

import { useEffect, useRef } from "react"

const FRAME_COUNT = 300
const FRAME_PATH = "/scroll-frames/frame_"
const pad = (n: number) => String(n).padStart(4, "0")

/** Draws a frame sequence on a fixed canvas; scroll position selects the frame. */
export function ScrollSequenceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d", { alpha: false })
    if (!canvas || !ctx) return

    let disposed = false
    let raf = 0
    let currentFrame = 1
    let lastDrawn = -1
    const images = new Map<number, HTMLImageElement>()
    const loading = new Set<number>()

    const draw = (index: number) => {
      const image = images.get(index)
      if (!image || disposed) return
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr))
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
      const scale = Math.max(w / image.naturalWidth, h / image.naturalHeight)
      const dw = image.naturalWidth * scale
      const dh = image.naturalHeight * scale
      ctx.clearRect(0, 0, w, h)
      ctx.drawImage(image, (w - dw) / 2, (h - dh) / 2, dw, dh)
      lastDrawn = index
    }

    const load = (index: number) => {
      if (index < 1 || index > FRAME_COUNT || images.has(index) || loading.has(index)) return
      loading.add(index)
      const image = new Image()
      image.decoding = "async"
      image.onload = () => {
        loading.delete(index)
        if (disposed) return
        images.set(index, image)
        if (index === currentFrame) draw(index)
        // Keep memory bounded; retain a small window around the current scroll frame.
        for (const key of images.keys()) {
          if (Math.abs(key - currentFrame) > 22 && key !== 1 && key !== FRAME_COUNT) images.delete(key)
        }
      }
      image.onerror = () => loading.delete(index)
      image.src = `${FRAME_PATH}${pad(index)}.webp`
    }

    const render = () => {
      raf = 0
      if (disposed) return
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = Math.max(0, Math.min(1, window.scrollY / maxScroll))
      currentFrame = Math.max(1, Math.min(FRAME_COUNT, Math.round(progress * (FRAME_COUNT - 1)) + 1))
      load(currentFrame)
      // Preload a few upcoming frames to keep scrolling responsive.
      for (let i = 1; i <= 4; i++) load(currentFrame + i)
      if (images.has(currentFrame)) draw(currentFrame)
      else {
        let nearest = -1
        let distance = Infinity
        for (const key of images.keys()) {
          const d = Math.abs(key - currentFrame)
          if (d < distance) { distance = d; nearest = key }
        }
        if (nearest > 0 && nearest !== lastDrawn) draw(nearest)
      }
    }

    const schedule = () => { if (!raf) raf = window.requestAnimationFrame(render) }
    for (let i = 1; i <= 6; i++) load(i)
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    const observer = "ResizeObserver" in window ? new ResizeObserver(schedule) : null
    observer?.observe(document.documentElement)
    schedule()

    return () => {
      disposed = true
      if (raf) window.cancelAnimationFrame(raf)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      observer?.disconnect()
      images.clear()
      loading.clear()
    }
  }, [])

  return <div className="scroll-sequence-background" aria-hidden="true"><canvas ref={canvasRef} /></div>
}
