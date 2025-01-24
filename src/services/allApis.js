import axios from "axios";

const base_url = "https://smdbserver-ju1n.onrender.com"

export const addMovieApi=async (data)=>{
    return await axios.post(`${base_url}/movies`,data)
}

export const getMovieApi=async()=>{
    return await axios.get(`${base_url}/movies`)
}

export const deleteMovieApi=async(id)=>{
    return await axios.delete(`${base_url}/movies/${id}`)
}

export const updateMovieApi=async(id,data)=>{
    return await axios.put(`${base_url}/movies/${id}`,data)
}