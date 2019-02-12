import moment from 'moment';
import React from 'react';
import Timeline, {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker
 } from 'react-calendar-timeline';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import 'react-calendar-timeline/lib/Timeline.css';
import './TasksTimeline.css';


let groups = [
  { id: 1, title: 'Lucas' }, { id: 2, title: 'Céline' }
];

const items = [
  {
    id: 0,
    title: '',
    group: 1,
    start_time: moment("2018-02-13T08:00:00Z"),
    end_time: moment("2018-02-13T12:00:00Z")
  },
  {
    id: 1,
    title: '',
    group: 1,
    start_time: moment("2018-02-13T15:00:00Z"),
    end_time: moment("2018-02-13T16:00:00Z")
  },
  {
    id: 2,
    title: '',
    group: 2,
    start_time: moment("2018-02-13T09:00:00Z"),
    end_time: moment("2018-02-13T11:00:00Z"),
  }
  // ,
  // {
  //   id: 3,
  //   title: '',
  //   group: 2,
  //   start_time: moment("2018-02-13T10:00:00Z"),
  //   end_time: moment("2018-02-13T13:00:00Z"),
  // }
];

class TasksTimelineTimeline extends React.Component {

  constructor(props) {
    super(props);

    this.previousChange= undefined;

    this.state = {
      timeMarkerStart: undefined,
      timeMarkerEnd: undefined,
      timeStart: moment("2018-02-13").hours(8),
      timeEnd: moment("2018-02-13").hours(23),
      beginClicking: true,
      selectedTimeStart: undefined,
      selectedTimeEnd: undefined,
      isFirstMarker: true,
    }
  }

  onTimeChange = (visibleTimeStart, visibleTimeEnd, updateScrollCanvas) => {
    
    updateScrollCanvas(this.state.timeStart.valueOf(), this.state.timeEnd.valueOf());

    console.log("hover")
  }

  onCanvasClick = (groupId, time, e) => {
    if(this.state.isFirstMarker) {
      this.setState({
        timeMarkerStart: time,
        timeMarkerEnd: undefined,
        isFirstMarker:false,
      });
    } else {
      this.setState({
        timeMarkerEnd: time,
        isFirstMarker:true,
      });
    }
    


    console.log(groupId);
    console.log(time);
    console.log(e);
  }

  previousDay = () => {
    let timeStartCopy = Object.assign(this.state.timeStart);
    let timeEndCopy = Object.assign(this.state.timeEnd);
    this.setState({timeStart: timeStartCopy.subtract(1, 'days'), timeEnd: timeEndCopy.subtract(1, 'days')});
    // this.onPrevClick()
  }

  nextDay = () => {
    let timeStartCopy = Object.assign(this.state.timeStart);
    let timeEndCopy = Object.assign(this.state.timeEnd);
    this.setState({timeStart: timeStartCopy.add(1, 'days'), timeEnd: timeEndCopy.add(1, 'days')});
    // this.onNextClick()
  }

  mouseDown = (e) => {
    console.log("mouseDown");
    console.log(e.target);
  }

  mouseUp = (e) => {
    console.log("mouseUp");
    console.log(e.target);
  }

  render() {
    
    const { timeStart, timeEnd, timeMarkerStart, timeMarkerEnd } = this.state;
    return (
      <Grid container direction="row" spacing={16} justify="center">
        <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={this.previousDay}>
            {"< Jour Précédent"}
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={this.nextDay}>
              {"Jour Suivant >"}
            </Button>
        </Grid>
        <Grid item xs={10} >
          <div onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>
            <Timeline
              clickTolerance={10000}
              scrollRef={el => (this.scrollRef = el)}
              groups={groups}
              items={items}
              stackItems
              sidebarContent={<div>Utilisateurs</div>}
              visibleTimeStart={timeStart.valueOf()}
              visibleTimeEnd={timeEnd.valueOf()}
              canMove={false}
              canResize={false}
              onBoundsChange={this.onBoundsChange}
              itemTouchSendsClick={true}
              onCanvasClick={this.onCanvasClick}
              onTimeChange={this.onTimeChange}
            >
              <TimelineMarkers>
                {timeMarkerStart ? <CustomMarker date={timeMarkerStart}/> : undefined}
                {timeMarkerEnd ? <CustomMarker style={{color:'red'}} date={timeMarkerEnd}> 
                </CustomMarker>
                : undefined}
              </TimelineMarkers>
            </Timeline>
          </div>

        </Grid>
      </Grid>

    );
  }
}

export default (TasksTimelineTimeline);

//Pour changer la couleur, surcharger la classe CSS "rct-label-group". Elle est liée aux classe "react-calendar-timeline .rct-header"