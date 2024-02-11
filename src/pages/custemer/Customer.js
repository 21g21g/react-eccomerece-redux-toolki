import React from "react";
import { Customers } from "../../data/Data";
import { Table } from "react-bootstrap";

const Customer = () => {
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>phone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {Customers.map((customer) => {
            return (
              <>
                <tr>
                  <td>{customer.id}</td>

                  <td>
                    <img className="img-fluid" src={customer.photo} />
                  </td>

                  <td>{customer.name}</td>

                  <td>{customer.phone}</td>
                  <td>{customer.city}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Customer;
