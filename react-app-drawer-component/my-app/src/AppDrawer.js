import React, { useState } from 'react';
import { FaHamburger } from "react-icons/fa"

export default function AppDrawer({listItems}) {
  const [clicked, setClicked] = useState(false);
  function toggleOptions() {
    setClicked(!clicked);
  }
  return (
    <>
    <div className='container'>
      <div onClick={toggleOptions} className={clicked ? 'overlay' : 'overlay hidden'}></div>
      <div className={clicked ? 'menu' : 'menu hidden'}>
        <h3 className='menu-head'>Hockey Info</h3>
        <DrawerList toggleOptions={toggleOptions} listItems={listItems} />
      </div>
      <div onClick={toggleOptions} className='icon'><FaHamburger /></div>
    </div>
    </>
  )
}

function DrawerList({listItems, toggleOptions}) {
  const list = listItems.map(item => <li key={item.number} onClick={toggleOptions} className='menu-item'>{item.name}</li>);
  return (
    <div>{list}</div>
  )
}
