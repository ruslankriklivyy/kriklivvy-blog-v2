import React from 'react';
import { About } from '../components/About';
import { Layout } from '../layouts/Layout';

const AboutPage = () => {
  return (
    <Layout name={'Обо мне'}>
      <About />
    </Layout>
  );
};

export default AboutPage;
