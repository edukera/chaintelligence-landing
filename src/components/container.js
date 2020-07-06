import React from 'react';
import Head from './head';
import Layout from './layout';
import Footer from './footer'

const Container = () => (
    <div className="container"> 
        <Head/>
        <Layout />
        <Footer /> 
    </div>
)
  
export default Container;