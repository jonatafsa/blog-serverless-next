
//Import necessário para gerar um Head de forma mais abstraida no App
import Document, { Html, Head, Main, NextScript } from 'next/document'

//Todas as importações de Head deve ser colocada aqui dentro
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,600;0,900;1,100&family=Shippori+Mincho:wght@400;600&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>

    )
  }
}