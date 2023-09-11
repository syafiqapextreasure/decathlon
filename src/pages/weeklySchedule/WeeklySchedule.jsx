import React, { useEffect } from 'react'
import "./weeklySchedule.css"
import SelectBox from '../../components/selectBox/SelectBox';
import { Row, Col, Button} from 'react-bootstrap';
import Timeline from '../../components/timeline/Timeline';
import { MyContext } from '../../MyContext'
import WeekPicker from '../../components/weekPicker/WeekPicker';

const WeeklySchedule = () => {
  const [data, setData] = React.useState({
    currentWeek: 'Select Week',
    currentDay: 'Select Day',
    dayIndex: 0,
    currentPaint: {
      name: 'FLOOR',
      color: 'blue',
    },
    employee: [
      {
        1: {name: 'Name1', id: 1, timeline: {
          0: {name: "OFF DAY", color: "red", length: 5},
          10: {name: "DUTY", color: "green", length: 2},
        }},
        2: {name: 'Name2', id: 2, timeline: {
          5: {name: "OFF DAY", color: "red", length: 2},
          9: {name: "DUTY", color: "green", length: 5},
        }},
        3: {name: 'Name3', id: 3, timeline: {
          5: {name: "OFF DAY", color: "red", length: 2},
          9: {name: "FLOOR", color: "blue", length: 9},
        }},
      },
      {
          1: {name: 'Name1', id: 1, timeline: {}},
          2: {name: 'Name2', id: 2, timeline: {}},
          3: {name: 'Name3', id: 3, timeline: {}}
      },
      {
          1: {name: 'Name1', id: 1, timeline: {}},
          2: {name: 'Name2', id: 2, timeline: {}},
          3: {name: 'Name3', id: 3, timeline: {}}
      },
      {
          1: {name: 'Name1', id: 1, timeline: {}},
          2: {name: 'Name2', id: 2, timeline: {}},
          3: {name: 'Name3', id: 3, timeline: {}}
      },
      {
          1: {name: 'Name1', id: 1, timeline: {}},
          2: {name: 'Name2', id: 2, timeline: {}},
          3: {name: 'Name3', id: 3, timeline: {}}
      },
      {
          1: {name: 'Name1', id: 1, timeline: {}},
          2: {name: 'Name2', id: 2, timeline: {}},
          3: {name: 'Name3', id: 3, timeline: {}}
      },
      {
          1: {name: 'Name1', id: 1, timeline: {}},
          2: {name: 'Name2', id: 2, timeline: {}},
          3: {name: 'Name3', id: 3, timeline: {}}
      },
      {
          1: {name: 'Name1', id: 1, timeline: {}},
          2: {name: 'Name2', id: 2, timeline: {}},
          3: {name: 'Name3', id: 3, timeline: {}}
      }
    ]
} );
  useEffect(() => {
    // console.log(data);
  }, [data])
  
  return (
    <MyContext.Provider value={{ data, setData }}>
      <div className='content-body'>
        <Row>
          <Col sm={12} md={4} lg={2}>
            <div className='d-flex'>
              <Button variant="" style={{background:'#F59C1A', color:'white'}}>EDIT</Button>
              <Button variant="" style={{background:'#00ACAC', color:'white'}}>SAVE</Button>
            </div>
          </Col>
          <Col sm={12} md={8} lg={6}>
            <div className='d-flex text-right-spec'>
              <SelectBox name="Select State" options={['Option 1', 'Option 2', 'Option 3']} />
              <SelectBox name="Select Store" options={['Option 1', 'Option 2', 'Option 3']} />
              <SelectBox name="Select Department" options={['Option 1', 'Option 2', 'Option 3']} />
            </div>
          </Col>
          <Col sm={12} md={8} lg={3}>
            <WeekPicker/>
          </Col>
          <Col sm={12} md={4} lg={1}>
          <Button variant="primary">Apply</Button>
          </Col>
        </Row>
        <Row>
          <Timeline />          
        </Row>
        
      </div>
    </MyContext.Provider>
  )
}

export default WeeklySchedule
