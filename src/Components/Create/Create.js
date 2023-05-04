import React, { useState } from 'react';
import './Create.css';

const Create = () => {
  const [image, setImage] = useState();
  
  function displayImage(e) {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  }
  
  function submit(e) {
    e.preventDefault();
    if (image) {
      alert(window.URL.createObjectURL(image));
    }
  }
  
  return (
    <div>
      <div className="centerDiv">
        <form>
          <label htmlFor="fname">Name</label>
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            defaultValue=""
          />
          <label htmlFor="fname">Category</label>
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            defaultValue=""
          />
          <br />
          <label htmlFor="fname">Price</label>
          <input className="input" type="number" id="fname" name="Price" />
        </form>
        <br />
        {image && <img alt="Posts" width="100px" height="100px" src={URL.createObjectURL(image)} />}
        <form onSubmit={submit}>
          <br />
          <input type="file" id="image" accept="image/*" onChange={displayImage} />
          <br />
          <button className="uploadBtn">Upload and Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
