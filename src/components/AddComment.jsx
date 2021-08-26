import { Component } from "react";
import{Form,Button} from "react-bootstrap"

class AddComment extends Component{
    state={
        comments:{
            comment:"",
            rate: 1,
            elementId: this.props.asin
        }
      
    }

    handleInput = async (e) =>{
        try {
            const response = await fetch(" https://striveschool-api.herokuapp.com/api/comments" + this.state.comments.elementId,{
                method:"POST",
                body: JSON.stringify(this.state.comments),
                headers:{
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNzMzNGIzNTgxNzAwMTVjMjI3NWIiLCJpYXQiOjE2Mjk5NzkzNzUsImV4cCI6MTYzMTE4ODk3NX0.8oPWQmDkjhZppxF1O_JjqR5vYAfRMCIn_4zUs7p9_OM",
                    "Content-type": 'application/json'
                }
            })
            if(response.ok){
                alert('Comments added successfully')
                
            }
        } catch (error) {
            console.log(error)
            
        }

    }

    render(){

        return(
           <Form onSubmit={this.handleInput}>
               <Form.Group controlId="exampleForm.ControlInput1">
                    
                    <Form.Control type="text" placeholder="add comment" 
                    value={this.state.comments.comment}
                    onChange={e =>this.setState({comments:{
                        ...this.state.comment,
                        comment:e.target.value
                    }
                })}
                     />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control as="select" value={this.state.comments.rate}
                    onChange={e =>this.setState({comments:{
                        ...this.state.comment,
                        rate:e.target.value
                    }
                })}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
               </Form.Group>
               <Button variant="success" type="submit">
                                Add
             </Button>
           </Form>
        )
    }
}
export default AddComment