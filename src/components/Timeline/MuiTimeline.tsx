// Mui
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';

const MuiTimeline = () => {

    return (
        <Timeline position='alternate'> {/* 'left' | 'right' | 'alternate' */}
            <TimelineItem>
                <TimelineOppositeContent color='text.secondary'>09:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='primary' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    City A
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color='text.secondary'>10:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='primary' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    City B
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color='text.secondary'>11:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='primary' variant='outlined' />
                </TimelineSeparator>
                <TimelineContent>
                    City C
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
};

export default MuiTimeline;

// Display a list of events in chronological order