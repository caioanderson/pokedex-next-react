import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
      </Head>

      <div className={styles.header}>
        <h1>Pokedex</h1>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.title}>
            <h2>Pikachu</h2>
            <small># 1</small>
          </div>
          <div className={styles.img}>
            <img src="https://pokeres.bastionbot.org/images/pokemon/25.png" alt="" />
          </div>
          <div className={styles.type}>
            <p> Eletrico </p>
          </div>
          <button type='button' className={styles.favorite}>
            Coração
            <div className={styles.heart}></div>
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.title}>
            <h2>Pikachu</h2>
            <small># 1</small>
          </div>
          <div className={styles.img}>
            <img src="https://pokeres.bastionbot.org/images/pokemon/25.png" alt="" />
          </div>
          <div className={styles.type}>
            <p> Eletrico </p>
          </div>
          <button type='button' className={styles.favorite}>
            Coração
            <div className={styles.heart}></div>
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.title}>
            <h2>Pikachu</h2>
            <small># 1</small>
          </div>
          <div className={styles.img}>
            <img src="https://pokeres.bastionbot.org/images/pokemon/25.png" alt="" />
          </div>
          <div className={styles.type}>
            <p> Eletrico </p>
          </div>
          <button type='button' className={styles.favorite}>
            Coração
            <div className={styles.heart}></div>
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.title}>
            <h2>Pikachu</h2>
            <small># 1</small>
          </div>
          <div className={styles.img}>
            <img src="https://pokeres.bastionbot.org/images/pokemon/25.png" alt="" />
          </div>
          <div className={styles.type}>
            <p> Eletrico </p>
          </div>
          <button type='button' className={styles.favorite}>
            Coração
            <div className={styles.heart}></div>
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.title}>
            <h2>Pikachu</h2>
            <small># 1</small>
          </div>
          <div className={styles.img}>
            <img src="https://pokeres.bastionbot.org/images/pokemon/25.png" alt="" />
          </div>
          <div className={styles.type}>
            <p> Eletrico </p>
          </div>
          <button type='button' className={styles.favorite}>
            Coração
            <div className={styles.heart}></div>
          </button>
        </div>



      </div>




    </div>
  )
}
