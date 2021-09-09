import express from 'express';

const app = express();

/*
  * GET => Buscar
  * POST => Salvar
  * PUT => Alterar
  * DELETE => Deletar
  * PATCH = Alteração especifica
*/
// http://localhost:4444/users
app.get("/", (request, response) => {
  return response.json({ message: "Hello World amigão" });
});

// 1 param => Rota(Recurso da API)
// 2 param => request, response

app.post("/", (request, response) => {
  return response.json({ message: "os dados foram salvos com sucesso!" });
});

app.listen(4444, () => console.log("Server is running!"));