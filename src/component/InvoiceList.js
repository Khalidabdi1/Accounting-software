import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import html2pdf from "html2pdf.js";
import { useRef } from 'react';




export default function InvoiceList({check,Formdata}){
let current=useRef(null)
console.log("invoise rerender")

function downloadPDF(){
    if(Formdata.pdf===true){

        const element =current.current
        html2pdf().from(element).save("Invoice.pdf")


    }

}

useEffect(()=>{
downloadPDF()

},[check,Formdata.pdf])


console.log(check)
console.log(Formdata)

function createData(Invoice, Name, Amount, Type,) {
  return { Invoice, Name, Amount, Type,  };
}

let [rows,setRow]=useState([]) 
let [Total,setTotal]=useState(0)

useEffect(()=>{
if(check===true){
setRow((old=>[...old,createData(Formdata.Invoice,Formdata.name,Formdata.Amount,Formdata.Type)]))
setTotal(parseInt(Total)+parseInt(Formdata.Amount))
}
},[check,Formdata])

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

    return (
      <div style={{width:"70%"}} sx={{ color: 'text.secondary', fontSize: 14 }}>
        
        <Card variant='outlined' style={{width:"100%",height:"100%"}} ref={current}>
       
                <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            {/** start of the head of table */}
                            <TableHead>
                                    <TableRow>
                                        <TableCell>Invoice number</TableCell>
                                        <TableCell align="right">Name of customer/supplier</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Type</TableCell>
                                    </TableRow>
                            </TableHead>
                           {/** end of the head of table */}

                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.Invoice}
                                </TableCell>
                                <TableCell align="right">{row.Name}</TableCell>
                                <TableCell align="right">{row.Amount}</TableCell>
                                <TableCell align="right">{row.Type}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>


                                 {/** the table body */}
                                    <TableBody>
                                        
                                        
                                            <TableRow>
                                                <TableCell colSpan={3}>Total</TableCell>
                                                {/** todo:change the number to be static */}
                                                <TableCell align="right">
                                                    {Total}

                                                </TableCell>
                                            </TableRow>
                                    </TableBody>

                              {/** ====end ofthe table body=== */}

                        </Table>
                        </TableContainer>
  


        </Card>
        </div>
    )
}