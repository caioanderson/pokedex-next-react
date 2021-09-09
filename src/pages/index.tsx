import Head from 'next/head'
import { Cards } from '../components/Cards';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header />
      <Cards />
    </div>
  )
}
