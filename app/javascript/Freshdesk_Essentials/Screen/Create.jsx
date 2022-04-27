import React from 'react'
import Inputs from '../Components/Tickets/Inputs'
import {useNavigate} from 'react-router-dom'
import Toast from '../Components/Tickets/Toast'
import { useSelector } from 'react-redux';

export default function Create() {
  const navigate = useNavigate()
  const msg = useSelector( state => state.errormsg)
  return (
    <>
    {msg!=='' && <Toast msg={msg}/>} 
    <div className="w-100 bg-gray bg-gradient create-ticket">
      <i onClick={()=>navigate(-1)} className="position-absolute start-1 top-1 display-5 rounded-circle lh-1 bi bi-arrow-left-circle-fill bg-transparent text-primary"></i>
      <div className="container overflow-auto bg-light bg-gradient border border-10 p-3 border-primary">
        <div className="display-5 text-success text-center mb-3 fw-bold">Create New Ticket</div>
        <Inputs />
      </div>
    </div>
    </>
  )
}
