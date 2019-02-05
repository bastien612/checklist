import { withStyles, Grid } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'

const styles = () => ({

})

const groups = [{ id: 1, title: 'Thibaud' }, { id: 2, title: 'Lucas' }]
const resources = [
    {
        id: 'r1',
        name: 'Resource1',
    },
    {
        id: 'r2',
        name: 'Resource2',
    }]
const events = [
    {
        id: 1,
        start: '2017-12-18 09:30:00',
        end: '2017-12-19 23:30:00',
        resourceId: 'r1',
        title: 'I am finished',
        bgColor: '#D9D9D9'
    },
    {
        id: 2,
        start: '2017-12-18 12:30:00',
        end: '2017-12-26 23:30:00',
        resourceId: 'r2',
        title: 'I am not resizable',
        resizable: false
    },
    {
        id: 3,
        start: '2017-12-19 12:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r3',
        title: 'I am not movable',
        movable: false
    },
    {
        id: 4,
        start: '2017-12-19 14:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r1',
        title: 'I am not start-resizable',
        startResizable: false
    },
    {
        id: 5,
        start: '2017-12-19 15:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r2',
        title: 'R2 has recurring tasks every week on Tuesday, Friday',
        rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
        bgColor: '#f759ab'
    }
];

let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.day);
schedulerData.setLocaleMoment(moment);
schedulerData.setResources(resources);
schedulerData.setEvents(events);

// const defaultTimeStart = moment().hours(7);
// const defaultTimeEnd = moment().hours(22);

class CategoryPage extends React.Component {

    render() {
        return (
            <Grid container justify="center" alignItems="center">

                <Grid item xs={10}>
                    <Scheduler
                        schedulerData={schedulerData}

                    />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(CategoryPage);