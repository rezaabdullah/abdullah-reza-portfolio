import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Expertise />
    </Layout>
  );
};

export default IndexPage;
