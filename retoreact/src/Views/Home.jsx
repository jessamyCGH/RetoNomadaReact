import React from 'react'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { HomeController } from '../Controllers/HomeController';

const { Dragger } = Upload;

export const Home = () => {
    const { nameRequest } = HomeController();

    const props = {
        name: 'file',
        multiple: false,
        accept: ".png, .jpeg, .jpg",
        customRequest: async ({ file }) => {
            nameRequest(file);
        }
    };

    return (
        <div style={{ ...styles.container, position: "absolute" }}>
            <div style={{ ...styles.form, position: "absolute" }}>
                <div style={{ ...styles.main, position: "absolute" }}>

                    <h1 style={{ ...styles.titletext }}>¿Quien es este actor?</h1>

                    <Dragger style={{ ...styles.Dragger }}
                        {...props}
                    >
                        <p className="ant-upload-drag-icon" style={{ ...styles.icon }}>
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text" >Haz click o arrastra una imagen</p>
                        <p className="ant-upload-hint" >Selecciona la foto de un actor famoso para conocer quies es y en que pelicula ha salido.</p>

                    </Dragger>
                </div>
            </div>


        </div>
    )
}

const styles = {
    container: {
        width: "100%",
        height: "100%",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#efefef'
    },
    form: {
        width: "85%",
        height: "85%",
        top: 0,
        bottom: 0,
        margin: "auto",
        right: 0,
        left: 0,
        borderRadius: 20,
        backgroundColor: '#ffffff'
    },
    main: {
        left: 0,
        right: 0,
        top: '30%'
    },
    titletext: {

        backgroundColor: "#ffffff",
        textAlign: "center"


    },
    Dragger: {
        backgroundColor: "#efefef",
        borderRadius: 10,
        padding: 60,
        maxHeight: 300
    },
    icon: {
        fontSize: 60,
        margin: 0,
        color: "#278ae9"
    }
}
