import React, { useContext, useEffect, useState } from 'react';
import { courseInfo } from '../../context/AuthProvider';

const SideBar = () => {
    const [data,setData] = useState([])
    const {reFetch} = useContext(courseInfo)
    useEffect(()=>{
        fetch('http://localhost:5000/allCategories')
        .then((res) => res.json())
        .then((data) => setData(data));
    },[reFetch])
    return (
        <div className='col-4'>
           {
            data.map((info)=>{
                return <div key={info._id}>
                    <input type="checkbox" name={info.category}/>{info.category}
                </div>
            })
           }
        </div>
    );
};

export default SideBar;