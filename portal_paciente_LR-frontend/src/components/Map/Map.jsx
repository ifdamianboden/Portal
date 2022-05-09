import React from "react";


class MapContainer extends Component{
    render(){
        return(
            <Map
                google = {this.props.google}
                style = {{width:"100%", heigth:"100%"}}
                zoom = {10}
                initialCenter ={
                    {
                        lat: -34.397, 
                        lng:  150.644
                    }
                }
            />

        );
    }

}

export default GoogleApiWrapper({
    apiKey:"AIzaSyAufpDyuXule0MXA494Gxs12Wqs_9a5T80"
})(MapContainer)
