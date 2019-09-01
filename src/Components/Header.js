import React from 'react'
import './Header.css'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'

class Header extends React.Component{
    render(){
        return(
            <div>
               <h1>
                   <img src={icon1}  className="icon-right"/>
                   Luciana Restauran's Reviews
                   <img src={icon2} className="icon-left"/>
                </h1>
            </div>
        )
    }
}

export default Header