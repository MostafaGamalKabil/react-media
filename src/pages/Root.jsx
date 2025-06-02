import React from 'react';
import { Outlet } from 'react-router-dom';
import Typography from '@mui/material/Typography'

const Root = () => {
    return (
        <div>
            <header>
                {/* 
                there 3 ways to style MUI Elements
                1- add className and style it
                2- using sx Atribute (inline style)
                3- add Atribute that can style your Elment
                */}
               <Typography
               className="title"
               mt={1} 
               border="5px solid red"
               sx={{backgroundColor:"royalblue",color:"white"}} noWrap gutterBottom variant='h4'>
                mmmmm  mmmmm  mmmmm  mmmmm  mmmmm  mmmmm
                
               </Typography>
               <h1>ssssssss</h1>
                
            </header>

{/* بنستخدمها عشان نعرض المكون الاساسي 
     مع باقي المكونات اللي هروح لصفحتها(Root)
 */}
            <Outlet/>
        </div>
    );
}

export default Root;
