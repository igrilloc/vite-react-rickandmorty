import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'



const Character = ({ character }) => {

  return (
    <div className='text-center p-5'>

      <img src={character.image} alt={character.name} className='img-fluid rounded-pill' />
      <h3>{character.name}</h3>
      
      <div>
        <GoPrimitiveDot />
        <h6>{character.status} - {character.species}</h6>
      </div>
      
      <h6>Origin:</h6>
      <h6>{character.origin.name}</h6>
      
    </div>
  )

};



export default Character