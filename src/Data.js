import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "./Components/Ui/TableComponent";

//import axios from "axios";
const Data = () => {
  const [data, setData] = useState([]);
  console.log("This is the data", data);
  const dataEndPoint =
    " https://limuru-visitors-app-default-rtdb.firebaseio.com/visitors/.json";
  useEffect(() => {
    axios
      .get(dataEndPoint)
      .then((res) => {
        const fetchedData = res.data;
        const values = Object.values(fetchedData);
        setData(values);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
    <div>
      <div className="pt-4">
        <TableComponent>
          {data.map((val) => {
            return (
              <tr>
                <td>{val.fullName}</td>
                <td>{val.clientPurpose}</td>
                <td>{val.clientTime}</td>
                <td>{val.clientDate}</td>
              </tr>
            );
          })}
        </TableComponent>
      </div>
    </div>
  );
};
export default Data;
