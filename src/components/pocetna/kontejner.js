import React from 'react';
import { Button } from 'antd';
import './kontejner.css'

class Kontejner extends React.Component {
    render() 
     {
         return (
             <div id="kontejner">
                 <div className="opcija">
                    <img src="data:image/jpeg;base64,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" alt="ggg"/>
                    <Button href="http://marjan.fesb.hr/~dkrst/unix/pdf/uvod.pdf" target="_blank">Skripta</Button>
                 </div>
                 <div className="opcija">
                    <img src="https://cdn.dribbble.com/users/1564927/screenshots/4802753/cps.jpg" alt="programiranje"/>
                    <Button href="http://marjan.fesb.hr/~dkrst/unix/prezentacije/L1-uvod.pdf" target="_blank">Predavanja</Button>
                 </div>
                 <div className="opcija">
                    <img src="https://logodix.com/logo/640491.png" alt="programiranje"/>
                    <Button href="http://marjan.fesb.hr/~dkrst/unix/vjezbe/osnove_programiranja/" target="_blank">Primjeri</Button>
                 </div>
             </div>

         );  
     }
 
     
 }
 
 export default Kontejner;