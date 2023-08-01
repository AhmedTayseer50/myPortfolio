import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import '../App.css'

function AddProject() {
    const [user, setUser] = useState({
        title: "",
        description: "",
        link_github: "",
        link_demo: ""

    });
    const Photo = useRef("")

    const { title, description, link_github, link_demo  } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('title', title)
        formData.append('description', description)
        formData.append('photo', Photo.current.files[0])
        formData.append('link_github', link_github)
        formData.append('link_demo', link_demo)
        await axios({
            method: 'post',
            url: 'http://portfolio202.42web.io/projects.php/',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                //handle success
                console.log(response)
                alert('New Contact Successfully Added.');
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });

    };
    return (
        <div className="dashboardfom">
            <div className='container'>
                <h3>Add A Product</h3>
                <form onSubmit={e => onSubmit(e)} encType="multipart/form-data">
                    <p>Title</p>
                    <input
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        value={title}
                        onChange={e => onInputChange(e)}
                    />
                    <p>Description</p>
                    <textarea
                        placeholder="description"
                        name="description"
                        value={description}
                        onChange={e => onInputChange(e)}
                    ></textarea>
                    <p>Photo</p>
                    <input
                        type="file"
                        name="photo"
                        ref={Photo}
                    />
                    <p>Link For Github</p>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter link Github"
                        name="link_github"
                        value={link_github}
                        onChange={e => onInputChange(e)}
                    />
                    <p>Link For demo</p>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter link demo"
                        name="link_demo"
                        value={link_demo}
                        onChange={e => onInputChange(e)}
                    />
                    <button>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default AddProject
