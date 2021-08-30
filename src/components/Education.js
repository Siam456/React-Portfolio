import React, { useState } from 'react';
import { colors, Grid } from '@material-ui/core';

const data = [
    {
        Name: 'Daffodil International University',
        duration: 'B.Sc. in CSE  •  January 2018 - Present',
        res: 'CGPA: --- out of 4.00'
    },

    {
        Name: 'Govt. Yasin Collage, Faridpur',
        duration: 'Higher Secondary  •  2014 - 2016',
        res: 'GPA: 4.50 out of 5.00'
    },

    {
        Name: 'BZM Govt High School',
        duration: 'Secondary Education  •  2012 - 2014',
        res: 'GPA: 4.56 out of 5.00'
    }
]



const Education = () => {
    const [dataHook, setdataHook] = useState(data) 
    return (
        <div id='education'>
            <div className='fau'></div>
            <h1>Education</h1>
            
            <div className='edu-contain'>
                <div className='e-contain'>
                    {dataHook.map((v, i) => {
                        return <div className='e-card'>
                            
                            
                            <div className='l-details'>
                                <h2 style={{color: '#DC3545'}}>{v.Name}</h2>
                                <br></br>
                                <p style={{fontWeight: 'bold'}}>{v.duration}</p>
                                <p style={{color: '#DC3545' , marginTop: '10px'}}>{v.res}</p>
                            </div>
                                                  
                            
                        </div>
                        
                    })}
                    
                </div>
                </div>
        </div>
    );
};

export default Education;