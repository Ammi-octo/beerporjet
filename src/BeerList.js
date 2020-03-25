import React, { useEffect,useState } from 'react'

export default function BeerList({pageNumber}){
    const [ beers, setBeers ] = useState([])
    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}`)
        .then(reply => reply.json())
        .then(setBeers)
    },[pageNumber])

    return ( 
        <ul>
        <p>{pageNumber}</p>
        {beers.map(beer=> (
            <li key={beer.id}>{beer.name}</li>))} 
        </ul>
    )
}

