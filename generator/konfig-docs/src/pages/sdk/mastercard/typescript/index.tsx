import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function MastercardTypeScriptSdk() {
  return (
    <Sdk
      sdkName="mastercard-typescript-sdk"
      metaDescription="Mastercard is a global payment technology company that connects billions of consumers, financial institutions, merchants, governments, and businesses worldwide, enabling them to use electronic forms of payment securely and efficiently."
      company="Mastercard"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mastercard/logo.png"
      clientNameCamelCase="mastercard"
      homepage="finicity.com"
      lastUpdated={new Date("2024-03-08T21:26:41.741Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mastercard/favicon.png"
      contactUrl="https://developer.mastercard.com/open-banking-us/documentation/support/"
      contactEmail="apisupport@mastercard.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mastercard/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/aggregation/v2/partners/authentication",
    "method": "createAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Create Access Token",
    "parameters": [
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "partnerSecret",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A temporary access token to be passed in the `Finicity-App-Token` HTTP header of all subsequent API requests"
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
    "url": "/aggregation/v2/partners/authentication",
    "method": "modifyPartnerSecret",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Modify Partner Secret",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/connect/v2/generate",
    "method": "generateUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Generate Connect URL",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "consumerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "optionalConsumerInfo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "institutionSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "isWebView",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Connect URL object"
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
    "url": "/connect/v2/generate/lite",
    "method": "generateLiteUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Generate Lite Connect URL",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "institutionId",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isWebView",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Connect URL object"
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
    "url": "/connect/v2/generate/fix",
    "method": "fixUrlGeneration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Generate Fix Connect URL",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isWebView",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Connect URL object"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/connect/v2/send/email",
    "method": "sendConnectEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Send Connect Email",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "institutionSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "optionalConsumerInfo",
        "schema": "object",
        "required": false,
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
      }
    ]
  },
  {
    "url": "/connect/v2/generate/jointBorrower",
    "method": "generateJointBorrowerUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Generate Connect URL - Joint Borrower",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "borrowers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "institutionSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Connect URL object"
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
    "url": "/connect/v2/generate/microentry/verify",
    "method": "verifyMicroEntryMicrodeposits",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Account Validation Assistant User verification of microdeposits",
    "parameters": [
      {
        "name": "partnerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "webhook",
        "schema": "string",
        "description": ""
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "webhookData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Connect URL object"
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
    "url": "/connect/v2/send/email/jointBorrower",
    "method": "sendEmailJointBorrower",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Send Connect Email - Joint Borrower",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "borrowers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "institutionSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
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
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/testing",
    "method": "enrollTestingCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Add Testing Customer",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A new customer that was just enrolled"
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
    "url": "/aggregation/v2/customers/active",
    "method": "enrollActiveCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Add Customer",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A new customer that was just enrolled"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers",
    "method": "findEnrolledUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get Customers",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": "Username for exact match (will return 0 or 1 record)"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "\"testing\" or \"active\" to return only customers of that type, or leave empty to return all customers"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "The text you wish to match. Leave this empty if you wish to return all customers. Must be URL-encoded (see: [Handling Spaces in Queries](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/))."
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customers"
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
    "url": "/aggregation/v1/customers/{customerId}/application",
    "method": "getWithAppDataById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get Customer With App Data by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A finicity customer record with application info"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Delete Customer by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get Customer by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A finicity customer record"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}",
    "method": "modifyById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Modify Customer by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/customers/{customerId}/consumer",
    "method": "getByCustomerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumers",
    "typeScriptTag": "consumers",
    "description": "Get Consumer For Customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A finicity consumer record"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/customers/{customerId}/consumer",
    "method": "createConsumerRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Consumers",
    "typeScriptTag": "consumers",
    "description": "Create Consumer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "birthday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "suffix",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A consumer that was just created"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/consumers/{consumerId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumers",
    "typeScriptTag": "consumers",
    "description": "Get Consumer by ID",
    "parameters": [
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A finicity consumer record"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/consumers/{consumerId}",
    "method": "modifyById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Consumers",
    "typeScriptTag": "consumers",
    "description": "Modify Consumer by ID",
    "parameters": [
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer ID"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthday",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "suffix",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts",
    "method": "getByInstitutionLogin",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Customer Accounts by Institution Login ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts",
    "method": "refreshCustomerByInstitutionLogin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Refresh Customer Accounts by Institution Login ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts",
    "method": "refreshCustomerAccountByInstitutionLogin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Refresh Customer Account by Institution Login ID for Data Access Tiers",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}",
    "method": "removeByInstitutionLogin",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Delete Customer Accounts by Institution Login ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/accounts/{accountId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Customer Account by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An account represents a bank account such as a checking or savings that the customer has added via the Connect interface."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}",
    "method": "removeByCustomerIdAndAccountId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Delete Customer Account by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts",
    "method": "getCustomerAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Customer Accounts",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "A filter to fetch account in the given status"
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": false,
        "description": "A filter to fetch accounts for the given type. Currently supported types: \"ava\""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts",
    "method": "refreshCustomerAggregation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Refresh Customer Accounts",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/accounts",
    "method": "refreshCustomerData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Refresh Customer Accounts for Data Access Tiers",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutions/{institutionId}/accounts",
    "method": "getCustomerInstitutionAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Customer Accounts by Institution ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "institutionId",
        "schema": "integer",
        "required": true,
        "description": "The institution ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutions/{institutionId}/accounts/simple",
    "method": "getBasicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts (Simple)",
    "typeScriptTag": "accountsSimple",
    "description": "Get Customer Accounts by Institution ID (Simple)",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "institutionId",
        "schema": "integer",
        "required": true,
        "description": "The institution ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of accounts with basic information of a customer"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts/simple",
    "method": "getBasicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts (Simple)",
    "typeScriptTag": "accountsSimple",
    "description": "Get Customer Accounts by Institution Login ID (Simple)",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of accounts with basic information of a customer"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/simple",
    "method": "getBasicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts (Simple)",
    "typeScriptTag": "accountsSimple",
    "description": "Get Customer Account by ID (Simple)",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An account represents a bank account such as a checking or savings that the customer has added via the Connect interface."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/simple",
    "method": "getBasicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts (Simple)",
    "typeScriptTag": "accountsSimple",
    "description": "Get Customer Accounts (Simple)",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of accounts with basic information of a customer"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/transactions/historic",
    "method": "loadHistoricTransactionsForCustomerAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Load Historic Transactions for Customer Account",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      }
    ],
    "responses": [
      {
        "statusCode": "203",
        "description": ""
      },
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/owner",
    "method": "getAccountOwnerDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Account Owner",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Owner of a customer account"
      },
      {
        "statusCode": "203",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v3/customers/{customerId}/accounts/{accountId}/owner",
    "method": "getAccountOwnerDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Account Owner Details",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      },
      {
        "name": "withInsights",
        "schema": "boolean",
        "required": false,
        "description": "If this parameter is true, Identity Insights data will be returned along with the account owner information"
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
    "url": "/aggregation/v1/partners/applications",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "App Registration",
    "typeScriptTag": "appRegistration",
    "description": "Register App",
    "parameters": [
      {
        "name": "appDescription",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "appUrl",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerAddressLine1",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerAddressLine2",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerCity",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerCountry",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerName",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerPostalCode",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerState",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/partners/applications/{preAppId}",
    "method": "updateRegistration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "App Registration",
    "typeScriptTag": "appRegistration",
    "description": "Modify App Registration",
    "parameters": [
      {
        "name": "preAppId",
        "schema": "string",
        "required": true,
        "description": "The application registration tracking ID"
      },
      {
        "name": "appDescription",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "appUrl",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerAddressLine1",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerAddressLine2",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerCity",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerCountry",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerName",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerPostalCode",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ownerState",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "required": true,
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v2/partners/applications",
    "method": "getApplicationStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "App Registration",
    "typeScriptTag": "appRegistration",
    "description": "Get App Registration Status",
    "parameters": [
      {
        "name": "preAppId",
        "schema": "string",
        "required": false,
        "description": "The application registration tracking ID"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": false,
        "description": "The application ID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Look up app registration requests by status"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": false,
        "description": "Look up app registration requests by app name"
      },
      {
        "name": "submittedDate",
        "schema": "integer",
        "required": false,
        "description": "Look up app registration requests by the date they were submitted"
      },
      {
        "name": "modifiedDate",
        "schema": "integer",
        "required": false,
        "description": "Look up app registration requests by the date the request was updated. This can be used to determine when a request was updated to \"A\" or \"R\"."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response for the Get App Registration Status API which returns an array of status objects"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/applications/{applicationId}",
    "method": "assignApplications",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "App Registration",
    "typeScriptTag": "appRegistration",
    "description": "Set Customer App ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "The application ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/institutionLogins/{institutionLoginId}/migration",
    "method": "migrateInstitutionLoginAccounts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "App Registration",
    "typeScriptTag": "appRegistration",
    "description": "Migrate Institution Login Accounts",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/institution/v2/certifiedInstitutions/rssd",
    "method": "getCertifiedInstitutionsWithRssd",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "Get Certified Institutions With RSSD",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term (financial institution `name` field). Leave empty for all FIs."
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "A product type: \"transAgg\", \"ach\", \"stateAgg\", \"voi\", \"voa\", \"aha\", \"availBalance\", \"accountOwner\""
      },
      {
        "name": "supportedCountries",
        "schema": "array",
        "required": false,
        "description": "A list of country codes, '*' for all countries."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of financial institutions from the Get Certified Institutions API"
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
    "url": "/institution/v2/institutions",
    "method": "searchFinancialInstitutions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "Get Institutions",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term (financial institution `name` field). Leave empty for all FIs."
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "A product type: \"transAgg\", \"ach\", \"stateAgg\", \"voi\", \"voa\", \"aha\", \"availBalance\", \"accountOwner\""
      },
      {
        "name": "supportedCountries",
        "schema": "array",
        "required": false,
        "description": "A list of country codes, '*' for all countries."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of financial institutions from the Get Institutions API"
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
    "url": "/institution/v2/certifiedInstitutions",
    "method": "listCertifiedInstitutions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "Get Certified Institutions",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term (financial institution `name` field). Leave empty for all FIs."
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "A product type: \"transAgg\", \"ach\", \"stateAgg\", \"voi\", \"voa\", \"aha\", \"availBalance\", \"accountOwner\""
      },
      {
        "name": "supportedCountries",
        "schema": "array",
        "required": false,
        "description": "A list of country codes, '*' for all countries."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of financial institutions from the Get Certified Institutions API"
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
    "url": "/institution/v2/institutions/{institutionId}",
    "method": "getByIdDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "Get Institution by ID",
    "parameters": [
      {
        "name": "institutionId",
        "schema": "integer",
        "required": true,
        "description": "The institution ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/institution/v2/institutions/{institutionId}/branding",
    "method": "getBrandingById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "Get Institution Branding by ID",
    "parameters": [
      {
        "name": "institutionId",
        "schema": "integer",
        "required": true,
        "description": "The institution ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voa",
    "method": "customerVoaReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Assets",
    "typeScriptTag": "verifyAssets",
    "description": "Generate VOA Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOA report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voaHistory",
    "method": "generateVoaWithIncomeReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Assets",
    "typeScriptTag": "verifyAssets",
    "description": "Generate VOA With Income Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOA with income report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/preQualVoa",
    "method": "getCheckingSavingsInvestmentAccounts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Assets",
    "typeScriptTag": "verifyAssets",
    "description": "Generate Prequalification (CRA) Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Prequalification report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/assetSummary",
    "method": "getAssetSummary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Assets",
    "typeScriptTag": "verifyAssets",
    "description": "Generate Prequalification (Non-CRA) Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Prequalification report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voi",
    "method": "createVoiReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOI Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOI report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voePayroll",
    "method": "generateVoePayrollReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOE - Payroll Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "payrollData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "payStatementsFromDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "marketSegment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "excludeEmpInfo",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Payroll report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voeTransactions",
    "method": "generateVoeTransactionsReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOE - Transactions Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "reportId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOE Transactions report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/payStatement",
    "method": "generatePayStatementReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate Pay Statement Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "paystatementReport",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Pay Statement report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voieTxVerify/withInterview",
    "method": "generateVoiePaystubWithTxVerifyReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOIE - Paystub (with TXVerify) Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "accountIds",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "voieWithInterviewData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOIE Paystub With TXVerify report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voieTxVerify/withStatement",
    "method": "generateVoiePaystubReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOIE - Paystub Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "voieWithStatementData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOIE Paystub report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voiePayroll",
    "method": "refreshVoiePayrollReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOIE - Payroll Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "payrollData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "payStatementsFromDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "marketSegment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "excludeEmpInfo",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Payroll report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/statement",
    "method": "getCustomerStatementInPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Statements",
    "typeScriptTag": "bankStatements",
    "description": "Get Customer Account Statement",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      },
      {
        "name": "index",
        "schema": "integer",
        "required": false,
        "description": "Request statements from 1-24. By default, 1 is the most recent statement. Increase the index value to count back (by month) and retrieve its most recent statement."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of statement to retrieve"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "203",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/statement",
    "method": "generateReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank Statements",
    "typeScriptTag": "bankStatements",
    "description": "Generate Statement Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "statementReportData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Statement report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v3/customers/{customerId}/accounts/{accountId}/statement",
    "method": "getMultipleStatements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Statements",
    "typeScriptTag": "bankStatements",
    "description": "Get Customer Account Multiple Statements",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      },
      {
        "name": "index",
        "schema": "string",
        "required": false,
        "description": "Request statements with comma-separated indexes ranged between 1-24. The default value is 1 and it will return the most recent statement. Increasing the index will return older statements, for example, setting the index value to 6 will return a statement from six months ago."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer account statements"
      },
      {
        "statusCode": "203",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v3/customers/{customerId}/transactions",
    "method": "getAllCustomerTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get All Customer Transactions",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": true,
        "description": "A start date"
      },
      {
        "name": "toDate",
        "schema": "integer",
        "required": true,
        "description": "A end date"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Date sort order: \"asc\" for ascending, \"desc\" for descending"
      },
      {
        "name": "includePending",
        "schema": "boolean",
        "required": false,
        "description": "If pending transactions must be included"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of transactions"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/transactions/{transactionId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get Customer Transaction by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "transactionId",
        "schema": "integer",
        "required": true,
        "description": "A transaction ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v4/customers/{customerId}/accounts/{accountId}/transactions",
    "method": "getCustomerAccountTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get Customer Account Transactions",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": true,
        "description": "A start date"
      },
      {
        "name": "toDate",
        "schema": "integer",
        "required": true,
        "description": "A end date"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Date sort order: \"asc\" for ascending, \"desc\" for descending"
      },
      {
        "name": "includePending",
        "schema": "boolean",
        "required": false,
        "description": "If pending transactions must be included"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of transactions"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/transactions",
    "method": "get24MonthsHistoryAndGenerateReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Generate Transactions Report",
    "parameters": [
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "toDate",
        "schema": "integer",
        "required": true,
        "description": "A end date"
      },
      {
        "name": "includePending",
        "schema": "boolean",
        "required": false,
        "description": "If pending transactions must be included"
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Transaction report being generated"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/reports/balance-analytics/userTypes/{userType}",
    "method": "generateReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Balance Analytics",
    "typeScriptTag": "balanceAnalytics",
    "description": "Generate Balance Analytics Report - Personal/Business",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "userType",
        "schema": "string",
        "required": true,
        "description": "UserType indicates if the request is for a business or personal use case, Allowed values: business/personal."
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "analyticsReportData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/reports/cashflow-analytics/userTypes/{userType}",
    "method": "generateReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cash Flow Analytics",
    "typeScriptTag": "cashFlowAnalytics",
    "description": "Generate Cashflow Analytics Report - Personal/Business",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "userType",
        "schema": "string",
        "required": true,
        "description": "UserType indicates if the request is for a business or personal use case, Allowed values: business/personal."
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "analyticsReportData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/payStatements",
    "method": "uploadForCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pay Statements",
    "typeScriptTag": "payStatements",
    "description": "Store Customer Pay Statement",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "statement",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An asset"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/accounts/{accountId}/loanDetails",
    "method": "getLoanPaymentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Loan Payment Details",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Loan payment details for a customer account"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/customers/{customerId}/portfolios/{portfolioId}",
    "method": "getMostRecentReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Get Portfolio by Customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "portfolioId",
        "schema": "string",
        "required": true,
        "description": "A portfolio ID with the portfolio version number. Using the portfolio number without a version number will return the most recently generated reports."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/txpush",
    "method": "disableNotifications",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TxPush",
    "typeScriptTag": "txPush",
    "description": "Disable TxPush Notifications",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/txpush",
    "method": "subscribeNotifications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TxPush",
    "typeScriptTag": "txPush",
    "description": "Subscribe to TxPush Notifications",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/transactions",
    "method": "injectTestTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TxPush",
    "typeScriptTag": "txPush",
    "description": "Create TxPush Test Transaction",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "postedDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "transactionDate",
        "schema": "integer",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Response for TxPush test transaction"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/subscriptions/{subscriptionId}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TxPush",
    "typeScriptTag": "txPush",
    "description": "Delete TxPush Subscription",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "subscriptionId",
        "schema": "integer",
        "required": true,
        "description": "The subscription ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/consumers/{consumerId}/portfolios/{portfolioId}",
    "method": "getPortfolioByConsumer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Get Portfolio by Consumer",
    "parameters": [
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer ID"
      },
      {
        "name": "portfolioId",
        "schema": "string",
        "required": true,
        "description": "A portfolio ID with the portfolio version number. Using the portfolio number without a version number will return the most recently generated reports."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/details",
    "method": "getAchDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Account ACH Details",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The routing and account number information to initiate ACH transfers"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v3/customers/{customerId}/reports/{reportId}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get Report by Customer and ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "ID of the report"
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "required": false,
        "description": "The name of the entity you are retrieving the report on behalf of"
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A report"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v3/consumers/{consumerId}/reports/{reportId}",
    "method": "getByConsumerAndId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get Report by Consumer and ID",
    "parameters": [
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports."
      },
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer ID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "ID of the report"
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "required": false,
        "description": "The name of the entity you are retrieving the report on behalf of"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A report"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/customers/{customerId}/reports",
    "method": "byCustomerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get Reports by Customer ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports."
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/consumers/{consumerId}/reports",
    "method": "byConsumerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get Reports by Consumer ID",
    "parameters": [
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports."
      },
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer ID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/assets/{assetId}",
    "method": "getBinaryFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Get Asset by Customer and ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "The asset ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/availableBalance/live",
    "method": "getAvailableBalanceLive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Available Balance - Live",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/availableBalance",
    "method": "getLatestCachedBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Available Balance",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/cashFlowBusiness",
    "method": "generateReportBusiness",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cash Flow",
    "typeScriptTag": "cashFlow",
    "description": "Generate Cash Flow Report - Business",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/cashFlowPersonal",
    "method": "generatePersonalReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cash Flow",
    "typeScriptTag": "cashFlow",
    "description": "Generate Cash Flow Report - Personal",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code."
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/microentry/v1/customers/{customerId}",
    "method": "initiateMicroEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account Validation Assistance",
    "typeScriptTag": "accountValidationAssistance",
    "description": "Initiate Micro Entries",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "receiver",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/microentry/v1/customers/{customerId}/accounts/{accountId}/amounts",
    "method": "verifyMicroEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account Validation Assistance",
    "typeScriptTag": "accountValidationAssistance",
    "description": "Verify Micro Entries",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
      },
      {
        "name": "amounts",
        "schema": "array",
        "required": true,
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/microentry/v1/customers/{customerId}/accounts/{accountId}",
    "method": "getMicroEntriesDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Validation Assistance",
    "typeScriptTag": "accountValidationAssistance",
    "description": "Get Micro Entries Details",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/analytics/balance/v1/customer/{customerId}",
    "method": "generateAnalyticsReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Balance Analytics",
    "typeScriptTag": "balanceAnalytics",
    "description": "Generate Balance Analytics",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports."
      },
      {
        "name": "accountIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lengthOfReport",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "409",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/balance/v1/customer/{customerId}/fcra",
    "method": "generateFcraAnalyticsReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Balance Analytics",
    "typeScriptTag": "balanceAnalytics",
    "description": "Generate Balance Analytics - FCRA",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports."
      },
      {
        "name": "accountIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lengthOfReport",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "409",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/cashflow/v1/customer/{customerId}",
    "method": "generateAnalytics",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cash Flow Analytics",
    "typeScriptTag": "cashFlowAnalytics",
    "description": "Generate Cash Flow Analytics",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports."
      },
      {
        "name": "accountIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lengthOfReport",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "409",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/cashflow/v1/customer/{customerId}/fcra",
    "method": "generateFcraAnalyticsReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cash Flow Analytics",
    "typeScriptTag": "cashFlowAnalytics",
    "description": "Generate Cash Flow Analytics - FCRA",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports."
      },
      {
        "name": "accountIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lengthOfReport",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "409",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/payment-history/v1/customer/{customerId}",
    "method": "generateCustomerPaymentReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment History",
    "typeScriptTag": "paymentHistory",
    "description": "Generate Payment History",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/payment-history/v1/customer/{customerId}/fcra",
    "method": "generateFcraPaymentReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment History",
    "typeScriptTag": "paymentHistory",
    "description": "Generate Payment History - FCRA",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "409",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/data/v1/{obb_report_id}",
    "method": "getReportData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance Analytics",
    "typeScriptTag": "balanceAnalytics",
    "description": "Get OBB Analytics Report",
    "parameters": [
      {
        "name": "obbReportId",
        "schema": "string",
        "required": true,
        "description": "Report ID generated and returned by OBB products"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Cash Flow Analytics, Balance Analytics, and Payment History report data as JSON"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/analytics/data/v1/{obb_report_id}/fcra",
    "method": "getReportDataFcra",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance Analytics",
    "typeScriptTag": "balanceAnalytics",
    "description": "Get OBB Analytics Report - FCRA",
    "parameters": [
      {
        "name": "obbReportId",
        "schema": "string",
        "required": true,
        "description": "Report ID generated and returned by OBB products"
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": true,
        "description": "2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Cash Flow Analytics, Balance Analytics, and Payment History report data as JSON"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/partners/accessKey",
    "method": "generateKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Third Party Access",
    "typeScriptTag": "thirdPartyAccess",
    "description": "Generate Third Party Access Key",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "thirdPartyPartnerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "provenance",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An object representing the third party access key receipt\n\n  * `customerId`: This is recipient's customerId represented as a\n  pseudo identifier.\n  * `accountId`: This is the value provided to recipient\n  represented as a pseudo identifier for the accountId."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/partners/accessKey/{consentReceiptId}",
    "method": "revokePartnersAccess",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Third Party Access",
    "typeScriptTag": "thirdPartyAccess",
    "description": "Revoke Third Party Access",
    "parameters": [
      {
        "name": "consentReceiptId",
        "schema": "string",
        "required": true,
        "description": "Third party access key receipt ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/partners/accessKey/{consentReceiptId}",
    "method": "updateAccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Third Party Access",
    "typeScriptTag": "thirdPartyAccess",
    "description": "Update Third Party Access",
    "parameters": [
      {
        "name": "consentReceiptId",
        "schema": "string",
        "required": true,
        "description": "Third party access key receipt ID"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "thirdPartyPartnerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "provenance",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An object representing the third party access key receipt\n\n  * `customerId`: This is recipient's customerId represented as a\n  pseudo identifier.\n  * `accountId`: This is the value provided to recipient\n  represented as a pseudo identifier for the accountId."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/institution-logins/{institution_login_id}/authorization-details",
    "method": "getAuthorizationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Authorization Details",
    "typeScriptTag": "customerAuthorizationDetails",
    "description": "Returns customer authorization details for the institution login identification.",
    "parameters": [
      {
        "name": "institutionLoginId",
        "schema": "integer",
        "required": true,
        "description": "Institution login id of the customer."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/business-services/customers/{customer_id}/businesses",
    "method": "getDetailsByCustomerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Businesses API",
    "typeScriptTag": "businessesApi",
    "description": "Get Business for Customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the customer"
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
    "url": "/business-services/customers/{customer_id}/businesses",
    "method": "createNewBusiness",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Businesses API",
    "typeScriptTag": "businessesApi",
    "description": "Create a New Business for a Customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the customer"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "personallyLiable",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": false,
        "description": ""
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
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/business-services/businesses/{business_id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Businesses API",
    "typeScriptTag": "businessesApi",
    "description": "Get Business by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the customer"
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
    "url": "/business-services/businesses/{business_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Businesses API",
    "typeScriptTag": "businessesApi",
    "description": "Update Business by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the customer"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "personallyLiable",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": false,
        "description": ""
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
  }
]
    }
      language="TypeScript"
      apiTitle="Open Banking"
      apiBaseUrl="https://api.finicity.com"
      apiVersion="1.16.0"
      endpoints={93}
      sdkMethods={104}
      schemas={506}
      parameters={468}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mastercard/openapi.yaml"
    />
  );
}
  