import React from 'react'
import { GiftGridItem } from './GiftGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid = ({category}) => {
    
    const {data: images, loading} = useFetchGifs(category);
    
    return (
        <>
        <h3 className="card animate__animated animate__bounce">{category}</h3>
        { loading && <p>Loading</p>}
        <div className="card-grid">
            {
                images.map( img => 
                    <GiftGridItem 
                    key={img.id}
                    {...img} />
                )
            }
        </div>
        </>
    )
}
