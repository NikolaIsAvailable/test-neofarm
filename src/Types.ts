export type weightObj = {
    imperial: string
    metric: string
}

export type imgObj = {
    id: string
    url: string
}

export type catObj = {
    id: string
    hypoallergenic: number
    name: string
    affection_level: number
    child_friendly: number
    dog_friendly: number
    energy_level: number
    hairless: number
    life_span: string
    origin: string
    temperament: string
    weight: weightObj
    image: imgObj
    cfa_url: string
} 