import React from 'react';
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom';
const Back = () => {
    return (
        <div>
            <Link to='/' className='z-200 text-[17px] shadow-2xl  shadow-black h-[80px] rounded-full w-[80px] sm:h-[40px] fixed sm:w-[100px]  p-1 bg-orange-400 text-md text-white flex justify-center items-center gap-1 sm:rounded-lg ml-[75%] mt-[85vh] sm:ml-[90%] sm:mt-[30px]'><BiArrowBack />Back</Link>
        </div>
    );
}

export default Back;
