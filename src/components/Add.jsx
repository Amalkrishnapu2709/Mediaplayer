// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';

function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo]= useState({
    caption:"",imageURL:"",youtubeLink:""   
  })

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
  }
  const handleShow = () => setShow(true);

  console.log(uploadVideo);

  const getYoutubeEmbedLink = (link)=>{
      if(link.includes("v=")){
        let videoId = link.split("v=")[1].slice(0,11)
        setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      }
      else{
        setUploadVideo({...uploadVideo,youtubeLink:""})
        alert("Input Proper youtube link!!!")
      }
  }

  const handleUpload = async () =>{
    //store upload video in http://localhost:3000/allVideos
    const {caption,imageURL,youtubeLink} = uploadVideo
    if(caption && imageURL && youtubeLink){
      //proceed to store video
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert(`Video '${result.data.caption}'uploaded succesfully!!!`)
        setUploadVideoResponse(result.data)
        handleClose()
      }else{
        alert("API Call Failed... Please try after some time!!!")
      }
    }else{
      alert("Please fill the form completely!!!")
    }
  }
  return (
    <>
        <div className="d-flex ">
            <h5 style={{height:'25px'}}>Upload New Video</h5>
            <button onClick={handleShow} className='btn btn-info btn-sm ms-3'><i className="fa-solid fa-plus"></i></button>
        </div>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='border rounded p-3 border-dark'>
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3"
            >
                <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputImg"
              label="Image Url"
              className="mb-3"
            >
                <Form.Control value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image Url" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputLink"
              label="Youtube Video Link"
              className="mb-3"
            >
                <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube Video Link" />
            </FloatingLabel>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add

// youtube link:       https://www.youtube.com/watch?v=SqcY0GlETPk

// youtube embed link: https://www.youtube.com/embed/SqcY0GlETPk