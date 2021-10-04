import React from 'react'
import { Convert } from '../Models/actor';
import { useDispatch } from 'react-redux';
import { changeactor } from '../Redux/Slices/ActorSlice';
import { useHistory } from 'react-router';


export const HomeController = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const nameRequest = async(file: File) => {
        const formData = new FormData();
            formData.append('file', file);
            await fetch('https://whois.nomada.cloud/upload', {
                method: 'POST',
                headers: {
                    //'Content-Type': 'multipart/form-data',
                    'Nomada': 'YTA5MDEzMGMtZDdiMy00MzIwLWExOGItZWMzYzBmMmZhNDY3'
                },
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.actorName !== "") {

                        infoRequest(data.actorName);
                    }
                });
    }

    const infoRequest = async(name: string) =>{
        await fetch('https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&query=' + name, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                let actor = Convert.toActor(Convert.actorToJson(data));
                dispatch(changeactor(actor));
                history.push("/InfoActor");
            });
    }


    return {
        nameRequest
    }
}
