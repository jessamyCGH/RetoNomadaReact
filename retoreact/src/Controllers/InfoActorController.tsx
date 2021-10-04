import React from 'react'
import { useHistory } from 'react-router';


export const InfoActorController = () => {
    let history = useHistory();

    const obtenerGenero = (numGenero : number) => {
        switch (numGenero) {
            case 0: return 'Not specified';
            case 1: return 'Female';
            case 2: return 'Male';
            default: return 'Not specified';
        }

    }
    const goHome = () =>{
        history.push("/");
    }
    return {
        obtenerGenero,
        goHome
    }
}
