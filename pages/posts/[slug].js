import Head from 'next/head';
import Layout from '../../components/Layout';
import { getPostData, getSortedPostsData } from '../../lib/posts';

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return { props: { postData } };
}

export default function Post({ postData }) {
  return (
    <Layout title={postData.title}>
      <Head>
        <meta name="description" content={postData.description || ''} />
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <small>{postData.date} · {postData.readingTime}</small>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
