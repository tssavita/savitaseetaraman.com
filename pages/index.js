import Head from 'next/head';
import Fade from 'react-reveal/Fade';
import 'node_modules/bootstrap/dist/css/bootstrap.css';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Savita Seetaraman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className="website-title">
        Savita Seetaraman 
      </h1>
      <ul className="nav">
        <li><a class="page-scroll" href="#about">About me</a></li>
        <li><a href="/timeline">Timeline</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
      <div>
        <h1>Blog</h1>
        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
        <section id="about" class="container content-section text-center">
          <div class="row">
            <div class="section col-md-offset-1">
              <h1 id="about-me">About me</h1>
                <p>
                  DevOps Engineer. Open source enthusiast. Music lover. Seeker of unexplored landscapes.
                </p> 
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        section {
          display: block;
        }

        a,.page-scroll{
          color: inherit;
          text-decoration: none;
        }

        ul {
          float: right;
        }
       
       .nav li {
         display: inline;
         padding: 1.5rem;
         float: right;
       }
       
       .nav {
        font-size: 16px;
        color: #FC427B;
        text-transform: uppercase;
        list-style-type: none;
        align-items: right;
      }

        .website-title {
          margin-left: 2rem;
          color: #fc427b;
          float: left;
        }
        
        .float-child {
          width: 50%;
        }
       
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        li a:hover:not(.active) {
          background-color: #eee;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .navbar-element a {
          margine: 1rem;
          padding: 1.5rem;
          text-align: right; 
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #1B9CFC;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
