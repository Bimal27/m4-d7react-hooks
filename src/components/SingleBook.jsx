
import { useState } from 'react'

import {  Card, Container ,Row} from 'react-bootstrap'
// import CommentArea from './CommentArea'



const SingleBook = (props) =>{
    // state={
    //     selected: false
    // }

    const [selected , setSelected] = useState(false)
    
        return(
            <>
        <Container>
            <Row className="justify-content-center"> 
                {/* <Card  onClick={() =>this.setState({selected: !this.state.selected})} */}
                 <Card  onClick={() =>props.onBookSelect(props.book.asin)}
                //  style={{border: this.state.selected ? "4px solid green" : "none"}}
                 >
                <Card.Img variant="top" src={props.book.img} 
                onClick={() =>setSelected(selected)}
                />
                <Card.Body>
                    <Card.Title>{props.book.title}</Card.Title>
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

export default SingleBook