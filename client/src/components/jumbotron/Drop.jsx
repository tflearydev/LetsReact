import React from "react";
import { Select } from "antd";
import "./Drop.scss";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

function Drop({data, onChange}) {
  return (
  <>
    <Select
    showSearch
    // style={{ width: 291 }}
    placeholder="Search by XXXX"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    className="showSearch"
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {
      data.map((obj) => (<Option key={obj.id} value = {obj.id}>{obj.name}</Option>))

    }
    
  </Select>
  </>

  )

}

export default Drop;
