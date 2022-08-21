import dynamic from "next/dynamic";
import { memo } from "react";

let TreeNode;

if (process.browser) {
  TreeNode = dynamic(() => import("react-organizational-chart").then((mod) => mod.TreeNode));
}

const TreeItem = ({ header, childItems, onChange }) => {
  return <TreeNode label={header}>{childItems}</TreeNode>;
};

export default memo(TreeItem);
