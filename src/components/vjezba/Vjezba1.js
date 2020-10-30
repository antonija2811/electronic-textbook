import React, {Component} from 'react';


class Vjezba1 extends Component {
    render() {
        return (
            <div class="vjezba">
                <h2>Vježba 1 - Osnove korištenja operativnog sustava UNIX</h2>
                <h3>Osnovne naredbe:</h3>
                <ul>
                    <li>promjena radnog direktorija: cd</li>
                    <li>stvaranje direktorija: mkdir</li>
                    <li>promjena prava pristupa: chmod</li>
                    <li>pomoć za bilo koju naredbu: man [naredba]</li>
                    <li>editor: joe</li>
                    <li>pomoć za joe editor: CTRL-K-H</li>
                </ul>
                <p>
                    Vježba se nalazi na slijedećem linku: <a rel="noopener noreferrer" target="_blank" href="http://ec2-18-196-240-100.eu-central-1.compute.amazonaws.com/hub/login">Jupyterhub</a> 
                </p>
            </div>
        );
    };
}

export default Vjezba1;