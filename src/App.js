import './App.css';
import InvoiceForm from './component/InvoiceForm';
import InvoiceList from './component/InvoiceList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purple ,red} from '@mui/material/colors';
import { useEffect, useState } from 'react';



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
  let Formdata;
let [check,setCheck]=useState(false)
let [dataTable,setDataTable]=useState({})

  function resiveData(data){
  console.log(data)
  Formdata=data
  
    console.log(Formdata)
    setCheck(true)
    setDataTable(data)
    
  }


  return (
     <ThemeProvider theme={darkTheme}>
            <CssBaseline />

    <div className="App" style={{height:"100vh",width:"100vw",display:"flex"}}>
      <InvoiceForm Data={resiveData}/>
      <InvoiceList check={check} Formdata={dataTable}/>

    </div>
    </ThemeProvider>
  );
}

export default App;
