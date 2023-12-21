import './App.css';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ControlPanel from './components/ControlPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme(
    {
      palette: {
        primary: {
          main: '#1b5e20',
        },
        secondary: {
          main: '#689f38',
        },
      },
    });

  return (

    <div className="App">
      <ThemeProvider theme={theme}>
       <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Smart Garden</Typography>
        </Toolbar>
       </AppBar>
          <ControlPanel/>
      </ThemeProvider>
    </div>
 );
}
export default App;