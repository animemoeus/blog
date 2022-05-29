import Navbar from "../components/molecules/Navbar";
import PostCard from "../components/molecules/PostCard";

export default function Home() {
  const temp = [
    {
      title: "Deus ex Machina",
      content:
        "Deus ex Machina adalah sebuah istilah yang digunakan dalam teater, film, maupun novel, mengacu pada hadirnya solusi mendadak dalam cerita dengan kondisi terdesak dan tanpa pengharapan. Umumnya solusi yang diberikan pada akhir cerita terkesan seenaknya saja dan tidak memuaskan. Istilah ini umumnya dipandang negatif sebagai sesuatu yang payah karena mengindikasikan bahwa sang pengarang terjebak pada ...",

      author: {
        name: "Arter Tendean",
        pic: "https://cdn.discordapp.com/attachments/858938620425404426/980436990682071050/aarter.jpg",
      },
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
      category: "Psikologi",
    },
  ];

  return (
    <>
      <Navbar />
      <br />
      <PostCard
        title={temp[0].title}
        content={temp[0].content}
        category={temp[0].category}
        author={temp[0].author}
      />

      <PostCard
        title={temp[1].title}
        content={temp[1].content}
        category={temp[1].category}
        author={temp[1].author}
      />
    </>
  );
}
