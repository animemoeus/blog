import Footer from "../components/molecules/Footer";
import Head from "next/head";
import Navbar from "../components/molecules/Navbar";
import PostCard from "../components/molecules/PostCard";

import { Container } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home(props) {
  const temp = [
    {
      title: "Deus ex Machina",
      content:
        "Deus ex Machina adalah sebuah istilah yang digunakan dalam teater, film, maupun novel, mengacu pada hadirnya solusi mendadak dalam cerita dengan kondisi terdesak dan tanpa pengharapan. Umumnya solusi yang diberikan pada akhir cerita terkesan seenaknya saja dan tidak memuaskan. Istilah ini umumnya dipandang negatif sebagai sesuatu yang payah karena mengindikasikan bahwa sang pengarang terjebak pada ...",

      author: {
        name: "Arter Tendean",
        pic: "https://cdn.discordapp.com/attachments/858938620425404426/980436990682071050/aarter.jpg",
      },
      date: "31 Februari 2022",
      category: "Terminologi",
    },
    {
      title: "Efek Jembatan Gantung",
      content:
        "Efek jembatan gantung adalah sebuah fenomena dimana seseorang salah mengartikan perasaan berdebarnya. Jantung yang berdegup kencang karena takut, kadang diartikan oleh otak sebagai rasa cinta terhadap lawan jenis. Hal ini menjadi alasan mengapa para pria senang mengajak gebetannya ke bioskop untuk menonton film horor saat pada pendekatan. Percobaan efek jembatan gantung ini pernah dilakukan oleh ...",
      author: {
        name: "Arter Tendean",
        pic: "https://cdn.discordapp.com/attachments/858938620425404426/980436990682071050/aarter.jpg",
      },
      date: "31 Februari 2022",
      category: "Psikologi",
    },
  ];

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://blog-api.tendean.my.id/blog/api/posts/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Head>
        <title>Arter Tendean | my memories are right here</title>
      </Head>

      <Navbar />
      <Container maxWidth="100%" mt={1} p={0}>
        {props.posts.results.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={`${post.content}`}
            category={post.category}
            author={temp[0].author}
            created_at={post.created_at}
            post={post}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const url = await "https://blog-api.tendean.my.id/blog/api/posts/";

  const res = await fetch(`${url}`);
  const response = await res.json();

  return { props: { posts: response } };
}
