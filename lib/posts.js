import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import rehypeHighlight from 'rehype-highlight';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      ...data,
      readingTime: readingTime(fileContents).text
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    contentHtml,
    ...data,
    readingTime: readingTime(content).text
  };
}

export function getAllTags() {
  const posts = getSortedPostsData();
  const tags = {};
  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        if (!tags[tag]) tags[tag] = 0;
        tags[tag]++;
      });
    }
  });
  return tags;
}

export function getPostsByTag(tag) {
  const posts = getSortedPostsData();
  return posts.filter((post) => post.tags && post.tags.includes(tag));
}
