import styles from '../styles/components/Header.module.css';

import { Tag } from '../components/Tag';

export function Header() {
    return (
        <div className={styles.header}>
            <h1>Pokedex</h1>
            <div className={styles.tags}>
                <Tag name='fire' />
                <Tag name='grass' />
                <Tag name='water' />
                <Tag name='eletric' />
                <Tag name='ground' />
                <Tag name='rock' />
                <Tag name='fairy' />
                <Tag name='poison' />
                <Tag name='dragon' />
                <Tag name='psychic' />
                <Tag name='fluying' />
                <Tag name='fighting' />
                <Tag name='normal' />
            </div>

        </div>
    );
}