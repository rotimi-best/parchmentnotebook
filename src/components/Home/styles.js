import colors from "../../constants/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: '8px 0',
      width: '100%',
    },
  },
  userStatsRoot: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    // alignItems: "center",
    padding: '8px 16px 0px',
    borderRadius: 8,
    margin: '10px 0'
  },
  userStatsBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerWithAction: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 5
  },
  daysPrayed: {
    textAlign: "center"
  },
  daysPrayedStats: {
    display: "flex",
    alignItems: "baseline"
  },
  userStat: {
    margin: "20px 0",
    padding: "0 20px",
    textAlign: "center"
  },
  userStatsCaption: {
    // fontFamily: `"Lato script=all rev=1"`,
    fontStyle: "bold",
    color: colors.grey,
    fontSize: 13
  },
  divider: {
    borderRight: `1px solid #dadada`
  },
  bibleQuote: {
    color: '#202124',
    letterSpacing: '.01428571em',
    lineHeight: '1.25rem',
    fontFamily: 'Roboto,Arial,sans-serif',
    textAlign: 'start',
    marginBottom: 5,
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center'
  },
  bibleVerse: {
    color: colors.grey
  },
  prayersForToday: {
    margin: '10px 0',
    padding: 20
  },
  formLabel: {
    paddingTop: '10px',
    fontSize: 18,
    fontStyle: 'normal',
  },
  formHelperText: {
    paddingBottom: 15
  },
  formControlRoot: {
    width: '100%'
  },
  cardActionRoot: {
    padding: 0,
    fontSize: 16
  },
  listRoot: {
    width: '100%',
    padding: 0,
    '& .MuiListItem-root': {
      padding: '5px 0'
    },
    '& .MuiListItemAvatar-root': {
      'min-width': 'unset',
      marginRight: 10
    }
  },
  inline: {
    display: 'inline'
  }
}));
