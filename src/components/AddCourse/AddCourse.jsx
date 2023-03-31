import React from "react";

const AddCourse = () => {
    const addProduct = (e)=> {
     e.preventDefault();
     const name = e.target.name.value;
     const instructor = e.target.instructor.value;
     const category = e.target.category.value;
     const price = e.target.price.value;

     const info = {
        name,
        instructor,
        category,
        price
     }
    
     fetch('http://localhost:5000/add',{
     method: 'POST',
     headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
     })
     .then((res) => res.json())
      .then((data) => {
       console.log(data)
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
    }
  return (
    <div>
      <form onSubmit={addProduct}>
        <div className="mb-3 name">
          <label htmlFor="exampleFormControlInput1" className="form-label">
           Course Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Course Name"
            name="name"
            required
          />
        </div>
        <div className="mb-3 instructor">
          <label htmlFor="exampleFormControlInput1" className="form-label">
           Instructor
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Instructor"
            name="instructor"
            required
          />
        </div>
        <div className="mb-3 category">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          Category
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Category"
            name="category"
            required
          />
        </div>
        <div className="mb-3 price">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          Price
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Price"
            name="price"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
