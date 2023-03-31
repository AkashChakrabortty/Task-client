import React, { useEffect, useState } from "react";

const Table = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allCourses')
        .then((res) => res.json())
        .then((data) => setData(data));
    },[])
  return (
    <div className="col-8">
      <table class="table">
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
                    return  <tr>
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
