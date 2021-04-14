import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Robotech'] );

    return (
        <>
            <h2 className='animate__animated animate__slideInDown'>GitExpertApp</h2>
            <hr className='animate__animated animate__slideInRight' />

            <AddCategory fSetCategories = { setCategories } />

            <ol>
                {
                    categories.map( (category) => (
                        <GiftGrid 
                                key = { category } 
                                category = { category } 
                        />
                    ))
                }
            </ol>
        </>
    );
};


