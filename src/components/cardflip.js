import "../App.css"
import React, { useState } from "react";


function CardFlip() {
    const [isActive, setActive] = useState("false"),
        handleToggle = () => {
            setActive(!isActive);
        };
    return (
       <div class="lg:w-40 h-44 perspective-600">
            
            <div class={(isActive ? 'card ' : 'card is-flipped ') + 'w-full h-full relative preserve-3d ease-in duration-200'}  onClick={handleToggle}  >
                <div class="absolute h-full w-full backface-hidden bg-red-400" >front</div>
                <div class="absolute h-full w-full backface-hidden bg-blue-400 rotate-y-180">back</div>
            </div>
        </div>
    );
  }

  export default CardFlip;

