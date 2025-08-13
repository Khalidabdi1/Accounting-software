import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


import { useState } from 'react';



export default function InvoiceForm(){
    let [selectValue,setSelectValue]=useState("wwdd")
    
    return(
       <div style={{width:"30%",height:"100vh"}}>
                <Card sx={{ minWidth: 275 }} style={{height:"100%"}}>

            <CardContent>

                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 25 }}>
                Add invoices
                </Typography>
{/** start of input  */}
                <div style={{display:"flex",flexDirection:"column"}}>
                    <TextField  id="outlined-basic" label="Invoice number" variant="outlined" type='number' style={{marginBottom:"10px",marginTop:"10px"}}/>
                    <TextField id="outlined-basic" label="Name of customer/supplier" variant="outlined" style={{marginBottom:"10px",marginTop:"10px"}} />
                    <TextField id="outlined-basic" label="Amount" variant="outlined" type='number' style={{marginBottom:"10px",marginTop:"10px"}}/>

                        <InputLabel id="demo-simple-select-label" sx={{ color: 'text.secondary', fontSize: 14 }}>Type</InputLabel>

                         <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectValue}
                          
                            onChange={((e)=>{setSelectValue(e.target.value)})}
                            style={{marginBottom:"10px",marginTop:"10px"}}
                            >
                            <MenuItem value={"income"}>income</MenuItem>
                            <MenuItem value={"Expense"}>Expense</MenuItem>
                      </Select>
                </div>
{/** end of input  */}


            </CardContent>

{/* card action  */}
            <CardActions>
              <Fab color='primary' variant="extended">
                <AddIcon  sx={{ mr: 1 }} />
                ADD
              </Fab>
            </CardActions>
{/* ===card action===  */}


            </Card>
       </div>
    )
}