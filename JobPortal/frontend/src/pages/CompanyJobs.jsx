import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { postedJobs } from '../services/JobService';

function CompanyJobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        const fetchPostedJobs = async () => {
          try {
            const res = await postedJobs();
            console.log(res.data);
          } catch (err) {
            console.error("Failed to load applications");
          }
        };
        fetchPostedJobs();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default CompanyJobs
