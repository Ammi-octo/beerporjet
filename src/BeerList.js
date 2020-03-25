import React, { useEffect,useState } from 'react'

export default function BeerList(){
    const [ beers, setBeers ] = useState([])
    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers`)
        .then(reply => reply.json())
        .then(setBeers)
    },[])

    return (
        <ul>
        {beers.map(beer=> (
            <li key={beer.id}>{beer.name}</li>))} 
        </ul>
    )
}

