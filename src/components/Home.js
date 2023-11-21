

import React from 'react';
import {Box} from "@mui/system";
import { Container} from '@mui/material';
import Settings from './SelectField/Settings';
import SelectField from './SelectField/SelectField';
import HomeTitle from './SelectField/HomeTitle';

export default function Home() {
  return (
      <Box mt={2} >
          <div className="home-pad">
        <HomeTitle/>    
        <Settings/>
          </div>
      </Box>
      
  );
}
