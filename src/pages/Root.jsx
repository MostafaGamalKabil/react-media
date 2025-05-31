import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <header>
                MY header 
            </header>

{/* بنستخدمها عشان نعرض المكون الاساسي 
     مع باقي المكونات اللي هروح لصفحتها(Root)
 */}
            <Outlet/>
        </div>
    );
}

export default Root;
