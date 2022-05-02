import React, { useState } from "react";
import { Form } from "react-bootstrap";
const SearchFunction = (props) => {
  const [searchItem, setSearchItem] = useState();
  const searchItemHandler = (e) => {
    props.liftSearchItem(e.target.value);
  };
  return (
    <div className="pr-3">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            {" "}
            <h5>Search for a visitation</h5>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="...search Name"
            value={searchItem}
            onChange={searchItemHandler}
          />
        </Form.Group>
      </Form>
    </div>
  );
};
export default SearchFunction;
