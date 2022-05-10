import React from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import NavBar from "../NavBar/NavBar";
import Splash from "../common/Splash";
import splashImg from '../../assets/octoSplash2.jpg';

const Home = () => {
    return (
        <Container>
            <Splash image = {splashImg} style={{
                color: "#918178ff"
            }}>
            <h1 style = {{textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'
}}>Welcome to Apptonish!</h1>
<h2 style = {{textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'
}}><br/>Astonishly simple appointment booking.</h2>
            </Splash>
            <NavBar/>

        </Container>
    )
}


export default Home;