"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, ShoppingBag } from "lucide-react"

type Product = { id: string; title: string; handle: string; description?: string; featuredImage?: { url: string; altText?: string } | null; priceRange?: { minVariantPrice?: { amount: string; currencyCode: string } } }
type Result = { configured: boolean; products: Product[]; storeUrl?: string; message?: string }
export function ShopifyProducts() {
  const [data, setData] = useState<Result | null>(null)
  useEffect(() => { fetch("/api/shopify-products").then(r => r.json()).then(setData).catch(() => setData({ configured: false, products: [], message: "Catalogue temporarily unavailable." })) }, [])
  return <section id="shopify-store" className="shopify-store-section">
    <div className="shopify-store-inner">
      <div className="shopify-store-heading"><span className="shopify-eyebrow">THE CATALOGUE</span><h2>Explore our collection</h2><p>Browse products from our connected store.</p></div>
      {!data && <p className="shopify-store-note">Loading catalogue…</p>}
      {data && data.products.length > 0 && <div className="shopify-product-grid">{data.products.map(product => <a className="shopify-product-card" key={product.id} href={`${data.storeUrl}/products/${product.handle}`} target="_blank" rel="noreferrer">
        <div className="shopify-product-image">{product.featuredImage?.url ? <Image src={product.featuredImage.url} alt={product.featuredImage.altText || product.title} fill sizes="(max-width: 700px) 80vw, 25vw" unoptimized /> : <ShoppingBag size={32} />}</div>
        <div className="shopify-product-meta"><div><h3>{product.title}</h3>{product.priceRange?.minVariantPrice && <p>{new Intl.NumberFormat("en-PK", { style: "currency", currency: product.priceRange.minVariantPrice.currencyCode }).format(Number(product.priceRange.minVariantPrice.amount))}</p>}</div><ArrowUpRight size={18}/></div>
      </a>)}</div>}
      {data && data.products.length === 0 && <div className="shopify-store-note"><p>{data.message || "Your Shopify products will appear here after configuration."}</p><p className="shopify-setup-hint">Shopify connection is prepared. Add your store domain in <code>.env.local</code> to connect the live catalogue.</p></div>}
    </div>
  </section>
}
