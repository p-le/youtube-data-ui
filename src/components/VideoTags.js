import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
      },
    chip: {
      margin: theme.spacing(0.5),
    },
}));

function VideoTags(props) {
    const classes = useStyles();

    const tags = props.tags;
    return (
        <Paper component="ul" className={classes.wrapper}>
        {tags.map((tag, idx) => 
            <li key={idx}>
                <Chip
                label={tag}
                className={classes.chip}
                />
        </li>)}
        </Paper>
    )
}

export default VideoTags;