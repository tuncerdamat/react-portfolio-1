import React from "react";
import Card from "../components/Card";
import personalSite from "../assets/images/personal_site.png";
import linkedin from "../assets/images/linkedin.jpeg";
import github from "../assets/images/github.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Tuncherology',
                    subTitle: 'Website of Tunçer',
                    imgSrc: personalSite,
                    link: 'http://tuncherology.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Tunçer Damat',
                    subTitle: 'LinkedIn Page',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/tuncerdamat',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Github Page',
                    subTitle: 'A social network for developers',
                    imgSrc: github,
                    link: 'https://github.com/tuncerdamat',
                    selected: false
                },
            ]
        }
    }
    
    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        
        items[id].selected = items[id].selected ? false : true;
        
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        
        this.setState({items});
    }
    
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    
    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
