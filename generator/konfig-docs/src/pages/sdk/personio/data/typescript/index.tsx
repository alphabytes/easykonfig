import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PersonioDataTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="personio-data-typescript-sdk"
      metaDescription={`Personio's all-in-one software makes HR processes as efficient and effective as possible so organizations can focus on what matters: people.`}
      company="Personio"
      serviceName="Data"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/personio/data/logo.png"
      companyKebabCase="personio"
      clientNameCamelCase="personioData"
      homepage="personio.com"
      lastUpdated={new Date("2024-03-27T16:19:34.951Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/personio/data/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/personio/data/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","payroll","talent"]}
      methods={[
  {
    "url": "/company/employees",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "List Company Employees",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Pagination attribute to limit the number of employees returned per page.",
        "example": 10,
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Pagination attribute to identify the first item in the collection to return.",
        "example": 0,
        "default": 0
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Find an employee with the given email address. The response is still a list, containing only the filtered employee. NOTE: when using the updated_since filter, the email filter is ignored."
      },
      {
        "name": "attributes[]",
        "schema": "array",
        "required": false,
        "description": "A list of attributes that will be returned for the employees, ie. a projection of the employee fields and relationships. In case `updated_since` query parameter is used, this list will additionally be used to exclude the employees that had none of the provided `attributes[]` updated since `updated_since`, ie. a selection filter.",
        "example": "?attributes[]=first_name&attributes[]=last_name"
      },
      {
        "name": "updatedSince",
        "schema": "string",
        "required": false,
        "description": "Filter to select and return only the employees that have been updated after `updated_since`. When it is used together with the `attributes[]` query parameter, the filter will select only the employees that have had any of the provided `attributes[]` updated since `updated_since`. The format is `ISO 8601` (2022-12-24T08:15:30). NOTE: when using the `updated_since` filter, the `email`, `limit`, and `offset` parameters are ignored.\n<details> <summary><b>Examples with <code>updated_since</code> and <code>attributes[]</code>:</b></summary><br /> In an example company that has 17 employees:<br /><br /> <details>\n  <summary>\n  <code class=\"language-html\">?updated_since=2022-12-24T08:15:30</code>\n  will yield 10 employees that were recently updated:\n  </summary>\n<p><pre class=\"prettyprint\"><code language=\"json\" class=\"language-json\"> {\n  \"success\": true,\n  \"metadata\": {\n    \"total_elements\": 10,\n    \"current_page\": 0,\n    \"total_pages\": 10\n  },\n  \"offset\": 0,\n  \"limit\": 1,\n  \"data\": [\n    {\n      \"type\": \"Employee\",\n      \"attributes\": {\n        \"id\": {\n          \"label\": \"ID\",\n          \"value\": 1,\n          \"type\": \"integer\",\n          \"universal_id\": \"id\"\n        },\n        \"first_name\": {\n          \"label\": \"First name\",\n          \"value\": \"Alexander\",\n          \"type\": \"standard\",\n          \"universal_id\": \"first_name\"\n        },\n        \"last_name\": {\n          \"label\": \"Last name\",\n          \"value\": \"Bergmann\",\n          \"type\": \"standard\",\n          \"universal_id\": \"last_name\"\n        },\n        \"email\": {\n          \"label\": \"Email\",\n          \"value\": \"alexander.bergmann@demo.com\",\n          \"type\": \"standard\",\n          \"universal_id\": \"email\"\n        }\n      }\n    }, ...\n  ],\n  ...\n  ...\n} </code></pre></p> </details><br /> <details>\n  <summary>\n  <code class=\"language-html\">?attributes[]=first_name</code>\n  will yield all 17 employees:\n  </summary>\n<p><pre class=\"prettyprint\"><code language=\"json\" class=\"language-json\"> {\n  \"success\": true,\n  \"metadata\": {\n    \"total_elements\": 17,\n    \"current_page\": 0,\n    \"total_pages\": 17\n  },\n  \"offset\": 0,\n  \"limit\": 1,\n  \"data\": [\n    {\n      \"type\": \"Employee\",\n      \"attributes\": {\n        \"id\": {\n          \"label\": \"ID\",\n          \"value\": 1,\n          \"type\": \"integer\",\n          \"universal_id\": \"id\"\n        },\n        \"first_name\": {\n          \"label\": \"First name\",\n          \"value\": \"Alexander\",\n          \"type\": \"standard\",\n          \"universal_id\": \"first_name\"\n        }\n      }\n    }\n  ]\n} </code></pre></p> </details><br /> <details>\n  <summary>\n  <code class=\"language-html\">?attributes[]=first_name&updated_since=2022-12-24T08:15:30</code>\n  will yield 3 employees, ones that had their <code>first_name</code> changed since <code>2022-12-24T08:15:30</code>:\n  </summary>\n<p><pre class=\"prettyprint\"><code language=\"json\" class=\"language-json\"> {\n  \"success\": true,\n  \"metadata\": {\n    \"total_elements\": 3,\n    \"current_page\": 0,\n    \"total_pages\": 3\n  },\n  \"offset\": 0,\n  \"limit\": 1,\n  \"data\": [\n    {\n      \"type\": \"Employee\",\n      \"attributes\": {\n        \"id\": {\n          \"label\": \"ID\",\n          \"value\": 1,\n          \"type\": \"integer\",\n          \"universal_id\": \"id\"\n        },\n        \"first_name\": {\n          \"label\": \"First name\",\n          \"value\": \"Alexander\",\n          \"type\": \"standard\",\n          \"universal_id\": \"first_name\"\n        }\n      }\n    }\n  ]\n} </code></pre></p> </details> </details>",
        "example": "2022-12-24T08:15:30"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/employees",
    "method": "createEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Create an employee",
    "parameters": [
      {
        "name": "employee",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/employees/{employee_id}",
    "method": "showById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Show employee by ID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "Numeric `id` of the employee",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/employees/{employee_id}",
    "method": "updateEmployeeFields",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "Numeric `id` of the employee",
        "example": 0
      },
      {
        "name": "employee",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/employees/{employee_id}/absences/balance",
    "method": "getAbsenceBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Retrieve the absence balance for a specific employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "Numeric `id` of the employee",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/employees/custom-attributes",
    "method": "getCustomAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint is an alias for `/company/employees/attributes`.",
    "parameters": [
      {
        "name": "xPersonioPartnerId",
        "schema": "string",
        "required": false,
        "description": "The partner identifier"
      },
      {
        "name": "xPersonioAppId",
        "schema": "string",
        "required": false,
        "description": "The application identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Please refer to `/company/employees/attributes`"
      }
    ]
  },
  {
    "url": "/company/employees/attributes",
    "method": "listAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Lists all the allowed atrributes per API credentials including custom (dynamic) attributes.",
    "parameters": [
      {
        "name": "xPersonioPartnerId",
        "schema": "string",
        "required": false,
        "description": "The partner identifier"
      },
      {
        "name": "xPersonioAppId",
        "schema": "string",
        "required": false,
        "description": "The application identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/employees/{employee_id}/profile-picture/{width}",
    "method": "showProfilePicture",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Show employee's profile picture. If profile picture is missing, the 404 error will be thrown. The `Profile Picture` attribute has to be whitelisted.",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "Numeric `id` of the employee",
        "example": 0
      },
      {
        "name": "width",
        "schema": "integer",
        "required": true,
        "description": "Width of the image. Default is original size",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/attendances",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attendances",
    "typeScriptTag": "attendances",
    "description": "Fetch attendance data for the company employees. The result can be `paginated` and `filtered` by period, the date and/or time they were updated, and/or specific employee/employees. The result contains a list of attendances.",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "First day of the period to be queried. It is inclusive, so the day specified as start_date will also be considered on the results",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "Last day of the period to be queried. It is inclusive, so the day specified as end_date will also be considered on the results.",
        "example": "END_DATE"
      },
      {
        "name": "updatedFrom",
        "schema": "string",
        "required": false,
        "description": "Datetime from when the queried periods have been updated. Same format as updated_at. It is inclusive, so the day specified as updated_from will also be considered on the results. Can be just the date, or the date and the time, with or without the timezone."
      },
      {
        "name": "updatedTo",
        "schema": "string",
        "required": false,
        "description": "Datetime until when the queried periods have been updated. Same format as updated_at. It is inclusive, so the day specified as updated_to will also be considered on the results. Can be just the date, or the date and the time, with or without the timezone."
      },
      {
        "name": "includePending",
        "schema": "boolean",
        "required": false,
        "description": "Returns AttendancePeriods with a status of pending, rejected and confirmed. For pending periods, the end_date attribute is nullable. The status of each period is included in the response."
      },
      {
        "name": "employees[]",
        "schema": "array",
        "required": false,
        "description": "A list of Personio employee ID's to filter the results. The result filters including only attendances of provided employees.",
        "example": "?employees[]=1&employees[]=2"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Pagination attribute to limit how many attendances are per page",
        "default": 200
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset from the first record that would be returned. With 3 results [A, B, C] and an offset of 1, the following two results will be returned [B, C].",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/attendances",
    "method": "createMultipleAttendances",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attendances",
    "typeScriptTag": "attendances",
    "description": "This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.",
    "parameters": [
      {
        "name": "attendances",
        "schema": "array",
        "description": ""
      },
      {
        "name": "skip_approval",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/attendances/{id}",
    "method": "deleteData",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Attendances",
    "typeScriptTag": "attendances",
    "description": "This endpoint is responsible for deleting attendance data for the company employees.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the attendance period to delete",
        "example": 0
      },
      {
        "name": "skipApproval",
        "schema": "boolean",
        "required": false,
        "description": "Optional, default value is true. If set to false, the approval status of the attendance period will be \"pending\" if an approval rule is set for the attendances type. The respective approval flow will be triggered.",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/attendances/{id}",
    "method": "updateAttendanceData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Attendances",
    "typeScriptTag": "attendances",
    "description": "This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the attendance period to update",
        "example": 0
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": "",
        "example": "08:00"
      },
      {
        "name": "end_time",
        "schema": "string",
        "description": "",
        "example": "17:00"
      },
      {
        "name": "break",
        "schema": "integer",
        "description": "",
        "example": 60
      },
      {
        "name": "comment",
        "schema": "string",
        "description": "",
        "example": "I was productive as hell"
      },
      {
        "name": "project_id",
        "schema": "integer",
        "description": "",
        "example": 5
      },
      {
        "name": "skip_approval",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/attendances/projects",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Provides a list of all company projects.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/attendances/projects",
    "method": "createProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Creates a project into the company account",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "A project name"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/attendances/projects/{id}",
    "method": "deleteProject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Deletes a project from the company account",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric `id` of the project",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Project was successfully deleted"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/attendances/projects/{id}",
    "method": "updateData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Updates a project with the given data",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric `id` of the project",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "A project name"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/time-off-types",
    "method": "listTimeOffTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Provides a list of absence types for absences **time unit** set to either **days** or **hours**. For example 'Paid vacation', 'Parental leave' or 'Home office'.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Pagination attribute to limit how many records will be returned per page",
        "default": 200
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/time-offs",
    "method": "getAbsencePeriods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Fetches absence periods for absences with **time unit** set to **days**. The result can be `paginated` and `filtered` by period and/or specific employee/employees. The result contains a list of absence periods.",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "First day of the period to be queried. It is inclusive, so the result starts from and including the provided `start_date`"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Last day of the period to be queried. It is inclusive, so the result ends on `end_date` including absences from the `end_date`"
      },
      {
        "name": "updatedFrom",
        "schema": "string",
        "required": false,
        "description": "Query the periods that created or modified from the date `updated_from`. It is inclusive, so all the periods created or modified from the beginning of the `updated_from` will be included in the results"
      },
      {
        "name": "updatedTo",
        "schema": "string",
        "required": false,
        "description": "Query the periods that created or modified until the date `updated_to`. It is inclusive, so all the periods created or modified until the end of the `updated_to` will be included in the results"
      },
      {
        "name": "employees[]",
        "schema": "array",
        "required": false,
        "description": "A list of Personio employee ID's to filter the results. The result filters including only absences of provided employees"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Pagination attribute to limit the number of absence periods per page",
        "default": 200
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Pagination attribute to identify which page number you are requesting",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/time-offs",
    "method": "addAbsenceData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Adds absence data for absence types with **time unit** set to **days**.",
    "parameters": [
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "time_off_type_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-31"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-31"
      },
      {
        "name": "half_day_start",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": false
      },
      {
        "name": "half_day_end",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": false
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Some Comment"
      },
      {
        "name": "skip_approval",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/time-offs/{id}",
    "method": "deleteAbsenceData",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Deletes absence period data for absence types with **time unit** set to **days**.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the absence period to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/time-offs/{id}",
    "method": "getAbsencePeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Gets an absence period for absences with **time unit** set to **days**.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Numeric `id` of the absence period",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/absence-periods",
    "method": "getHourlyPeriods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Fetches absence periods for absences with **time unit** set to **hours**. The result can be `paginated` and `filtered` by period and/or specific employee/employees. The result contains a list of hourly absence periods.",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Filter by absence periods that start at or before given date."
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Filter by absence periods that start at or before given date."
      },
      {
        "name": "updatedFrom",
        "schema": "string",
        "required": false,
        "description": "Filter by periods that were created or modified from the date updated_from. It is inclusive, so all the periods created or modified from the beginning of the updated_from will be included in the results."
      },
      {
        "name": "updatedTo",
        "schema": "string",
        "required": false,
        "description": "Filter by periods that were created or modified until the date updated_to. It is inclusive, so all the periods created or modified until the end of the updated_to will be included in the results."
      },
      {
        "name": "employees[]",
        "schema": "array",
        "required": false,
        "description": "A list of Personio employee ID's to filter the results. The result filters including only absences of provided employees"
      },
      {
        "name": "absenceTypes[]",
        "schema": "array",
        "required": false,
        "description": "A list of Personio absence type IDs to filter the results. The result filters including only absences of provided absence types."
      },
      {
        "name": "absencePeriods[]",
        "schema": "array",
        "required": false,
        "description": "A list of Personio absence period IDs to filter the results. The result filters including only absences containing the provided ids."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Pagination attribute to limit how many absence periods are returned per page.",
        "default": 200
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/absence-periods",
    "method": "addAbsencePeriodsData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Adds absence data for absence types with **time unit** set to **hours**. Note that creating periods for absence types with certificate requirement enabled is not supported!",
    "parameters": [
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10735
      },
      {
        "name": "time_off_type_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10735
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-31"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-31"
      },
      {
        "name": "start_time",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "03:00"
      },
      {
        "name": "end_time",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "15:00"
      },
      {
        "name": "half_day_start",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "half_day_end",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Some Comment"
      },
      {
        "name": "skip_approval",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/absence-periods/{id}",
    "method": "deletePeriodData",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Deletes absence period data for absence types with **time unit** set to **hours**.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the absence period to delete",
        "example": "61fe126b-a7b3-449a-b5ee-3865a6fcc546"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/document-categories",
    "method": "getCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "This endpoint is responsible for fetching all document categories of the company. The result contains a list of document categories.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/documents",
    "method": "uploadForEmployees",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "This endpoint is responsible for uploading documents for the company employees.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "category_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/custom-reports/reports",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Reports",
    "typeScriptTag": "customReports",
    "description": "This endpoint provides you with metadata about existing custom reports in your Personio account, such as report name, report type, report date / timeframe.",
    "parameters": [
      {
        "name": "xPersonioPartnerId",
        "schema": "string",
        "required": false,
        "description": "The partner identifier"
      },
      {
        "name": "xPersonioAppId",
        "schema": "string",
        "required": false,
        "description": "The application identifier"
      },
      {
        "name": "reportIds",
        "schema": "array",
        "required": false,
        "description": "A list of report ID's to filter the results.",
        "example": "eea50309-d1b1-47d6-bc7e-27de7a3ab491, baa50309-d1b1-47d6-bc76-27de7a3ab491"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "The status of the report to filter the results.",
        "example": "up_to_date"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/custom-reports/reports/{report_id}",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Reports",
    "typeScriptTag": "customReports",
    "description": "This endpoint provides you with the data of an existing Custom Report.",
    "parameters": [
      {
        "name": "xPersonioPartnerId",
        "schema": "string",
        "required": false,
        "description": "The partner identifier"
      },
      {
        "name": "xPersonioAppId",
        "schema": "string",
        "required": false,
        "description": "The application identifier"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "The ID of the report to filter the result.",
        "example": "eea50309-d1b1-47d6-bc7e-27de7a3ab491"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "locale used to translate localized fields.",
        "example": "de"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination parameter to identify the page to return.",
        "example": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Pagination parameter to limit the number of employees returned per page.",
        "example": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/custom-reports/columns",
    "method": "getColumnLabels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Reports",
    "typeScriptTag": "customReports",
    "description": "This endpoint provides human-readable labels for report table columns. It is particularly important if you get a report with custom attributes or absence data to match the column IDs to the translation.",
    "parameters": [
      {
        "name": "xPersonioPartnerId",
        "schema": "string",
        "required": false,
        "description": "The partner identifier"
      },
      {
        "name": "xPersonioAppId",
        "schema": "string",
        "required": false,
        "description": "The application identifier"
      },
      {
        "name": "columns",
        "schema": "array",
        "required": false,
        "description": "The columns to filter the results.",
        "example": "first_name,last_name"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "locale used to translate localized fields.",
        "example": "en"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": false,
        "description": "The ID of the report to filter the result of the columns. If no ID is passed, all columns for the company are returned.",
        "example": "eea50309-d1b1-47d6-bc7e-27de7a3ab491"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Personnel Data"
      apiBaseUrl="https://api.personio.de/v1"
      apiVersion="1.0"
      endpoints={20}
      sdkMethods={43}
      schemas={110}
      parameters={100}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/personio/data/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/personio/data/openapi.yaml"
      developerDocumentation="developer.personio.de/reference"
    />
  );
}
  