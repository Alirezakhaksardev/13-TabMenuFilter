import React from 'react'
import Categories from './Categories';
import Menu from './Menu';
import { useState } from 'react';
import items from './data';



function App() {
  
  const allCategories = ['همه',...new Set(items.map(item => item.category))];
  const [menuItems , setMenuItems] = useState(items);
  const [categories , setCategories] = useState(allCategories);
  
  const filterItems = (category) => {
    if(category === "همه"){
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  }

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>محصولات ما</h2>
            <div className="underline"></div>
          </div>
          <Categories filterItems={filterItems} Categories={categories} />
          <Menu items={menuItems} />
        </section>
    </main>
    </>
  )
}

export default App
