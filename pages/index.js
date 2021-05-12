import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi there! I'm a software developer based in London. When I'm not coding you can find me exploring the city or taking photos in empty alleys</p>
        <p>
          I'm learning Next.js and this is a sample website!
        </p>
      </section>
    </Layout>
  )
}
