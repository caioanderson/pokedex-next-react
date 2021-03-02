import { useEffect, useState } from 'react';
import styles from '../styles/components/Tag.module.css';

export function Tag({ name } ) {

    const [style, setStyle] = useState(styles.tag);

    useEffect(() => {
        if(name == 'fire'){
            setStyle(styles.fire)
        }else if (name == 'grass') {
            setStyle(styles.grass);
        } else if (name == 'water') {
            setStyle(styles.water);
        } else if (name == 'eletric') {
            setStyle(styles.eletric);
        } else if (name == 'ground') {
            setStyle(styles.ground);
        } else if (name== 'rock') {
            setStyle(styles.rock);
        } else if (name == 'fairy') {
            setStyle(styles.fairy);
        } else if (name == 'poison') {
            setStyle(styles.poison);
        } else if (name == 'bug') {
            setStyle(styles.bug);
        } else if (name == 'dragon') {
            setStyle(styles.dragon);
        } else if (name== 'psychic') {
            setStyle(styles.psychic);
        } else if (name == 'fluying') {
            setStyle(styles.fluying);
        } else if (name== 'fighting') {
            setStyle(styles.fighting);
        } else if (name== 'normal') {
            setStyle(styles.normal);
        }
    },[style]);


    return(
        <div className={style}>
            <span className={styles.textType}>{name}</span>  
        </div>
                  
    );
}