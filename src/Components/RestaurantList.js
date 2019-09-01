import React from 'react'
import {Row,Col,Container} from 'reactstrap'


class RestaurantList extends React.Component{
    render(){
        return(                    
              <div>              
                 <ul>
                     <li>
                    Restaurant One
                     </li>
                     <li>
                    Restaurant  Two
                     </li>
                     <li>
                    Restaurant Three
                     </li>
                </ul>
                </div>     
        )
    }
}


export default RestaurantList