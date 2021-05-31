import React from 'react';
import PaginaBox from'./PaginaBox';
import featureimage3 from'../imagens/image3.png'
import featureimage4 from'../imagens/jorge.jpg'
import featureimage5 from'../imagens/iamge1.png'
import featureimage7 from'../imagens/image2.png'

function Pagina1() {
    return (
        <div>
        <div id='features'>
        <div className='a-container'>
        <PaginaBox image={featureimage3} title='Comprar o Dançarino'/>
        <PaginaBox image={featureimage4} title='Comprar o Jorge'/>
        <PaginaBox image={featureimage5} title='Comprar o Kevin'/> 
        <PaginaBox image={featureimage7} title='Minion Carme Miranda'/> 
          
        </div>
                    
        </div>
            
        </div>
    )
}

export default Pagina1;
