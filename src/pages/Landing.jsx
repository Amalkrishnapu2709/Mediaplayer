/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {  Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {

  const navigate = useNavigate()

  const handleNavigate = () =>{
    //navigate to home page
    navigate('/home')
  }

  return (
    <>
    <div  className='container mt-5 w-100'>
      <div className='header row align-items-center mt-5'>
        <div className="col-lg-5">
          <h3 style={{height:'40px'}}>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-5' style={{textAlign:'justify'}}>Media Player App. will allow you to add and remove their uploaded 
            videos ,also helps to arrange them in different categories by providing drag and drop functionalities.
          </p>
          <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-5">
          <img src="https://media1.tenor.com/images/4d5fdb6c20630ca254865fd9ba781bd2/tenor.gif?itemid=14460643" alt="Landing Page" />
        </div>
      </div>
      <div className="features container w-100">
        <h3 style={{height:'50px',fontSize:'40px'}} className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
          <Card >
      <Card.Img variant="top" style={{height:'230px'}} src="https://media1.tenor.com/images/cacbf6792a6111b8695ff99d6ef317a3/tenor.gif?itemid=17522261" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
      </Card.Body>
    </Card>

          </div>
          <div className="col-lg-4">
          <Card >
      <Card.Img variant="top" style={{height:'230px'}} src="https://media1.tenor.com/images/947f79bf19270e8b8783bfc98f327140/tenor.gif?itemid=15127137" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Categorize Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards contentnp.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card >
      <Card.Img variant="top" style={{height:'230px'}} src="https://c.tenor.com/qrN4VQuCjVkAAAAC/music.gif" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
      <div className="video row border p-5 rounded mb-5 align-items-center mt-5">
        <div className="col-lg-5">
            <h3 style={{height:'40px'}}>Simple,Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}> <span className='fs-4'> Play Everything :</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ducimus esse! Architecto consequatur natus fugiat debitis ducimus!
             Suscipit, maxime deleniti omnis quam commodi iusto nam fugit quod pariatur dolor nemo.  </p>
            <p style={{textAlign:'justify'}}> <span className='fs-4'>Categorize Videos :</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ducimus esse! Architecto consequatur natus fugiat debitis ducimus!
             Suscipit, maxime deleniti omnis quam commodi iusto nam fugit quod pariatur dolor nemo.  </p>
            <p style={{textAlign:'justify'}}> <span className='fs-4'>Watch History :</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ducimus esse! Architecto consequatur natus fugiat debitis ducimus!
             Suscipit, maxime deleniti omnis quam commodi iusto nam fugit quod pariatur dolor nemo.  </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="914" height="514" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass
         // eslint-disable-next-line react/no-unknown-property
         Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div><hr />
    </>
     
  )
}

export default Landing