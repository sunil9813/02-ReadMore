import React, { useState } from "react"

const Tour = ({ id, image, info, price, name, removeTour }) => {
  // state value readmore chai by default false huxa
  const [readMore, setReadMore] = useState(false)
  return (
    <>
      <article>
        <img src={image} alt='' />
        <div className='text'>
          <div className='price'>
            <h4>{name}</h4>
            <h3>${price}</h3>
          </div>
          {/* paragarph lai subai lai deplay garnu sata hami le chai half matra garrako xa
           if readMore (true){
			   display defalt info
		   } else{
			   yo show garra
              `${info.substring(0, 200)}`}
		   }
 		  */}
          <p>
            {readMore ? info : `${info.substring(0, 150)}`}...
            {/* click garda  setReadMore chai equal xaina bhane readMore saga => show read less */}
            <button onClick={() => setReadMore(!readMore)}> {readMore ? "Read Less" : " Read More"} </button>
          </p>
          <button onClick={() => removeTour(id)} className='btn'>
            Not Interested
          </button>
        </div>
      </article>
    </>
  )
}

export default Tour
