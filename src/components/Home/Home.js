import React from 'react';
import home from '../../images/25060.jpg'
const Home = () => {
    return (
        <div>
            <div className='text-center m-5'>
                <img src={home} alt="homepage" style={{width:"50%"}} />
            </div>
        </div>
    );
};

export default Home;