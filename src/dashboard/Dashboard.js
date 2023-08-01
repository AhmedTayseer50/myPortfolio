import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import GetAllData from './GetAllData';
import '../App.css'

function Dashboard() {
    const [auth, setAuth] = useState('');
    let navigate = useNavigate();
    useEffect(() => {
        var auth = localStorage.getItem('name');
        setAuth(auth);
    },
        [])
    // if the cst don't make sighnin before so transfer cst to Signin page automaticly 
    if (auth === null) {
        navigate(`/Signin`);
    }
    return (
        <div>
            <GetAllData />
        </div>
    )
}

export default Dashboard