
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:ital,wght@0,400;1,900&display=swap" rel="stylesheet" />
        </Head>
        <body className='bg-fixed bg-gradient-to-r from-green-500 to-blue-600 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument