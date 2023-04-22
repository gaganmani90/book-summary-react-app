import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie';

const IpAddressView = () => {
    const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
        // Get user's IP address
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setIpAddress(data.ip))
            .catch(error => console.log(error));
    }, []);

    const handleRemember = () => {
        // Set cookie to remember user's IP address
        Cookies.set('userIpAddress', ipAddress);
    };

    return (
        <div>
            <p>Your IP address is: {ipAddress}</p>
            <Button onClick={handleRemember} style={{ zIndex: 1 }}>Remember Me</Button>
        </div>
    );
};

export default IpAddressView;
