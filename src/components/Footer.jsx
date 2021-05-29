import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
     <section className="footer">
      <SocialIcon url="https://github.com" />
      <SocialIcon url="https://www.instagram.com" />
      <SocialIcon url="https://www.facebook.com/Devoleum" />
      <SocialIcon url="https://www.linkedin.com" />
      <p>Lorem © {new Date().getFullYear()} All rights reserved.</p>
      
    </section>
    )
}

export default Footer
