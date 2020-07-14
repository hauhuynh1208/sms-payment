import { makeStyles } from '@material-ui/core/styles';
import colors from '../../styles/colors';

const styles = makeStyles((theme) => ({
  container__setting: {
    boxShadow: '1px 7px 23px -15px rgba(0,0,0,0.51)',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    borderTop: `4px solid ${colors.primary}`,
  },
  title__setting: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  input__password: {
    minWidth: theme.spacing(37.5),
  },
  accordion__details1: {
    width: '100%',
    paddingBottom: theme.spacing(5),
  },
  accordion__details2: {
    width: theme.spacing(62.5),
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(5),
  },
  btn__change: {
    width: '49%',
    textTransform: 'none',
    backgroundColor: colors.primary,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: colors.hoverPrimary,
      boxShadow: 'none',
    },
  },
  btn__exit: {
    width: '49%',
    textTransform: 'none',
    backgroundColor: colors.secondary,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: colors.hoverSecondary,
      boxShadow: 'none',
    },
  },
  text__error: {
    alignSelf: 'flex-end',
    width: theme.spacing(37.5),
    paddingTop: theme.spacing(2),
  },
  text__success: {
    alignSelf: 'flex-end',
    color: colors.primary,
    width: theme.spacing(37.5),
    paddingTop: theme.spacing(2),
  },
  container__input: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default styles;
