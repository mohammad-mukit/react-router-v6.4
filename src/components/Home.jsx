import { useEffect, useState } from "react";
import { useLoaderData, Link} from "react-router-dom";


const Home = () => {
  const data = useLoaderData();
  const [newdata,setNewData] = useState(data);

  useEffect(() => {
    fetch('http://localhost:8000/users')
    .then(res => {
      return res.json()
    }).then(d => {
      setNewData(d)
    })
  },[])

  const handleDelete = (id) => {
    fetch("http://localhost:8000/users/" + id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="home">
      <h2>List of data</h2>
      <Link to="create" className="btn btn-success m-3">
        Add +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {newdata.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.title}</td>
              <td>
                <Link
                  to={`read/${item.id}`}
                  className="btn btn-outline-primary"
                >
                  Read
                </Link>
                <Link to={`update/${item.id}`} className="btn btn-outline-success">Update</Link >
                <button className="btn btn-outline-danger" onClick={(e) => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

export const loadAlldata = async () => {
  const response = await fetch("http://localhost:8000/users");
  if (!response.ok) {
    throw Error("Could not fetch the data");
  }

  return response.json();
};
