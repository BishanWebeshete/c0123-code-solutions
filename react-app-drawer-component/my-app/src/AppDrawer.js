import React, { useState } from 'react';
import { FaHamburger } from "react-icons/fa"

export default function AppDrawer({listItems}) {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState('');
  function toggleOptions(item) {
    setText(item);
  }
  return (
    <>
    <div className='container'>
      <div onClick={()=>setClicked(!clicked)} className={clicked ? 'overlay' : 'overlay hidden'}></div>
      <div className={clicked ? 'menu' : 'menu hidden'}>
        <h3 className='menu-head'>Hockey Info</h3>
        <DrawerList toggleOptions={toggleOptions} listItems={listItems} />
      </div>
      <div onClick={()=>setClicked(!clicked)} className='icon'><FaHamburger /></div>
    </div>
    <h1 className='title-text'>{text}</h1>
    </>
  )
}

function DrawerList({listItems, toggleOptions}) {
  const list = listItems.map(item => <li key={item.number} onClick={() => toggleOptions(item.name)} className='menu-item'>{item.name}</li>);
  return (
    <div>{list}</div>
  )
}
