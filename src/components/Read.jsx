import { useLoaderData, useParams } from "react-router-dom";

const Read = () => {
    const {id} = useParams();
    const data = useLoaderData();

    return ( 
        <div className="read">
            <h3>Name: {data.name}</h3>
            <h4>Age: {data.age}</h4>
            <h5>Title: {data.title}</h5>
        </div>
     );
}
 
export default Read;

export const laodUserIdInfo = async ({params}) => {
    const {id} = params;

    const response = await fetch('http://localhost:8000/users/' + id)

    if(!response.ok){
        throw Error('Sorry Could not fetch the data');
    }

    return response.json();
}