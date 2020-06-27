import React from 'react'
import clsx from 'clsx'
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    // Link,
  } from '@material-ui/core'
import {Link} from 'react-router-dom'
import {AcUnit, Dashboard, Email, AccountTree, Info, Settings} from '@material-ui/icons';
import useStyles from './style'
import colors from '../../styles/colors'

const Layout = props =>{
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const classes  = useStyles()
    console.log(selectedIndex)
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
                            <Link to='/' className={clsx(classes.link, classes.link__hover)} >
                             <ListItem button 
                                selected={selectedIndex === 0}
                                onClick={() => setSelectedIndex(0)}
                                style={{ color: selectedIndex === 0 ? classes.item__select : ''}}
                                >
                                    <ListItemIcon>
                                        <Dashboard className={classes.icon__feature}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" style={{ color: colors.white }}/>
                                </ListItem>
                              </Link>
                              <Link to="/sms" className={clsx(classes.link, classes.link__hover)}>
                                <ListItem button
                                    selected={selectedIndex === 1}
                                    onClick={() => setSelectedIndex(1)}
                                >
                                    <ListItemIcon>
                                        <Email className={classes.icon__feature}/>
                                    </ListItemIcon>
                                    <ListItemText primary="SMS" style={{ color: colors.white }}/>
                                </ListItem>
                             </Link>
                             <Link to="/account" className={clsx(classes.link, classes.link__hover)}>
                                <ListItem button
                                    selected={selectedIndex === 2}
                                    onClick={() => setSelectedIndex(2)}
                                >
                                    <ListItemIcon>
                                        <AccountTree className={classes.icon__feature}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Account" style={{ color: colors.white }}/>
                                </ListItem>
                            </Link>
                            <Link to="/about" className={clsx(classes.link, classes.link__hover)}>
                                <ListItem button
                                    selected={selectedIndex === 3}
                                    onClick={() => setSelectedIndex(3)}
                                >
                                    <ListItemIcon>
                                        <Info className={classes.icon__feature}/>
                                    </ListItemIcon>
                                    <ListItemText primary="About" style={{ color: colors.white }}/>
                                </ListItem>
                            </Link>
                            <Link to="/setting" className={clsx(classes.link, classes.link__hover)}>
                                <ListItem button
                                    selected={selectedIndex === 4}
                                    onClick={() => setSelectedIndex(4)}
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