import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Savita Seetaraman</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>Git Flow: Feature branch workflow</h1>
                <p>One of many ways of efficiently managing the git source code repos is the
                    Feature branch workflow. In this method, we create a new branch for every 
                    feature or issue we are working on. After the pull request has been approved, 
                    the commits are merged into the master branch. This means that the master 
                    branch does not contain any broken code and at any point, runs/builds. As a 
                    result, all the development takes in place in other branches. 
                    Some advantages of this approach are: 
                    <ul>
                        <li>
                            Work on separate features is separate, without conflicts between developers
                            working on separate features.
                        </li>
                        <li>
                            The master branch always contains code that is not broken. It can be 
                            cloned and run. 
                        </li>
                        <li>
                            One can ask for feedback or review in the middle of a feature development, 
                            by opening a pull request in the feature branch. 
                        </li>
                    </ul>

                </p>
            </article>
        </Layout>
    )
}