import React, { useEffect, useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import JobService from "../services/jobService";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobService = new JobService();
    jobService.getJobs().then((result) => {
      setJobs(result.data.data);
    });
  }, []);

  return (
    <div>
      <Menu pointing vertical>
        <Container>
        <Menu.Item header color='violet'>İş Pozisyonları</Menu.Item>
          {
              jobs.map(job=>(
                <Menu.Item>{job.positionName}</Menu.Item>
              ))
          }
        </Container>
      </Menu>
    </div>
  );
}
