import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import '../styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Item, NavBar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ApolloProvider } from '@apollo/client';
import lib from '../lib/apollo'
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  })
  return (
    <>
      
    <div>
    <Head>
        <meta name="twitter:title" content="A Curriculum Website by André Mendes da Rocha"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:image" content="favicon.svg"/>
        <link rel="icon" type="image/svg+xml" href="  " />
        <title>Kaolhou</title>
    </Head>
      <ApolloProvider client={lib}>
        <NavBar>
          <Item icon="Home" path="/"/>
          <Item icon="Posts" path="/posts" />
          <Item icon="Sobre" path="/about" />
        </NavBar>
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </div>
    </>
    
  )
  
}

export default MyApp
