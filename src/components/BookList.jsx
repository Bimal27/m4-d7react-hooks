
import { Component } from 'react'
import {Container,Col, Row, FormControl} from 'react-bootstrap'
import SingleBook from './SingleBook'

class BookList extends Component {
    state={
        query:''
    }
    render(){
        return(
                <Container>
                    <Row>
                        <Col>
                        <FormControl  type="text" placeholder="Search" className="mr-sm-2 my-4"
                        value={this.state.query} 
                        onChange={e =>this.setState({query: e.target.value})}
                        />
                        </Col>
                    </Row>
                        <Row>
                            {
                                this.props.books.filter(b => b.title.toLowerCase().includes(this.state.query)).map(b =>(
                                    <Col>
                                    <SingleBook book ={b} />
                                    </Col>
                                ))
                            } 
                             
                        </Row>
                </Container>
        )
    }

}
    


export default BookList