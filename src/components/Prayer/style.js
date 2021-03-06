import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  containerRoot: {
    padding: 0,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  listRoot: {
    width: '100%',
    padding: 0,
    '& .MuiTextField-root': {
      flexGrow: 1,
    },
    '& .MuiListItem-root': {
      padding: '5px 10px 10px'
    },
    '& .MuiListItemAvatar-root': {
      'min-width': 'unset',
      marginRight: 10
    }
  },
  headerText: {
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 150,
    margin: '15px 0'
  }
}));
