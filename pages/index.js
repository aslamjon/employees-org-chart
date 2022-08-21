// import Head from "next/head";
// import Image from "next/image";
import { get, isNull } from "lodash";
import dynamic from "next/dynamic";
import React from "react";

// import SimpleBar from "simplebar-react";
// import TreeComponent from "../components/tree";

// import { orgData } from "./Tree";

let data = {
  employees: [
    {
      id: "05247ea3-c2d2-46d3-af67-ea8a6515e7f5",
      person: {
        id: "05247ea3-c2d2-46d3-af67-ea8a6515e7f5",
        name: "Cynthia Aliaga",
        last_name: "Aliaga",
        title: "Founder",
        location: "Netherlands",
        start_date: "2021-11-24T01:51:05.222Z",
        corporate_email: "cynthia@givver.io",
        totalReports: 3,
        department: "Management",
      },
      line_manager_id: null,
      personal_linkedin: null,
      personal_twitter: null,
      status: 1,
    },
    {
      id: "529b2b02-7fb8-4f14-9a42-b9069a989bbc",
      person: {
        id: "529b2b02-7fb8-4f14-9a42-b9069a989bbc",
        name: "Matthew Boyle",
        last_name: "Boyle",
        title: "Senior Software Engineer",
        location: "UK",
        start_date: "2021-06-12T14:03:51.291Z",
        corporate_email: "matthew.boyle@givver.io",
        totalReports: 2,
      },
      line_manager_id: "05247ea3-c2d2-46d3-af67-ea8a6515e7f5",
      personal_linkedin: null,
      personal_twitter: null,
      status: 1,
      department: {
        id: "bd1b117b-751d-4e26-9e60-58ac05e7e7ea",
        name: "engineering",
      },
      children: [
        {
          id: "529b2b02-7fb8-4f14-9a42-b9069a989bbc",
          person: {
            id: "529b2b02-7fb8-4f14-9a42-b9069a989bbc",
            name: "Matthew Boyle",
            last_name: "Boyle",
            title: "Senior Software Engineer",
            location: "UK",
            start_date: "2021-06-12T14:03:51.291Z",
            corporate_email: "matthew.boyle@givver.io",
            totalReports: 2,
          },
          line_manager_id: "05247ea3-c2d2-46d3-af67-ea8a6515e7f5",
          personal_linkedin: null,
          personal_twitter: null,
          status: 1,
          department: {
            id: "bd1b117b-751d-4e26-9e60-58ac05e7e7ea",
            name: "engineering",
          },
        },
        {
          id: "178b7d6a-2067-4d91-ba86-36c002ce97ec",
          person: {
            id: "178b7d6a-2067-4d91-ba86-36c002ce97ec",
            name: "Desiree Cormier",
            last_name: "Cormier",
            title: "District Solutions Specialist",
            location: "Muraziktown, Austria",
            start_date: "2022-02-01T04:44:59.000Z",
            corporate_email: "desiree.cormier59@zboncak-rogahn-and-shields.com",
            totalReports: 2,
          },
          line_manager_id: "05247ea3-c2d2-46d3-af67-ea8a6515e7f5",
          personal_linkedin: null,
          personal_twitter: null,
          status: 1,
          department: {
            id: "bd1b117b-751d-4e26-9e60-58ac05e7e7ea",
            name: "engineering",
          },
        },
      ],
    },
    {
      id: "178b7d6a-2067-4d91-ba86-36c002ce97ec",
      person: {
        id: "178b7d6a-2067-4d91-ba86-36c002ce97ec",
        name: "Desiree Cormier",
        last_name: "Cormier",
        title: "District Solutions Specialist",
        location: "Muraziktown, Austria",
        start_date: "2022-02-01T04:44:59.000Z",
        corporate_email: "desiree.cormier59@zboncak-rogahn-and-shields.com",
        totalReports: 2,
      },
      line_manager_id: "05247ea3-c2d2-46d3-af67-ea8a6515e7f5",
      personal_linkedin: null,
      personal_twitter: null,
      status: 1,
      department: {
        id: "bd1b117b-751d-4e26-9e60-58ac05e7e7ea",
        name: "engineering",
      },
    },
    {
      id: "ad20df49-b03e-4b8e-8f57-139d0fad5d97",
      person: {
        id: "ad20df49-b03e-4b8e-8f57-139d0fad5d97",
        name: "Enrique Dare",
        last_name: "Dare",
        title: "Senior Accountability Supervisor",
        location: "North Esperanzatown, Virgin Islands, U.S.",
        start_date: "2021-12-23T23:50:17.480Z",
        corporate_email: "enrique.dare@zboncak-rogahn-and-shields.com",
      },
      line_manager_id: "05247ea3-c2d2-46d3-af67-ea8a6515e7f5",
      personal_linkedin: null,
      personal_twitter: null,
      status: 1,
      department: {
        id: "bd1b117b-751d-4e26-9e60-58ac05e7e7ea",
        name: "engineering",
      },
    },
    {
      id: "82659c1f-d294-4332-98b3-b108f687f1eb",
      person: {
        id: "82659c1f-d294-4332-98b3-b108f687f1eb",
        name: "Jane Doe",
        last_name: "Doe",
        title: "HR Manager",
        location: "London, UK",
        start_date: "2021-10-24T21:17:42.932Z",
        corporate_email: "jane.doe@givver.io",
        personal_linkedin: null,
        personal_twitter: null,
        status: 1,
      },
      line_manager_id: "529b2b02-7fb8-4f14-9a42-b9069a989bbc",
      department: {
        id: "97ec8b0f-8736-427d-b38c-c950f43cd7ec",
        name: "management",
      },
    },
    {
      id: "b7058518-5e8a-4ebb-b18c-7b11350f66db",
      person: {
        id: "b7058518-5e8a-4ebb-b18c-7b11350f66db",
        name: "Renato Lacerda",
        last_name: "Lacerda",
        title: "Product Designer",
        location: "London, UK",
        start_date: "2021-10-10T00:12:15.423Z",
        corporate_email: "renato.lacerda@givver.io",
        personal_linkedin: null,
        personal_twitter: null,
        status: 1,
      },
      line_manager_id: "529b2b02-7fb8-4f14-9a42-b9069a989bbc",
      department: {
        id: "97ec8b0f-8736-427d-b38c-c950f43cd7ec",
        name: "management",
      },
    },
    {
      id: "a4dec2ff-dde2-4712-9f63-67e1c0cc2be4",
      person: {
        id: "a4dec2ff-dde2-4712-9f63-67e1c0cc2be4",
        name: "Madelyn O'Conner",
        last_name: "O'Conner",
        title: "Global Group Agent",
        location: "Eltaville, Nauru",
        start_date: "2021-09-13T06:40:05.420Z",
        corporate_email: "madelyn.oconner48@zboncak-rogahn-and-shields.com",

        personal_linkedin: null,
        personal_twitter: null,
        status: 1,
      },
      line_manager_id: "178b7d6a-2067-4d91-ba86-36c002ce97ec",
      department: {
        id: "97ec8b0f-8736-427d-b38c-c950f43cd7ec",
        name: "management",
      },
    },
    {
      id: "ab94f018-b0e2-4d6c-925c-611c6a4e0282",
      person: {
        id: "ab94f018-b0e2-4d6c-925c-611c6a4e0282",
        name: "Michele Riva",
        last_name: "Riva",
        title: "Senior Software Engineer",
        location: "Milan, Italy",
        start_date: "2021-01-01T00:00:00.000Z",
        corporate_email: "michele.riva@givver.io",

        personal_linkedin: null,
        personal_twitter: null,
      },
      line_manager_id: "178b7d6a-2067-4d91-ba86-36c002ce97ec",
      status: 1,
      department: {
        id: "97ec8b0f-8736-427d-b38c-c950f43cd7ec",
        name: "management",
      },
    },
    {
      id: "c1660955-d7f6-4959-8b13-7e28a558b65a",
      person: {
        id: "c1660955-d7f6-4959-8b13-7e28a558b65a",
        name: "Heath Rohan",
        last_name: "Rohan",
        title: "Global Markets Strategist",
        location: "East Amari, Madagascar",
        start_date: "2021-08-26T20:21:12.698Z",
        corporate_email: "heath.rohan@zboncak-rogahn-and-shields.com",
        personal_linkedin: null,
        personal_twitter: null,
        status: 1,
      },
      line_manager_id: "ad20df49-b03e-4b8e-8f57-139d0fad5d97",
      department: {
        id: "bd1b117b-751d-4e26-9e60-58ac05e7e7ea",
        name: "engineering",
      },
    },
    {
      id: "db2b87fa-8157-4942-a619-d755e21374e2",
      person: {
        id: "db2b87fa-8157-4942-a619-d755e21374e2",
        name: "Barton Schmitt",
        last_name: "Schmitt",
        title: "Forward Security Associate",
        location: "Aidanview, Lebanon",
        start_date: "2022-05-21T01:17:22.394Z",
        corporate_email: "barton_schmitt24@zboncak-rogahn-and-shields.com",

        personal_linkedin: null,
        personal_twitter: null,
        status: 1,
      },
      line_manager_id: "ad20df49-b03e-4b8e-8f57-139d0fad5d97",
      department: {
        id: "bd1b117b-751d-4e26-9e60-58ac05e7e7ea",
        name: "engineering",
      },
    },
  ],
  count: 13,
  searchCount: 13,
};

