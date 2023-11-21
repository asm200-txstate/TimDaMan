//must install axios "npm add axios"
import axios from 'axios';
import  { useEffect, useState } from 'react'

axios.defaults.baseURL = "https://opentdb.com/"

//This one uses refetchdata, a function that 
const useAxios = ( {url}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        //console.log("FETCHDATA IS RUNNING _______________");
        //console.log("URL WITHIN AXIOS fetchdata", url);
        try {
          const res = await axios.get(url);
          setResponse(res.data);
          //console.log("AXIOS RES", res);
        } catch (err) {
          //console.log("AXIOS ERR", err);
          setError(err);
        } finally {
          setLoading(false);
        }
      };
    
      // Initial API call
      useEffect(() => {
        fetchData();
      },[]);
    
      // Function to trigger a re-run of the API call
      const refetchData = async () => {
        setLoading(true);
        try {
          const res = await axios.get(url);
          return res.data;
        } catch (err) {
          console.error('Error:', err);
          throw err;
        } finally {
          setLoading(false);
        }
      };
    
      return { response, error, loading, refetchData }
}


export default useAxios