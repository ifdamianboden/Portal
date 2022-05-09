import React from "react";
import {Map,GoogleApiWrapper} from 'react-google-maps'

import{
 GoogleMap,
 whithScriptjs,
 withGoogleMap
}from "react-google-maps";

const Map = (props)=>{
    return(
        <GoogleMap defaultZoom={12}
        defaultCenter={{lat :-34.397, lng:150.644}}
        />

    );
};

export default whithScriptjs(
    withGoogleMap(
        Map
    )
)