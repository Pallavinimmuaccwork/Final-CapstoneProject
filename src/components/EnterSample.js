import React, { useEffect, useRef, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

const EnterSample = () => {

  const [samples, setsamples] = useState([])

  const [sendDate, setsendDate] = useState({})

  const [hemo, setHemo] = useState(false)
  const [thyr, setThyr] = useState(false)
  const [glu, setglu] = useState(false)


  useEffect(() => {
    getdata();
  }, [])


  const getdata = async () => {
    // console.log(samples);
    try {
      const res = await fetch('/Entersample', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      const data = await res.json()
      console.log(data);
      setsamples(data)
    } catch (err) {
      console.log(err);
    }
  }

  const user = useRef()


  const radio = (e) => {
    const val = e.target.value
    const id = e.target.id
    console.log(val, id);
    // (id === 1 && val === "on") ? setHemo(true) : (id === 2 && val === "on") ? setThyr(true) : setglu(true)

    id === "1" ? setHemo(true) : id === "2" ? setThyr(true) : setglu(true)
  }

  const CollectData = () => {
    setsendDate({
      user: user.current.value,
      hemo: hemo,
      thyr: thyr,
      glu: glu,
    })
    postDate();
  }

  const postDate = async () => {
    // console.log(sendDate);

    try {


      const { user, hemo, thyr, glu } = sendDate
      const res = await fetch("/Entersample", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user, hemo, thyr, glu })
        // body: JSON.stringify({ status: true, data: [{ user, hemo, thyr, glu }] })
      });

      // console.log(res);

      const data = await res.json()
      console.log("res", data);
      if (data) {
        // history.push('/Loginpage')
      } else {
        console.log(" else");
        // history.push('/EnterSample')
      }

    } catch (err) {

    }


  }


  return (
    <>


      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Creat Test </Modal.Title>
        </Modal.Header>
        {/* <Modal.Header > */}
        <div className='container'>
          <FloatingLabel controlId="floatingSelect" label=" selects Patient" className="mb-4" >
            <Form.Select aria-label="Floating label select example" ref={user} >
              {/* <option value="user">*</option> */}
              {samples.map((val, inx) => {
                return <option value={val._id} key={inx}>{val.name}</option>
              })}
            </Form.Select>
          </FloatingLabel>
        </div>
              


        {/* </Modal.Header> */}

        <Modal.Body>
          {/* <Form.Check type="radio" name="radio 1" id='1' label="Haemotology" onChange={radio} /> */}
          <Form.Check type="checkbox" name="radio 1" id='1' label="Haemotology" onChange={radio} />
          <br />
          {/* <Form.Check type="radio" name="radio 1" id='2' label="Glucometry" onChange={radio} /> */}
          <Form.Check type="checkbox" name="radio 1" id='2' label=" Thyroid Profile" onChange={radio} />
          <br />
          {/* <Form.Check type="radio" name="radio 1" id='3' label="Thyroid Profile" onChange={radio} /> */}
          <Form.Check type="checkbox" name="radio 1" id='3' label="Glucometry" onChange={radio} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={CollectData}>Submit</Button>
        </Modal.Footer>

      </Modal.Dialog>


    </>
  )
}

export default EnterSample