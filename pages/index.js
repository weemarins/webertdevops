import Link from 'next/link';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section>
        <h2>Posts recentes</h2>
        <ul>
          {allPostsData.map(({ slug, date, title, description, tags, readingTime }) => (
            <li key={slug} style={{ margin: '2rem 0' }}>
              <Link href={`/posts/${slug}`}>
                <a><h3>{title}</h3></a>
              </Link>
              <small>{date} · {readingTime}</small>
              <p>{description}</p>
              {tags && tags.map(tag => (
                <Link href={`/tags/${tag}`} key={tag}>
                  <a style={{ marginRight: '0.5rem' }}>#{tag}</a>
                </Link>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
