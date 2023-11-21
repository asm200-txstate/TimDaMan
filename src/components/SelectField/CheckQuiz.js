import react from "react";
import { globalSettings } from "./Settings";
import { Box, CircularProgress, Typography } from "@mui/material";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from 'react-router-dom';

let APIresponse;


const CheckQuiz = () => {
    const navigate = useNavigate();
    
    let apiUrl = `/api.php?amount=${globalSettings.numberOfQuestions}`;
    if (globalSettings.category != ""){
      apiUrl = apiUrl + `&category=${globalSettings.category}`;
    }
    if (globalSettings.difficulty != ""){
      apiUrl = apiUrl + `&difficulty=${globalSettings.difficulty}`;
    }
    if (globalSettings.type != ""){
      apiUrl = apiUrl + `&type=${globalSettings.type}`;
    }

    console.log("API URL FROM CHECK QUIZ", apiUrl);

    const { response, loading, error } = useAxios({ url: apiUrl });
    console.log(response);
    //console.log("response code = ", response.response_code)

    if (loading) {
        // Render a loading spinner while the data is being fetched
        return (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <CircularProgress />
          </Box>
        );
      }
    
    
    if (!loading){
        APIresponse = response;
    }
    
    console.log("CHECKQUIZ", APIresponse);

    //console.log("response code = ", response.response_code)
    /*
    if (response.response_code == 0){
        return (
            <Link to="/game"></Link>
        );
    }
    if (response.response_code != 0){
        return (
            <Link to="/"></Link>
        );
    }
    */
    if (!loading && APIresponse){
        return (navigate("/game"));
    }

  };
  
  export {APIresponse};
  export default CheckQuiz;