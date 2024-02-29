// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
        <div className="footer-content d-flex justify-content-between">
            <div style={{width:'400px'}} className="media">
                <h5 className='d-flex' ><i style={{height:'28px'}} className="fa-solid fa-music me-3"></i>Media Player</h5>
                <p style={{textAlign:'justify'}}>Designed and built with all the love in the world by the
                 Bootstrap team with the help of our contributors.</p>
                 <span>Code licensed MIT, docs CC BY 3.0</span>
                 <span>Currently v5.3.2</span>
            </div>
            <div className="links d-flex flex-column">
                <h5 style={{height:'28px'}}>Links</h5>
                <Link to={'/'} style={{textDecoration:'none',color:'black'}} >Landing Page</Link>
                <Link to={'/home'} style={{textDecoration:'none',color:'black'}} >Home Page</Link>
                <Link to={'/watch'} style={{textDecoration:'none',color:'black'}} >Watch History</Link>
            </div>
            <div className="guides d-flex flex-column">
                <h5 style={{height:'28px'}}>Guides</h5>
                <a href="https://react.dev/" target='blank' style={{textDecoration:'none',color:'black'}}>React JS</a>
                <a href="https://reactrouter.com/en/main" target='blank' style={{textDecoration:'none',color:'black'}}>React Routing</a>
                <a href="https://react-bootstrap.netlify.app/" target='blank' style={{textDecoration:'none',color:'black'}}>React Bootstrap</a>

            </div>
            <div className="contact">
                <h5 style={{height:'28px'}}>Contact Us</h5>
                <div className='d-flex'>
                    <input type="text" className='form-control me-1' placeholder='Email Id Please' />
                    <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
                </div>
                <div className='d-flex justify-content-between mt-2' style={{height:'28px'}}>
                    <a href="https://react.dev/"><i className="fa-brands fa-twitter" style={{color:'#9c27b0'}}></i></a>
                    <a href="https://react.dev/"><i className="fa-brands fa-facebook" style={{color:'#9c27b0'}}></i></a>
                    <a href="https://react.dev/"><i className="fa-brands fa-instagram" style={{color:'#9c27b0'}}></i></a>
                    <a href="https://react.dev/"><i className="fa-brands fa-github" style={{color:'#9c27b0'}}></i></a>
                </div>
            </div>
        </div>
        <p className='text-center' style={{marginTop:'100px'}}>Copyright &copy; 2024 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer