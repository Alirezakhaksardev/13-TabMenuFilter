import React from 'react'

function Menu({items}) {

  return (
    <div className='section-center'>
      {
        items.map((item) => {
          const { id , title ,type , price , img , desc } = item;
          return (
            <section key={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h5 className="price">{price}</h5>
                </header>
                <p className="items-text">
                  {desc}
                </p>
              </div>
            </section>
          )
          
        })
      }
      
    </div>
  )
}

export default Menu