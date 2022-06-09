import Footer from "../components/molecules/Footer";
import Head from "next/head";
import Navbar from "../components/molecules/Navbar";
import PostCard from "../components/molecules/PostCard";
import Pagination from "../components/molecules/Pagination";

import { Container } from "@chakra-ui/react";
// import { useState, useEffect } from "react";

export default function Home(props) {
  const author = {
    name: "Arter Tendean",
    pic: "https://avatars.githubusercontent.com/u/33395829",
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

      <Pagination
        previous={
          props.posts.previous !== null
            ? props.pagination.previous
            : props.posts.previous
        }
        next={
          props.posts.next !== null ? props.pagination.next : props.posts.next
        }
      />

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  // set the page to 1 as default if page params are not provided
  const page = context.query.page || 1;

  const res = await fetch(
    `${process.env.API_URL}/blog/api/posts/?page=${page}`
  );
  const response = await res.json();

  return {
    props: {
      posts: response,
      pagination: { previous: parseInt(page) - 1, next: parseInt(page) + 1 },
    },
  };
}
