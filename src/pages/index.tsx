import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Cards } from '../components/Cards';

// import { Cards } from '../components/Cards';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
      </Head>
      

      <div className={styles.header}>
        <h1>Pokedex</h1>
      </div>

      {/* <Cards /> */}

      <Cards />
    </div>
  )
}
