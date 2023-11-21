import { Box, CircularProgress, Typography } from "@mui/material";
import SelectField from "./SelectField";
import GoButton from "./GoButton";
import useAxios from "../../hooks/useAxios";
import React, { useState, useCallback } from "react";

const globalSettings = {
    category: "",
    difficulty: "",
    type: "",
    numberOfQuestions: "10",
};
export {globalSettings};

const Settings = () => {
    console.log("ReRender")
    const { response, error, loading, refetchData } =useAxios({ url: "/api_category.php"});

    const fetchDataAndUpdateState = useCallback(async () => {
        try {
          const newData = await refetchData();
          console.log('API response in fetchDataAndUpdateState:', newData);
        } catch (error) {
          console.error('Error refetching data:', error);
        }
      }, [refetchData]);
    
      // Call the fetchDataAndUpdateState after the component has mounted

      //fetchDataAndUpdateState();
      
    const [selectedSettings, setSelectedSettings] = useState({
        category: "",
        difficulty: "",
        type: "",
        numberOfQuestions: "",
    });
    

    //console.log(selectedSettings);

    const handleSettingChange = (settingName, settingValue) => {
        setSelectedSettings({ ...selectedSettings, [settingName]: settingValue });
        globalSettings[settingName] = settingValue;
        //console.log(globalSettings);
    };

    if(loading){
        return(
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    if(error){
        return(
            <Typography variant="h6" mt={20} color="red">
                Something Went Wrong!
            </Typography>
        )
    }
    
    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ]

    const typeOptions = [
        { id: "multiple", name: "Multiple Choice" },
        { id: "boolean", name: "True or False" },
    ]

    const numOptions = [
        { id: "1", name: "1" },
        { id: "5", name: "5" },
        { id: "10", name: "10" },
        { id: "15", name: "15" },
        { id: "20", name: "20" },
        { id: "25", name: "25" },
        { id: "30", name: "30" },
        { id: "35", name: "35" },
        { id: "40", name: "40" },
        { id: "45", name: "45" },
        { id: "50", name: "50" },
      ];

    const handleSubmit = (userInputForm) => {
        userInputForm.preventDefault();
    };
    
    return (
        <Box mt={1} style={{ width:"400px", margin:"1rem auto"}}>
        <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} code="category" onSettingChange={handleSettingChange} label="Category" />
        <SelectField options={difficultyOptions} code="difficulty" onSettingChange={handleSettingChange} label="Difficulty" />
        <SelectField options={typeOptions} code="type" onSettingChange={handleSettingChange} label="Type" />
        <SelectField options={numOptions} code="numberOfQuestions" onSettingChange={handleSettingChange} label="Number of Questions" />
        <GoButton/>
        </form>
        </Box>
        
    );
};
//

export default Settings; 

//CURRENT ISSUES
//Certain combinations of categories, types, and difficulties have fewer than 20 questions. 
//Once the api is called, the response is an empty array, which crashes the website upon starting the game.
//This problem is too large to resolve this sprint, though a quick fix is to use only 10 questions per quiz.
//It appears that every combination works with 10 questions without issue.