import styled from "styled-components"
import Box from "./Components/Box"
import Left from "./Components/Left"
import Email from "./Components/Email"
import box from "./box"

function createBox(item : any){
  return(
    <Box 
    key = {item.id}
    icon = {item.icon}
    heading = {item.heading}
    description = {item.description}
    />
  )
}

function App() {
  
  return (
    <>
    <Whole_box>
      <Left />
      <Main_Box>
        {box.map(createBox)}
      </Main_Box>
      <Responsive_Email>
        <Email />
      </Responsive_Email>
    </Whole_box>
    </>
  )
}

const Whole_box = styled.div`
display : flex;
justify-content: center;
align-items: center;
@media (max-width : 480px){
  display: block;
}
@media (max-width : 720px){
  display: block;
}
@media (max-width : 1200px){
  display: block;
}
`

const Main_Box = styled.div`
display: flex;
flex-wrap: wrap;
margin: 4rem auto;
max-width: 90%;
@media (max-width : 480px){
  justify-content: center;
  margin : 1rem;
}
@media (max-width : 720px){
  justify-content : center;
}
@media (max-width : 1200px){
  justify-content : center;
}
`

const Responsive_Email = styled.div`
display: none;
@media (max-width : 480px){
  display: block;
  margin : 10px auto;
}
@media (max-width : 720px){
  display: block;
  margin : 10px auto;
}
@media (max-width : 1200px){
  display: block;
  margin : 10px auto;
}
`

export default App
