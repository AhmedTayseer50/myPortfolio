import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import './App.css'

function Signin() {
    const [admin, setAdmin] = useState({
        email: "",
        password: ""
    });
    const [auth, setAuth] = useState('');
    let navigate = useNavigate();
    // in this section if the user make signin into the website so make him inside the website without sighnin again if he close the browser 
    useEffect(() => {
        var auth = window.localStorage.getItem('name');
        setAuth(auth);
            if (auth != null) { 
        navigate(`/Dashboard`);
    }
    },[])

    const { email, password } = admin;
    // in this section you will get value data from the input form
    const onInputChange = e => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('email', email)
        formData.append('password', password)
        await axios({
            method: 'post',
            url: 'http://portfolio202.42web.io/admin.php/',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
        
            .then(function (response) {
                if (response) {
                    //handle success
                    window.localStorage.setItem('name', response.data.name);
                    window.localStorage.setItem('id', response.data.id);
                    window.location.href = "/dashboard";
                } else {
                    alert("email or password are wrong000000")
                }
            })
            .catch(function (response) {
                console.log(response)
                alert("email or password are wrong123456")
            });

    };
    return (
        <section className='signin'>
            <div className="theform">
                <form onSubmit={e => onSubmit(e)}>
                    <h3>Sign In</h3>

                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <button>Sign In</button>
                </form>
                <img src="images/pexels-ellie-burgin-3780365.jpg" alt='' />

            </div>
        </section>
    )
}

export default Signin
