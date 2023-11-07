import React from 'react';
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom';
const Back = () => {
    return (
        <div>
            <Link to='/' className=' absolute w-[100px] h-[50px] bg-orange-400 text-md text-white flex justify-center items-center gap-3 rounded-lg ml-[90%] mt-[30px]'><BiArrowBack />Back</Link>
        </div>
    );
}

export default Back;
