import React from "react";
import "./css/SearchBar.css"
import { Segment ,Form} from 'semantic-ui-react'

class SearchBar extends React.Component{
    state={term:""};
    onInputChange =(event)=>{
         this.setState({term: event.target.value});
    }
  onFormSubmit = event =>{
      const {term}=this.state
      event.preventDefault();
      this.props.onFormSubmit(term);
  }
    render(){
        const {term}=this.state
        return(
            <React.Fragment>
            <Segment id="serach" style={{backgroundColor:"black"}} >
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Field>
                       <label id="bar">Searchtube
                       <input type="text" value={term} onChange={this.onInputChange} /> </label>
                       </Form.Field>
                </Form>
           </Segment>
            </React.Fragment>
        )
    }
}
export default SearchBar;