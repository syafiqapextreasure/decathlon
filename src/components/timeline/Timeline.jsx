// import { ArrowLeftOutlined, ArrowRightOutlined, LaunchOutlined } from "@mui/icons-material";
import "./timeline.scss"
import ResourceTimeline from "./ResourceTimeline";
import HoursData from "./HoursData";
import { MyContext } from "../../MyContext";
import { useContext } from "react";
import { Row, Col} from 'react-bootstrap';
import SouthEastIcon from '@mui/icons-material/SouthEast';
const Timeline = () => {

  const {data, setData} = useContext(MyContext);
  
  return (
    <div>
        <div className="schedule-button-area">
            <div className="button-flex floor" onClick={() => {
              setData({...data, currentPaint: {name: "Floor", color: "blue"}})
            }}>
              <p className="color-white">ACTIVITIES</p>
              <SouthEastIcon className="btn-icon" style={{background:'#F8F8F8', color:'#0000FF'}} />
            </div>
            <div className="button-flex off-day" onClick={() => {
              setData({...data, currentPaint: {name: "OFF DAY", color: "red"}})
            }}>
              <p className="color-white">OFF DAY</p>
            </div>
            <div className="button-flex al-rph" onClick={() => {
              setData({...data, currentPaint: {name: "AL", color: "yellow"}})
            }}>
              <p className="color-white">AL / RPH</p>
            </div>
            <div className="button-flex duty" onClick={() => {
              setData({...data, currentPaint: {name: "DUTY", color: "#65b045"}})
            }}>
              <p className="color-white">DUTY</p>
            </div>
            <div className="button-flex meeting" onClick={() => {
              setData({...data, currentPaint: {name: "MEETING", color: "#00ffff"}})
            }}>
              <p className="color-white">MEETING</p>
            </div>
            <div className="button-flex mc" onClick={() => {
              setData({...data, currentPaint: {name: "MEETING", color: "#9900ff"}})
            }}>
              <p className="color-white">MC</p>
            </div>
            <div className="button-flex cashier" onClick={() => {
              setData({...data, currentPaint: {name: "CASHIER", color: "#ff9900"}})
            }}>
              <p className="color-white">CASHIER</p>
            </div>
        </div>
      <Row>
        <Col sm={12} md={8} lg={10}>
          <ResourceTimeline day_index={0} />
        </Col>
        <Col sm={12} md={4} lg={2}>
          <HoursData day_index={0} />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={10}>
          <ResourceTimeline day_index={1}/>
        </Col>
        <Col sm={12} md={4} lg={2}>
          <HoursData day_index={1}/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={10}>
          <ResourceTimeline day_index={2}/>
        </Col>
        <Col sm={12} md={4} lg={2}>
          <HoursData day_index={2}/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={10}>
          <ResourceTimeline day_index={3}/>
        </Col>
        <Col sm={12} md={4} lg={2}>
          <HoursData day_index={3}/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={10}>
          <ResourceTimeline day_index={4}/>
        </Col>
        <Col sm={12} md={4} lg={2}>
          <HoursData day_index={4}/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={10}>
          <ResourceTimeline day_index={5}/>
        </Col>
        <Col sm={12} md={4} lg={2}>
          <HoursData day_index={5}/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={10}>
          <ResourceTimeline day_index={6}/>
        </Col>
        <Col sm={12} md={4} lg={2}>
          <HoursData day_index={6}/>
        </Col>
      </Row>
    </div>
  );
};

export default Timeline;
