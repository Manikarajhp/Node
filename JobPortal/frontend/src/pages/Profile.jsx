import React, { useEffect, useState } from 'react'
import { userProfile, userProfileById, applicationStatusUpdate, userProfileUpdate } from '../services/JobService';
import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();
  const role = JSON.parse(localStorage.getItem('user')).role;
  const [user, setUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [skills, setSkills] = useState([]);

  if(id && role === 'company'){
    const update = async() =>{
      await applicationStatusUpdate(id, {"status" : 'reviewed'});
    }
    update();
  }

  useEffect(()=> {
    const fetchUser = async() => {
      try{
        if(!id){
          const res = await userProfile();
          setUser(res.data);
        }else{
          const res = await userProfileById(id);
          setUser(res.data.userData);
        }
      }catch(error){
        console.log("failed to load profile."+error);
      }
    }
    fetchUser();
  },[]);

  const handleStatus = async(e) => {
    if(e.target.id === 'accept'){
      await applicationStatusUpdate(id, {"status" : 'accepted'});
    }else{
      await applicationStatusUpdate(id, {"status" : 'rejected'});
    }
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUser({
      ...user,
      [name]: files ? files[0] : value,
    });
  }

  const handleChangeInSkills = (e) => {
    e.preventDefault();
    const newSkill = e.target.skills.value;
    if(newSkill !== "")
      setSkills([...skills, newSkill]);
    e.target.skills.value = "";
  }

  const removeSkill = (skillToRemove) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToRemove)
    );
  }

  const handleSave = async() => {
    try{
      const updatedUser = {...user, skills : skills}
      setUser(updatedUser)
      const res = await userProfileUpdate(user._id, updatedUser)
      setIsEdit(false)
      alert(res.data.message);
    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <div className="container mt-4">
      <div>
        <h2>Profile
          {!isEdit && role === 'user' && (
            <button className='btn btn-info ms-2' onClick={() => {
              setSkills(user.skills);
              setIsEdit(true);
            }}>Edit</button>
          )}
        </h2>
        
        {role === 'company' && (
          <>
          <button id='accept' className='btn btn-success m-1' onClick={handleStatus}>Accecpt</button>
          <button id='reject' className='btn btn-danger m-1' onClick={handleStatus}>Reject</button>
          </>
        )}
      </div>

      {/* Edit profile view */}
      {isEdit && (
        <>
        {/* Name change */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={user.name}
            onChange={handleChange}
            disabled={!isEdit}
          />
        </div>

        {/* Email Change */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
            disabled={!isEdit}
          />
        </div>

        {/* Phone change */}
        <div className="mb-3">
          <label className="form-label">phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={user.phone}
            onChange={handleChange}
            disabled={!isEdit}
          />
        </div>

        {/* Experience Change */}
        <div className="mb-3">
          <label className="form-label">Experience</label>
          <input
            type="text"
            name="experience"
            className="form-control"
            value={user.experience}
            onChange={handleChange}
            disabled={!isEdit}
          />
        </div>

        {/* Skills change */}
        <form onSubmit={handleChangeInSkills}>
          <div className="mb-3">
            <label className="form-label">Skills</label><br />
            {skills?.map((skill,index)=>(
              <span key={index} className='p-2 ms-2 bg-info rounded' >{skill} <button className='btn p-0 ps-2 pb-1' onClick={()=>removeSkill(skill)}>x</button> </span>
            ))}
            <br /><br />
            <div className="container d-flex">
              <input
                  type="text"
                  name="skills"
                  className="form-control w-25"
                  disabled={!isEdit}
              />
              <button type='submit' className='btn ms-2 btn-primary'>Add</button>
            </div>
            </div>
        </form>

        <button className='btn btn-success m-1' onClick={handleSave} >Save</button>
        <button className='btn btn-danger m-1' onClick={() => setIsEdit(false)}>Cancel</button>
        </>
      )}

      {/* Common Profile view */}
      {!isEdit && (
        <div className='container mt-4'>
          <h4>{user.name}</h4>
          <p><strong>Email : </strong>{user.email}</p>
          <p><strong>Phone : </strong>{user.phone}</p>
          <p><strong>Experience : </strong>+{user.experience} Years</p>
          <strong>Skills : </strong>
          {user.skills?.map((skill,index)=>(
            <span key={index} className='p-1' >{skill},</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Profile
