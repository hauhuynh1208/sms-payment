import { makeStyles } from '@material-ui/core/styles';
import colors from '../../styles/colors';

const styles = makeStyles((theme) => ({
  container__setting: {
    borderWidth: 1,
    boxShadow: '1px 7px 23px -15px rgba(0,0,0,0.51)',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  title__setting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text__info: {
    fontSize: 16,
    alignSelf: 'center',
    marginRight: theme.spacing(2),
  },
  input__password: {
    width: 300,
  },
  accordion__details1: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: theme.spacing(5),
  },
  accordion__details2: {
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(5),
  },
  btn__change: {
    width: '49%',
    textTransform: 'none',
    backgroundColor: '#00a3a3',
    boxShadow: 'none',
  },
  btn__exit: {
    width: '49%',
    textTransform: 'none',
    backgroundColor: '#F28262',
    boxShadow: 'none',
  },
}));

export default styles;
