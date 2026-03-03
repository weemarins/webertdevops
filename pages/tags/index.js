import Link from 'next/link';
import Layout from '../../components/Layout';
import { getAllTags } from '../../lib/posts';

export async function getStaticProps() {
  const tags = getAllTags();
  return { props: { tags } };
}

export default function TagsPage({ tags }) {
  return (
    <Layout title="Tags">
      <h2>Tags</h2>
      <ul>
        {Object.keys(tags).map((tag) => (
          <li key={tag}>
            <Link href={`/tags/${tag}`}><a>{tag} ({tags[tag]})</a></Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
