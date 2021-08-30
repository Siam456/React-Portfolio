import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import {Link, BrowserRouter, Route} from 'react-router-dom'
import ProjectAll from './ProjectAll';

const data = [
    {
        Name: 'Typing Speed Test',
        url: 'https://www.keybr.com/cover.png',
        des: 'You can test your typing speed here. this app is made with ReactJS'
    },

    {
        Name: 'News Api',
        url: 'https://www.andromo.com/blog/wp-content/uploads/2020/12/news-1.jpg',
        des: 'I use reactJS and a public Api to build it.'
    }]

           

const Projects = () => {
    const [dataHook, setdataHook] = useState(data) 
    return (
        <div id='p-all' style={{textAlign: 'center'}}>
            <div className='fau'></div>
            <div className='banner'>
                <h1>Projects</h1>
            </div>
           
            
            <div className='ps-contain'>
                <h1 style={{padding: '20px'}}>Recent Works</h1>
                <div className='gs-container'>
                    {dataHook.map((v, i) => {
                        return <div className='l-card'>
                            
                            <img className='P-img' alt="" src={v.url} height='100px' width='auto'></img>
                            <div className='l-details'>
                                <h2>{v.Name}</h2>
                                <p>{v.des}</p>
                            </div>
                                                  
                            
                        </div>
                        
                    })}
                    
                </div>
                <button style={{
                    marginTop: '25px',
                    marginBottom: '0',
                    marginLeft: '0'
                }} className='a-btn'><BrowserRouter>
                    <Link to='/project' style={{textDecoration:'none'}}><span style={{color: 'white'}}>See More Projects</span></Link></BrowserRouter></button>
       
            </div>
            
        </div>
    );
};

export default Projects;