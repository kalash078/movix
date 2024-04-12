import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmM0NDYyYjE4MjVlNmI1MmVkNGUwZWJhMjNjYTIzZiIsInN1YiI6IjY2MGQ4M2FhOWM5N2JkMDE3Y2E2ZmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dDdkeUhnphr54YfVxJDs9eTC_qhW6kG9yycHpdh7Z0U"
const headers = {
    Authorization: "bearer " + 
    TMDB_TOKEN,
};

export const fetchDataFromApi =async (url, params) => {
    try{
  const {data}= await axios.get
  (BASE_URL +url, {
    headers,
    params
    
  })
  return data;
  
    }catch(err) {
        console.log(err);
        return err;
    }
}