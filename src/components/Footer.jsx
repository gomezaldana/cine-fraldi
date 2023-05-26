import React from 'react';

const Footer=({redSocial})=>{
    const fecha= new Date().getFullYear();

    return(
        <div>
            <p>aca van las redes sociales</p>
            <p>mi año {fecha}</p>
            <p>visita mi red social: {redSocial}</p>
        </div>
    );
}

export default Footer;