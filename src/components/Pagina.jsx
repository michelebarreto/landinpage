import React from 'react';
import PaginaBox from'./PaginaBox';
import featureimage from'../imagens/carl.jpg'
import featureimage1 from'../imagens/dave.jpg'
import featureimage2 from'../imagens/shy.png'
import featureimage6 from'../imagens/phil.jpg'




function pagina() {
    return (
        <div id='features'>
        <div className='a-container'>
        <PaginaBox image={featureimage} title='Comprar o Carl'/>
        <PaginaBox image={featureimage1} title='Comprar o Dave'/>
        <PaginaBox image={featureimage2} title='Comprar o Shy'/>
        <PaginaBox image={featureimage6} title='Minion faxineiro'/> 
          
        </div>
                    
        </div>
    )
}

export default pagina;
