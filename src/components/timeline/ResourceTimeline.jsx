import React, { useEffect, useState } from 'react'
import "./resourceTimeline.scss"
import { MyContext } from '../../MyContext'
import moment from 'moment'

const ResourceTimeline = (props) => {
  const {data, setData} = React.useContext(MyContext);
  const [listEmployee, setListEmployee] = useState(data.employee[props.day_index])
  const [currentEmployee, setCurrentEmployee] = useState(-1)
  const [currentTimeline, setCurrentTimeline] = useState(-1)
  const [currentPos, setCurrentPos] = useState(-1)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeType, setResizeType] = useState('');
  const [tdwidth, setTdwidth] = useState(0)
  const [currentPaint, setCurrentPaint] = useState({
    name: 'FLOOR',
    color: 'blue',
  })

  const handleContextMenu = (employeeId, id, e) => {
    e.preventDefault(); 
    // remove timeline
    const newTimeline = {...listEmployee[employeeId].timeline}
    delete newTimeline[id]
    setListEmployee({...listEmployee, [employeeId]: {...listEmployee[employeeId], timeline: newTimeline}})
    setData({...data, employee: {...data.employee, [props.day_index]: listEmployee}})
    setIsDragging(false)
    setIsResizing(false);
  }

  const onMouseDown = (employeeId, id, e) => {
    e.preventDefault(); 
    setTdwidth(e.target.offsetWidth)
    setCurrentEmployee(employeeId)
    setCurrentTimeline(id)
    setCurrentPos(e.pageX)
    setIsDragging(true)
    setIsResizing(false);
  }

  const onMouseMove = (id, e) => {
    if (isDragging) {
      const newTimeline = {...listEmployee[currentEmployee].timeline}
      if (newTimeline[id] && newTimeline[id].status !== 'new') {
        return;
      }
      if ( currentEmployee >= 0 && currentPos >= 0 && currentTimeline >=0 && e.pageX > currentPos ) {
          if (currentTimeline + Math.floor((e.pageX-currentPos)/tdwidth) + 1 > 48) return;
          newTimeline[currentTimeline] = {name: data.currentPaint.name, color: data.currentPaint.color, length: Math.floor((e.pageX-currentPos)/tdwidth) + 1, "status": "new"}
          setListEmployee({...listEmployee, [currentEmployee]: {...listEmployee[currentEmployee], timeline: newTimeline}})
          setData({...data, employee: {...data.employee, [props.day_index]: listEmployee}})
      }
    }

    if (isResizing){
      let selected_time_line = listEmployee[currentEmployee].timeline;
      let edit_length = selected_time_line[currentTimeline].length;
      let edit_name = selected_time_line[currentTimeline].name;
      let edit_color = selected_time_line[currentTimeline].color;

      if ( currentEmployee >= 0 && currentPos >= 0 && currentTimeline >=0 && resizeType !== '' ) {
        if (resizeType === 'left'){
          if (e.pageX < currentPos){
            if (currentTimeline - Math.floor((currentPos - e.pageX)/tdwidth) >= 0){
              if (Math.floor((currentPos - e.pageX)/tdwidth) > 0){
                delete selected_time_line[currentTimeline - Math.floor((currentPos - e.pageX)/tdwidth)];
                selected_time_line[currentTimeline - Math.floor((currentPos - e.pageX)/tdwidth)] = {name: edit_name, color: edit_color, length: edit_length + Math.floor((currentPos - e.pageX)/tdwidth), "status": "new"}
                setListEmployee({...listEmployee, [currentEmployee]: {...listEmployee[currentEmployee], timeline: selected_time_line}})
                setData({...data, employee: {...data.employee, [props.day_index]: listEmployee}})
                setCurrentTimeline(currentTimeline - Math.floor((currentPos - e.pageX)/tdwidth));
                setCurrentPos(e.pageX);
                setTimeout(() => {
                  delete selected_time_line[currentTimeline + 1];
                }, 200);
              }
            }
          }
          if (e.pageX > currentPos){
            if (edit_length - Math.floor((e.pageX - currentPos)/tdwidth) >=1){
              if (Math.floor((e.pageX - currentPos)/tdwidth) > 0){
                delete selected_time_line[currentTimeline + Math.floor((e.pageX - currentPos)/tdwidth)];
                selected_time_line[currentTimeline + Math.floor((e.pageX - currentPos)/tdwidth)] = {name: edit_name, color: edit_color, length: edit_length - Math.floor((e.pageX - currentPos)/tdwidth), "status": "new"}
                setListEmployee({...listEmployee, [currentEmployee]: {...listEmployee[currentEmployee], timeline: selected_time_line}})
                setData({...data, employee: {...data.employee, [props.day_index]: listEmployee}});
              
                setCurrentTimeline(currentTimeline + Math.floor((e.pageX - currentPos)/tdwidth));
                setCurrentPos(e.pageX);
                setTimeout(() => {
                  delete selected_time_line[currentTimeline - 1];
                }, 200);
              }
            }
          }
        } else {
          if (e.pageX < currentPos){
            if (edit_length - Math.floor((currentPos - e.pageX)/tdwidth) >=1){
              if (Math.floor((currentPos - e.pageX)/tdwidth) > 0){
                selected_time_line[currentTimeline] = {name: edit_name, color: edit_color, length: edit_length - 1, "status": "new"}
                setListEmployee({...listEmployee, [currentEmployee]: {...listEmployee[currentEmployee], timeline: selected_time_line}})
                setData({...data, employee: {...data.employee, [props.day_index]: listEmployee}});
                setCurrentPos(e.pageX);
              }
            }
          }
          if (e.pageX > currentPos){
            if (Math.floor((e.pageX - currentPos)/tdwidth) > 0){
              if (currentTimeline + edit_length + 1 > 48) return;
              selected_time_line[currentTimeline] = {name: edit_name, color: edit_color, length: edit_length + 1, "status": "new"}
              setListEmployee({...listEmployee, [currentEmployee]: {...listEmployee[currentEmployee], timeline: selected_time_line}})
              setData({...data, employee: {...data.employee, [props.day_index]: listEmployee}});
              setCurrentPos(e.pageX);
            }
          }
        }
      }
    }
  }

  const onMouseUp = (e) => {
    e.preventDefault(); 
    // add timeline
    setCurrentEmployee(-1)
    setCurrentTimeline(-1)
    setCurrentPos(-1)
    setIsDragging(false);
    setIsResizing(false);
  }

  useEffect(() => {
    setListEmployee(data.employee[props.day_index] ? data.employee[props.day_index] : {})
  }, [props.day_index])

  const clickforEdit = (type, timeline_data, id, employeeId, e) => {
    e.preventDefault(); 
    setTdwidth(e.target.parentElement.parentElement.offsetWidth/timeline_data[id].length);
    setCurrentEmployee(employeeId)
    setCurrentTimeline(id)
    setCurrentPos(e.pageX)
    setIsResizing(true);
    setResizeType(type);
  }

  const renderTimeline = (employeeId, timeline) => {
    const timelineArray = []
    for (let i = 0; i < 48; i++) {
      if (timeline[i]) {
        timelineArray.push(
        <td onMouseMove={onMouseMove.bind(this, i)} onContextMenu={handleContextMenu.bind(this, employeeId, i)} className="timeline-cell"  colSpan={timeline[i].length}>
          <div className='d-flex'>
            <div onMouseDown={clickforEdit.bind(this, 'left', timeline, i, employeeId)} style={{cursor:'col-resize', width:'2px', height:'1.5rem'}}></div>
            <div className="timeline-cell-inner"  style={{backgroundColor: timeline[i].color }}>{timeline[i].name}</div>
            <div onMouseDown={clickforEdit.bind(this, 'right', timeline, i, employeeId)} style={{cursor:'col-resize', width:'2px', height:'1.5rem'}}></div>
          </div>
        </td>)
        i += timeline[i].length - 1
      } else {
        timelineArray.push(<td onMouseDown={onMouseDown.bind(this,employeeId, i)} onMouseMove={onMouseMove.bind(this, i)} className="timeline-cell" ></td>)
      }
    }
    return timelineArray
  }

  const formatSelectedWeek = () => {
    const startDate = moment().isoWeek(data.currentWeek).startOf('isoWeek').format('DD/MM/YYYY');
    const endDate = moment().isoWeek(data.currentWeek).endOf('isoWeek').format('DD/MM/YYYY');
    return `W${data.currentWeek} | ${startDate} - ${endDate}`;
  };

  const formatDay = () => {
    return moment(data.currentDay).add(props.day_index, 'd').format('DD/MM/YYYY');
  };

  const formatThu = () => {
    return moment(data.currentDay).add(props.day_index, 'd').format('dddd');
  };

  return (
    <div onMouseUp={onMouseUp.bind(this)} style={{width:'100%', overflow:'auto'}}>
      <table className='timeline-table'>
        <thead>
            <tr className='bg-blue'>
                <th colSpan="57" className='start'>{formatSelectedWeek()}</th>
            </tr>
            <tr>
                <th className='bg-green' colSpan={9}>{formatThu()} {formatDay()}</th>
                <th colSpan="48" className='bg-black'>0.00 AM | 0H-24H | 12.00 PM</th>
            </tr>
            <tr className='bg-gray'>
                <td colSpan={9} style={{textAlign:'left'}}>Clock 24 Hours</td>
                {Array.from(Array(24)).map((item, index) => (
                  <td colSpan={2} key={index}>{index}</td>
                ))}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colSpan={9} className='bg-black' style={{textAlign:'left'}}>{'Activities'}</td>
                {Array.from(Array(48)).map((item, index) => (
                  <td style={{background:'#DDDFE1'}} key={index}>{index%2 + 1}</td>
                ))}
            </tr>
          { Object.keys(listEmployee).map((key) => (
            <tr key={'em-' + listEmployee[key].id}>
              <td colSpan={9} style={{textAlign:'left'}}>{listEmployee[key].name}</td>
              {renderTimeline(key, listEmployee[key].timeline)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ResourceTimeline
