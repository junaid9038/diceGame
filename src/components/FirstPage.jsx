import React from 'react'
import styled from'styled-components'

export default function FirstPage({toggle}) {
  return (
    <Container>
        <div>
        <img src="public\dices 1.jpg" alt="" />
        </div>
        <div>
            <h1 className='content'>Dice Game</h1>
            <Button onClick={toggle}>
                Play Now
            </Button>
        </div>
    </Container>
  )
}


const Container = styled.div`
max-width:1180px;
height:100vh;
display:flex;
margin: 0 auto;
align-items:center;

    h1.content{
      font-size: 96px;
      white-space:nowrap;
      
  }
`;


const Button = styled.button`
min-width:220px;
background:#000000;
color:white;
border-radius:5px;
border:none;
padding:10px 10px;
font-size:16px;
border:1px solid transparent;
cursor:pointer;
transition: 0.4s background ease-in;



&:hover{
background-color:white;
border:1px solid black;
color:black;
transition: 0.3s background ease-in;
}
`
