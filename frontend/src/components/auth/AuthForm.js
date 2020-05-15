import React, {Fragment, useState} from 'react';
import { Link,Redirect } from 'react-router-dom';
import styled from 'styled-components';
import {Form,Col,InputGroup, Button} from 'react-bootstrap';
import {FaUser, FaPaperPlane, FaLock, FaUnlockAlt} from 'react-icons/fa'


const AuthFormBlock = styled.div`

`;


const FieldForm = ({placeholder, icon, type, onChange}) => (
    <Form.Group className="authform_group">
        <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Text>{icon}</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type={type} placeholder={placeholder} required  onChange={(e)=>onChange(e.target.value)}/>
        </InputGroup>
    </Form.Group>
);


const AuthForm = ({authenticated, type, handleSubmit, location})=>{
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const { from } = location.state || { from: { pathname: "/" } }
    if (authenticated) return <Redirect to={from} />

    const handleClick = () =>{
        if(type === "Login") {
            handleSignIn();
        }else if (type ==="Register"){
            handleSignUp();
        }
    }

    const handleSignIn = () =>{
        try{
            handleSubmit({email, password});
        } catch{
            alert("Failed to login");
            setEmail("");
            setPassword("");
        }
    }

    const handleSignUp = () =>{
        try{
            handleSubmit({email, username,password});
        } catch{
            alert("Failed to Register");
            setEmail("");
            setPassword("");
            setUsername("");
        }
    }

    return (
        <AuthFormBlock>
            <Form>
                <h2>{type}</h2>
                {type === 'Register' ?
                (<p>Please fill in this form to create an account!</p>)
                :(<p>Pease fill your Email and password</p>)
                }
                <hr/>
                <FieldForm placeholder={"E-MAIL"} icon={<FaPaperPlane/>} onChange={setEmail} type={"email"}/>
                {type === 'Register' && 
                <Fragment>
                    <FieldForm placeholder={"USERNAME"} icon={<FaUser/>} onChange={setUsername} type={"text"}/>
                    <hr/>
                    </Fragment>
                }
                <FieldForm placeholder={"PASSWORD"} icon={<FaLock/>} onChange={setPassword} type={"password"}/>
                
                {type === 'Register' && 
                    <FieldForm placeholder={"PASSWORD CHECK"} icon={<FaUnlockAlt/>}  onChange={setPasswordCheck} type={"password"}/>
                }

                <Form.Group>
                <Button as={Col} md={12} variant="info" type="submit" onClick={()=>handleClick()}>SIGN UP</Button>
                </Form.Group>
            </Form>
            {type === 'Register' ?( 
                <div>Already have an account?  <Link to='/login'>Login Here</Link></div>
            ) : (
                <div><Link to='/register'>Register Here</Link></div>
            )
            }
        </AuthFormBlock>
    );
};


export default AuthForm;