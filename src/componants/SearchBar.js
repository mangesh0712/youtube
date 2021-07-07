import React, { useState } from "react";
import "./css/SearchBar.css";
import { Segment, Form } from "semantic-ui-react";

const SearchBar = (props) => {

  const [searchedTerm, setSearchedTerm] = useState("");
  const onInputChange = (event) => {
    setSearchedTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(searchedTerm);
  };

  return (
    <React.Fragment>
      <Segment id="serach">
        <Form onSubmit={onFormSubmit}>
          <Form.Field>
            <label id="bar">
              Searchtube
              <input type="text" value={searchedTerm} onChange={onInputChange} />{" "}
            </label>
          </Form.Field>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default SearchBar;
