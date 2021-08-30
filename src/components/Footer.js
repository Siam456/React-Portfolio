import React from 'react';
import { Route,  NavLink , BrowserRouter as Router, Switch} from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';

import { GitHub } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import Homeing from '../image/siam4.png'
import { useEffect } from 'react';


const Footer = (props) => {

    return (
        <div id={props.id} style={{background: '#000'}}>


                <div className='footer-social'>
                    <Router>
                        <ul>
                            <li><Link exact to = '/'><GitHub className='github' /></Link></li>
                            <li><Link exact to = '/contract'><Facebook className='facebook' /></Link></li>
                            <li><Link exact to = '/contract'><Twitter className='twitter' /></Link></li>
                            <li><Link exact to = '/contract'><LinkedIn className='youtube' /></Link></li>
                        </ul>
                    </Router>
                    
                </div>

            <p style={{color: '#ff4800',
        fontSize: '17px',
        fontStyle: 'normal', paddingBottom: '55px'
        }}>Designed and developed by © Hasibul Hasan</p>
            
        </div>
    );
};

export default Footer;