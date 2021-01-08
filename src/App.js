import axios from 'axios'
import { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import VideoStats from './components/VideoStats';
import VideoTags from './components/VideoTags';
import VideoSearchInput from './components/VideoSearchInput';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(2),
  }
}));

function App() {
  const classes = useStyles();

  const [videoId, setVideoId] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isFailed, setFailed] = useState(false);
  const [details, setDetails] = useState(null);

  const handleChange = (event) => {
    setVideoId(event.target.value);
  };

  useEffect(() => {
    if (!videoId || videoId.length < 11) return;

    setLoading(true);
    const apiURL = `http://192.168.33.20:9000/test/video/${videoId}`;
    axios.get(apiURL).then((res) => {
      const details = res.data;
      console.log(details)

      if (Object.keys(details).length === 0) {
        setFailed(true);
        setDetails(null);
      } else {
        setDetails(details);
        setFailed(false);
      }
      setLoading(false);
      
    });
  }, [videoId]);

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <VideoSearchInput handleChange={handleChange} />
      { (!details && !isLoading && isFailed) &&
        <Alert className={classes.wrapper} severity="error">Invalid Youtube Video ID. Please check!!!!</Alert>
      }
      { (!details && isLoading) &&
        <CircularProgress className={classes.wrapper} />
      }
      { (details && !isLoading && !isFailed) &&
        <Fragment>
          <VideoStats stats={details.stats} />
          <VideoTags tags={details.tags} />
        </Fragment>
      }
    </Container>
  );
}

export default App;
