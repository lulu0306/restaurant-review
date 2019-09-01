import React from 'react';
import {Grid , Row,Col} from 'react-flexbox-grid'
import Map from './Components/Map'
import RestaurantList from './Components/RestaurantList'
import Header from './Components/Header'


function App() {
  return (  
    <div>
    <Header/>   
    <Row>
   <Map/>
   </Row> 
   </div>
  );
}

export default App;
