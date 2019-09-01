import React from 'react'
import {Map,  Marker, GoogleApiWrapper} from 'google-maps-react';
import { Row,Col} from 'react-flexbox-grid'

class Maps extends React.Component{
    render(){
        return(
            <div >   
                <Row>
                <Col >
                 <Map google={this.props.google} zoom={10} >
                    <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                </Map>
                </Col>
                </Row>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyACtYqMesNrvfg2DXD32z-7lt0wOc6k6zY")
  })(Maps)