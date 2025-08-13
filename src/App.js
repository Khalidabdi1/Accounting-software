import './App.css';
import InvoiceForm from './component/InvoiceForm';
import InvoiceList from './component/InvoiceList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purple ,red} from '@mui/material/colors';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:{
     main:"#009688",
     
    },
    secondary:{
      main:"#1de9b6"
    },
    text:{
      main:"#ffffff"
    }
  },
});

function App() {
  return (
     <ThemeProvider theme={darkTheme}>
            <CssBaseline />

    <div className="App" style={{height:"100vh",width:"100vw",display:"flex"}}>
      <InvoiceForm/>
      <InvoiceList/>

    </div>
    </ThemeProvider>
  );
}

export default App;
