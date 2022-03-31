import React, { useEffect, useState } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import { fetchAllusers } from '../../API/usersAPI';
import useAPI from '../../hooks/use-API';
import UsersTable from '../UsersTable/UsersTable';


const Home = () => {
    const {data: users, isFinished} = useAPI(fetchAllusers, []);

    return(
        <>
        <h1 className="text-center mb-3">All users</h1>
        {users && isFinished ? <Container> <UsersTable users={users} /> </Container> : null};
        {users && !isFinished ? <Spinner className='mx-auto d-flex my-5 p-3' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner> : null}
        {!users && !isFinished ? <p className='p-3 bg-alert'>Error while fetching data</p> : null}
        </>
    )
}

export default Home;