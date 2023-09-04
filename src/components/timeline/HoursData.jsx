import React, {useContext} from "react";
import "./hoursData.scss"
import { MyContext } from "../../MyContext";

const HoursData = (props) => {
  const {data, setData} = useContext(MyContext);

  const calculateHoursDaily = () => { 
    let total = [];
    if (!data.employee || !data.employee[props.day_index]) {
      return total;
    }
    Object.keys(data.employee[props.day_index]).map((k) => {
      let employee = data.employee[props.day_index][k];
      let totalHours = 0;
      Object.keys(employee.timeline).map((key) => {
        totalHours += employee.timeline[key].length;
      });
      total.push(Math.round(totalHours / 2));
    });
    return total;
  }
  const calculateHoursWeekly = () => { 
    let total = {
      1: 0,
      2: 0,
      3: 0,
    };
    for (let i = 0; i < props.day_index + 1; i++) {
      Object.keys(data.employee[i]).map((k) => {
        let employee = data.employee[i][k];
        Object.keys(employee.timeline).map((key) => {
          total[employee.id] += employee.timeline[key].length;
        });
      });
    }
    Object.keys(total).map((key) => {
      total[key] = Math.round(total[key] / 2);
    });
      console.log(total);
    return total;
  }

  return (
    <div>
      <div className="headings">
        <div className="">
          <table className="daily">
            <thead>
              <tr className="header-black">
                <th>Daily</th>
              </tr>
            </thead>
            <tbody className="body-gray">
              <tr>
                <td>Hrs</td>
              </tr>
            </tbody>
          </table>

          <table className="daily m-top">
            <tbody>
              {calculateHoursDaily().map((item, index) => (
                <tr key={index}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <table className="weekly">
            <thead>
              <tr className="header-blue">
                <th colSpan="3">Weekly</th>
              </tr>
            </thead>

            <tbody className="body-blue">
              <tr>
                <td>Hrs</td>
                <td>AL</td>
                <td>MC</td>
              </tr>
            </tbody>
          </table>

          <table className="weekly m-top">
            <tbody>
              {Object.keys(calculateHoursWeekly()).map((key) => (
                <tr key={key}>
                  <td>{calculateHoursWeekly()[key]}</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <table className="Annually">
            <thead>
              <tr className="header-green">
                <th colSpan="3">Annualy</th>
              </tr>
            </thead>

            <tbody className="body-green">
              <tr>
                <td>Hrs</td>
                <td>AL</td>
                <td>MC</td>
              </tr>
            </tbody>
          </table>

          <table className="annually m-top">
            <tbody>
              <tr>
                <td>10</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>10</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>10</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HoursData;
