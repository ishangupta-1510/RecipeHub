import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <div className='recipe'>
        <div className='img'>
          <img src={props.val} alt="" />
        </div>
        <img className='chef' src={props.chef} alt="" />
        <h3 className='name'>
          {props.name}
        </h3>
        <p className='lorem'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      <a className="view" href="#!">VIEW RECIPE</a>
      </div>
    </div>
  )
}

export default Card