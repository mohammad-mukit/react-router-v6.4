import { useState } from "react";
import { Form, redirect, useLoaderData, useParams } from "react-router-dom";


const Update = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [newdata, setNewData] = useState(data)



  return (
    <div className="update">
      <Form method="put" action={`/update/${id}`} className="form">
        <label>
          <span>Name: </span>
          <input required name="name" type="text" placeholder="Name"  value={newdata.name} onChange={e => setNewData({name:e.target.value})}/>
        </label>
        <label>
          <span>Age: </span>
          <input required name="age" type="number" placeholder="Age"  value={newdata.age} onChange={e => setNewData({age:e.target.value})}/>
        </label>
        <label>
          <span>Title: </span>
          <input required name="title" type="text" placeholder="Title"  value={newdata.title} onChange={e => setNewData({title:e.target.value})}/>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Update;

export const updateUserData = async ({request,params}) => {
    const { id } = params;
    const data = await request.formData();

    const submission = {
        name: data.get('name'),
        age: data.get('age'),
        title: data.get('title')
    }

    fetch('http://localhost:8000/users/'+ id, {
        method: 'PUT',
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(submission)
    }).then(() => {
        console.log('Data updated');
    })

    return redirect('/')
}

