import React from "react";
import { Menu, Dropdown, Button, Icon, message } from "antd";
import global from "../../global.png";
import "./Language.scss";
// import './App.scss';

// function Drop() {

//   return (

//   <div className="App">
//     <Button type="primary">Button</Button>
//   </div>
//   )

// };

// export default Drop;

function handleSpanishClick(e) {
  message.info("You have switched to Spanish");
  console.log("click", e);
}

function handleGermanClick(e) {
  message.info("You have switched to German");
  console.log("click", e);
}

function handleLatinClick(e) {
  message.info("You have switched to Latin");
  console.log("click", e);
}

const menu = (
  <Menu>
    <Menu.Item key="1" onClick={handleSpanishClick}>
      <Icon type="user" />
      Spanish
    </Menu.Item>
    <Menu.Item key="2" onClick={handleGermanClick}>
      <Icon type="user" />
      German
    </Menu.Item>
    <Menu.Item key="3" onClick={handleLatinClick}>
      <Icon type="user" />
      Latin
    </Menu.Item>
  </Menu>
);

function Language() {
  return (
    <>
      {/* <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
      Dropdown
    </Dropdown.Button> */}

      <Dropdown overlay={menu}>
        <Button className="antbtn">
          <img src={global} alt="" className="global"></img> English (US)
        </Button>
      </Dropdown>
    </>
  );
}

export default Language;
