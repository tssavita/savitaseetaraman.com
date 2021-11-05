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
        <h1 className={utilStyles.headingXl}>CircleCI: Some basic concepts</h1>
        <p>
          CircleCI is a continuous integration and delivery tool. This post shall go through 
          some of the most basic concepts of CircleCI. They are: 
          <ul>
            <li>pipelines,</li>
            <li>orbs,</li>
            <li>jobs,</li>
            <li>steps,</li>
            <li>image,</li>
            <li>workflows,</li>
            <li>executors,</li>
            <li>images,</li>
            <li>caches,</li>
            <li>context,</li>
            <li>workspaces,</li>
            <li>artifacts.</li>
          </ul>
        </p>
      </article>
    </Layout>
  )
}