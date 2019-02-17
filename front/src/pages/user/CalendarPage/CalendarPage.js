import { withStyles, Grid } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import TasksTimeline from './TasksTimeline';
import './TasksTimeline.css';
import Header from "components/Layouts/Header";


const styles = () => ({

})

// let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.day);
// schedulerData.setLocaleMoment(moment);
// schedulerData.setResources(resources);
// schedulerData.setEvents(events);

// const defaultTimeStart = moment().hours(7);
// const defaultTimeEnd = moment().hours(22);

class CategoryListPage extends React.Component {

    render() {
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <TasksTimeline />
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default withStyles(styles)(CategoryListPage);