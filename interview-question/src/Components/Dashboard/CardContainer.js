import React from 'react'
import ServiceCard from './ServiceCard';
import Grid from "@material-ui/core/Grid";

export default function CardContainer(props) {
    return (
        <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
        >
            <Grid container alignItems="center" item xs={11} style={{minHeight: "100vh"}}>
            <Grid container spacing={3}>
                {Object.keys(props.data).map((item) => {
                return (
                    <Grid lg={2} item>
                    <ServiceCard
                        name={item}
                        data={props.data[item]}
                    ></ServiceCard>
                    </Grid>
                );
                })}
            </Grid>
            </Grid>
        </Grid>
    );
}
