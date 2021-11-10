import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'
import { urlObjectKeys } from 'next/dist/shared/lib/utils'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Savita Seetaraman</title>
      </Head>
     <article>
        <h1 className={utilStyles.headingXl}>CircleCI Part 1: Some basic concepts</h1>
        <p>
          CircleCI is a continuous integration and delivery tool. The following are some
          basic concepts of CircleCI. Half of them shall be covered in this post. There 
          shall be a part 2, which shall be cover the remaining concepts. 
          <ol>
            <li>configuration,</li>
            <li>steps,</li>
            <li>executors,</li>
            <li>jobs,</li>
            <li>workflows,</li>
            <li>orbs,</li>
            <li>caches,</li>
            <li>context,</li>
            <li>workspaces,</li>
            <li>artifacts.</li>
          </ol>
        </p>
        <h2>Configuration</h2>
        <p>The configuration for CircleCI is provided through a .yaml file. 
        The configuration file is placed in the .circleci/config.yaml. 
        It follows the concept of configuration as code. </p>
        <h2>Steps</h2>
        <p>Steps are the smallest unit of execution in a config.yaml file. 
        The most common step is checkout which means checking out the 
        source code from the repository. A step could also be linux 
        commands, in which case, these are preceded by a run: keyword. 
        <br /> 
        <br />
        Some of the other common keywords are: 
        <ul>
          <li>save_cache,</li>
          <li>restore_cache,</li>
          <li>deploy,</li>
          <li>store_test_results,</li>
          <li>add_ssh_keys,</li>
          <li>attach_workspace.</li>
        </ul>
        </p>
        <h2>Executors</h2>
        <p>Executors are environments that are used to run separate jobs in. 
        These could be:
        <ul>
          <li>VMs running operating systems like Linux, macOS or 
        Windows, or </li>
          <li>Docker containers.</li>
        </ul>
        Images can be specified for each executor. CircleCI has a list of 
        prebuilt Docker images that can be used. The first image mentioned 
        in the .circle/config.yaml is taken as the primary container image.

        </p>
        <h2>Jobs</h2>
        <p>
        A job is run within a separated unit like a VM or container. 
        Some of the components of a job configuration included under a job are: 
        <ul>
          <li>executors,</li>
          <li>steps,</li>
          <li>environment,</li>
          <li>parameters.</li>
        </ul>
        The most common job is a build. Some of the advantages of jobs are:
        <ul>
          <li>Caching between different runs of a job persists, making it faster to test builds.</li>
          <li>Artifacts persist after running a workspace </li>
        </ul>
        </p>
        <h2>Workflows</h2>
        <p>
          Workflows are a collection of jobs.
          They contain the following keys:
          <ul>
            <li>version</li>
            <li>jobs</li>
          </ul>
          Workflows can run multiple jobs in parallelly. These could 
          be jobs with completely different steps, executors and images.
          If we want to run jobs serially, we could use the requires
          keyword. We could schedule jobs to run at regular intervals 
          of time. 
        </p>
        <p>
          The remaining concepts will be covered in Part 2 of this post. 
        </p>
      </article>
    </Layout>
  )
}