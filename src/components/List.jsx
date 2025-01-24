import React, { useEffect, useState } from "react";
import Edit from "./Edit";
import { getMovieApi,deleteMovieApi } from "../services/allApis";

function List({success}) {
  const [movieList, setMovieList] = useState([]);
  const [editRes,setEditRes]=useState("")


  useEffect(() => {
    getData();
  }, [success,editRes]);

  const getData = async () => {
    const result = await getMovieApi();
    console.log(result);
    if (result.status === 200) {
      setMovieList(result.data);
    }
  }

  const deleteMovie=async(id)=>{
    const result=await deleteMovieApi(id)
    console.log(result)
    if(result.status==200){
        getData()
    }
    else{
        alert("something went wrong")
    }
  }

  return (
    <>
      {movieList.length > 0 ? (
        
          <table className="table table-bordered border-5 shadow text-light">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Year</th>
                <th>Poster</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {movieList.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                  <td>
                    <img
                      src={item.image}
                      height="200px"
                      
                      alt="Thudarum poster"
                    />
                  </td>
                  <td>
                    <div>
                      <Edit movie={item} e/>
                      <button onClick={()=>{deleteMovie(item.id)}} className="btn btn-danger">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        
      ) : (
        <h3 className="my-5 text-center text-warning">
          No Movies Added Yet !!
        </h3>
      )}
    </>
  );
}

export default List;