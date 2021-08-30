import { colors } from '@material-ui/core';
import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

const Teammate = () => {
    return (
        <div id='teammate'>
            <div style={{
                textAlign: 'start',
                padding: '20px',
                marginRight: '10%',
                marginLeft: '9%',
                textAlign: 'justify'
                
            }}>
                <h1 style={{color: 'white'}}>Teammates</h1>
                <p style={{
                    margin: '10px',
                    color: 'rgba(255 , 255 , 255 , .5)'
                }}>I like to work with people. so, I work with random teammate from my classmates. Connect With me...</p>
                <button className='a-btn' style={{margin: '5px' , marginLeft: '0'}}><Link exact smooth  to = '/#contract' style={{color: 'white' , textDecoration: 'none'}}>Contact With Me</Link></button>
            </div>
            
        </div>
    );
};

export default Teammate;