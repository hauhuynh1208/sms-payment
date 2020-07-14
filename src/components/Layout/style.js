import { makeStyles } from '@material-ui/core';
import colors from '../../styles/colors';

export default makeStyles((theme) => ({
  //Body
  root: {
    display: 'flex',
    flex: 1,
    height: '100vh',
    flexDirection: 'row',
  },
  sideBar__bgImage: {
    width: theme.spacing(32.5),
    height: '100%',
    position: 'absolute',
  },
  //mask image
  mask__image: {
    position: 'absolute',
    height: '100%',
    width: theme.spacing(32.5),
    background: '#000',
    opacity: 0.8,
    zIndex: 999,
  },
  //Body container
  container: {
    position: 'relative',
    padding: theme.spacing(2),
    zIndex: 1000,
  },
  //item menu
  icon__feature: {
    color: colors.white,
    marginRight: theme.spacing(1),
  },
  text__feature: {
    color: colors.white,
    textDecoration: 'none',
    '&& :hover': {
      textDecoration: 'none',
    },
  },
  divider_horizontal: {
    width: '100%',
    height: 1,
    background: colors.white,
    margin: '16px 0px',
  },
  navLink: {
    display: 'block',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'black',
    },
  },
  item__select: {
    backgroundColor: colors.primary,
    '&:hover': {
      backgroundColor: colors.primary,
    },
  },
}));
