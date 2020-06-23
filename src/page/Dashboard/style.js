import { makeStyles } from '@material-ui/core/styles'
import colors from '../../util/colors'

const styles = makeStyles((theme) => ({ 
    root__dashboard:{
        width: '100%',
        height: '100%',
        padding: theme.spacing(5)
    },
    chart__dashboard:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing(8)
    },
    form__chart:{
        width: 250
    },
    

}))


export default styles