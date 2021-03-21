
import './App.css';

import HomePage from './pages/HomePage'
import Container from "@material-ui/core/Container";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: '#078891',
      },
    },
  },
})

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color="secondary">
          <Toolbar>

            <Typography variant="h6" >
              MaVille.com
            </Typography>

          </Toolbar>
        </AppBar>

        <Container maxWidth="lg">
          <HomePage/>
        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
