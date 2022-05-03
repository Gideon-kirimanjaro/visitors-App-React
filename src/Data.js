/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import SearchFunction from "./Components/SearchFunction";
import TableComponent from "./Components/Ui/TableComponent";

//import axios from "axios";
const Data = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [notFound, setNotFound] = useState(false);
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

  const liftedSearchHandler = (searchItem) => {
    setSearchName(searchItem);
  };
  const filteredNames = data
    .filter((val) => {
      const fullName = val.fullName;
      const lowerCaseName = (fullName || "").toLowerCase();
      const lowerSearchName = (searchName || "").toLowerCase();
      if (searchName === "") {
        return val;
      } else if (lowerCaseName.includes(lowerSearchName)) {
        return val;
      }
    })
    .sort((val) => {
      const a = val.clientDate;
      const b = val.clientDate;
      return b - a;
    });
  return (
    <div>
      <div className="pt-4">
        <div className="px-5">
          {searchName}
          <SearchFunction liftSearchItem={liftedSearchHandler}></SearchFunction>
        </div>
        <TableComponent>
          {filteredNames.map((val) => {
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
        {notFound && (
          <div>
            <h5 className="text-danger">Name not found</h5>
          </div>
        )}
      </div>
    </div>
  );
};
export default Data;
