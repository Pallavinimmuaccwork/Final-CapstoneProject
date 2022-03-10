import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function UserEdit(props) {
    const [show, setShow] = useState(false);
    const [user, setuser] = useState({
        _id: '',
        name: '',
        email: '',
    });
    
    useEffect(() => {
        // console.log('in edit form')
        setShow(props.showmodal)
    }, [props.showmodal])
    
    useEffect(() => {
        setuser(props.editableData)
    }, [props.editableData])

    const handleClose = () => {
        setShow(false)
        props.setshowmodal(false)
    };

    const handleChange = (event) => {
        const userCopy = { ...user }
        userCopy[event.target.name] = event.target.value
       
        console.log(userCopy);
        setuser(userCopy)
    }
    const editProduct = async () => {
        console.log(user);
    
        
        try {
                const response = await axios.put('/edituser', user)
                console.log(response.data);
                if (response.data.error === false) {
                    handleClose()
                    props.history.push('/Samples')
                } else {
                    props.getdata();
                    // alert('updated succesfully')
                }
            }
         catch (err) {
            console.log(err);
        }
    }

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                    
                            <div >
                                <input type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    className="form-control" placeholder="Full Name" />
                            </div>
                       
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={editProduct}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        
{/* <Button onClick={()=>setShow(true)}></Button> */}

    </div>
  )
}

export default UserEdit