import React from 'react'
import ServiceCard from './ServiceCard';
import Grid from "@material-ui/core/Grid";

export default function CardContainer(props) {
    return (
      <div>
        <Grid container spacing={3}>
          {Object.keys(props.data).map((item) => {
            return (
              <Grid lg={2} item>
                <ServiceCard name={item} data={props.data[item]}></ServiceCard>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
}
