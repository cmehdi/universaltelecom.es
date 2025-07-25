import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Countries mapped to languages
const countryToLanguage: Record<string, string> = {
  // Spanish-speaking countries
  ES: "es",
  AR: "es",
  MX: "es",
  CO: "es",
  PE: "es",
  VE: "es",
  CL: "es",
  EC: "es",
  GT: "es",
  CU: "es",
  BO: "es",
  DO: "es",
  HN: "es",
  PY: "es",
  SV: "es",
  NI: "es",
  CR: "es",
  PA: "es",
  UY: "es",
  PR: "es",
  GQ: "es",

  // English-speaking countries
  US: "en",
  GB: "en",
  CA: "en",
  AU: "en",
  NZ: "en",
  IE: "en",
  ZA: "en",
  IN: "en",
  SG: "en",
  MY: "en",
  PH: "en",
  HK: "en",
  NG: "en",
  KE: "en",
  GH: "en",
  UG: "en",
  TZ: "en",
  ZW: "en",
  BW: "en",
  MW: "en",
  ZM: "en",
  MT: "en",
  CY: "en",

  // French-speaking countries
  FR: "fr",
  BE: "fr",
  CH: "fr",
  LU: "fr",
  MC: "fr",
  CA: "fr",
  SN: "fr",
  CI: "fr",
  ML: "fr",
  BF: "fr",
  NE: "fr",
  GN: "fr",
  MG: "fr",
  CM: "fr",
  TD: "fr",
  CG: "fr",
  CF: "fr",
  GA: "fr",
  DJ: "fr",
  KM: "fr",
  VU: "fr",
  NC: "fr",
  PF: "fr",
  WF: "fr",
  RE: "fr",
  YT: "fr",
  GP: "fr",
  MQ: "fr",
  GF: "fr",
  PM: "fr",
  BL: "fr",
  MF: "fr",
  TF: "fr",
}

function getPreferredLanguage(request: NextRequest): string {
  // 1. Check for saved preference in cookie
  const preferredLanguage = request.cookies.get("preferred-language")?.value
  if (preferredLanguage && ["es", "en", "fr"].includes(preferredLanguage)) {
    return preferredLanguage
  }

  // 2. Check country from Cloudflare or Vercel headers
  const country =
    request.headers.get("cf-ipcountry") || request.headers.get("x-vercel-ip-country") || request.geo?.country

  if (country && countryToLanguage[country]) {
    return countryToLanguage[country]
  }

  // 3. Parse Accept-Language header
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(",")
      .map((lang) => {
        const [code, q = "1"] = lang.trim().split(";q=")
        return { code: code.split("-")[0].toLowerCase(), quality: Number.parseFloat(q) }
      })
      .sort((a, b) => b.quality - a.quality)

    for (const lang of languages) {
      if (["es", "en", "fr"].includes(lang.code)) {
        return lang.code
      }
    }
  }

  // 4. Default to Spanish
  return "es"
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a language prefix
  const hasLanguagePrefix = /^\/(en|fr)($|\/)/.test(pathname)

  // If no language prefix, detect and redirect
  if (!hasLanguagePrefix) {
    const preferredLanguage = getPreferredLanguage(request)

    // Only redirect if not Spanish (default)
    if (preferredLanguage !== "es") {
      const redirectUrl = new URL(`/${preferredLanguage}${pathname}`, request.url)
      return NextResponse.redirect(redirectUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|logo.png).*)",
  ],
}
