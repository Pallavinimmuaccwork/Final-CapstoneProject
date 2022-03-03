import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const RegistrationPage = () => {

  const [register, setregister] = useState({})

  const history = useHistory()

  const name = useRef()
  const email = useRef()
  const password = useRef()
  const role = useRef()

  const sampleAdd = () => {
    setregister({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      role: role.current.value,
      test: false
    })

    console.log(register);

    registeruser();

  }

  const registeruser = async () => {
    try {
      const { name, email, password, role, test } = register
      // const res = await fetch("/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({ name, email, password, role, test })
      // });

      const data = await axios.post("/register", { name, email, password, role, test });

      console.log(data);


      console.log("res", data.data);
      if (data.error) {
        console.log(data.data.message);
        // alert(data.message)
      } else {
        alert(data.data.message);
        history.push('/Loginpage')
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(register);
    registeruser();
  }, [register])

  return (
    <div>
      <Card className='formcard p-5'>
        <Form method='"POST' >
          <h4>Registration form</h4>
          <Card.Body>
            <FloatingLabel controlId="floatingInput" label='Enter name' className="mt-3 mb-4" >
              <Form.Control type="text" placeholder="enter email" ref={name} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label='Enter email' className=" mb-4" >
              <Form.Control type="email" placeholder="enter email" ref={email} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label='Enter password' className="mb-4" >
              <Form.Control type="password" placeholder="enter password" ref={password} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingSelect" label=" selects role" className="mb-4">
              <Form.Select aria-label="Floating label select example" ref={role}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </FloatingLabel>
            <div className="d-flex justify-content-center">
              <Button variant="outline-success" className="mt-2" onClick={() => sampleAdd()} >  {" "} Register{" "} </Button>
            </div>
          </Card.Body>
        </Form>
      </Card>
    </div>
  )
}

export default RegistrationPage