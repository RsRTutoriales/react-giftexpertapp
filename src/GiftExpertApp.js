import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => {   

    //     setcategories([...categories, 'sdfs']);
    // }

    return ( 
        <>
        <h2>GiftExpertApp</h2>
        <AddCategory setcategories={setcategories}/>
        <hr/>
        <ol>
            {
                categories.map( category => (
                    <GiftGrid key={category} category={category} ></GiftGrid>
                ))
            }
        </ol>
        </>
    )
}

export default GiftExpertApp