import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Button, Dropdown } from 'semantic-ui-react'
export default function Navi() {
  return (
    <div>
      <Segment inverted>
      <Menu  inverted>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='messages'
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </Segment>
    </div>
  );
}
