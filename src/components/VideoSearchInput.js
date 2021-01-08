import TextField from '@material-ui/core/TextField';

function VideoSearchInput(props) {
  const handleChange = props.handleChange;

  return (
    <form noValidate autoComplete="lg">
        <TextField 
            id="outlined-basic"
            label="Youtube Video ID" 
            onChange={handleChange}
            variant="outlined" />
    </form>
  )
}

export default VideoSearchInput;