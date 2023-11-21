import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import './SelectField.css';

 // need to handle the form data from the select fields 
            // for now reroute to game

const GoButton = () => {
  return (
    <Box mt={3} width="100%" style={{ display: 'flex', justifyContent: 'center' }}>
      <Link to="/checkquiz" className="gobutton">
        Go!
      </Link>
    </Box>
  );
};

export default GoButton;

/*


<!-- HTML !-->
<button class="button-63" role="button">Button 63</button>


  
  .gobutton:active,
  .gobutton:hover {
    outline: 0;
  }
  
  @media (min-width: 768px) {
    .gobutton {
      font-size: 24px;
      min-width: 196px;
    }
  }

*/
