import React from 'react'
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    const handleBack = () => {
     navigate(-1); // previous page
    };
  return (
    <button className="btn btn-secondary mb-3" onClick={handleBack}>
        ← Back
    </button>
  )
}

export default BackButton
