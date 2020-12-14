import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './card.css'

const Cards = ({data :{confirmed,recovered,deaths,lastUpdate}}) => {
    if(! confirmed){
        return "loading...."
    }
    
    return (
        <div className="card-container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3}className="card" id="infected">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                             Infected 
                           </Typography>
                        <Typography variant="h5">
                          <CountUp
                          start={0}
                         end={confirmed.value}
                         separator={","}
                          />
                           </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                           </Typography>
                        <Typography variant="body2">
                            Number of Active Cases of Covid19
                           </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card" id="recovered">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                           Recovered
                           </Typography>
                        <Typography variant="h5">
                        <CountUp
                          start={0}
                         end={recovered.value}
                         separator={","}
                          />
                           </Typography>
                        <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                           </Typography>
                        <Typography variant="body2">
                            Number of Recoveries from Covid19
                           </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card"id="deaths">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                           Deaths
                           </Typography>
                        <Typography variant="h5">
                        <CountUp
                          start={0}
                         end={deaths.value}
                         separator={","}
                          />
                           </Typography>
                        <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                           </Typography>
                        <Typography variant="body2">
                            Number of Deaths caused by Covid19
                           </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
