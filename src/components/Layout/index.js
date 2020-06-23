import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Link
  } from '@material-ui/core'
import {AcUnit, Dashboard, Email, AccountTree, Info, Settings} from '@material-ui/icons';
import useStyles from './style'
import colors from '../../util/colors'

const Layout = props =>{


    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const theme = useTheme()
    const classes  = useStyles()
    return(
        <div className={classes.root}>
            <Box minWidth={260}>
                <Box className={classes.container__sideBar} 
                    // style={{
                    // backgroundImage: props.bgImage
                    //     ? `url(${props.bgImage})`
                    //     : `url(${activity1})`,
                    // }} 
                    style={{
                        backgroundImage: `url(${'https://www.luavietours.com/datafiles/galagy/15374395734631_tour_nam_du_2-ngayjpg.jpg'})`
                    }}
                >
                    <Box className={classes.mask__image}></Box>
                    <Box className={classes.container}>
                    
                        <Box py={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center" alignContent="center">
                            <AcUnit style={{ fontSize: 56 }} className={classes.icon__feature}/>
                            <Typography variant="h5" style={{color: colors.white}}>
                                Payment Service
                            </Typography>
                        </Box>

                        <Box className={classes.divider_horizontal}/>

                        <List component="nav" aria-label="main mailbox folders" >
                            <Link href="/" className={classes.link__hover} >
                             <ListItem button 
                                selected={selectedIndex === 0}
                                onClick={(event) => handleListItemClick(event, 0)}
                                style={{ color: selectedIndex === 0 ? classes.item__select : ''}}
                                >
                                    <ListItemIcon>
                                        <Dashboard className={classes.icon__feature}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" style={{ color: colors.white }}/>
                                </ListItem>
                          
                              </Link>
                              <Link href="sms" className={classes.link__hover}>
                                <ListItem button
                                    selected={selectedIndex === 1}
                                    selectedColor="red"
                                    onClick={(event) => handleListItemClick(event, 1)}
                                >
                                    <ListItemIcon>
                                        <Email className={classes.icon__feature}/>
                                    </ListItemIcon>
                                    <ListItemText primary="SMS" style={{ color: colors.white }}/>
                                </ListItem>
                             </Link>
                             <Link href="/account" className={classes.link__hover}v>
                                <ListItem button
                                    selected={selectedIndex === 2}
                                    onClick={(event) => handleListItemClick(event, 2)}
                                >
                                    <ListItemIcon>
                                        <AccountTree className={classes.icon__feature}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Account" style={{ color: colors.white }}/>
                                </ListItem>
                            </Link>
                            <Link href="/about" className={classes.link__hover}>
                                <ListItem button
                                    selected={selectedIndex === 3}
                                    onClick={(event) => handleListItemClick(event, 3)}
                                >
                                    <ListItemIcon>
                                        <Info className={classes.icon__feature}/>
                                    </ListItemIcon>
                                    <ListItemText primary="About" style={{ color: colors.white }}/>
                                </ListItem>
                            </Link>
                            <Link href="/setting" className={classes.link__hover}>
                                <ListItem button
                                    selected={selectedIndex === 4}
                                    onClick={(event) => handleListItemClick(event, 4)}
                                >
                                    <ListItemIcon>
                                        <Settings className={classes.icon__feature}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Setting" style={{ color: colors.white }}/>
                                </ListItem> 
                            </Link>
                        </List>
                    </Box>  
                </Box>  
            </Box>
            {props.children}
        </div>
    )
    
}

export default Layout