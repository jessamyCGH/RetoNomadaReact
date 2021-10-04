import { createSlice } from "@reduxjs/toolkit";
import { Actor } from '../../Models/actor';
import { RootState } from '../Store';

interface actorState{
    actor: Actor | null
}

const initialState: actorState = {
    actor: null
};

export const actorSlice = createSlice({
    name: 'actor',
    initialState, 
    reducers:{
        //funcion 
        changeactor: (state, action) => {
            //actor que se tien actualmente se intercambia por lo que viene en el payload(nuevo actor)
            state.actor = action.payload;
        }
    }
});

//se destructura la funcion para usarla en otro lado 
export const {changeactor} = actorSlice.actions;

//seleccionamos nuestro ultimo actor, lo busca en nuestra tienda
export const selectActor = (state:RootState) => state.actor.actor; 

//si no se exporta nada se exporta el reducer 
export default actorSlice.reducer; 