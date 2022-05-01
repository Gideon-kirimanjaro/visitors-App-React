import { Table } from "react-bootstrap";
const TableComponent = (props) => {
  return (
    <div>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Purpose of Visit</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </Table>
    </div>
  );
};
export default TableComponent;
