import React, {Component} from 'react';
import Kontejner from './kontejner';
import './index.css';
import Slider from './slider';


class Body extends Component {
  render () {

    return (
      <div className="App-body">
        <Slider/>
        <div id="box">
          <div id="box-ciljevi">
            <h2>Ciljevi predmeta</h2>
          </div>
          <p>Osposobljavanje studenata za:</p>
          <ul>
            <li>Razumijevanje principa rada operativnog sustava UNIX</li>
            <li>Korištenje UNIX okruženja</li>
            <li>Korištenje razvojnih alata na operativnom sustavu UNIX</li>
            <li>Izrada programa za operativni sustav UNIX</li>
          </ul>
          <div id="box-ishodi">
            <h2>Očekivani ishodi učenja</h2>
          </div>
          <p>Studenti će nakon uspješno savladanog predmeta moći:</p>
          <ol>
            <li>Imenovati temeljne standarde UNIX operativnog sustava</li>
            <li>Opisati principe rada i koncepte UNIX operativnog sustava</li>
            <li>Prepoznati elemente skripti UNIX ljuske</li>
            <li>Izraditi jednostavne skripte UNIX ljuske</li>
            <li>Koristiti razvojne alate na operativnom sustavu UNIX</li>
            <li>Izraditi jednostavne programe za UNIX operativni sustav</li>
            <li>Prepoznati elemente Makefile datoteke za automatiziranje prevođenja i povezivanja</li>
            <li>Izraditi Makefile datoteku s pravilima za automatsko prevođenje i povezivanje</li>
          </ol>
        </div>
        <div id="container">
          <h2>Materijali za studente</h2>
          <Kontejner/>
        </div>
        
    </div>
    );
  }
}
    

export default Body;
