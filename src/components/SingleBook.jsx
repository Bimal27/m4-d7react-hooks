
import { Component } from 'react'
import {  Card, Container ,Row} from 'react-bootstrap'
// import CommentArea from './CommentArea'



class SingleBook extends Component{
    state={
        selected: false
    }
    render(){
        return(
            <>
        <Container>
            <Row className="justify-content-center"> 
                {/* <Card  onClick={() =>this.setState({selected: !this.state.selected})} */}
                 <Card  onClick={() =>this.props.onBookSelect(this.props.book.asin)}
                //  style={{border: this.state.selected ? "4px solid green" : "none"}}
                 >
                <Card.Img variant="top" src={this.props.book.img} 
                onClick={() =>this.setState({selected: !this.state.selected})}
                style={{border: this.state.selected ? "4px solid yellow" : "none"}}/>
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
                </Card>
                {/* {
                    this.state.selected && <CommentArea asin={this.props.book.asin}/>
                    

                } */}
        </Row>
        </Container>
        </>
        )
    }
} 

export default SingleBook