import { Background } from '@react-navigation/elements';
import data from './portfolio.json';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';

const backgroundImg = data.Portfolio[0].Img; 

const portSample = data.Portfolio;

export function Test(){
    return(
        <h1>This is a test</h1>
    )
}
export function PortfolioItem(){
    return(
        <>
            {portSample.map((p) => (
                <div style={styles.contain}>
                    <ImageBackground source={{uri: p.Img}} style={styles.img}>
                        <h3>Title: {p.Title}</h3>
                        <h4>Description: {p.Description}</h4>
                    </ImageBackground>
                 </div>
                
            ))}
            

        </>
    )
}

const styles = StyleSheet.create({
contain:{
    width: 350,
    height: 450,
    margin: 10,
},
img:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
},
})