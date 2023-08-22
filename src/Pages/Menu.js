import React from 'react'
import {MenuList} from '../Helper/MenuList'

function Menu() {
  return (
    <div className="menu">
       <h1 className="menuTitle"> Our Menu </h1>
       <div className="menuList">{MenuList}</div>
      
    </div>
  )
}

export default Menu
