import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    return <NavLink className='btn btn-info text-white' to={`/profile/${props.id}`}>{props.children}</NavLink>
}

export default Button;