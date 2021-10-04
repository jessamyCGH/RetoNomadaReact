import { Button, Card, Image } from 'antd';
import Meta from 'antd/lib/card/Meta'
import 'antd/dist/antd.css';
import React from 'react'
import { StarTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectActor } from '../Redux/Slices/ActorSlice';
import { InfoActorController } from '../Controllers/InfoActorController'
import { HomeOutlined } from '@ant-design/icons';

export const InfoActor = () => {
    //obtiene el ultimo valor en la tienda(actores)
    const actor = useSelector(selectActor);
    const { obtenerGenero, goHome } = InfoActorController();
    

    return (
        <div style={{ ...styles.container }}>
            <Button style= {{...styles.button}} onClick = {goHome} type="primary" shape="round" icon={<HomeOutlined />} size={'large'}>
                Home
            </Button>

            <div style={{ ...styles.left }}>
                <div style={{ ...styles.image }}>
                    <Card
                        hoverable
                        bordered
                        cover={<img style={{ width: 300, height: 350 }} alt="example" src={"https://image.tmdb.org/t/p/original/" + actor.results[0].profile_path} />}
                    >
                        <Meta title={actor?.results[0].name} description={obtenerGenero(actor.results[0].gender)} />
                        <h5>Polpularidad: {actor?.results[0].popularity}</h5>
                    </Card>
                </div>

                <div style={{ ...styles.secondContainer }}>
                    <h1 style={{ fontSize: 60, textAlign: "left" }}>Peliculas:</h1>


                    {actor.results[0].known_for.map((item, index) => {
                        return (
                            <div >
                                <Card style={{ textAlign: "left" }} type="inner" title={item.original_title} extra={<h3>{item.vote_average}/10<StarTwoTone twoToneColor="#ffff00" /></h3>} >
                                    <div style={{ ...styles.cardContent }}>
                                        <Image style={{ height: 150, width: 200, marginTop: 20 }} preview={false}
                                            width={200}
                                            src={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
                                        />

                                        <div style={{ margin: 25 }}>
                                            {/* Descripcion de pelicula */}
                                            <h2 >{item.overview}</h2>

                                            <h4 >{item.release_date}</h4>
                                        </div>
                                    </div>

                                </Card>
                            </div>)
                    })
                    }


                </div>
            </div>


        </div >


    )
}


const styles = {
    container: {
        width: "100%",
        backgroundColor: 'black'
    },
    left: {
        top: 90,
        display: 'flex',
        backgroundColor: 'white'
    },
    image: {
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25
    }
    ,
    secondContainer: {
        width: "100%",
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25
    },
    cardContent: {
        display: 'flex'
    }, 
    button:{
        marginBlockStart:10, 
        marginBlockEnd:10, 
        marginLeft:25
    }



}