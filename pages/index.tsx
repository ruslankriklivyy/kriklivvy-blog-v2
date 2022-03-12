import type { NextPage } from 'next';
import useInView from 'react-cool-inview';
import dynamic from 'next/dynamic';
import { Layout } from '../layouts/Layout';
import { IPostResponse } from '../interfaces/interfaces';
import { getData } from '../utils/getData';

interface IHomeProps {
  posts: IPostResponse[];
}

const Posts = dynamic(() => import('../components/Posts/index'));

const Home: NextPage<IHomeProps> = ({ posts }) => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <Layout name={'rixum.dev'}>
      <div ref={observe}>{inView && <Posts posts={posts} />}</div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getData('posts');

  return {
    props: {
      posts: posts,
    },
  };
}
