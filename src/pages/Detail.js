import React from 'react';
import PhotoCardWithQuery from '../container/PhotoCardWithQuery';
import { Layout } from '../components/Layout';

export default ({ detailId, title }) => (
  <Layout title='Detail' subtitle='You can find the movies details here'>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
);
