import { makeStyles } from '@material-ui/core'
import colors from '../../util/colors'

export default makeStyles((theme) => ({ 
    //Body
     root :{
        //  width: '100wh',
        //  height: '100vh',
         display: 'flex',
         flexDirection: 'row'
     },
     container__sideBar:{
         position: 'relative',
        //  width: theme.spacing(40),
         height: '100vh',
         background: colors.dark1,
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
   
     },
     //mask image
     mask__image:{
         position: 'absolute',
         height: '100%',
         width: theme.spacing(32.5),
         background: '#000',
         opacity: 0.8,
         zIndex: 999
     },
     //Body container
     container:{
       // width: theme.spacing(32.5),
        //height: '100vh',
        position: 'relative',
        padding: theme.spacing(2),
        zIndex: 1000
         
     },
    //  item__menu:{
    //      width: theme.spacing(25),
    //      "&& :hover":{
    //         backgroundColor: colors.primary,
    //         borderRadius: 5,
            
    //      },
    //      ' .MuiListItem-root > .Mui-selected' :{
    //          backgroundColor: 'red'
    //      },
    //     //  "&& :active":{
    //     //     backgroundColor: colors.primary,
    //     //     borderRadius: 5,
    //     //     paddingRight: theme.spacing(1)
    //     //  }
    //  },
     icon__feature:{
         color: colors.white,
         marginRight: theme.spacing(1)
     },
     text__feature:{
         color: colors.white,
         textDecoration: 'none',
         '&& :hover':{
            textDecoration: 'none',
        }
     },
     divider_horizontal:{
         width: '100%',
         height: 1,
         background: colors.white,
         margin: '16px 0px',
     },

     item__select:{
        backgroundColor: colors.primary,
        borderRadius: 5,
     },
     link__hover:{
         
         '&& :hover':{
            backgroundColor: 'black !important',
            borderRadius: '5px !important',
            paddingRight: 5,
            opacity: 0.5,
        }
     }

}))