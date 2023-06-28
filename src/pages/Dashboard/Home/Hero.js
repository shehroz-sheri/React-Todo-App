import React from 'react'
import { useAuthContext } from 'contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function Hero() {
  const { user } = useAuthContext()
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Dashboard Home</h1>
            <h2 className="text-center mb-5">Welcome Back <span className='text-success'>{user.fullName}</span></h2>
            <Link to="/" className='btn btn-primary'>Go to Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}
