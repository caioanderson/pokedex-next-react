import styles from '../styles/components/Cards.module.css';

export function Cards(){
    return(
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
    );
}