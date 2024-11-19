import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Uma foto de um gato preto em um jardim",
    imagem: "https://placekitten.com/300/150?image=1",
  },
  {
    id: 3,
    descricao: "Uma paisagem montanhosa ao pôr do sol",
    imagem: "https://picsum.photos/300/150?random=2",
  },
  {
    id: 4,
    descricao: "Um close-up de uma flor colorida",
    imagem: "https://source.unsplash.com/300x150/?flowers",
  },
  {
    id: 5,
    descricao: "Uma foto abstrata com cores vibrantes",
    imagem: "https://picsum.photos/300/150?random=3",
  },
];

function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

const app = express();
app.listen(3000, () => {
  console.log("Servidor Escutando");
});
app.use(express.json());

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id);
  res.status(200).json(posts[index]);
});
