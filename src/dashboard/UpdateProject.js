import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import '../App.css'

const UpdateProject = () => {
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  const [user, setUser] = useState({
    title: "",
    description: "",
    photo: "",
    link_github: "",
    link_demo: ""
  });
  const Photo = useRef("")
  const { title, description, photo, link_github, link_demo } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('title', title)
    formData.append('description', description)
    if (Photo.current.files[0]) {
      formData.append('photo', Photo.current.files[0])
    }
    formData.append('link_github', link_github)
    formData.append('link_demo', link_demo)
    await axios({
      method: 'post',
      url: `http://portfolio202.42web.io/projects.php?id=${id}`,
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

     // await axios.put(`http://localhost/ci_cart_geek/update-product/update/${id}`, user);
     // history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://portfolio202.42web.io/projects.php?id=${id}`);
     console.log(result.data)

    setUser(result.data);
  };
  return (
    <div className="dashboardfom">
      <div className="container">
        <h3>Edit Project</h3>
        <form onSubmit={e => onSubmit(e)}>
          <p>Id</p>
          <input
            type="text"
            placeholder="Id"
            name=""
            value={id}
            onChange={e => onInputChange(e)}
            disabled
          />
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
          <img src={'http://portfolio202.42web.io/photos/' + photo} alt="" />
          <input
            type="file"
            name="photo"
            ref={Photo}
          />
          
          <input
            type="text"
            placeholder="Link_github"
            name="link_github"
            value={link_github}
            onChange={e => onInputChange(e)}
          />
           <input
            type="text"
            placeholder="Link_Demo"
            name="link_demo"
            value={link_demo}
            onChange={e => onInputChange(e)}
          />
          <button>Update project</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;

