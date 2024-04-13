import {  Button, Modal, ModalBody, ModalContent,  ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import './CreatePost.css';
import {GrEmoji} from 'react-icons/gr'
import { BsGeoAlt } from "react-icons/bs";

const CreatePost = ({onClose,isOpen}) => {

    const [DragOver,setDragOver] = useState(false);
    const [file,SetFile] =useState();
    const [Caption,setCaptionChange] = useState("");

    const handleDrop =(event)=>{
     event.preventDefault();
     const dropfile=event.dataTransfer.file(0);
     if(dropfile.type.startswith('image/') ||dropfile.type.startswith('Video/')){
        SetFile(dropfile);
     }
    }

    const handleDragOver=(event)=>{
        event.preventDefault();
        event.dataTransfer.dropEffect="Copy";
        setDragOver(true);
    }
    const handleDragLeave=()=>{
        setDragOver(false);
    }

    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
          SetFile(file);
        } else {
          SetFile(null);
          alert('Please select an image or video.');
        }
      };
      const handleCaption=(e)=>{
        setCaptionChange(e.target.value);
      }
    
  return (
    <div>
      <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
           <div className='flex justify-between py-1 px-10 items-center'>
            <p>Create New Post</p>
            <Button variant={"Share"} size="sm" colorScheme={"blue"}>Share</Button>
           </div>
           <hr />
          <ModalBody>
            <div className='h-[70%] justify-between pb-5 flex'>
                <div className='w-[50%]'>
                    {!file &&<div onDrop={handleDrop} onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave} 
                    className='Drag-drop h-full'>
                         <div>
                            <FaPhotoVideo className='text-3xl'/>
                            <p>Drag Photo Or video</p>
                         </div>
                         <label htmlFor="file-upload" className='Customer-file-upload'>Select From Computer</label>
                         <input className='InputImage' type='file' id="file-upload" accept='image/",Video/"' onChange={handleChange}></input>
                    </div>}
                    {file &&<img className='max-h-full' src={URL.createObjectURL(file)} alt=''/>}
                </div>
                <div className='w-[1px] border  h-full'>.........................</div>
                <div className='w-[50%]'>
                  <div className='flex items-center px-2'>
                    <img className='w-7 h-7 rounded-full' src='https://cdn.pixabay.com/photo/2023/04/22/10/28/sheep-7943526_640.jpg' alt='' />
                    <p className='font-semibold ml-4'>Username</p>
                  </div>
                  <div className='px-2 mt-5'>
                    <textarea placeholder='Write a Caption' className='captionInput' name='caption' row='8' onChange={handleCaption}></textarea>
                  </div>
                  <div className='flex justify-between px-2 mt-20'>
                    <GrEmoji/>
                    <p className='opacity-70'>{Caption?.lenght}/2,200</p>
                  </div>
                  <hr/>
                  <div className=' flex p-2 justify-between items-center'>
                    <input className='locateInput' type="text" placeholder='location'name='location' />
                    <BsGeoAlt/>
                  </div>
                  <hr />
                </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePost;
