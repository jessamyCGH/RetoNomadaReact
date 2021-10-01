import React from 'react'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

export const Home = () => {

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,

                position: "absolute",
                backgroundColor: '#efefef'
            }}>

            <div style={{
                width: "85%",
                height: "85%",
                top: 0,
                bottom: 0,
                margin: "auto",
                right: 0,
                left: 0,
                position: "absolute",
                borderRadius: 20,
                backgroundColor: '#ffffff'
            }}>


                <div style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: '30%'
                }}>

                    <h1 style={{ backgroundColor: "#ffffff" }}>¿Quien es este actor?</h1>
                    
                    <Dragger style={{ backgroundColor: "#efefef", marginLeft: 30, marginRight:30, borderRadius:10, padding:60, maxHeight:300 }}
                        name="file"
                        multiple={false}
                        onChange={popis => console.log(popis.file.name)}
                    >
                        <p className="ant-upload-drag-icon" style={{ fontSize: 60, margin:0, color: "#278ae9"}}>
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
