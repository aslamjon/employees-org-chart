import { get, isNull } from "lodash";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import OrgChart from "../components/org-chart";
import UnicefReactOrgChart from "../components/unicef-react-org-chart";
import employee from "./Employees.json";

let root = {};
let data = { ...employee };

// data.children = data.employees.reduce((accumlator, item) => {
//   if (isNull(item.line_manager_id)) {
//     root = item;
//     return accumlator;
//   }
//   accumlator.push(item);
//   return accumlator;
// }, []);

// data = { ...data, ...root };

let temp = {
      "id": "05247ea3-c2d2-46d3-af67-ea8a6515e7f5",
      "person": {
        "id": "05247ea3-c2d2-46d3-af67-ea8a6515e7f5",
        "name": "Cynthia Aliaga",
        "last_name": "Aliaga",
        "title": "Founder",
        "location": "Netherlands",
        "start_date": "2021-11-24T01:51:05.222Z",
        "corporate_email": "cynthia@givver.io",
        "totalReports": 1,
        "department": "Management"
      },
      "line_manager_id": null,
      "personal_linkedin": null,
      "personal_twitter": null,
      "status": 1,
      children: [
        {
          "id": "529b2b02-7fb8-4f14-9a42-b9069a989bbc",
          "person": {
            "id": "529b2b02-7fb8-4f14-9a42-b9069a989bbc",
            "name": "Matthew Boyle",
            "last_name": "Boyle",
            "title": "Senior Software Engineer",
            "location": "UK",
            "start_date": "2021-06-12T14:03:51.291Z",
            "corporate_email": "matthew.boyle@givver.io",
            "totalReports": 2
          },
          "line_manager_id": "05247ea3-c2d2-46d3-af67-ea8a6515e7f5",
          "personal_linkedin": null,
          "personal_twitter": null,
          "status": 1,
          "department": {
            "id": "bd1b117b-751d-4e26-9e60-58ac05e7e7ea",
            "name": "engineering"
          }
          ,
          "children": [
            {
          "id": "529b2b02-7fb8-4f14-9a42-b9069a989bb2",
          "person": {
            "id": "529b2b02-7fb8-4f14-9a42-b9069a989bbc",
            "name": "Matthew Boyle22222",
            "last_name": "Boyle",
            "title": "Senior Software Engineer",
            "location": "UK",
            "start_date": "2021-06-12T14:03:51.291Z",
            "corporate_email": "matthew.boyle@givver.io",
            "totalReports": 2
          },
          "line_manager_id": "05247ea3-c2d2-46d3-af67-ea8a6515e7f5",
          "personal_linkedin": null,
          "personal_twitter": null,
          "status": 1,
          "department": {
            "id": "bd1b117b-751d-4e26-9e60-58ac05e7e7ea",
            "name": "engineering"
          }
        }
          ]
        },
      ]
    }




function Home() {
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") setRun(true);
  }, []);

  return (
    <>
      {run && <UnicefReactOrgChart {...{data: temp }} />}
      {/* <OrgChart {...{ data }} /> */}
    </>
  );
}
export default Home;
