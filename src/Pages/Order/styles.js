import { makeStyles } from '@material-ui/core';
import colors from '../../styles/colors';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },

  ///

  formControl: {
    minWidth: 250,
    height: 40,
    '& > .MuiOutlinedInput-input': {
      padding: '0px !important',
      paddingRight: theme.spacing(2),
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button__action: {
    marginRight: 8,
    height: 40,
    backgroundColor: '#00a3a3',
    color: 'white',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#008282',
      boxShadow: 'none',
    },
  },
  button__create: {
    position: 'absolute',
    left: 0,
    top: -100,
  },
  btn__change: {
    width: 100,
    textTransform: 'none',
    backgroundColor: '#00a3a3',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#008282',
      boxShadow: 'none',
    },
    marginRight: theme.spacing(2),
  },
  btn__exit: {
    width: 100,
    textTransform: 'none',
    backgroundColor: '#F28262',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#D97558',
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
  text__link: {
    color: 'white',
    textDecoration: 'none',
  },
  text__linkSelection: {
    color: 'black',
    textDecoration: 'none',
  },
  link__action: {
    textDecoration: 'none',
  },
  text_modalDelete: {
    color: '#00a3a3',
  },
}));
