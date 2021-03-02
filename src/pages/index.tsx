import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Cards } from '../components/Cards';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
      </Head>
      
      <Header />

      <Cards />
    </div>
  )
}
