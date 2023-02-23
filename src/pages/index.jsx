import Head from 'next/head'

import { CallToAction } from '../components/CallToAction'
import { Faqs } from '../components/Faqs'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Pricing } from '../components/Pricing'
import { PrimaryFeatures } from '../components/PrimaryFeatures'
import { Reviews } from '../components/Reviews'
import { SecondaryFeatures } from '../components/SecondaryFeatures'
import  LandingPage  from '../components/LandingPage'


export default function Home() {
  return (
    <>
      <Head>
        <title>Network Nation - Stake For Freedom.</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main>
      <LandingPage/>

      </main>
    
    </>
  )
}
