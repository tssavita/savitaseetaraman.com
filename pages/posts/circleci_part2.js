import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Savita Seetaraman</title>
      </Head>
     <article>
        <h1 className={utilStyles.headingXl}>Basic Concepts of CircleCI: Part 2</h1>
        <p>
          In this post we shall cover the following CircleCI concepts.
          <ol>
            <li>orbs,</li>
            <li>caches,</li>
            <li>context,</li>
            <li>workspaces,</li>
            <li>artifacts.</li>
          </ol>
        </p>
        <h2>Orbs</h2>
        <p>An orb is a library containing jobs and commands that can be reused. There are
          different types of orbs - public and private. The public orbs can be open source. 
          They can be checked out at <a href="https://circleci.com/developer/orbs">https://circleci.com/developer/orbs</a>. 
          They can be referenced under the orbs section in the CircleCI config file. 
        </p>
        <h2>Caches</h2>
        <p>
          Files that need to be reused in the following jobs could be cached. To save files, we
          could `save_cache`. We could restore the cache in future jobs. 
        </p>
        <h2>Contexts</h2>
        <p>
          Contexts are the scope within which the jobs will be allowed to execute jobs. It 
          is a way of sharing environment variables across different projects. Using contexts allows 
          to provide permissions to workflows by defining credentials in the context with which the
          workflow jobs may be able to access resources. One can define key - value pairs in contexts. 
          These key - value pairs get injected during runtime of the workflow. These variables can also 
          be used in the CircleCI config file or in jobs. 
          <br />
          <br />
          To define which context will be used by a job, the <code>context</code> keyword can be used. It 
          is possible to make the context available to only certain teams. You can do this by adding or 
          removing Security Groups. Security Groups are essentially Github teams. 
        </p>
      </article>
    </Layout>
  )
}
