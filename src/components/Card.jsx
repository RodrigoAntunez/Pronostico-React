import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return( 
  <div className={styles.container}>
    <button className= {styles.button}  onClick={props.onClose}> X </button>
    <h4>{ props.name }</h4>
  <div className={styles.temperatura}>
    <div>
      <h6> Min </h6>
      <p> { props.min }°</p>
    </div>
    <div>
      <h6>Max</h6>
      <p> {props.max}°</p>
    </div>
    <img src= {'http://openweathermap.org/img/wn/02d@2x.png' }/>
    </div>
  </div>
  )
};