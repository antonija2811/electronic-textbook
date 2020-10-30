import React, {Component} from 'react';
import './index.css';

class Kontakt extends Component {
    render() {
        return (
            <div id="kontakt">
                <div class="picture-container">
                    <img src="https://korisnik.fesb.hr/slika/velika/dkrst.jpg" alt="profesor"/>
                </div>
                <div class="ostalo">
                    <h3>Damir Krstinić</h3>
                    <div class="location">
                        <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-location-pin-thin.png" alt="logo"/>
                        <p>Zavod za elektroniku i računarstvo, B502</p>
                    </div>
                    <div class="mail">
                        <img src="https://pluspng.com/img-png/email-hd-png-hd-painting-512.png" alt="mail"/>
                        <p>Damir.Krstinic@fesb.hr</p>
                    </div>
                    <div class="telephone">
                        <img src="data:image/png;base64,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" alt="telephone"/>
                        <p>+385 (21) 305 895</p>
                    </div>
                    
                </div>
            </div>

        );
    };
}

export default Kontakt;