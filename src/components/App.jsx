import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
//Import all layouts here
import RoodLayout from "../layouts/RootLayout";

//Import all components here
import Home, { loadAlldata } from "./Home";
import Create, { addUserData } from "./Create";
import Read, { laodUserIdInfo } from "./Read";
import Update, { updateUserData } from "./Update";


//Create router for routing
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RoodLayout/>}>
            <Route index element={<Home/>} loader={loadAlldata}/>
            <Route path="create" element={<Create/>} action={addUserData}/>
            <Route path="read/:id" element={<Read/>} loader={laodUserIdInfo}/>
            <Route path="update/:id" element={<Update/>} loader={laodUserIdInfo} action={updateUserData}/>

        </Route>
    )
)

const App = () => {
    return <RouterProvider router={router}/>;
}
 
export default App;