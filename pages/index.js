import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Nittin Shankar</b>. I'm a software developer residing in Auroville. You can contact me through my <a href="mailto:nittin.shankar@gmail.com">email</a>.</p>
        <p>
          This is a sample website built by following this {' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}