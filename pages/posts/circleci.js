import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>CircleCI: A beginner's guide</title>
      </Head>
     <article>
        <h1 className={utilStyles.headingXl}>CircleCI: A beginner's guide</h1>
        <p>
          Some of the concepts of CircleCI are projects, configuration files, 
          pipelines, orbs, jobs, steps, image, workflows, executors and images, 
          caches, workspaces and artifacts.
        </p>
      </article>
    </Layout>
  )
}