"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';

export default function Counter(){
  const[count,setCOunt]=useState(0);

  const increment =()=>{
    setCOunt(count +1);

  }
  const decrement =()=>{
    setCOunt(count -1)
  }
  return(
    <div>
      <center>
      <h1>Counter</h1>
      <p>Current count:{count}</p>
      <br></br>
      <button class="increment" onClick={increment}>INCREMENT</button>

      <button class="dicrement" onClick={decrement}>DECREMENT</button>
      </center>
    </div>
  )
}