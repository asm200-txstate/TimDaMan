import lehr from '../../Pictures/lehr-meme.png';
import Confetti from "react-confetti";
import React, { useState } from "react";

import './Error404.css'

export default function PageNotFound() {
    const [num, setNum] = useState(0);
    const [error_message, setMessage] = useState("Et Tu Brute!??");

    const RandVal = () => { return Math.random() * 6 + 1; }
    const UpdateMessage = () => { 
      setNum(Math.floor(RandVal())) 
      switch(num){
        case 1: setMessage("Am I giving you a hard time? I always give the BORGS a hard time ..."); break;
        case 2: setMessage("This is a problem! No cap!"); break;
        case 3: setMessage("You made a 404 error? That's great (Just kidding - it's not)!"); break;
        case 4: setMessage("PIZZA!"); break;
        case 5: setMessage("(sigh) ..."); break;
        default: setMessage("Don't look at my app password!!"); break;
      }
    }

    return (
      <div className='screen-format'>
        <h1> 404 - Not Found! </h1>
        <br/>
        <img className='image-style, rotate-meme' src={lehr} alt="clarckson-meme" />
        <Confetti />
        <br/><br/><br/>
        <h1> {error_message} </h1>
        <button onClick={UpdateMessage}> Update Message </button>
        <br/><br/>
      </div>
    )
  }