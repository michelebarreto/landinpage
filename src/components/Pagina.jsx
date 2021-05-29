import React from 'react';
import PaginaBox from'./PaginaBox';
import featureimage from'../imagens/carl.jpg'
import featureimage1 from'../imagens/dave.jpg'
import featureimage2 from'../imagens/shy.png'


function pagina() {
    return (
        <div id='features'>
        <div className='a-container'>
        <PaginaBox image={featureimage} title='Converse com o Carl'/>
        <PaginaBox image={featureimage1} title='Converse com o Dave'/>
        <PaginaBox image={featureimage2} title='Converse com o Shy'/>
        
        </div>
            
        </div>
    )
}

export default pagina;
