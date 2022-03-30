import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserByID } from '../../API/usersAPI';
import { Container, Spinner } from 'react-bootstrap';
import UserProfile from '../Profile/UserProfile';

const Profile = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    const [reqState, setReqState] = useState(false);

    useEffect(() => {
        fetchUserByID(id).then(res => {
            setUser(res.data);
            setReqState(true);
        }).catch(err => {
            setUser(null);
            setReqState(false);
        });
        
    },[fetchUserByID, setUser, setReqState]);

    return <>
    {user && reqState ? <Container> <UserProfile user={user} /> </Container> : null};
        {user && !reqState ? <Spinner className='mx-auto d-flex my-5 p-3' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner> : null}
        {!user && !reqState ? <p className='p-3 bg-alert'>Error while fetching data</p> : null}
    </>
}

export default Profile;