import { makeStyles } from '@material-ui/core/styles';
import colors from '../../styles/colors';

const styles = makeStyles((theme) => ({
  container__setting: {
    boxShadow: '1px 7px 23px -15px rgba(0,0,0,0.51)',
    padding: theme.spacing(5),
    margin: theme.spacing(5),
    borderTop: `4px solid ${colors.primary}`,
    borderRadius: theme.spacing(1.25),
  },
  btn__agree: {
    width: theme.spacing(12.5),
    textTransform: 'none',
    backgroundColor: colors.primary,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: colors.hoverPrimary,
      boxShadow: 'none',
    },
    marginRight: theme.spacing(2),
  },
  btn__exit: {
    width: theme.spacing(12.5),
    textTransform: 'none',
    backgroundColor: colors.secondary,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: colors.hoverSecondary,
      boxShadow: 'none',
    },
  },
  input__style: {
    marginTop: theme.spacing(1),
  },
}));

export default styles;
