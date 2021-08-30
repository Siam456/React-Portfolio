import React from 'react';
import Apic from '../image/siam11.jpg'
import { Link , BrowserRouter as Router, Switch} from 'react-router-dom';


const About = () => {
    return (
        <div id='about'>
            <div className='fau'></div>
           
            <div className='a-container'>
                <h1 style={{marginBottom: '20px'}}>About Me!!!</h1>
                <div className='a-details'>
                <div style={{textAlign: 'center', width:'100%'}}><img src={Apic} alt=''></img></div>
                
                    <div>

                    <div className='text'>
                      <h1>I'm Hasibul Hasan!!!</h1>
                      <p>I am a student of computer science department from <span style={{color: '#ff4800'}}>Daffodil International University</span>. I love to learn web technologies. So, I want to be a web Developer. Now I'm working with JS, ReactJS , ExpressJS.<br></br><br></br>In my leasure time, I like to learn developing, Playing Game....</p>

                        </div> 
                        <div className='a-contract'>
                            <p><b>Contact: </b> +8801755770538<br></br><b>Mail: </b> hasibul15-11038@diu.edu.bd</p>
                        </div> 
                        <button className='a-btn'>Download Resume</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;