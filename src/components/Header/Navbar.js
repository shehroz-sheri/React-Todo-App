import { useAuthContext } from 'contexts/AuthContext'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { isAuth, dispatch } = useAuthContext()

  const handleLogout = () => {
    dispatch({ type: "SET_LOGGED_OUT" })
    localStorage.removeItem("user")
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Todo App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Add Todo</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">Show Todos</Link>
              </li>
            </ul>
            <div className="d-flex">
              {!isAuth
                ? <Link to="/auth/login" className="btn btn-light">Login</Link>
                : <>
                  <Link to="/dashboard" className="btn btn-info">Dashboard</Link>
                  <button className='btn btn-danger ms-2' onClick={handleLogout}>Logout</button>
                </>
              }
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
