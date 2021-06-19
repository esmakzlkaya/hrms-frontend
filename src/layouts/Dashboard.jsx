import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import EmployerDetail from "../pages/EmployerDetail";
import JobAdverts from "../pages/JobAdverts";
import Employers from "./Employers";
import Jobs from "./Jobs";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Jobs />
            <br />
            <Employers/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={JobAdverts}/>
            <Route exact path="/job-adverts" component={JobAdverts}/>
            <Route exact path="/job-adverts/:employerId" component={EmployerDetail}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
