import React from 'react'
import { catObj } from '../../Types'
import './cat.css'

type Props = {
    catData: catObj
    index: number
}

const Cat: React.FC<Props> = ({ catData, index }) => {    

    return (
        <a style={{ backgroundImage: `linear-gradient(rgba(88, 69, 69, 0.35), rgb(75, 3, 3, 0.35)), url(${catData.image !== undefined ? catData.image.url : 'https://www.abandonedpetrescue.org/wp-content/uploads/adopt_animals/default.jpg'})`, animationDelay: `${0.05 * index}s` }}
            className="cat"
            href={catData.cfa_url} 
            target="_blank">
            <span>{catData.name}</span>
        </a>
    )
}

export default Cat
