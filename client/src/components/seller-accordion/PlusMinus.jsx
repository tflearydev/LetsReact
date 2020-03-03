import React, { Component } from "react";
import { Collapse, Icon, Select } from "antd";
import "./PlusMinus.scss";

const { Panel } = Collapse;
// const { Option } = Select;

function callback(key) {
  console.log(key);
}

const text = `
When posting a new product on Generation parts it’s important to remember ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
  `;

//   function customExpandIcon(props) {
//     if (props.expanded) {
//         return <a style={{ color: 'black' }} onClick={e => {
//             props.onExpand(props.record, e);
//         }}><Icon type="minus" /></a>
//     } else {
//         return <a style={{ color: 'black' }} onClick={e => {
//             props.onExpand(props.record, e);
//         }}><Icon type="plus" /></a>
//     }
//   }

//   const genExtra = () => (
//     <Icon
//       type="setting"
//       onClick={event => {
//
//         event.stopPropagation();
//       }}
//     />
//   );

class PlusMinus extends Component {
  state = {
    expandIconPosition: "right"
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  //    customExpandIcon(props) {
  //         if (props.expanded) {
  //             return <a style={{ color: 'black' }} onClick={e => {
  //                 props.onExpand(props.record, e);
  //             }}><Icon type="minus" /></a>
  //         } else {
  //             return <a style={{ color: 'black' }} onClick={e => {
  //                 props.onExpand(props.record, e);
  //             }}><Icon type="plus" /></a>
  //         }
  //       }

  render() {
    const { expandIconPosition } = this.state;
    return (
      <div>
        <Collapse
          // defaultActiveKey={['1']}
          onChange={callback}
          expandIcon={({ isActive }) => (
            <Icon
              type="plus"
              style={{ color: "#408FC6", fontSize: "19px", fontWeight: "700" }}
              width="50px"
              rotate={isActive ? 45 : 0}
              // fontSize="30px"
            />
          )}
          // expandIcon={(props) => this.customExpandIcon(props)}
          expandIconPosition={expandIconPosition}
          className="plus-minus"
        >
          <Panel
            header="New product post info"
            key="1"
            style={{
              fontWeight: "600",
              fontSize: "18px",
              color: "#000000 !important",
              letterSpacing: "0"
            }}
          >
            <div
              style={{
                fontWeight: "400",
                fontSize: "16px",
                color: "#9D9C9A",
                marginTop: "-15px",
                marginBottom: "15px"
              }}
            >
              {text}
            </div>
          </Panel>
          <Panel
            header="Posting tips"
            key="2"
            style={{
              fontWeight: "600",
              fontSize: "18px",
              color: "#000000 !important",
              letterSpacing: "0"
            }}
          >
            <div
              style={{
                fontWeight: "400",
                fontSize: "18px",
                color: "#9D9C9A",
                marginTop: "-15px",
                marginBottom: "15px"
              }}
            >
              {text}
            </div>
          </Panel>
          {/* <Panel header="This is panel header 3" key="3" style={{fontWeight: '600', fontSize: '18px'}}>
              <div style={{fontWeight: '400', fontSize: '18px', color: '#9D9C9A',  marginTop: '-15px', marginBottom: '15px'}}>{text}</div>
            </Panel> */}
        </Collapse>
        <br />
        {/* <span>Expand Icon Position: </span>
          <Select value={expandIconPosition} onChange={this.onPositionChange}>
            <Option value="left">left</Option>
            <Option value="right">right</Option>
          </Select> */}
      </div>
    );
  }
}

export default PlusMinus;
