import Footer from "../components/molecules/Footer";
import Head from "next/head";
import Navbar from "../components/molecules/Navbar";
import PostCard from "../components/molecules/PostCard";

import { Container } from "@chakra-ui/react";
// import { useState, useEffect } from "react";

export default function Home(props) {
  const author = {
    name: "Arter Tendean",
    pic: "https://cdn.discordapp.com/attachments/858938620425404426/980436990682071050/aarter.jpg",
  };
  return (
    <>
      <Head>
        <title>Arter Tendean | my memories are right here</title>
      </Head>

      <Navbar />
      <Container maxWidth="100%" mt={1} p={0}>
        {props.posts.results.map((post, index) => (
          <PostCard key={index} author={author} post={post} />
        ))}
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/blog/api/posts/`);
  const response = await res.json();

  return { props: { posts: response } };
}
