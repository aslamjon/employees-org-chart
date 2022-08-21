import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import TreeItem from "../components/treeItem";
import { get, isEmpty } from "lodash";

const StyledNode = styled.div`
  padding: 8px 15px;
  border-radius: 4px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #dfe3e8;
  box-shadow: 0px 15px 24px -16px rgba(15, 15, 15, 0.2);
`;

let Tree;

if (process.browser) {
  Tree = dynamic(() => import("react-organizational-chart").then((mod) => mod.Tree));
}

let childKey = "children";
let nameKey = "person.name";
let idKey = "id";

const StyleItem = styled.div`
  width: 150px;
  margin-left: 15px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dfe3e8;
  box-shadow: 0px 15px 24px -16px rgba(15, 15, 15, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
  .name {
    font-weight: 500;
    margin: 10px 0;
  }
  .department {
    font-weight: 300;
    font-size: 13px;
    margin-top: 5px;
  }
`;

const ChildrenTree = (options, ids = []) =>
  !isEmpty(options) &&
  options?.map((item) => (
    <TreeItem
      key={item[idKey]}
      header={
        <StyleItem>
          <div className="img">
            <img src="avator.svg" alt="" />{" "}
          </div>
          <div className="name">{get(item, nameKey, "")}</div>
          <div className="department">{get(item, "person.department", get(item, "person.department.name", ""))}</div>
        </StyleItem>
      }
      childItems={ChildrenTree(get(item, childKey, []))}
    />
  ));

const Body = ({ data }) => (
  <Tree
    lineHeight="40px"
    lineWidth={"2px"}
    lineColor={"#dfe3e8"}
    lineBorderRadius={"10px"}
    nodePadding={"10px"}
    label={<StyledNode>Root</StyledNode>}
  >
    {ChildrenTree(data.employees)}
  </Tree>
);

const TreeComponent = (props) => {
  return typeof window !== "undefined" && <Body {...props} />;
};

export default TreeComponent;
