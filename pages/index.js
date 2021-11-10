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
            Hi, I am Savita. I am a DevOps Engineer. I am passionate about music, 
            travel and learning new things. 
            <br />
            <br />
            You can follow me on &nbsp;
            <Link href="https://www.linkedin.com/in/savitaseetaraman/">
              <a>LinkedIn</a></Link> and &nbsp;
            <Link href="https://twitter.com/savitats">
              <a>Twitter</a>
            </Link>.
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>  
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href={"posts/circleci"}>
                <a>CircleCI Part 1: Basic Concepts</a>
              </Link>
              <br />
            </li>
            <li className={utilStyles.listItem}>
              <Link href={"posts/datadog"}>
                <a>Datadog: Monitoring infrastructure, applications and logs</a>
              </Link>
              <br />
            </li>
            <li className={utilStyles.listItem}>
              <Link href={"posts/awsiam"}>
                <a>AWS Identity and Access Management</a>
              </Link>
              <br />
            </li>
          </ul>
        </section>

    </Layout>
  )
}
