import React from 'react';

const Contract = () => {
    return (
        <div>
            <div id='contract'>
                <div className='fau'></div>
                <div className='c-contain'>
                    <div style={{textAlign: 'center'}}>
                        <p style={{color: '#ff4800'}}>LET'S TALK</p>
                        <h1 style={{color: 'white'}}>Get in Touch</h1>
                    </div>

                    <div className='c-de'>
                        <div className='c-img'>
                            <img src="https://gunter-react.envytheme.com/static/media/map2.849465fc.png" alt="map"/>
                            <div className='dot'></div>
                        </div>
                        <div style={{textAlign: 'start' , marginLeft: '10%'}}>
                            <div className='in'>
                                <input type="text" class="c-input" name="name" id="name" placeholder="Name" required="" />
                                <input type="mail" class="c-input" name="Email" id="Email" placeholder="Email" required="" />
                            </div>
                            <div  className='in'>
                                <input type="text" class="c-input" name="Phone" id="Phone" placeholder="Phone" required="" />
                                <input type="text" class="c-input" name="Subject" id="Subject" placeholder="Subject" required="" />
                            </div>
                            <textarea name="message" class="c-textarea" id="message" cols="30" rows="4" placeholder="Your Message" required=""></textarea>
                            <br></br>
                            <button className='c-btn' style={{marginTop: '10px'}}>Send Mail</button>
                   
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contract;