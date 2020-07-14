import { makeStyles } from '@material-ui/core/styles';
import colors from '../../styles/colors';

const styles = makeStyles((theme) => ({
  chart__dashboard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(8),
    zIndex: 0,
  },
  form__chart: {
    width: theme.spacing(31.25),
  },
  mask__trialVersion: {
    position: 'absolute',
    height: theme.spacing(5),
    width: theme.spacing(10),
    backgroundColor: colors.white,
    marginTop: -theme.spacing(4),
  },
  chart__point: {
    cursor: 'pointer',
  },
}));

export default styles;
