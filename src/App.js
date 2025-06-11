import Create from "pages/create/Create";
import Home from "pages/home/Home";
import Root from "pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />

    </Route>
  )
);




function App() {
  return (
   
    
     <RouterProvider router={router} />
    
  );
}
// npx json-server --watch data/db.json --port 3100

export default App;
