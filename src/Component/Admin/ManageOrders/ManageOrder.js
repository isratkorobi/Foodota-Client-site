import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageOrder.css";
const ManageOrder = () => {
  const [volunteer, setVounteer] = useState([]);
  // const [user, setUser] = useState(false);

  useEffect(() => {
    fetch("https://ghostly-nightmare-54995.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setVounteer(data));
  }, []);

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
        const url = `https://ghostly-nightmare-54995.herokuapp.com/deleteOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingUsers = volunteer.filter(user => user._id !== id);
                    setVounteer(remainingUsers);
                }
            });
    }
}

  return (
    <div>
      <h1 className="text-center fw-bold p-4">AllUsers: {volunteer?.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Order</th>
          </tr>
        </thead>
        {volunteer?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd?.name}</td>
              <td>{pd?.email}</td>
              <td>{pd?.date}</td>
              <td>{pd?.order}</td>
              <button onClick={()=>handleDelete(pd._id)} className="btn bg-danger button-del p-2">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageOrder;