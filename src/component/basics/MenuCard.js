import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
        <section className='main-card--cointainer'>
            {
                menuData.map((currElem) => {
                    const {id,name,category,image,description} = currElem;  //destructuring so that we not to write always currElem.id and so on now we can write only id or name and so on:
                    return (
                        <>
                    <div className='card-container' key={name} >
                        <div className='card'>
                            <div className='card-body'>
                                <span className='card-number card-circle subtle'>{id}</span>
                                <span className='card-author subtle' style={{ color: 'red' }}>{category}</span>
                                <h2 className='card-title'>{name}</h2>
                                <span className='card-description subtle'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur sint nam, porro praesentium modi dignissimos cumque quam minima? Aut, iste perferendis necessitatibus quas assumenda laborum laudantium accusantium ipsa ex. Incidunt.</span>
                                <div className='card-read'>Read</div>
                                <img src={image} alt="image" className='card-media' />
                                {/* <img className='card-media' src='images/biryani.jpg'/> */}
                                <span className='card-tag subtle'>Order Now</span>
                            </div>
                        </div>
                    </div>
                    </>
                    )
                })
            }
            </section>

        </>
    )
}

export default MenuCard