import { makeStyles } from '@material-ui/core/styles';
import colors from '../../styles/colors';

const styles = makeStyles((theme) => ({
  container_order: {
    overflowX: 'hidden',
  },
  form__control: {
    minWidth: theme.spacing(31.25),
    height: theme.spacing(5),
  },
  button__action: {
    marginRight: theme.spacing(1),
    height: theme.spacing(5),
    backgroundColor: colors.primary,
    color: colors.white,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: colors.hoverPrimary,
      boxShadow: 'none',
    },
    textTransform: 'none',
  },
  btn__delete: {
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
  modal__container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box__deleteRow: {
    position: 'absolute',
    width: theme.spacing(37.5),
    height: theme.spacing(18.75),
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text__modalDelete: {
    color: colors.primary,
  },
}));

export default styles;
