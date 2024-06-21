import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Email(){

    const[email , setEmail] = useState<string>('');
    const[errorMessage , setErrorMessage] = useState<string>('');
    const[formSubmitted , setFormSubmitted] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    if(!email){
        setErrorMessage("Please Enter your Email Address");
        return;
    }

    if(!EMAIL_PATTERN.test(email)){
        setErrorMessage("Invalid Email Format");
        return;
    }

    try{
        const response = await axios.post<any>('http://34.225.132.160:8002/api',{email});

        if(response.status === 200){
            setFormSubmitted(true);
            setErrorMessage('');
        }
        else{
            setErrorMessage('An unknown error occured');
        }
    }
    catch(error : any){
        console.error("API request error:", error);
        setErrorMessage(error.message);
    }
};

const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setErrorMessage(''); 
};

    return(
        <>
        <form onSubmit={handleSubmit}>
            <Area>
                <Input_bar>
                    <Input 
                        type = "email" 
                        placeholder = "Email Address" 
                        id = "email" 
                        value={email}
                        onChange = {handleEmailChange}
                    />
                </Input_bar>
                <Button>Contact Me</Button>
                {errorMessage && <P>{errorMessage}</P>}
                {formSubmitted && <P>Form Submitted!</P>}
            </Area>
        </form>
        
        </>
    );
}

const Area = styled.div`
display: flex;
gap : 20px;
@media (max-width : 480px){
    display: block;
    margin : 10px auto;
}
@media (max-width : 720px){
    justify-content: center;
}
@media (max-width : 1200px){
    justify-content: center;
}
`

const Input_bar = styled.div`
width: 300px;
height: 50px;
margin-top : 15px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #ABABAB;
border-radius: 10px;
@media(max-width : 480px){
    margin: 10px auto;}
`

const Input = styled.input`
width : 290px;
height: 38px;
margin : 2px;
font-family:"Exo 2", sans-serif;
text-align: left;
color: #ABABAB;
border : none;
outline : none;
`

const Button = styled.button`
background-color : #EA7B2C;
color : white;
border-radius: 5px;
width: 151px;
height: 50px;
margin-top : 14px;
outline : none;
border : none;
@media(max-width : 480px){
    margin: 14px auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
`

const P = styled.p`
text-align : center;
`

export default Email;