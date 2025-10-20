"use client"
import { useRouter } from "next/router"

const Layout = ({ children }) => {
  const router = useRouter()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://universaltelecom.es"

  // Example of how to use the siteUrl
  console.log("Site URL:", siteUrl)

  return <div>{children}</div>
}

export default Layout
