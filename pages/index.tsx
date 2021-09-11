import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { NextPage } from 'next';
import { Posts } from '../components';
import Layout from '../layouts/Layout';
import { IPostResponse } from '../interfaces/interfaces';

interface IHomeProps {
  posts: IPostResponse[];
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <Layout name={'Kriklivvy Blog - Блог о программировании и немного релаксии'}>
      <Posts posts={posts} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}