import React from 'react';
import UserRecord from './UserRecord';
import { Table } from 'react-bootstrap';
const UsersTable = (props) => {
  const {users} = props;
    return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      {users.map(user => <UserRecord key={user.id} id={user.id} username={user.username} email={user.email}/>)}
    </thead>
    <tbody>
      
    </tbody>
  </Table>)
}

export default UsersTable;