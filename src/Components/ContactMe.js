import React, { useState } from 'react'
import styled from 'styled-components'

const ContactTitle = styled.h1`
  text-align: center;
  background: royalblue;
  color: white;
  padding: 1em;
  margin: 1em 0;
`

export default () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  console.log(fName, lName, email, text)

  return (
    <div>
      <ContactTitle>Contact Me</ContactTitle>

      <form>
        <div className="row">
          <div className="col">
            <label htmlFor="FirstName">First Name</label>
            <input type="text" className="form-control" placeholder="First name" value={fName}
            onChange={e => setFName(e.target.value)}  />
          </div>
          <div className="col">
            <label htmlFor="LastName">Last Name</label>
            <input type="text" className="form-control" placeholder="Last name" value={lName}
            onChange={e => setLName(e.target.value)}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="me@example.com" value={email}
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Hi Dani...</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text}
            onChange={e => setText(e.target.value)}></textarea>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" />
    
      </form>
    </div>
  )
}