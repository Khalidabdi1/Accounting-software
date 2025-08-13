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
import FolderIcon from '@mui/icons-material/Folder';



import { useState } from 'react';



export default function InvoiceForm({Data}){
    // let [selectValue,setSelectValue]=useState("")
    let [value,setValue]=useState({
      Invoice:"",
      name:"",
      Amount:0,
      Type:"",
      pdf:false

    })

let dis=value.Invoice !=="" && value.Amount !==0 &&value.name !=="" &&value.Type !=="" && value.pdf === false
let disabled=!dis

    function handleClick(){
     Data(value)

     setValue({
            Invoice:"",
      name:"",
      Amount:0,
      Type:"",
      pdf:false
     })
    
    }
    
    return(
       <div style={{width:"30%",height:"100vh"}}>
                <Card sx={{ minWidth: 275 }} style={{height:"100%"}}>

            <CardContent>

                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 25 }}>
                Add invoices
                </Typography>
{/** start of input  */}
                <div style={{display:"flex",flexDirection:"column"}}>
                    <TextField  id="outlined-basic" value={value.Invoice} label="Invoice number" variant="outlined" type='number' style={{marginBottom:"10px",marginTop:"10px"}} onChange={((e)=>{setValue({...value,Invoice:e.target.value})})}/>
                    <TextField id="outlined-basic" value={value.name} label="Name of customer/supplier" variant="outlined" style={{marginBottom:"10px",marginTop:"10px"}}onChange={((e)=>{setValue({...value,name:e.target.value})})} />
                    <TextField id="outlined-basic" value={value.Amount} label="Amount" variant="outlined" type='number' style={{marginBottom:"10px",marginTop:"10px"}} onChange={((e)=>{setValue({...value,Amount:e.target.value})})}/>

                        <InputLabel id="demo-simple-select-label" sx={{ color: 'text.secondary', fontSize: 14 }}>Type</InputLabel>

                         <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value.Type}
                          
                            onChange={((e)=>{setValue({...value,Type:e.target.value})})}
                            style={{marginBottom:"10px",marginTop:"10px"}}
                            >
                            <MenuItem value={"income"}>income</MenuItem>
                            <MenuItem value={"Expense"}>Expense</MenuItem>
                      </Select>
                </div>
{/** end of input  */}


            </CardContent>

{/* card action  */}
               <div style={{display:"flex"}}>
                    <CardActions >

                    <Fab color='secondary' variant="extended"   
                    disabled={disabled}
                    onClick={(()=>{
                        handleClick()
                        
                        })}>
                        <AddIcon  sx={{ mr: 1 }} />
                        ADD
                    </Fab>

                    
                    </CardActions>

                        <CardActions >
                            <Fab color='primary' variant="extended"  
                            onClick={((e)=>{
                            let newValue ={...value,pdf:true}
                            setValue(newValue)
                            Data(newValue)
                            
                            })}>
                                <FolderIcon  sx={{ mr: 1 }} />
                                downloadPDF
                            </Fab>
                    </CardActions>
              </div>
{/* ===card action===  */}


            </Card>
       </div>
    )
}