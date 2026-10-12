ABUZAR WEBSITE — SCROLL ANIMATION + SHOPIFY + SUPPORT CHAT

WHAT'S INCLUDED
- Existing Next.js website and scroll-controlled background frames.
- Responsive Shopify catalogue section connected through the Storefront API.
- Always-visible floating support chatbot, with Roman Urdu/English-friendly Pakistan-market guidance.
- FAQ fallback works without an AI key; OpenAI-powered responses require your own API key.
- Image layout is responsive and product cards use consistent 4:5 crops.

IMPORTANT SETUP REQUIRED FOR LIVE INTEGRATIONS
1. Extract this ZIP completely.
2. Install Node.js LTS from https://nodejs.org/.
3. In the extracted folder, copy .env.example to .env.local.
4. Edit .env.local and set SHOPIFY_STORE_DOMAIN to your actual Shopify myshopify.com domain. If you have a Storefront API public token, add it too. Keep private/admin Shopify tokens out of browser code.
5. To enable AI answers, add your own OPENAI_API_KEY to .env.local. The FAQ fallback works without it. API usage may incur charges.
6. Open PowerShell in this folder and run:
   Set-ExecutionPolicy -Scope Process Bypass
   .\RUN-WEBSITE.ps1
7. Visit http://localhost:3000

SHOPIFY NOTES
- This connects a read-only product catalogue and links products to Shopify product pages/checkout. Shopify must be configured and products published to the relevant sales channel.
- Full native cart/checkout embedding and order/customer sync are not enabled in this starter package; Shopify-hosted product/checkout flows remain the secure route.
- No store domain or API token was provided in the conversation, so the live Shopify account cannot be pre-connected in this ZIP.

CHATBOT NOTES
- The chatbot is always visible at the bottom-right.
- It is trained by a concise system prompt for Pakistan market support: Roman Urdu/English, product inquiries, quotes, city/quantity questions, and careful handling of unconfirmed pricing/delivery/warranty.
- Without OPENAI_API_KEY, it uses local FAQ responses; with a valid key it calls the OpenAI API from the server route. Do not expose API keys in client-side code.
- Confirm actual business prices, stock, shipping, payment methods, returns, warranty, and contact details before making those claims to customers.

PERFORMANCE
- The catalogue is cached for 60 seconds and product images are responsive.
- The scroll sequence uses many frames and can still be heavy on lower-end phones; test with a production build and consider a video/WebM alternative for a lighter transfer.

RUN
1. Copy .env.example to .env.local and configure keys.
2. Run .\RUN-WEBSITE.ps1 in PowerShell.
3. Open http://localhost:3000.
4. Keep PowerShell open while testing; Ctrl+C stops the server.

This is a prepared integration package, not a claim that credentials or live account access have already been configured. Test locally before publishing.
