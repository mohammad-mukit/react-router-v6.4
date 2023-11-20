import { Form, redirect } from "react-router-dom";

const Create = () => {
  return (
    <div className="create">
      <Form method="post" action="/create" className="form">
        <label>
          <span>Name: </span>
          <input required name="name" type="text" placeholder="Name" />
        </label>
        <label>
          <span>Age: </span>
          <input required name="age" type="number" placeholder="Age" />
        </label>
        <label>
          <span>Title: </span>
          <input required name="title" type="text" placeholder="Title" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Create;


export const addUserData = async ({request}) => {
    const data = await request.formData();

    const submission = {
        name: data.get('name'),
        age: data.get('age'),
        title: data.get('title')
    }

    fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(submission)
    }).then(() => {
        console.log('New data added');
    })

    return redirect('/')
}
