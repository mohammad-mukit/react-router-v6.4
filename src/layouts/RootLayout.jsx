import { Outlet } from "react-router-dom";

const RoodLayout = () => {
    return ( 
        <div className="rootlayout">
           

            <main>
                <Outlet/>
            </main>
        </div>
        
     );
}
 
export default RoodLayout;