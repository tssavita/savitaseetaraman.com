import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
        <Head>
          <title>Savita Seetaraman</title>
          <link rel="icon" href="/tablogo.png" />
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
                <a>Basic Concepts of CircleCI: Part 1</a>
              </Link>
              <br />
            </li>
            <li className={utilStyles.listItem}>
              <Link href={"posts/circleci_part2"}>
                <a>Basic Concepts of CircleCI: Part 2</a>
              </Link>
              <br />
            </li>
            <li className={utilStyles.listItem}>
              <Link href={"posts/featureflow"}>
                <a>Git Feature Workflow</a>
              </Link>
              <br />
            </li>
            <li className={utilStyles.listItem}>
              <Link href={"posts/leetcode_challenge_day1"}>
                <a>LeetCode Streak Challenge - Day 1/30 - Reverse list</a>
              </Link>
              <br />
            </li>
          </ul>
        </section>

    </Layout>
  )
}
