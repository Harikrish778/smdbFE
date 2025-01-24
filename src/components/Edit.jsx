import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateMovieApi } from "../services/allApis";

function Edit({movie,edit}) {
  const [show, setShow] = useState(false);
  const [data,setData]=useState({
    name:movie.name,year:movie.year,image:movie.image
  })

  const updateMovie=async()=>{
    const {name,year,image}=data
    if(!name||!year||!image){
      alert("Enter Valid Inputs !!")
    }
    else{
      const result = await updateMovieApi(movie.id,data)
      console.log(result)
      if(result.status===200){
        alert("Movie Details Updated !!")
        handleClose()
        edit(result)
      }
      else{
        alert("Something Went Wrong !!")
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-warning me-4" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          className="text-light"
          style={{ backgroundColor: "blueviolet" }}
        >
          <Modal.Title>Edit Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="text"
              defaultValue={movie?.name}
              placeholder="Enter Movie Name"
              className="form-control mb-3"
              onChange={(e)=>{setData({...data,name:e.target.value})}}
            />
            <input
              type="text"
              defaultValue={movie?.year}
              placeholder="Enter Movie Year"
              className="form-control mb-3"
              onChange={(e)=>{setData({...data,year:e.target.value})}}
            />
            <input
              type="text"
              defaultValue={movie?.image}
              placeholder="Enter Movie Image URL"
              className="form-control mb-3"
              onChange={(e)=>{setData({...data,image:e.target.value})}}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateMovie}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;