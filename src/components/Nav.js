import React from 'react';
import { Route,  NavLink , BrowserRouter as Router, Switch} from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';
import About from './About';
import Home from './Home';
import MenuIcon from '@material-ui/icons/MenuRounded'
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { GitHub } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import Contract from './Contract';
import ProjectAll from './ProjectAll';
import Portfolio from './Portfolio';
import logo from '../image/siam_n.jpg'

const Nav = () => {

    const open = () => {
        var c = document.getElementById('navlis');
        c.classList.add('active')
        c.classList.remove('unactive')
        
    }

    const close = () => {
        var c = document.getElementById('navlis');
        c.classList.add('unactive')
        c.classList.remove('active')
    }
    return (
        <div>
            <Router>
                <div className='nav'>
                <Link exact smooth  to = '/#' >
                    <div className='header'>
                        <img className='nav-logo' alt='' src={logo} height='40px' width='40px'></img>
                        <h3>Hasibul <span style={{color: '#ff4800'}}>Hasan</span></h3>
                    </div>
                    </Link>
                    
                        <input type="checkbox" id="siam1" />
                            <label onClick={open} id='menu' for="siam1"><MenuIcon /></label>
                    
                    <div className='navlist' id= 'navlis'>

                        <div className='cross-button'><label onClick={close} for="siam1"><CancelRoundedIcon fontSize='large' /></label></div>


                        <div className='phone-header'>
                            <img className='nav-logo' alt='' src={logo} height='60px' width='60px'></img>
                            <h2>Hasibul Hasan</h2>
                            <h4>Web Dev</h4>
                        </div>

                        <ul>
                        
                        <li onClick={close} ><Link exact smooth  to = '/#'  activeStyle={{borderBottom: '2px solid #ff4800'}}>Home</Link></li>
                        <li onClick={close} ><Link exact smooth  to = '/#about' activeStyle={{borderBottom: '2px solid #ff4800'}}>About</Link></li>

                        <li onClick={close} ><NavLink exact to = '/project' activeStyle={{borderBottom: '2px solid #ff4800'}}>Projects</NavLink></li>

                        <li onClick={close} ><Link exact smooth  to = '/#contract' activeStyle={{borderBottom: '2px solid #ff4800'}}>Contact</Link></li>
                        
                        
                    </ul>

                    
                    <div className='nav-social'>
                        <ul>
                            <li onClick={close} ><Link exact className="nav-link" to = '/'><GitHub /></Link></li>
                            <li onClick={close} ><a className="nav-link" href='https://www.facebook.com/profile.php?id=100005289167762'><Facebook /></a></li>
                            <li onClick={close} ><Link exact className="nav-link" to = '/constract'><Twitter /></Link></li>
                            
                            
                        </ul>
                        </div>

                    
                    </div>
                </div>

                <Switch>
                <Route path="/project" component={ProjectAll}></Route>
                    <Route path='/' component={Portfolio}></Route>
                    <Route path='#' component={Portfolio}></Route>
                    <Route path='#about' component={About}></Route>

                    
                    
                    <Route path='facebook.com' component='facebook.com'></Route>
                </Switch>
            </Router>
            
        </div>
    );
};


export default Nav;