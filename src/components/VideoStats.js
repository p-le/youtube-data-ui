import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function VideoStats(props) {
  const stats = props.stats;

  const format = (num) => {
    return new Intl.NumberFormat().format(num);
  }

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">View</TableCell>
            <TableCell align="center">Comment</TableCell>
            <TableCell align="center">Favorite</TableCell>
            <TableCell align="center">Like</TableCell>
            <TableCell align="center">Dislike</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">{format(stats.viewCount)}</TableCell>
            <TableCell align="center">{format(stats.commentCount)}</TableCell>
            <TableCell align="center">{format(stats.favoriteCount)}</TableCell>
            <TableCell align="center">{format(stats.likeCount)}</TableCell>
            <TableCell align="center">{format(stats.dislikeCount)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default VideoStats;