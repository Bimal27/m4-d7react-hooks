

import {Container,Col, Row, FormControl} from 'react-bootstrap'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { useState } from 'react'

const BookList = ({books}) => {
    // state={
    //     query:'',
    //      bookSelected: null
    // }
    const [query ,setQuery] = useState('')
    const [bookSelected ,setBookSelected] = useState(null)
   
        return(
                <Container>
                    <Row>

                     <Col md={9}>
                    
                    <Row>
                        <Col>
                        <FormControl  type="text" placeholder="Search" className="mr-sm-2 my-4"
                        value={query} 
                        onChange={e =>setQuery(e.target.value)}
                        />
                        </Col>
                    </Row>
                        <Row>
                            {
                                books.filter(b => b.title.toLowerCase().includes(query)).map(b =>(
                                    <Col>
                                    <SingleBook book ={b} onBookSelect = {asin =>
                                        // this.setState({
                                        //     bookSelected: asin
                                        // })
                                        setBookSelected(asin)
                                    }/>
                                    </Col>
                                ))
                            } 
                             
                        </Row>
                          </Col>
                          <Col md={3}>
                             <CommentArea asin={bookSelected}/>
                          </Col>
                        </Row>
                </Container>
        )
    

}
    


export default BookList