import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, FormControl, Table } from 'react-bootstrap'
import GlucometryForm from './glucometry/GlucometryForm'
import GlucometryReport from './glucometry/GlucometryReport'
import Haematology from './haematology/Haematology'
import HaematologyReport from './haematology/HaematologyReport'
import Navigationbar from './Navigationbar'
import Thyroidform from './thyroid/Thyroidform'
import ThyroidReport from './thyroid/ThyroidReport'
import UserEdit from './UserEdit'

const Samples = () => {

  // table data
  const [samples, setsamples] = useState([])
  const [matchdata, setmatchdata] = useState([])

  const [showSearch, setshowSearch] = useState(false)
  const [showmodal, setshowmodal] = useState(false);
  const [editableData, seteditableData] = useState({});

  const handleShow=(val)=>{
    console.log("handle show")
    console.log(val)
    setshowmodal(true);
    seteditableData(val);

  }

  const search = (e) => {
    console.log(e.target.value);
    var searchinput = e.target.value

    const Match = samples.filter((mch, inx, arr) => {
      console.log(mch.name.toLowerCase())
      return mch.name.toLowerCase().startsWith(searchinput.toLowerCase());
    })

    console.log(Match, "--------match");
    setmatchdata(Match)


    if (Match.length > 0) {
      setshowSearch(true)
    } else {
      setshowSearch(false)
    }
  }

  // console.log(showSearch, '------------showSearch');

  //**************** FORMS MODALS ******************// 

  // Haematology model
  const [haemForm, sethaemForm] = useState(false)
  const [haemid, sethaemid] = useState()

  // Thyroid model
  const [thyroidForm, setThyroidForm] = useState(false)
  const [thyrid, setthyrid] = useState()

  // Glucometry model
  const [GlucomForm, setGlucomForm] = useState(false)
  const [Glucid, setGlucid] = useState()


  //****************** REPORTS MODALS  ***********************// 

  const [haemReport, sethaemReport] = useState(false);
  const [hemoData, sethemoData] = useState()

  // Thyroid model
  const [thyroidReport, setThyroidReport] = useState(false)
  const [thyrData, setthyrData] = useState()

  // Glucometry model
  const [GlucomReport, setGlucomReport] = useState(false);
  const [glucData, setglucData] = useState()

  useEffect(() => {
    getdata();
  }, [])

  const getdata = async () => {
    // console.log('in sample');

    try {

      const data = await axios.get(`/sample`)
      // console.log(data.data);
      setsamples(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  //***************** FORMS MODALS OPEN  ******************// 

  const HaemaModel = (id) => {
    sethaemid(id)
    sethaemForm(true)
  }

  const ThyroidModal = (id) => {
    setthyrid(id)
    setThyroidForm(true)
  }

  const GlucometryModal = (id) => {
    setGlucid(id)
    setGlucomForm(true)
  }

  //*********************  REPORTS MODALS OPEN  **********************// 

  const HemoatologyReport = (data) => {
    console.log(data, "-----------------HemoatologyReport");

    sethemoData(data)
    sethaemReport(true);
  }

  const ThyroidReports = (data) => {
    console.log(data, "-----------------ThyroidReports");
    setthyrData(data)
    setThyroidReport(true)
  }

  const GlucometryReports = (data) => {
    console.log(data, "-----------------GlucometryReports");
    setglucData(data)
    setGlucomReport(true)
  }



  return (
    <>
    <Navigationbar/>
      <div className='cd'>
        <div className='d-flex justify-content-center'>
          <FormControl type="search" placeholder="Search" className="me-2 search" aria-label="Search" onChange={(e) => search(e)} />
        </div>
        <Table hover className='tablecard p-5' responsive>
          <thead>
            <tr>
              <th className='th'>Sample Date</th>
              <th className='th'>Patient Name</th>
              <th className='th'>Email</th>
              <th className='th'>Sample ID</th>
              <th className='th'>haemaology </th>
              <th className='th'>Thyroid Profile </th>
              <th className='th'>Glucometry </th>
            </tr>
          </thead>

          <tbody>
            {
              // console.log(val);
              // console.log(inx + 1, "test:", val.test, "heam:", val.status.hemo, val.heamatology.length, "thyr:", val.status.thyr, val.thyroid.length, "glu", val.status.glu, val.glucometry.length);
            }

            {!showSearch && samples.map((val, inx) => {

              return (
                <tr key={inx}>
                  <td>{val.date}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>                      
                  <td>{inx + 101}</td>
                  <td>{!val.test ? <Button variant='light'>N/A</Button> : val.status.hemo ? (val.heamatology.length > 0 ? <Button variant='danger' onClick={() => { HemoatologyReport(val.heamatology) }}> view report </Button> : <Button variant='primary' onClick={() => { HaemaModel(val._id) }} >add Details</Button>) : <Button variant='light'>N/A</Button>}</td>
                  <td>{!val.test ? <Button variant='light'>N/A</Button> : val.status.thyr ? (val.thyroid.length > 0 ? <Button variant='danger' onClick={() => { ThyroidReports(val.thyroid) }} >view report</Button> : <Button variant='primary' onClick={() => { ThyroidModal(val._id) }}>add Details</Button>) : <Button variant='light'>N/A</Button>}</td>
                  <td>{!val.test ? <Button variant='light'>N/A</Button> : val.status.glu ? (val.glucometry.length > 0 ? <Button variant='danger' onClick={() => { GlucometryReports(val.glucometry) }}>View Reports</Button> : <Button variant='primary' onClick={() => { GlucometryModal(val._id) }}>add Details</Button>) : <Button variant='light'>N/A</Button>}</td>
                  <td><Button className='btn btn-primary' onClick={()=>handleShow(val)}>Edit</Button></td>
                  {/* <td>{!val.test ? <Button variant='light'>N/A</Button> : val.status.glu ? (val.glucometry.length > 0 ? <Button variant='danger' onClick={() => { GlucometryReports(val.glucometry) }}>Edit</Button> : <Button variant='primary' onClick={() => { GlucometryModal(val._id) }}>Edit</Button>) : <Button variant='light'>Edit</Button>}</td> */}
                  
                </tr>

              )
            })}

            {showSearch && matchdata.map((val, inx) => {

              return (
                <tr key={inx}>
                  <td>{val.date}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{inx + 101}</td>
                  <td>{!val.test ? <Button variant='light'>N/A</Button> : val.status.hemo ? (val.heamatology.length > 0 ? <Button variant='danger' onClick={() => { HemoatologyReport(val.heamatology) }}> view report </Button> : <Button variant='primary' onClick={() => { HaemaModel(val._id) }} >add Details</Button>) : <Button variant='light'>N/A</Button>}</td>
                  <td>{!val.test ? <Button variant='light'>N/A</Button> : val.status.thyr ? (val.thyroid.length > 0 ? <Button variant='danger' onClick={() => { ThyroidReports(val.thyroid) }} >view report</Button> : <Button variant='primary' onClick={() => { ThyroidModal(val._id) }}>add Details</Button>) : <Button variant='light'>N/A</Button>}</td>
                  <td>{!val.test ? <Button variant='light'>N/A</Button> : val.status.glu ? (val.glucometry.length > 0 ? <Button variant='danger' onClick={() => { GlucometryReports(val.glucometry) }}>View Reports</Button> : <Button variant='primary' onClick={() => { GlucometryModal(val._id) }}>add Details</Button>) : <Button variant='light'>N/A</Button>}</td>
                <td><Button className='btn btn-primary' onClick={()=>handleShow(val)}>Edit</Button></td>
                </tr>


              )
            })}

          </tbody>
        </Table>
        <UserEdit showmodal={showmodal} getdata={getdata} editableData={editableData} setshowmodal={setshowmodal} seteditableData={seteditableData} />
        <Haematology haemForm={haemForm} sethaemForm={sethaemForm} id={haemid} />
        <Thyroidform thyroidForm={thyroidForm} setThyroidForm={setThyroidForm} id={thyrid} />
        <GlucometryForm GlucomForm={GlucomForm} setGlucomForm={setGlucomForm} id={Glucid} />



        {samples.length > 0 && <HaematologyReport haemReport={haemReport} sethaemReport={sethaemReport} hemoData={hemoData} sethaemForm={sethaemForm} />}
        {samples.length > 0 && <ThyroidReport thyroidReport={thyroidReport} setThyroidReport={setThyroidReport} thyrData={thyrData} setThyroidForm={setThyroidForm} />}
        {samples.length > 0 && <GlucometryReport GlucomReport={GlucomReport} setGlucomReport={setGlucomReport} glucData={glucData} setGlucomForm={setGlucomForm} />}

      </div>

      
    </>
   
  )
}

export default Samples