let OrganizationChart;
if (process.browser) {
  OrganizationChart = dynamic(() => import("@dabeng/react-orgchart"));
}
let root = {};
data.children = data.employees.reduce((accumlator, item) => {
  if (isNull(item.line_manager_id)) {
    root = item.person;
    return accumlator;
  }
  accumlator.push(item);
  return accumlator;
}, []);
data = { ...data, ...root };

export default function Home() {
  const renderNode = ({ nodeData }) => {
    return (
      <div className="org-node-container">
        {/* <div
          className="open-user-details"
          onClick={() => {
            window.open("https://h65cz.csb.app/");
          }}
        >
          <ExternalLink size={14} />
        </div> */}
        <div className="org-person">
          <img src="avatar.svg" alt="" width={50} />
        </div>
        <div className="org-name">{get(nodeData, "person.name", get(nodeData, "name", ""))}</div>
        <div className="org-title">{get(nodeData, "person.last_name", get(nodeData, "last_name", ""))}</div>
        {/* <div className="org-title">Data unclassified: {nodeData.data_unclassified}</div> */}
        {/* <div className="org-title">compliance: {nodeData.compliance}</div> */}
        {get(nodeData, "children", []).length > 0 && (
          <div
            className="org-node-children"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              let childNodes = document.getElementById(nodeData.id).parentElement.childNodes;
              if (childNodes[1].className.includes("hidden")) {
                childNodes[0].className = "oc-node";
                childNodes[1].className = "";
              } else {
                childNodes[0].className = "oc-node isChildrenCollapsed";
                childNodes[1].className = "hidden";
              }
            }}
          >
            {nodeData.children.length} Reportees
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {process.browser && (
        <OrganizationChart datasource={data} chartClass="sekure-org-chart" pan={true} zoom={true} NodeTemplate={renderNode} />
      )}
      {/* <SimpleBar style={{ padding: "100px", maxWidth: "100vw", maxHeight: "100vh" }}>
      <TreeComponent data={data} />
    </SimpleBar> */}
    </>
  );
}
