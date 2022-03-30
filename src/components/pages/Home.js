import React, { useEffect, useState } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import { fetchAllusers } from '../../API/usersAPI';
import UsersTable from '../UsersTable/UsersTable';
const Home = () => {
    const [users, setUsers] = useState([]);
    const [reqState, setReqState] = useState(false);

    useEffect(() => {
        fetchAllusers().then(res => {
            setUsers(res.data);
            setReqState(true);
        }).catch(err => {
            setUsers(null);
            setReqState(false);
        });
        
    },[fetchAllusers, setUsers, setReqState]);

    return(
        <>
        <h1 className="text-center mb-3">All users</h1>
        {users && reqState ? <Container> <UsersTable users={users} /> </Container> : null};
        {users && !reqState ? <Spinner className='mx-auto d-flex my-5 p-3' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner> : null}
        {!users && !reqState ? <p className='p-3 bg-alert'>Error while fetching data</p> : null}
        </>
    )
}

export default Home;