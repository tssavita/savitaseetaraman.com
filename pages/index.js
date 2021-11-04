import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
        <Head>
          <title>Savita Seetaraman</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className={utilStyles.headingMd}>
          <p>
            Hi, I am Savita. I am a DevOps Engineer at Paidy. 
            <br /> 
            <br />
            I am also passionate about music, travel and learning new things. 
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>  
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href={"posts/circleci"}>
                <a>CircleCI</a>
              </Link>
              <br />
            </li>
          </ul>
        </section>

    </Layout>
  )
}
