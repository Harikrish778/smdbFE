import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {addMovieApi} from '../services/allApis'

function Add({val}) {
  const [show, setShow] = useState(false);
  const [movie,setMovie]=useState({
    name:"",year:"",image:""
  })

  const handleSubmit=async()=>{
    console.log(movie)
    const {name,year,image}= movie
    if(!name || !year || !image){
      alert("Enter Valid Inputs !!")
    }
    else{
      const result=await addMovieApi(movie)
      console.log(result)
      if(result.status===201){
        alert("Movie Details Added !!")
        handleClose()
        setMovie({name:"",year:"",image:""})
        val(result)
      }
      else{
        alert("Adding Failed !!...Something Went Wrong !!")
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className="btn my-4 text-light"
        onClick={handleShow}
        style={{ backgroundColor: "blueviolet" }}
      >
        Add New Movies +
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          className="text-light"
          style={{ backgroundColor: "blueviolet" }}
        >
          <Modal.Title>New Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="text"
              onChange={(e)=>{setMovie({...movie,name:e.target.value})}}
              placeholder="Enter Movie Name"
              className="form-control mb-3"
            />
            <input
              type="text"
              onChange={(e)=>{setMovie({...movie,year:e.target.value})}}
              placeholder="Enter Movie Year"
              className="form-control mb-3"
            />
            <input
              type="text"
              onChange={(e)=>{setMovie({...movie,image:e.target.value})}}
              placeholder="Enter Movie Image URL"
              className="form-control mb-3"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;