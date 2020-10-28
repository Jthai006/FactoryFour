import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minHeight: "180px",
    width: '100%'
  },
});

export default function ServiceCard(props) {
  const classes = useStyles();
  let status = '';
  let color = '';
  let timestamp = '';
  if (props.data.message !== undefined) {
    if (props.data.message.includes("Healthy")) {
      status = "Healthy";
      color = "Green";
      let date = new Date(props.data.time );
      let hours = date.getHours();
      let minutes = "0" + date.getMinutes();
      let seconds = "0" + date.getSeconds();
      timestamp = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    } else {
      status = "Error";
      color = "Red";
    }
  }
  
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.name.toUpperCase()}
        </Typography>
        <Typography
          style={{ color: "White", backgroundColor: color }}
          color="textSecondary"
        >
          {status}
        </Typography>
        <Typography variant="body2" component="p">
          {props.data.hostname}
        </Typography>
        <Typography variant="body2" component="p">
          {timestamp}
        </Typography>
        {status === "Error" ? (
          <div>
            <Typography style={{ color: "Red" }} variant="h6" component="p">
              OUTAGE
            </Typography>
            <Typography style={{ color: "Red" }} variant="body2" component="p">
              {props.data.error.status}
            </Typography>
            <Typography style={{ color: "Red" }} variant="body2" component="p">
              {props.data.error.statusText}
            </Typography>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
