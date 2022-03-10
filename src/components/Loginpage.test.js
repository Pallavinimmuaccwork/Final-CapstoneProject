import { fireEvent, queryByTitle, render } from '@testing-library/react';
import Login from './Login';

describe("Login button",()=>{
    it("login button render",()=>{
        let {queryByTitle} =render(<Login/>)
        
        let btn = queryByTitle("loginBtn")
        expect(btn).toBeTruthy()
    })

    it("onSubmit",()=>{
        let {queryByTitle} = render(<Login/>)
        
        let btn = queryByTitle("loginBtn")
        fireEvent.submit(btn)   
    })
})


describe("input field test",()=>{
    it("login render",()=>{
        let {queryByTitle}=render (<Login/>)
        
        let input = queryByTitle("loginemail")
        expect(input).toBeTruthy()
    })
    it("input onChange",()=>{
        let {queryByTitle}=render (<Login />)
        
        let input = queryByTitle("loginemail")
        fireEvent.change(input,{target:{value:"testValue"}})
        expect(input.value).toBe("testValue")
    })
})


describe("input field test",()=>{
    it("login render",()=>{
        let {queryByTitle}=render (<Login/>)
        let input = queryByTitle("loginpass")
        expect(input).toBeTruthy()
    })
    it("input onChange",()=>{
        let {queryByTitle}=render (<Login />)
        let input = queryByTitle("loginpass")
        fireEvent.change(input,{target:{value:"testValue"}})
        expect(input.value).toBe("testValue")
    })
})

















// import { fireEvent, queryByAttribute, render } from "@testing-library/react";
// import Loginpage from "../Loginpage";

// describe("loginpage", () => {
//   it("Ok, Login is successful", async () => {
//     const utils = render(<Loginpage />);
//     const getById = queryByAttribute.bind(null, "id");
//     const input = getById(utils.container, "Login");
//     fireEvent.click(input);
//     // fireEvent.change(input, {target: value : ""});
//   });
// });









// import Loginpage from "./Loginpage";
// import { fireEvent, render } from '@testing-library/react';

// describe("Login button",()=>{
//     it("login button render",()=>{
//         let {queryByTitle} = render(<Loginpage />)
//         
//         let btn = queryByTitle("loginBtn")
//         expect(btn).toBeTruthy()
//     })

//     it("onClick",()=>{
//         let {queryByTitle} = render(<Loginpage />)
//         
//         let btn = queryByTitle("loginBtn")
//         fireEvent.click(btn) 
        
//     })
// })
// describe("input field test",()=>{
//     it("login render",()=>{
//         let {queryByTitle}=render (<Loginpage />)
//         // eslint-disable-next-line testing-library/prefer-screen-queries
//         let input = queryByTitle("email")
//         expect(input).toBeTruthy()
//     })
//     it("input onChange",()=>{
//         let {queryByTitle}=render (<Loginpage />)
//         // eslint-disable-next-line testing-library/prefer-screen-queries
//         let input = queryByTitle("email")
//         fireEvent.change(input,{target:{value:"testValue"}})
//         expect(input.value).toBe("testValue")
//     })
// })