import Navbar from "../components/molecules/Navbar";
import PostCard from "../components/molecules/PostCard";
import Footer from "../components/molecules/Footer";
import Head from "next/head";

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

  const [posts, setPosts] = useState(props.posts);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8000/blog/api/posts/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Head>
        <title>Arter Tendean | my memories are right here</title>
      </Head>

      <Navbar />
      <Container maxWidth="100%" mt={1} p={0}>
        {posts.results.map((post, index) => (
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

        {/* <PostCard
          title={temp[1].title}
          content={temp[1].content}
          category={temp[1].category}
          author={temp[1].author}
          date={temp[1].date}
        />

        <PostCard
          title={temp[0].title}
          content={temp[0].content}
          category={temp[0].category}
          author={temp[0].author}
          date={temp[0].date}
        />

        <PostCard
          title={temp[1].title}
          content={temp[1].content}
          category={temp[1].category}
          author={temp[1].author}
          date={temp[1].date}
        /> */}
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/blog/api/posts/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { posts: data } };
}
