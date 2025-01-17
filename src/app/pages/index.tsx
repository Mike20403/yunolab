import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/hero/Hero";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
};

export default Home;
