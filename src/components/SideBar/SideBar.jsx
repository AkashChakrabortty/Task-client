import React, { useContext, useEffect, useState } from 'react';
import { courseInfo } from '../../context/AuthProvider';

const SideBar = () => {
    const [data,setData] = useState([])
    const {reFetch,setIsFilter,setReFetch,items,setItems} = useContext(courseInfo)
    useEffect(()=>{
        fetch('http://localhost:5000/allCategories')
        .then((res) => res.json())
        .then((data) => setData(data));
    },[reFetch])
    const categoryHandle = (category)=>{
        setIsFilter(true)
        const allItems = items.split('+');
        let find = false; 
        let index =0;
        let i = 0;
        allItems.forEach((info)=>{
           if(info===category){
            find = true
            index = i;
           }
           i++;
        })
        if(find){
          allItems[index] = '';
          setItems(allItems.join('+'))
        }
        else{
            setItems(items+ '+' +category)
        }
      
        setReFetch(!reFetch)
    }
   
    return (
        <div className='col-4'>
           {
            data.map((info)=>{
                return <div key={info._id}>
                    <input type="checkbox" name={info.category} onClick={()=>categoryHandle(info.category)}/>{info.category}
                </div>
            })
           }
        </div>
    );
};

export default SideBar;