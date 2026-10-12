import { NextResponse } from "next/server"

export const revalidate = 60

export async function GET() {
  const domain = process.env.SHOPIFY_STORE_DOMAIN?.trim()
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN?.trim()
  if (!domain) return NextResponse.json({ configured: false, products: [], message: "Shopify store domain is not configured yet." })
  const cleanDomain = domain.replace(/^https?:\/\//, "").replace(/\/$/, "")
  const version = process.env.SHOPIFY_API_VERSION || "2026-04"
  const query = `query Products { products(first: 8) { edges { node { id title handle description productType featuredImage { url altText } priceRange { minVariantPrice { amount currencyCode } } } } } }`
  try {
    const response = await fetch(`https://${cleanDomain}/api/${version}/graphql.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(token ? { "X-Shopify-Storefront-Access-Token": token } : {}) },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 },
    })
    if (!response.ok) return NextResponse.json({ configured: true, products: [], message: "Shopify could not be reached. Check your store domain and Storefront API settings." }, { status: 502 })
    const json = await response.json()
    if (json.errors) return NextResponse.json({ configured: true, products: [], message: "Shopify API configuration needs checking." }, { status: 502 })
    const products = (json.data?.products?.edges || []).map((edge: any) => edge.node)
    return NextResponse.json({ configured: true, products, storeUrl: `https://${cleanDomain}` })
  } catch {
    return NextResponse.json({ configured: true, products: [], message: "Unable to connect to Shopify right now." }, { status: 502 })
  }
}
