// los hooks son funciones
// no devuelve jsx a diferencia de un componente
import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [ state, setState ] = useState( {
        data: [],
        loading: true
    });

    //useEffect se usa para que no se ejecute nuevamente el componente
    useEffect( () => {
        getGifs( category )
            .then( imgs => 
                    setState( {
                        data: imgs,
                        loading: false
                    }) 
                )
            }, [ category ]
    );
    
    return state; //{ data:[], loading: true}
}
