import React from 'react';
import PaginaBox from'./PaginaBox';
import featureimage from'../imagens/carl.jpg'
import featureimage1 from'../imagens/dave.jpg'
import featureimage2 from'../imagens/shy.png'



function pagina() {
    return (
        <div id='features'>
        <div className='a-container'>
        <PaginaBox image={featureimage} title='Comprar o Carl'/>
        <PaginaBox image={featureimage1} title='Comprar o Dave'/>
        <PaginaBox image={featureimage2} title='Comprar o Shy'/>
        
        
        </div>
            
        </div>
    )
}

export default pagina;
