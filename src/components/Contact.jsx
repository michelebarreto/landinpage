/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
 pt:{
   title: "Faça sua reserva !",
   name: `Nome`,
   message: "Mensagem",
   send: "Enviar",
 
}
});

function Contact() {
    return (
        <div id='contact'>
         <section className="section-contato">
        <h2 className="title">{strings.title}</h2>
        <form className="form-group-contacts"
        action="thiago@bgcbrasil.com.br"
        method="POST" accept-charset="UTF-8" >
        <label class="form-label" for="input-example-1">{strings.name}</label>
        <input className="contact-input" type="text" name="contactName" />
        <label class="form-label" for="input-example-1">E-mail</label>
        <input className="contact-input" type="email" name="email" />
        <label class="form-label" for="input-example-1">{strings.message}</label>
        <textarea className="contact-input-text" name="message" rows="8"></textarea>
        <br /> <br />
        <input className="cv-btn" type="submit" value={strings.send} />
      </form>
    </section>
            
        </div>
    )
}

export default Contact
