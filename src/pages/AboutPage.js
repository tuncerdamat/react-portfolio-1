import React from 'react';
import Hero from "../components/Hero";
import Content from "../components/Content";


function AboutPage(props){
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>We are two brothers and software engineers focused on web development.</p>
                <p>Deniz ...</p>
                <p>Tunçer works as a web developer based on PHP in Milan, Italy for {(new Date().getFullYear()) - 2016} years.</p>
            </Content>
        </div>
    );
}


export default AboutPage;