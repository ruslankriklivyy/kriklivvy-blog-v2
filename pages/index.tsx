import type { NextPage } from 'next';
import { Posts } from '../components';
import Layout from '../layouts/Layout';

const Home: NextPage = () => {
  return (
    <Layout name={'Kriklivvy Blog - Блог о программировании и немного релаксии'}>
      <Posts />
    </Layout>
  );
};

export default Home;
