import axios from 'axios'
import { useEffect, useState } from 'React'

export const Pokemon = () => {
    const [response, setResponse] = useState(null)
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=804&offset=0/')
        .then(response => {setResponse(response.data)})
    }, [])
    return (
    <div>
        {response}
    </div>
    )
}
