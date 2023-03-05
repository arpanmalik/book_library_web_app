import React from 'react';
import './comp.css';
import {useNavigate} from 'react-router-dom';
export default function SubjectDetail(){
    const navigate = useNavigate();
    const style = {
        "cursor":'pointer'
    }
    return (
        <div className="container">
            <h1 className="mt-5">Trending Subjects</h1>
            <div className="container">
                <div onClick={()=>navigate('/javascript')} style={style}><h6>Javascript</h6></div>
                <div onClick={()=>navigate('/harry_potter')} style={style}><h6>Harry Potter</h6></div>
                <div onClick={()=>navigate('/comedy')} style={style}><h6>Comedy</h6></div> 
                <div onClick={()=>navigate('/love')} style={style}><h6>Love</h6></div> 
                <div onClick={()=>navigate('/politics')} style={style}><h6>Politics</h6></div>             
            </div>

        </div>
    )
}