import React, { useEffect, useState } from "react";
import { Button, Icon, Input, Menu, Table } from "semantic-ui-react";
import JobAdvertsService from "../services/jobAdvertService";

export default function JobAdverts() {
  const [jobAdverts, setjobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertsService = new JobAdvertsService();
    jobAdvertsService
      .getJobAdverts()
      .then((result) => setjobAdverts(result.data.data));
  }, []);

  return (
    <div>
      <div style={{textAlign:"right"}}>
        <Input name="releaseDate" type="date"  placeholder="Başlangıç Tarihi" />
        <Input name="deadline" type="date" placeholder="Kapanış Tarihi" />
        <Button primary>Tarihe Göre Ara..</Button>
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Firma Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>İlan Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Kapanış Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert) => (
            <Table.Row>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.job.positionName}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionNumber}</Table.Cell>
              <Table.Cell>{jobAdvert.releaseDate}</Table.Cell>
              <Table.Cell>{jobAdvert.deadline}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
