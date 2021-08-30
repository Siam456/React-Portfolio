import React from 'react';
import { Route,  NavLink , BrowserRouter as Router, Switch} from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';

import { GitHub } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import Homeing from '../image/undraw_agree_8pb9.svg'

const Home = () => {
    return (
        <div id='home'>
            <div className='fau'></div>
            <img src={Homeing} alt=''></img>
            <div className='home-container'>
                <h1>
                    Hello!!!
                    <br></br>
                    I'm Hasibul Hasan
                </h1>

                <p>Web Developer | Android Developer | UX/UI Designer</p>

                <div className='home-social'>
                    <Router>
                        <ul>
                            <li><Link exact to = '/'><GitHub fontSize='large' className='github' /></Link></li>
                            <li><Link exact to = '/contract'><Facebook fontSize='large' className='facebook' /></Link></li>
                            <li><Link exact to = '/contract'><Twitter fontSize='large' className='twitter' /></Link></li>
                            <li><Link exact to = '/contract'><LinkedIn fontSize='large' className='youtube' /></Link></li>
                        </ul>
                    </Router>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Home;