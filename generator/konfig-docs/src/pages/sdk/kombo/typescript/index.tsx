import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function KomboTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="kombo-typescript-sdk"
      metaDescription={`Kombo is changing how B2B SaaS companies provide HR integrations to their customers. Instead of having to build and maintain many APIs themselves, Kombos customers can integrate with Kombo's API once and offer dozens of APIs to their customers instantly.`}
      company="Kombo"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kombo/logo.png"
      companyKebabCase="kombo"
      clientNameCamelCase="kombo"
      homepage="kombo.dev"
      lastUpdated={new Date("2024-03-29T22:25:17.346Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kombo/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kombo/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["integrations","ats","hris","payroll"]}
      methods={[
  {
    "url": "/check-api-key",
    "method": "verifyApiKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "General",
    "typeScriptTag": "general",
    "description": "Check API key",
    "parameters": [],
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
    "url": "/force-sync",
    "method": "triggerSyncSpecificIntegration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "General",
    "typeScriptTag": "general",
    "description": "Trigger sync",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "workday:HWUTwvyx2wLoSUHphiWVrp28"
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
      }
    ]
  },
  {
    "url": "/passthrough/{tool}/{api}",
    "method": "forwardRequestToApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "General",
    "typeScriptTag": "general",
    "description": "Send passthrough request",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "greenhouse:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "tool",
        "schema": "string",
        "required": true,
        "description": "The ID of the tool whose passthrough API you want to call (e.g., `personio`).",
        "example": "TOOL"
      },
      {
        "name": "api",
        "schema": "string",
        "required": true,
        "description": "The ID of the passthrough API you want to call (some tools provide multiple). Check the endpoint description for a list of all available APIs.",
        "example": "API"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/integrations/{integration_id}",
    "method": "deleteIntegration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "General",
    "typeScriptTag": "general",
    "description": "Delete integration",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "DELETE /integrations/:integration_id parameter",
        "example": "INTEGRATION_ID"
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
      }
    ]
  },
  {
    "url": "/integrations/{integration_id}",
    "method": "getIntegrationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "General",
    "typeScriptTag": "general",
    "description": "Get integration details",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "GET /integrations/:integration_id parameter",
        "example": "INTEGRATION_ID"
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
      }
    ]
  },
  {
    "url": "/integrations/{integration_id}/relink",
    "method": "createReconnectionLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "General",
    "typeScriptTag": "general",
    "description": "Create reconnection link",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "POST /integrations/:integration_id/relink parameter",
        "example": "INTEGRATION_ID"
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
      }
    ]
  },
  {
    "url": "/tools/{category}",
    "method": "getToolsCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "General",
    "typeScriptTag": "general",
    "description": "Get tools",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "GET /tools/:category parameter",
        "example": "CATEGORY"
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
    "url": "/hris/provisioning-groups/{group_id}/diff",
    "method": "getProvisioningDiff",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Get provisioning diff",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "ID of the provisioning group (currently only `default` is allowed).",
        "example": "GROUP_ID"
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
    "url": "/hris/provisioning-groups/{group_id}/setup-links",
    "method": "createProvisioningSetupLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Create provisioning setup link",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "ID of the provisioning group (currently only `default` is allowed).",
        "example": "GROUP_ID"
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
      }
    ]
  },
  {
    "url": "/hris/employees",
    "method": "listEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Get employees",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
      },
      {
        "name": "employmentStatus",
        "schema": "string",
        "required": false,
        "description": "**(⚠️ Deprecated - Use the `employment_statuses` filter instead.)** Filter by the `employment_status` field."
      },
      {
        "name": "employmentStatuses",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of `ACTIVE`, `PENDING`, `INACTIVE`, `LEAVE` \n* `ACTIVE`: the employee is **actively employed** \n* `PENDING`: the employee is **not actively employed yet** (but they signed their contract or are part of an onboarding process) \n* `INACTIVE`: a full-time employee is no longer employed, or, for a contract worker when their contract runs out \n* `LEAVE`: the employee is still employed but **currently on leave** (note that not all HR systems support this status — use our absences API for detailed information) \n \n\nLeave this blank to get results matching all values."
      },
      {
        "name": "groupIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of group IDs. We will only return employees that are members of _any_ of the groups."
      },
      {
        "name": "legalEntityIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of legal entity IDs. We will only return employees that are members of _any_ of the legal entities."
      },
      {
        "name": "workLocationIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of work location IDs. We will only return employees who are at _any_ of the work locations."
      },
      {
        "name": "workEmails",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of work emails. We will only return employees who have _any_ of the work emails."
      },
      {
        "name": "personalEmails",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of personal emails. We will only return employees who have _any_ of the personal emails."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/employees",
    "method": "createEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Create employee",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/employees/{employee_id}",
    "method": "updateEmployee",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Update employee",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`)",
        "example": "EMPLOYEE_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/employees/{employee_id}/attachments",
    "method": "addAttachmentToEmployees",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Add attachment to employees 🦄",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "POST /hris/employees/:employee_id/attachments parameter",
        "example": "EMPLOYEE_ID"
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
    "url": "/hris/teams",
    "method": "listTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Get teams (https://docs.kombo.dev",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/groups",
    "method": "getAllGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Get groups",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/employments",
    "method": "listEmployments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Get employments",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/locations",
    "method": "getWorkLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Get work locations",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/absence-types",
    "method": "listAbsenceTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Get absence types",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/time-off-balances",
    "method": "getTimeOffBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Get time off balances",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": "Filter by a specific employee using their ID."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/absences",
    "method": "getAllAbsences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Get absences",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
      },
      {
        "name": "dateFrom",
        "schema": "string",
        "required": false,
        "description": "Filter for all the absences that either start _or_ haven't ended yet on/after this day. If you imagine a calendar displaying absences, this defines the left-most visible day. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded."
      },
      {
        "name": "dateUntil",
        "schema": "string",
        "required": false,
        "description": "Filter for absences that start on or before this day (but might continue after). If you imagine a calendar displaying absences, this defines the right-most visible day. This is a plain date (i.e., `yyyy-MM-dd`), all time information is discarded."
      },
      {
        "name": "typeIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of absence type IDs."
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": "Filter by a specific employee using their ID."
      },
      {
        "name": "timeFrom",
        "schema": "string",
        "required": false,
        "description": "**(⚠️ Deprecated - Use the `date_from` filter instead.)** Filter for absences that either start after or start before and end after a certain time."
      },
      {
        "name": "timeUntil",
        "schema": "string",
        "required": false,
        "description": "**(⚠️ Deprecated - Use the `date_until` filter instead.)** Filter for absences that start before a certain time."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/absences",
    "method": "createAbsence",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Create absence",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/absences/{absence_id}",
    "method": "deleteAbsenceById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Delete absence",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "absenceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the absence",
        "example": "ABSENCE_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/legal-entities",
    "method": "getAllLegalEntities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified HRIS API",
    "typeScriptTag": "unifiedHrisApi",
    "description": "Get legal entities",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "bamboohr:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/applications",
    "method": "getAllApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Get applications",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
      },
      {
        "name": "outcome",
        "schema": "string",
        "required": false,
        "description": "**(⚠️ Deprecated - Use the `outcomes` filter instead.)** Filter applications by outcome. This allows you to get applications that are for example `PENDING`, `HIRED`, or `DECLINED`."
      },
      {
        "name": "outcomes",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of `PENDING`, `HIRED`, `DECLINED` \n* `PENDING`: The application is still being processed. \n* `HIRED`: The candidate was hired. \n* `DECLINED`: The candidate was declined. \n \n\nLeave this blank to get results matching all values."
      },
      {
        "name": "remoteCreatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter applications by the day they were created in the remote system. This allows you to get applications that were created on or after a certain day."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/applications/{application_id}/stage",
    "method": "moveApplicationToStage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Move application to stage",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "PUT /ats/applications/:application_id/stage parameter",
        "example": "APPLICATION_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/applications/{application_id}/result-links",
    "method": "addResultLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Add result link to application",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "Kombo ID of the application you want to create the link for.",
        "example": "APPLICATION_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/applications/{application_id}/notes",
    "method": "addNoteToApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Add note to application",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "Kombo ID of the application you want to create the note for.",
        "example": "APPLICATION_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/applications/{application_id}/attachments",
    "method": "addAttachmentToApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Add attachment to application",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "POST /ats/applications/:application_id/attachments parameter",
        "example": "APPLICATION_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/candidates",
    "method": "getAllCandidates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Get candidates",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Filter the candidates based on an email address. When set, returns only the candidates where the given `email` is in `email_addresses`. "
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/candidates",
    "method": "createApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Create candidate",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/candidates/{candidate_id}",
    "method": "updateCandidate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Update candidate 🦄",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "PATCH /ats/candidates/:candidate_id parameter",
        "example": "CANDIDATE_ID"
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
    "url": "/ats/candidates/{candidate_id}/attachments",
    "method": "addAttachmentToCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Add attachment to candidate",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "POST /ats/candidates/:candidate_id/attachments parameter",
        "example": "CANDIDATE_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/candidates/{candidate_id}/result-links",
    "method": "addResultLinkToCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Add result link to candidate",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "Kombo ID of the candidate you want to create the link for.",
        "example": "CANDIDATE_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/candidates/{candidate_id}/tags",
    "method": "removeCandidateTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Remove tag from candidate",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "Kombo ID of the candidate you want to remove the tag from.",
        "example": "CANDIDATE_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/candidates/{candidate_id}/tags",
    "method": "addCandidateTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Add tag to candidate",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "Kombo ID of the candidate you want to add the tag to.",
        "example": "CANDIDATE_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/tags",
    "method": "listTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Get tags",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/application-stages",
    "method": "getApplicationStages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Get application stages",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/jobs",
    "method": "getJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Get jobs",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
      },
      {
        "name": "jobCodes",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of job codes."
      },
      {
        "name": "postUrl",
        "schema": "string",
        "required": false,
        "description": "Filter by the `post_url` field. Can be used to find a job based on its public posting URL."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "**(⚠️ Deprecated - Use the `statuses` filter instead.)** Filter by the `status` field. Can be used to find a job based on its status."
      },
      {
        "name": "statuses",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of `OPEN`, `CLOSED`, `DRAFT`, `ARCHIVED`  \n\nLeave this blank to get results matching all values."
      },
      {
        "name": "visibilities",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of `PUBLIC`, `INTERNAL`, `UNLISTED`, `CONFIDENTIAL`  \n\nLeave this blank to get results matching all values."
      },
      {
        "name": "nameContains",
        "schema": "string",
        "required": false,
        "description": "Filter by the `name` field. Can be used to find a job by keywords present in the job name."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/jobs/{job_id}/applications",
    "method": "createApplicationCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Create application",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Kombo ID or Remote ID of the Job this candidate should apply for. If you want to use the ID of the integrated system (https://docs.kombo.dev you need to prefix the id with \"remote:\". You can use the remote ID if you do not want to sync jobs.",
        "example": "JOB_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/ats/users",
    "method": "getAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified ATS API",
    "typeScriptTag": "unifiedAtsApi",
    "description": "Get users",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "join:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "Filter the entries based on the modification date in format YYYY-MM-DDTHH:mm:ss.sssZ. If you want to track entry deletion, also set the `include_deleted=true` query parameter, because otherwise, deleted entries will be hidden."
      },
      {
        "name": "includeDeleted",
        "schema": "string",
        "required": false,
        "description": "By default, deleted entries are not returned. Use the `include_deleted` query param to include deleted entries too.",
        "default": "false"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of IDs such as `222k7eCGyUdgt2JWZDNnkDs3,B5DVmypWENfU6eMe6gYDyJG3`. Those IDs are validated to be 24 characters long and to exist for this integration in the database. If any of the IDs are don't exist, the endpoint will return a 404 error."
      },
      {
        "name": "remoteIds",
        "schema": "string",
        "required": false,
        "description": "Filter by a comma-separated list of remote IDs."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessment/packages",
    "method": "getAssessmentPackages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified ATS (https://docs.kombo.dev API",
    "typeScriptTag": "unifiedAtsHttps:DocsKomboDevApi",
    "description": "Get packages",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "recruitee:HWUTwvyx2wLoSUHphiWVrp28"
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
    "url": "/assessment/packages",
    "method": "replaceAssessmentPackages",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Unified ATS (https://docs.kombo.dev API",
    "typeScriptTag": "unifiedAtsHttps:DocsKomboDevApi",
    "description": "Set packages",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "recruitee:HWUTwvyx2wLoSUHphiWVrp28"
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
    "url": "/assessment/orders/open",
    "method": "getOpenOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unified ATS (https://docs.kombo.dev API",
    "typeScriptTag": "unifiedAtsHttps:DocsKomboDevApi",
    "description": "Get open orders",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "recruitee:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per page.",
        "default": 100
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
    "url": "/assessment/orders/{assessment_order_id}/result",
    "method": "updateOrderResult",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Unified ATS (https://docs.kombo.dev API",
    "typeScriptTag": "unifiedAtsHttps:DocsKomboDevApi",
    "description": "Update order result",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "recruitee:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "PUT /assessment/orders/:assessment_order_id/result parameter",
        "example": "ASSESSMENT_ORDER_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/connect/create-link",
    "method": "generateLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Kombo Connect",
    "typeScriptTag": "komboConnect",
    "description": "Create connection link",
    "parameters": [],
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
    "url": "/connect/integration-by-token/{token}",
    "method": "getIntegrationByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kombo Connect",
    "typeScriptTag": "komboConnect",
    "description": "Get integration by token",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "GET /connect/integration-by-token/:token parameter",
        "example": "TOKEN"
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
    "url": "/connect/activate-integration",
    "method": "activateIntegration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Kombo Connect",
    "typeScriptTag": "komboConnect",
    "description": "Activate integration (https://docs.kombo.dev",
    "parameters": [],
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
    "url": "/custom/datev/passthrough",
    "method": "writeDatevAsciiFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Endpoints",
    "typeScriptTag": "customEndpoints",
    "description": "Write raw DATEV ASCII file",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "datev:HWUTwvyx2wLoSUHphiWVrp28"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom/datev/employees/{employee_id}/prepare-payroll",
    "method": "prepareDatevPayroll",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Endpoints",
    "typeScriptTag": "customEndpoints",
    "description": "Prepare DATEV Payroll",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "datev:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`)",
        "example": "EMPLOYEE_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom/datev/employees/{employee_id}/compensations",
    "method": "setDatevCompensations",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Endpoints",
    "typeScriptTag": "customEndpoints",
    "description": "Set DATEV compensations",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "datev:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`)",
        "example": "EMPLOYEE_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom/datev/data-pushes",
    "method": "getDataPushes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Endpoints",
    "typeScriptTag": "customEndpoints",
    "description": "Get DATEV data pushes",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "datev:HWUTwvyx2wLoSUHphiWVrp28"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom/datev/push-data/general",
    "method": "pushGeneralDataToDatev",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Endpoints",
    "typeScriptTag": "customEndpoints",
    "description": "Push general data to DATEV",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "datev:HWUTwvyx2wLoSUHphiWVrp28"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom/datev/push-data/payroll",
    "method": "pushPayrollData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Endpoints",
    "typeScriptTag": "customEndpoints",
    "description": "Push payroll data to DATEV",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "datev:HWUTwvyx2wLoSUHphiWVrp28"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom/silae/employees/{employee_id}/payroll-supplements",
    "method": "writePayrollSupplement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Endpoints",
    "typeScriptTag": "customEndpoints",
    "description": "Write Payroll Supplement",
    "parameters": [
      {
        "name": "xIntegrationId",
        "schema": "string",
        "required": true,
        "description": "ID of the integration you want to interact with.",
        "example": "silae:HWUTwvyx2wLoSUHphiWVrp28"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the employee that should be updated. You can use their Kombo `id` or their ID in the remote system by prefixing it with `remote:` (e.g., `remote:12312`)",
        "example": "EMPLOYEE_ID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Kombo API"
      apiBaseUrl="https://api.kombo.dev/v1"
      apiVersion="1.0.0"
      endpoints={48}
      sdkMethods={54}
      schemas={439}
      parameters={188}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kombo/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kombo/openapi.yaml"
      developerDocumentation="docs.kombo.dev"
    />
  );
}
  