


// UUID => Universally unique identifier (Um id unico universal que funciona como uma string);

// function enviarEmail(para, id, assunto, texto) {
//   // Biblioteca de envio de email

//   console.log(para, id, assunto, texto);
// }

// class EnviarEmailParaUsuario {
//   send() {
//     enviarEmail('caca@gmail.com', 123, 'Ola!', 'Beleza ?');
//   }
// }

interface DadosDeEnvioEmail {
  para: string;
  id: string;
  assunto: string;
  texto: string;
};

function enviarEmail({ assunto, id, para, texto}: DadosDeEnvioEmail) {
  console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario {
  send() {
    enviarEmail({
      para: 'cacvx@gmail.com',
      id: '123',
      assunto: 'Ola amigo',
      texto: 'Tudo beleza',
    });
  }
}
