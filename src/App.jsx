import { useState } from "react"
import FirstPage from "./components/FirstPage"
import StartGame from "./components/StartGame"



function App() {

  const[isGameStart, setIsGameStart] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStart((prev) => !prev)
  };

  return (
    <>
    {isGameStart ? <StartGame/> :<FirstPage toggle={toggleGamePlay}/>}
    </>
  )
}

export default App


// const Button = styled.button`
// background-color : black;
// color:white;
// padding 10px;
// `;