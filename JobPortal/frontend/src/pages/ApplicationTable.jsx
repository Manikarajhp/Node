import React, { useEffect, useState } from 'react'
import { myApplications } from '../services/JobService';
import { useNavigate } from 'react-router-dom';

function ApplicationTable({id}) {

    const navigate = useNavigate();
    const [applicants, setApplicants] = useState([]);
    
    useEffect(()=>{
        const fetchApplications = async() => {
            try{
                const res = await myApplications(id);
                setApplicants(res.data.applicants);
            }catch(error){
                console.log("Failed to load");
            }
        }
        fetchApplications();
    },[])
  return (
    <div>
        <hr />
        <h2>Applications</h2>
        {applicants.length === 0 && <p>No applicants found</p>}
        {applicants.length !== 0 && (<table className="table table-striped table-primary">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Date Applied</th>
              <th scope="col">Profile</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (          
                <tr key={applicant._id}>
                  <th scope="row">{index+1}</th>
                  <td>{applicant.applicant.name}</td>
                  <td>{applicant.createdAt.slice(0,10)}</td>
                  <td><button className='btn p-1 btn-primary' onClick={()=> (navigate("/user/"+applicant._id))}>View</button></td>
                </tr>
            ))}
            
          </tbody>
        </table>)}
    </div>
  )
}

export default ApplicationTable
