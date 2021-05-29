import React from 'react'

function About(props) {
    return (
        <div id='about'>
        <div className='about-image'>
          <img src={props.image} alt='' />
        </div>
     <div className='about-text'>
      <h2>{props.title}</h2>
      <p>Minions são seres multicelulares amarelos que existem desde o início do tempo, evoluindo de amarelos organismos unicelulares aquáticos a seres que têm apenas um propósito: servir aos vilões mais malvados da história.</p>
       <button>{props.button}</button>
     </div>

        </div>
    )
}

export default About;
