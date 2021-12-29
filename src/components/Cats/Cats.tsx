import React, { useEffect, useRef, useState } from 'react'
import { catObj } from '../../Types';
import Cat from '../Cat/Cat';
import Loading from '../Loading/Loading';
import './cats.css'

const Cats = () => {
    const maxWeight = useRef(11)
    const isHypoallergenic = useRef(false)
    
    const [data, setData] = useState<catObj []>([])
    const [cats, setCats] = useState<catObj []>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<any>()

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const response = await fetch('https://api.thecatapi.com/v1/breeds')
                const data = await response.json()               
                            
                setData(data)
                setCats(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error);
                setError(error)
            }
        })()
    }, [])

    const updateCats = () => {
        setCats(data.filter((cat) => (cat.hypoallergenic === 0 ? false : true) === isHypoallergenic.current).filter((cat) => Number(cat.weight.metric.split(' - ')[1]) <= Number(maxWeight.current)))
    }
    
    return (
    <>
        <form onChange={() => updateCats()}>   
            <h2>Choix</h2>
            <div>
                <label>Poids max : {maxWeight.current} kg</label>
                <input className="slider" onChange={(e) => maxWeight.current = Number(e.target.value)} type="range" min="4" max="11"/>
            </div> 
            <div>
                <label>Hypoallergenique</label>
                <input onChange={() => isHypoallergenic.current = !isHypoallergenic.current} type="checkbox" name="hypoallergenic"/>
            </div>    
        </form>
        <div className="cats">
            {isLoading && <Loading/>}
            {error && <p>Erreur</p>}
            {cats.map((cat, index) => {
                return <Cat key={cat.id} catData={cat} index={index} />
            })}
        </div>
    </>
       
    )
}

export default Cats
