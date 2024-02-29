/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';

function VideoCard({displayData,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);
    //get video details
    const {caption, youtubeLink} = displayData
    let timeData = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US',{
      year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'
    }).format(timeData)
    console.log(timeStamp);
    await saveHistoryAPI({caption,youtubeLink,timeStamp})
  }

  //removing video
  const deleteVideo = async (vId)=>{
    //api call
    const result = await removeVideoAPI(vId)
    setDeleteVideoResponse(result.data)
  }

  //dragStarted
  const dragStarted = (e,vId)=>{
    console.log(`Dragging started with video id :${vId}`);
    e.dataTransfer.setData("videoId",vId)
  }
  return (
    <>
        <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} className='shadow mb-2' >
            <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" height={'200px'} src={displayData?.imageURL} />
            <Card.Body style={{backgroundColor:'#9c27b0'}}>
                <Card.Title className='d-flex justify-content-between'>
                    <p style={{height:'30px',color:'white'}}>{displayData?.caption}</p>
                   {!insideCategory && <button onClick={()=>deleteVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-white"></i></button>}
                </Card.Title>
            </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${displayData?.youtubeLink}?autoplay=1`} 
        title="Caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
         picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        </Modal>
    </>
  )
}

export default VideoCard