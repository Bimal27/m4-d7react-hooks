import { Component } from 'react'
import {Spinner,Alert} from 'react-bootstrap'

import AddComment from './AddComment'



class CommentArea extends Component{
    state={
        comment:[],
        isLoading: false,
        isError: false
    }

    componentDidMount = async () =>{
        this.setState({
            isLoading: true
          })
        try {
            const response = await fetch(" https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,{
                headers:{
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNzMzNGIzNTgxNzAwMTVjMjI3NWIiLCJpYXQiOjE2Mjk5NzkzNzUsImV4cCI6MTYzMTE4ODk3NX0.8oPWQmDkjhZppxF1O_JjqR5vYAfRMCIn_4zUs7p9_OM"
    
                }
            })
            if(response.ok){
                const data = await response.json()
                console.log(data)
                this.setState({
                    comment:data,
                    isLoading: false,
                    isError: false
                })
            }
        } catch (err) {
            
            this.setState({
                isLoading: false,
                isError: true
              })
            
        }
       
    }
    render(){
       
        return(
            <>
           
            <h2>Comments</h2>
            {this.state.isLoading && (
                    <div className="ml-2">
                        <Spinner animation="border" variant="success" />
                    </div>
                    )}
             {this.state.isError &&
                <Alert variant="warning">
                    Cannot load the data: {this.state.isError}
                </Alert>
                }
            {
                this.state.comment.map(c =>{
                   return <ul key={c._id} style={{border:'1px solid black'}}>
                        <li>{c.comment}</li>
                        <li>Rating : {c.rate}</li>
                    </ul>
                }
               

                )
            }
             
             <AddComment asin={this.props.asin}/>
   </>
        )
        
    }
}
export default CommentArea