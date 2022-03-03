// import { Button } from 'bootstrap'
import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigationbar = () => {


    // const [set, setset] = useState()
    // var role;
    useEffect(() => {
        console.log('in nav');
        var role = localStorage.getItem('role');
        console.log(role);
        // role === 'admin' ? setset(true) : setset(false);
    }, [])

    const Logout = () => {
        localStorage.removeItem('role');
        console.log("cleared");
    }

    useEffect(() => {
        Logout()
    }, [])



    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Container >
                    <Navbar.Brand to="/Samples" className='navtags'><h4>Laboratory</h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll >
                            <NavLink to="/Samples" className="navtags">Samples</NavLink>
                            {/* <NavLink to="/EnterSample" className="navtags">Enter Samples</NavLink> */}

                        </Nav>

                        <Nav className="d-flex">
                            <NavLink to="/RegistrationPage" className="navtags">Register</NavLink>
                            <NavLink to="/Loginpage" className="navtags">login</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar