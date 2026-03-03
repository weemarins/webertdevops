import Layout from '../../components/Layout';
import { getAllTags, getPostsByTag } from '../../lib/posts';
import Link from 'next/link';

export async function getStaticPaths() {
  const tags = getAllTags();
  const paths = Object.keys(tags).map((tag) => ({ params: { tag } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = getPostsByTag(params.tag);
  return { props: { posts, tag: params.tag } };
}

export default function TagPage({ posts, tag }) {
  return (
    <Layout title={`Tag: ${tag}`}>
      <h2>Posts com tag &quot;{tag}&quot;</h2>
      <ul>
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}><a>{title}</a></Link> <small>{date}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
