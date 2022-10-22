import axios from 'axios'
import { useEffect, useState } from 'react'

export const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=804&offset=0/')
        .then(response => {setPokemon(response.data.results)})
    }, [])

    return (
    <div>
        <h2 className="bg-slate-500 text-white py-2">Here's some Pokemon, ya Dingus!</h2>
        <ul className="list-none bg-slate-400">
            {
                pokemon.map((pokemon, index) => {
                    return <li className="capitalize p-2 text-lg" key={index}>
                        {pokemon.name}
                    </li>
                })
            }
        </ul>
    </div>
    )
}
