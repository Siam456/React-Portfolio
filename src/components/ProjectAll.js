import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Footer from './Footer';

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
    },

    {
        Name: 'Weather App',
        url: 'https://th.bing.com/th/id/R.1197d4c327d31ad5b6bd63cf850662ef?rik=tabuZwtea8O7SQ&pid=ImgRaw',
        des: 'I use reactJS and a public Api to build it.'
    }
]



const ProjectAll = () => {
    const [dataHook, setdataHook] = useState(data) 
    return (
        <div id='p-all' style={{textAlign: 'center'}}>
            <div className='fau'></div>
            <div className='banner'>
                <h1>Projects</h1>
            </div>
           
            
            <div className='p-contain'>
                <h1 style={{padding: '15px'}}>Recent Works</h1>
                <div className='g-container'>
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
                <div style={{height:'50px'}}></div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default ProjectAll;