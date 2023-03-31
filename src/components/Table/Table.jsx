import React, { useContext, useEffect, useState } from "react";
import { courseInfo } from "../../context/AuthProvider";

const Table = () => {
    const [data,setData] = useState([])
    const {reFetch, isFilter,items} = useContext(courseInfo)
    useEffect(()=>{
        fetch(`http://localhost:5000/${isFilter? `filter/${items}` : 'allCourses'}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    },[reFetch])
  
  return (
    <div className="col-8">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
               Course Name
            </th>
            <th scope="col">Instructor</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
            {
                data.map((info)=>{
                    return  <tr key={info._id}>
                    <td>{info.name}</td>
                    <td>{info.instructor}</td>
                    <td>{info.category}</td>
                    <td>{info.price}</td>
                  </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
