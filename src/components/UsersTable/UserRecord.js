import React from 'react';
import Button from '../UI/Button';
const UserRecord = (props) => {
    const {id, username, email} = props;
    return (
        <tr>
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td><Button id={id}>View</Button></td>
      </tr>
    )
} 

export default UserRecord;