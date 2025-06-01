import React from 'react';
import { Outlet } from 'react-router-dom';
import Typography from '@mui/material/Typography'

const Root = () => {
    return (
        <div>
            <header>
               <Typography noWrap gutterBottom variant='h4'>
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
