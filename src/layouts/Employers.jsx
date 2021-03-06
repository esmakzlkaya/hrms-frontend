import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function Employers() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Menu pointing vertical>
        <Container>
          <Menu.Item header color="teal">
            Firmalar
          </Menu.Item>
          {employers.map((employer) => (
            <Menu.Item>
              <Link to={`/job-adverts/${employer.id}`}>
                {employer.companyName}
              </Link>
            </Menu.Item>
          ))}
        </Container>
      </Menu>
    </div>
  );
}
