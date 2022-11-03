import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const About = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>This is about!</h2>
            <p>{user?.email}</p>
        </div>
    );
};

export default About;