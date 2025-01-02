import React, { useEffect, useState } from 'react'
import Card from './Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Newsapp = () => {
 const[search, setSearch]=useState("india")
 const[newsData,setNewsData]=useState(null)
  const API_KEY="b30989909f8b490d8929004ffc4b2282";
  const getData= async()=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apikey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  }
 
  useEffect(()=>{
    getData()
  },[])

  const handleInput=(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
   

  }
  const userInput=(event)=>{
     setSearch(event.target.value)
  }

  return (
    <div>
          <Navbar expand="lg" className="newsnav">
      <Container fluid>
        <Navbar.Brand href="#" className=' m-2 text-white'>DigitalNewsDesk</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white'>All News</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Trending</Nav.Link>
            
          
          </Nav>
          <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                <button onClick={getData} className='searbutton'>Search</button>
            </div>
        
  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        <div> 
        <p className="fs-4 text-center head">Stay Update with Digital News</p>
        
        </div>
        <div className=' text-center '>
        <Button onClick={userInput} value="politics" variant="success" className='m-2 catebtn'>Politics</Button>
        <Button onClick={userInput} value="education" variant="success" className='m-2 catebtn'>Education</Button>
        <Button onClick={userInput} value="technology" variant="success" className='m-2 catebtn'>Technology</Button>
        <Button onClick={userInput} value="sports" variant="success" className='m-2 catebtn'>Sports</Button>
        <Button onClick={userInput} value="entertainment" variant="success" className='m-2 catebtn'>Entertainment</Button>
        <Button onClick={userInput} value="health" variant="success" className='m-2 catebtn'>Health</Button>
        <Button onClick={userInput} value="fitness" variant="success" className='m-2 catebtn'>Fitness</Button>

        </div>
  
        <div>
          {
            newsData?<Card data={newsData }/>:null
          }
            
        </div>
    </div>
  )
}

export default Newsapp