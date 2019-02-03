import { withStyles } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import BigCalendar from 'react-big-calendar';

const styles = () => ({

})

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const myEventsList = [{
    title: "pouet",
    start: new Date('December 17, 2018 03:24:00'),
    end: new Date('December 18, 2018 10:24:00'),
    allDay: true
}]

class CategoryPage extends React.Component {

    render() {
        return (
            <div >
                <BigCalendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div >
        )
    }
}

export default withStyles(styles)(CategoryPage);