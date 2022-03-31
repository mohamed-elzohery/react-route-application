import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserByID } from '../../API/usersAPI';
import { Container, Spinner } from 'react-bootstrap';
import UserProfile from '../Profile/UserProfile';
import useAPI from '../../hooks/use-API';

const Profile = () => {
    const {id} = useParams();
    const {data: user, isFinished} = useAPI(fetchUserByID, [id]);

   
    return <>
    {user && isFinished ? <Container> <UserProfile user={user} /> </Container> : null};
        {user && !isFinished ? <Spinner className='mx-auto d-flex my-5 p-3' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner> : null}
        {!user && !isFinished ? <p className='p-3 bg-alert'>Error while fetching data</p> : null}
    </>
}

export default Profile;