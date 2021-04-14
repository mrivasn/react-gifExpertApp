import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {fSetCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    // input con el último vaor escrito
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.length > 2 ){
            fSetCategories ( categories => [ inputValue, ...categories  ] );
            setInputValue('');
        }
    };

    return (
        <form onSubmit = { handleSubmit }> 
            <input className='animate__animated animate__slideInLeft'
                type='Text' 
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}
   
AddCategory.propTypes = {
    fSetCategories: PropTypes.func.isRequired
}