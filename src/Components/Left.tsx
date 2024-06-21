import styled from "styled-components";
import Email from "./Email";


function Left(){

    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"

    return(
        <>
        <Left_box>
            <Logo></Logo>
            <Text>A Suite Of Business Support Services</Text>
            <Description>{content}</Description>
            <Condition>
                <Email />
            </Condition>
        </Left_box>
        </>
    );
}

const Left_box = styled.div`
padding : 10px;
margin: 10px;
`

const Logo = styled.div`
width: 517px;
height: 145px;
background: transparent url('src/assets/EZ Works Blue.png') 0% 0% no-repeat padding-box;
@media (max-width : 480px){
    background-size: 80% auto;
}
@media (max-width : 720px){
  background-position: center;
  width: unset;
}
@media (max-width : 1200px){
  background-position: center;
  width: unset;
}  
`
const Text = styled.h1`
font-family:"Exo 2", sans-serif;
color : #112949;
@media (max-width : 480px){
    text-align: center;
}
@media (max-width : 720px){
    text-align: center;
}
@media (max-width : 1200px){
    text-align: center;
}
`

const Description = styled.div`
font-family:"Exo 2", sans-serif;
color : #112949;
@media (max-width : 480px){
    text-align: center;
}
@media (max-width : 720px){
    text-align: center;
}
@media (max-width : 1200px){
    text-align: center;
}
`
const Condition = styled.div`
@media (max-width : 480px){
    display : none;
}
@media (max-width : 720px){
    display : none;
}
@media (max-width : 1200px){
    display : none;
}
`

export default Left;