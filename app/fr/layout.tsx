"use client"
import { Layout } from "antd"
import Head from "next/head"
import { useRouter } from "next/router"

const { Content } = Layout

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://universaltelecom.es"

const FrenchLayout = ({ children }) => {
  const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>Universal Telecom - Services de Télécommunication</title>
        <meta name="description" content="Découvrez nos services de télécommunication universels." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        {/* rest of code here */}
        {children}
      </Content>
    </Layout>
  )
}

export default FrenchLayout
