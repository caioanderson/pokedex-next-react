import { useEffect, useState } from 'react';
import styles from '../styles/components/Cards.module.css';

const POKEMON_COUNT = 150;
const types = [
    'fire',
    'grass',
    'eletric',
    'water',
    'ground',
    'rock',
    'fairy',
    'poison',
    'bug',
    'dragon',
    'psychic',
    'fluying',
    'fighting',
    'normal'
]


export function Cards() {

    const [pokemons, setPokemons] = useState([]);
    const [typePokemon, setTypePokemon] = useState(styles.type);


    async function apiPokemon(idPokemon: number) {
        if (idPokemon === undefined) return;
        const api = 'https://pokeapi.co/api/v2/pokemon/' + idPokemon;
        const response = await fetch(api).then(response => response.json());
        const { id, name, types } = response;
        const type = getTypes(types);
        const data = { id, name, type };
        return data;
    }

    async function apiPokemons() {
        let pokemon = [];
        for (let i = 1; i <= POKEMON_COUNT; i++) {
            const response = await apiPokemon(i);
            pokemon.push(response);
        }
        return pokemon;
    }

    function getTypes(data: any) {
        const apiTypes = data.map(type => type.type.name);
        const type = types.find(type => apiTypes.indexOf(type) > -1);
        return type;
    }

    useEffect(() => {

        async function getData() {
            const listPokemons = await apiPokemons();
            setPokemons(listPokemons);
        }
        getData();

    }, [pokemons])

    return (

        <div className={styles.container}>
            { pokemons.map(pokemon => {
                // console.log(pokemon.type)

                let caminhoTypesStyle;

                if (pokemon.type == 'fire') {
                    caminhoTypesStyle = styles.fire;
                } else if (pokemon.type == 'grass') {
                    caminhoTypesStyle = styles.grass;
                } else if (pokemon.type == 'water') {
                    caminhoTypesStyle = styles.water;
                } else if (pokemon.type == undefined) {
                    caminhoTypesStyle = styles.eletric;
                } else if (pokemon.type == 'ground') {
                    caminhoTypesStyle = styles.ground;
                } else if (pokemon.type == 'rock') {
                    caminhoTypesStyle = styles.rock;
                } else if (pokemon.type == 'fairy') {
                    caminhoTypesStyle = styles.fairy;
                } else if (pokemon.type == 'poison') {
                    caminhoTypesStyle = styles.poison;
                } else if (pokemon.type == 'bug') {
                    caminhoTypesStyle = styles.bug;
                } else if (pokemon.type == 'dragon') {
                    caminhoTypesStyle = styles.dragon;
                } else if (pokemon.type == 'psychic') {
                    caminhoTypesStyle = styles.psychic;
                } else if (pokemon.type == 'fluying') {
                    caminhoTypesStyle = styles.fluying;
                } else if (pokemon.type == 'fighting') {
                    caminhoTypesStyle = styles.fighting;
                } else if (pokemon.type == 'normal') {
                    caminhoTypesStyle = styles.normal;
                }


                return (
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h2>#{pokemon.id}</h2>
                            <img className={styles.img}
                                src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} />
                            <p>{pokemon.name}</p>
                            <div className={caminhoTypesStyle}>
                                <small> {pokemon.type == undefined ?
                                    'eletric' :
                                    pokemon.type} </small>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}