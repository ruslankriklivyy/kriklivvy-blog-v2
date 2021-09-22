import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { NextPage } from 'next';
import useInView from 'react-cool-inview';
import dynamic from 'next/dynamic';
import { Layout } from '../layouts/Layout';
import { IPostResponse } from '../interfaces/interfaces';

interface IHomeProps {
  posts: IPostResponse[];
}

const Posts = dynamic(() => import('../components/Posts/index'));

const Home: NextPage<IHomeProps> = ({ posts }) => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <Layout name={'Kriklivvy Blog - Блог о программировании и немного релаксии'}>
      <div ref={observe}>{inView && <Posts posts={posts} />}</div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
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
