import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function StackExchangeTypeScriptSdk() {
  return (
    <Sdk
      sdkName="stack-exchange-typescript-sdk"
      metaDescription="We make Stack Overflow and 170+ other community-powered Q&A sites."
      company="Stack Exchange"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stack-exchange/logo.png"
      clientNameCamelCase="stackExchange"
      homepage="api.stackexchange.com"
      lastUpdated={new Date("2024-02-02T23:02:23.295Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stack-exchange/favicon.ico"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stack-exchange/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/access-tokens/{accessTokens}",
    "method": "readAccessTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Reads the properties for a set of access tokens.\n \n{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.\n \nThis method returns a list of access_tokens.\n",
    "parameters": [
      {
        "name": "accessTokens",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/access-tokens/{accessTokens}/invalidate",
    "method": "expireAccessTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.\n \n{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.\n \nThis method returns a list of access_tokens.\n",
    "parameters": [
      {
        "name": "accessTokens",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/answers",
    "method": "getUndeletedAnswers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns all the undeleted answers in the system.\n \nThe sorts accepted by this method operate on the follow fields of the answer object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of answers.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/answers/{ids}",
    "method": "getAnswersByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the set of answers identified by ids.\n \nThis is meant for batch fetcing of questions. A useful trick to poll for updates is to sort by activity, with a minimum date of the last time you polled.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.\n \nThe sorts accepted by this method operate on the follow fields of the answer object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of answers.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/answers/{ids}/comments",
    "method": "getCommentsOnAnswers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the comments on a set of answers.\n \nIf you know that you have an answer id and need the comments, use this method. If you know you have a question id, use /questions/{id}/comments. If you are unsure, use /posts/{id}/comments.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.\n \nThe sorts accepted by this method operate on the follow fields of the comment object:\n - creation - creation_date\n - votes - score\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of comments.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/apps/{accessTokens}/de-authenticate",
    "method": "deauthenticateAccessTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.\n \nThis method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.\n \nNothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.\n \n{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.\n \nThis method returns a list of access_tokens.\n",
    "parameters": [
      {
        "name": "accessTokens",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/badges",
    "method": "listBadges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns all the badges in the system.\n \nBadge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.\n \nThis means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.\n \nFor ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.\n \nrank is the default sort.\n \nThis method returns a list of badges.\n",
    "parameters": [
      {
        "name": "inname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/badges/name",
    "method": "getAllExplicitNamedBadges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets all explicitly named badges in the system.\n \nA named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.\n \nFor the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.\n \nrank is the default sort.\n \nThis method returns a list of badges.\n",
    "parameters": [
      {
        "name": "inname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/badges/recipients",
    "method": "listRecentAwardedBadges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns recently awarded badges in the system.\n \nAs these badges have been awarded, they will have the badge.user property set.\n \nThis method returns a list of badges.\n",
    "parameters": [
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/badges/tags",
    "method": "listBadgeTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the badges that are awarded for participation in specific tags.\n \nFor the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.\n \nrank is the default sort.\n \nThis method returns a list of badges.\n",
    "parameters": [
      {
        "name": "inname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/badges/{ids}",
    "method": "getBadgesByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the badges identified in id.\n \nNote that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.\n \nBadge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.\n \nThis means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.\n \nFor ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.\n \nrank is the default sort.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.\n \nThis method returns a list of badges.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/badges/{ids}/recipients",
    "method": "getRecentAwardedBadgesByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns recently awarded badges in the system, constrained to a certain set of badges.\n \nAs these badges have been awarded, they will have the badge.user property set.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.\n \nThis method returns a list of badges.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/comments",
    "method": "getCommentList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets all the comments on the site.\n \nIf you're filtering for interesting comments (by score, creation date, etc.) make use of the sort paramter with appropriate min and max values.\n \nIf you're looking to query conversations between users, instead use the /users/{ids}/mentioned and /users/{ids}/comments/{toid} methods.\n \nThe sorts accepted by this method operate on the follow fields of the comment object:\n - creation - creation_date\n - votes - score\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of comments.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/comments/{ids}",
    "method": "getCommentsByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the comments identified in id.\n \nThis method is most useful if you have a cache of comment ids obtained through other means (such as /questions/{id}/comments) but suspect the data may be stale.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for comment_id on comment objects.\n \nThe sorts accepted by this method operate on the follow fields of the comment object:\n - creation - creation_date\n - votes - score\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of comments.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/comments/{id}/delete",
    "method": "deleteCommentById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Deletes a comment.\n \nUse an access_token with write_access to delete a comment.\n \nIn practice, this method will never return an object.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
      },
      {
        "name": "preview",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/comments/{id}/edit",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Edit an existing comment.\n \nUse an access_token with write_access to edit an existing comment.\n \nThis method return the created comment.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preview",
        "schema": "boolean",
        "description": ""
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
    "url": "/errors",
    "method": "getErrorList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the various error codes that can be produced by the API.\n \nThis method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.\n \nFor testing purposes, look into the /errors/{id} method which simulates errors given a code.\n \nThis method returns a list of errors.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/errors/{id}",
    "method": "generateError",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "This method allows you to generate an error.\n \nThis method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.\n \nThis method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
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
    "url": "/events",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a stream of events that have occurred on the site.\n \nThe API considers the following \"events\":\n - posting a question\n - posting an answer\n - posting a comment\n - editing a post\n - creating a user\n\n  \n\n \nEvents are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.\n \nIt is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.\n \nThis method returns a list of events.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
      },
      {
        "name": "since",
        "schema": "integer",
        "description": "Unix date."
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
    "url": "/filters/create",
    "method": "createFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be \"unsafe\".\n \nFilter \"safety\" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n \nIf no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.\n \nWhen the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.\n \nIt is not expected that many applications will call this method at runtime, filters should be pre-calculated and \"baked in\" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.\n \nThis method returns a single filter.\n",
    "parameters": [
      {
        "name": "base",
        "schema": "string",
        "description": ""
      },
      {
        "name": "exclude",
        "schema": "string",
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "include",
        "schema": "string",
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "unsafe",
        "schema": "boolean",
        "description": ""
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
    "url": "/filters/{filters}",
    "method": "getFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the fields included by the given filters, and the \"safeness\" of those filters.\n \nIt is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.\n \n{filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.\n \nThis method returns a list of filters.\n",
    "parameters": [
      {
        "name": "filters",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
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
    "url": "/inbox",
    "method": "getInboxItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a user's inbox.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method returns a list of inbox items.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/inbox/unread",
    "method": "getUnreadInboxItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the unread items in a user's inbox.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method returns a list of inbox items.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "since",
        "schema": "integer",
        "description": "Unix date."
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
    "url": "/info",
    "method": "getSiteInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a collection of statistics about the site.\n \nData to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.\n \nThis data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.\n \nThis method returns an info object.\n",
    "parameters": [
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the user associated with the passed access_token.\n \nThis method returns a user.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/answers",
    "method": "getUserAnswers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the answers owned by the user associated with the given access_token.\n \nThis method returns a list of answers.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/associated",
    "method": "listAssociatedAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns all of a user's associated accounts, given an access_token for them.\n \nThis method returns a list of network users.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/me/badges",
    "method": "getUserBadges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the badges earned by the user associated with the given access_token.\n \nThis method returns a list of badges.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\nsort = type => string\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/comments",
    "method": "getUserComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the comments owned by the user associated with the given access_token.\n \nThis method returns a list of comments.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/comments/{toId}",
    "method": "getUserComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.\n \nThis method returns a list of comments.\n",
    "parameters": [
      {
        "name": "toId",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/favorites",
    "method": "getUserFavorites",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the questions favorites by the user associated with the given access_token.\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = added => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = added => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/inbox",
    "method": "getInboxItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the user identified by access_token's inbox.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method returns a list of inbox items.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/inbox/unread",
    "method": "getUnreadInboxItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the unread items in the user identified by access_token's inbox.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method returns a list of inbox items.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
      },
      {
        "name": "since",
        "schema": "integer",
        "description": "Unix date."
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
    "url": "/me/mentioned",
    "method": "getMentionedComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the comments mentioning the user associated with the given access_token.\n \nThis method returns a list of comments.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/merges",
    "method": "getAccountMerges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a record of merges that have occurred involving a user identified by an access_token.\n \nThis method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.\n \nThis is most useful when confirming that an account_id is in fact \"new\" to an application.\n \nAccount merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.\n \nNote that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.\n \nThis method returns a list of account_merge.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/me/notifications",
    "method": "getUserNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a user's notifications, given an access_token.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method returns a list of notifications.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/notifications/unread",
    "method": "getUserUnreadNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a user's unread notifications, given an access_token.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method returns a list of notifications.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/privileges",
    "method": "getUserPrivileges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the privileges the user identified by access_token has.\n \nThis method returns a list of privileges.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/questions",
    "method": "getUserQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the questions owned by the user associated with the given access_token.\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/questions/featured",
    "method": "getFeaturedQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the questions that have active bounties offered by the user associated with the given access_token.\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/questions/no-answers",
    "method": "listUnansweredQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the questions owned by the user associated with the given access_token that have no answers.\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/questions/unaccepted",
    "method": "getUnacceptedQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the questions owned by the user associated with the given access_token that have no accepted answer.\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/questions/unanswered",
    "method": "listUnansweredQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the questions owned by the user associated with the given access_token that are not considered answered.\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/reputation",
    "method": "getUserReputationChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the reputation changed for the user associated with the given access_token.\n \nThis method returns a list of reputation changes.\n",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/reputation-history",
    "method": "getUserReputationHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns user's public reputation history.\n \nThis method returns a list of reputation_history.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/reputation-history/full",
    "method": "getUserReputationHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns user's full reputation history, including private events.\n \n This method requires an access_token, with a scope containing \"private_info\".\n\n \nThis method returns a list of reputation_history.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/suggested-edits",
    "method": "getUserSuggestedEdits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the suggested edits the user identified by access_token has submitted.\n \nThis method returns a list of suggested-edits.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/tags",
    "method": "getUserTagsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the tags the user identified by the access_token passed is active in.\n \nThis method returns a list of tags.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/tags/{tags}/top-answers",
    "method": "getUserTopAnswers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.\n \nThis method returns a list of answers.\n",
    "parameters": [
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/tags/{tags}/top-questions",
    "method": "getUserTopQuestionsByTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = hot => none\nsort = week => none\nsort = month => none\nsort = relevance => none\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = hot => none\nsort = week => none\nsort = month => none\nsort = relevance => none\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/timeline",
    "method": "getUserTimeline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a subset of the actions the user identified by the passed access_token has taken on the site.\n \nThis method returns a list of user timeline objects.\n",
    "parameters": [
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/top-answer-tags",
    "method": "getUserTopAnswerTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the user identified by access_token's top 30 tags by answer score.\n \nThis method returns a list of top tag objects.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/top-question-tags",
    "method": "getUserTopQuestionTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the user identified by access_token's top 30 tags by question score.\n \nThis method returns a list of top tag objects.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/me/write-permissions",
    "method": "getUserWritePermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the write permissions a user has via the api, given an access token.\n \nThe Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.\n \nThis method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.\n \nThis method returns a list of write_permissions.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/notifications",
    "method": "getUserNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a user's notifications.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method returns a list of notifications.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/notifications/unread",
    "method": "getUserUnreadNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a user's unread notifications.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method returns a list of notifications.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/posts",
    "method": "listPosts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Fetches all posts (questions and answers) on the site.\n \nIn many ways this method is the union of /questions and /answers, returning both sets of data albeit only the common fields.\n \nMost applications should use the question or answer specific methods, but /posts is available for those rare cases where any activity is of intereset. Examples of such queries would be: \"all posts on Jan. 1st 2011\" or \"top 10 posts by score of all time\".\n \nThe sorts accepted by this method operate on the follow fields of the post object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of posts.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/posts/{ids}",
    "method": "getPostsByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Fetches a set of posts by ids.\n \nThis method is meant for grabbing an object when unsure whether an id identifies a question or an answer. This is most common with user entered data.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.\n \nThe sorts accepted by this method operate on the follow fields of the post object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of posts.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/posts/{ids}/comments",
    "method": "getCommentsByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the comments on the posts identified in ids, regardless of the type of the posts.\n \nThis method is meant for cases when you are unsure of the type of the post id provided. Generally, this would be due to obtaining the post id directly from a user.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.\n \nThe sorts accepted by this method operate on the follow fields of the comment object:\n - creation - creation_date\n - votes - score\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of comments.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/posts/{ids}/revisions",
    "method": "getPostRevisions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns edit revisions for the posts identified in ids.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.\n \nThis method returns a list of revisions.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/posts/{ids}/suggested-edits",
    "method": "listSuggestedEdits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns suggsted edits on the posts identified in ids.\n \n - creation - creation_date\n - approval - approval_date\n - rejection - rejection_date\n  creation is the default sort.\n \n {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.\n\n \nThis method returns a list of suggested-edits.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/posts/{id}/comments/add",
    "method": "createNewComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Create a new comment.\n \nUse an access_token with write_access to create a new comment on a post.\n \nThis method returns the created comment.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preview",
        "schema": "boolean",
        "description": ""
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
    "url": "/privileges",
    "method": "listPrivileges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the earnable privileges on a site.\n \nPrivileges define abilities a user can earn (via reputation) on any Stack Exchange site.\n \nWhile fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.\n \nThis method returns a list of privileges.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/questions",
    "method": "listQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets all the questions on the site.\n \nThis method allows you make fairly flexible queries across the entire corpus of questions on a site. For example, getting all questions asked in the the week of Jan 1st 2011 with scores of 10 or more is a single query with parameters sort=votes&min=10&fromdate=1293840000&todate=1294444800.\n \nTo constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n - hot - by the formula ordering the hot tab Does not accept min or max\n - week - by the formula ordering the week tab Does not accept min or max\n - month - by the formula ordering the month tab Does not accept min or max\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "tagged",
        "schema": "string",
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = hot => none\nsort = week => none\nsort = month => none\nsort = relevance => none\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = hot => none\nsort = week => none\nsort = month => none\nsort = relevance => none\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/questions/featured",
    "method": "getFeaturedQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns all the questions with active bounties in the system.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "tagged",
        "schema": "string",
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/questions/no-answers",
    "method": "getUnansweredQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns questions which have received no answers.\n \nCompare with /questions/unanswered which mearly returns questions that the sites consider insufficiently well answered.\n \nThis method corresponds roughly with the this site tab.\n \nTo constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "tagged",
        "schema": "string",
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/questions/unanswered",
    "method": "listUnansweredQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns questions the site considers to be unanswered.\n \nNote that just because a question has an answer, that does not mean it is considered answered. While the rules are subject to change, at this time a question must have at least one upvoted answer to be considered answered.\n \nTo constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.\n \nCompare with /questions/no-answers.\n \nThis method corresponds roughly with the unanswered tab.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "tagged",
        "schema": "string",
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/questions/{ids}",
    "method": "getQuestionListByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the questions identified in {ids}.\n \nThis is most useful for fetching fresh data when maintaining a cache of question ids, or polling for changes.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/questions/{ids}/answers",
    "method": "getQuestionAnswers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the answers to a set of questions identified in id.\n \nThis method is most useful if you have a set of interesting questions, and you wish to obtain all of their answers at once or if you are polling for new or updates answers (in conjunction with sort=activity).\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.\n \nThe sorts accepted by this method operate on the follow fields of the answer object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of answers.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/questions/{ids}/comments",
    "method": "getQuestionCommentsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the comments on a question.\n \nIf you know that you have an question id and need the comments, use this method. If you know you have a answer id, use /answers/{ids}/comments. If you are unsure, use /posts/{ids}/comments.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.\n \nThe sorts accepted by this method operate on the follow fields of the comment object:\n - creation - creation_date\n - votes - score\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of comments.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/questions/{ids}/linked",
    "method": "getLinkedQuestionsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets questions which link to those questions identified in {ids}.\n \nThis method only considers questions that are linked within a site, and will never return questions from another Stack Exchange site.\n \nA question is considered \"linked\" when it explicitly includes a hyperlink to another question, there are no other heuristics.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n - rank - a priority sort by site applies, subject to change at any time Does not accept min or max\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = rank => none\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = rank => none\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/questions/{ids}/related",
    "method": "getRelatedQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns questions that the site considers related to those identified in {ids}.\n \nThe algorithm for determining if questions are related is not documented, and subject to change at any time. Futhermore, these values are very heavily cached, and may not update immediately after a question has been editted. It is also not guaranteed that a question will be considered related to any number (even non-zero) of questions, and a consumer should be able to handle a variable number of returned questions.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n - rank - a priority sort by site applies, subject to change at any time Does not accept min or max\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = rank => none\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = rank => none\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/questions/{ids}/timeline",
    "method": "getQuestionTimelineEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a subset of the events that have happened to the questions identified in id.\n \nThis provides data similar to that found on a question's timeline page.\n \nVoting data is scrubbed to deter inferencing of voter identity.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.\n \nThis method returns a list of question timeline events.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/revisions/{ids}",
    "method": "getEditRevisionsByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns edit revisions identified by ids in {ids}.\n \n{ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.\n \nThis method returns a list of revisions.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Guid list (semicolon delimited)."
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/search",
    "method": "searchQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Searches a site for any questions which fit the given criteria.\n \nThis method is intentionally quite limited. For more general searching, you should use a proper internet search engine restricted to the domain of the site in question.\n \nAt least one of tagged or intitle must be set on this method. nottagged is only used if tagged is also set, for performance reasons.\n \ntagged and nottagged are semi-colon delimited list of tags. At least 1 tag in tagged will be on each returned question if it is passed, making it the OR equivalent of the AND version of tagged on /questions.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n - relevance - matches the relevance tab on the site itself Does not accept min or max\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "tagged",
        "schema": "string",
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
      },
      {
        "name": "intitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nottagged",
        "schema": "string",
        "description": "String list (semicolon delimited)."
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
    "url": "/search/advanced",
    "method": "searchAdvancedQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Searches a site for any questions which fit the given criteria.\n \nSearch criteria are expressed using the following parameters:\n  - q - a free form text parameter, will match all question properties based on an undocumented algorithm.\n - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.\n - answers - the minimum number of answers returned questions must have.\n - body - text which must appear in returned questions' bodies.\n - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.\n - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.\n - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.\n - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.\n - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.\n - title - text which must appear in returned questions' titles.\n - user - the id of the user who must own the questions returned.\n - url - a url which must be contained in a post, may include a wildcard.\n - views - the minimum number of views returned questions must have.\n - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.\n\n  \nAt least one additional parameter must be set if nottagged is set, for performance reasons.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n - relevance - matches the relevance tab on the site itself Does not accept min or max\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "tagged",
        "schema": "string",
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
      },
      {
        "name": "accepted",
        "schema": "string",
        "description": ""
      },
      {
        "name": "answers",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "migrated",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notice",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nottagged",
        "schema": "string",
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "views",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "wiki",
        "schema": "string",
        "description": ""
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
    "url": "/similar",
    "method": "getSimilarQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns questions which are similar to a hypothetical one based on a title and tag combination.\n \nThis method is roughly equivalent to a site's related questions suggestion on the ask page.\n \nThis method is useful for correlating data outside of a Stack Exchange site with similar content within one.\n \nNote that title must always be passed as a parameter. tagged and nottagged are optional, semi-colon delimited lists of tags.\n \nIf tagged is passed it is treated as a preference, there is no guarantee that questions returned will have any of those tags. nottagged is treated as a requirement, no questions will be returned with those tags.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n - relevance - order by \"how similar\" the questions are, most likely candidate first with a descending order Does not accept min or max\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "tagged",
        "schema": "string",
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = relevance => none\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
      },
      {
        "name": "nottagged",
        "schema": "string",
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
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
    "url": "/sites",
    "method": "getSiteList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns all sites in the network.\n \nThis method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).\n \nThe pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.\n \nThis method returns a list of sites.\n",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/suggested-edits",
    "method": "getSuggestedEdits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns all the suggested edits in the systems.\n \nThis method returns a list of suggested-edits.\n \nThe sorts accepted by this method operate on the follow fields of the suggested_edit object:\n - creation - creation_date\n - approval - approval_date Does not return unapproved suggested_edits\n - rejection - rejection_date Does not return unrejected suggested_edits\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/suggested-edits/{ids}",
    "method": "getSuggestedEditsByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns suggested edits identified in ids.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for suggested_edit_id on suggested_edit objects.\n \nThe sorts accepted by this method operate on the follow fields of the suggested_edit object:\n - creation - creation_date\n - approval - approval_date Does not return unapproved suggested_edits\n - rejection - rejection_date Does not return unrejected suggested_edits\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of suggested-edits.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/tags",
    "method": "getTagList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the tags found on a site.\n \nThe inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both \"download\" and \"owner\" amongst others.\n \nThis method returns a list of tags.\n \nThe sorts accepted by this method operate on the follow fields of the tag object:\n - popular - count\n - activity - the creation_date of the last question asked with the tag\n - name - name\n  popular is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n",
    "parameters": [
      {
        "name": "inname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/tags/moderator-only",
    "method": "getModeratorTagsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the tags found on a site that only moderators can use.\n \nThe inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both \"download\" and \"owner\" amongst others.\n \nThis method returns a list of tags.\n \nThe sorts accepted by this method operate on the follow fields of the tag object:\n - popular - count\n - activity - the creation_date of the last question asked with the tag\n - name - name\n  popular is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n",
    "parameters": [
      {
        "name": "inname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/tags/required",
    "method": "listRequiredTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the tags found on a site that fulfill required tag constraints on questions.\n \nThe inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both \"download\" and \"owner\" amongst others.\n \nThis method returns a list of tags.\n \nThe sorts accepted by this method operate on the follow fields of the tag object:\n - popular - count\n - activity - the creation_date of the last question asked with the tag\n - name - name\n  popular is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n",
    "parameters": [
      {
        "name": "inname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/tags/synonyms",
    "method": "listTagSynonyms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns all tag synonyms found a site.\n \nWhen searching for synonyms of specific tags, it is better to use /tags/{tags}/synonyms over this method.\n \nThe sorts accepted by this method operate on the follow fields of the tag_synonym object:\n - creation - creation_date\n - applied - applied_count\n - activity - last_applied_date\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of tag_synonyms.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = applied => number\nsort = activity => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = applied => number\nsort = activity => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/tags/{tags}/faq",
    "method": "getFrequentlyAskedQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the frequently asked questions for the given set of tags in {tags}.\n \nFor a question to be returned, it must have all the tags in {tags} and be considered \"frequently asked\". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.\n \n{tags} can contain up to 5 individual tags per request.\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/tags/{tags}/info",
    "method": "getTagInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns tag objects representing the tags in {tags} found on the site.\n \nThis method diverges from the standard naming patterns to avoid to conflicting with existing methods, due to the free form nature of tag names.\n \nThis method returns a list of tags.\n \nThe sorts accepted by this method operate on the follow fields of the tag object:\n - popular - count\n - activity - the creation_date of the last question asked with the tag\n - name - name\n  popular is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n",
    "parameters": [
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/tags/{tags}/related",
    "method": "getRelatedTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the tags that are most related to those in {tags}.\n \nIncluding multiple tags in {tags} is equivalent to asking for \"tags related to tag #1 and tag #2\" not \"tags related to tag #1 or tag #2\".\n \ncount on tag objects returned is the number of question with that tag that also share all those in {tags}.\n \n{tags} can contain up to 4 individual tags per request.\n \nThis method returns a list of tags.\n",
    "parameters": [
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/tags/{tags}/synonyms",
    "method": "getTagSynonymsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets all the synonyms that point to the tags identified in {tags}. If you're looking to discover all the tag synonyms on a site, use the /tags/synonyms methods instead of call this method on all tags.\n \n{tags} can contain up to 20 individual tags per request.\n \nThe sorts accepted by this method operate on the follow fields of the tag_synonym object:\n - creation - creation_date\n - applied - applied_count\n - activity - last_applied_date\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of tag synonyms.\n",
    "parameters": [
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = applied => number\nsort = activity => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = applied => number\nsort = activity => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/tags/{tags}/wikis",
    "method": "getTagWikis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the wikis that go with the given set of tags in {tags}.\n \nBe aware that not all tags have wikis.\n \n{tags} can contain up to 20 individual tags per request.\n \nThis method returns a list of tag wikis.\n",
    "parameters": [
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/tags/{tag}/top-answerers/{period}",
    "method": "getTopAnswerersByTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.\n \nThis is a view onto the data presented on the tag info page on the sites.\n \nThis method returns a list of tag score objects.\n",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "period",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/tags/{tag}/top-askers/{period}",
    "method": "getTopAskersByTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.\n \nThis is a view onto the data presented on the tag info page on the sites.\n \nThis method returns a list of tag score objects.\n",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "period",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users",
    "method": "listAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns all users on a site.\n \nThis method returns a list of users.\n \nThe sorts accepted by this method operate on the follow fields of the user object:\n - reputation - reputation\n - creation - creation_date\n - name - display_name\n - modified - last_modified_date\n  reputation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThe inname parameter lets consumers filter the results down to just those users with a certain substring in their display name. For example, inname=kevin will return all users with both users named simply \"Kevin\" or those with Kevin as one of (or part of) their names; such as \"Kevin Montrose\".\n",
    "parameters": [
      {
        "name": "inname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/moderators",
    "method": "getModeratorsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets those users on a site who can exercise moderation powers.\n \nNote, employees of Stack Exchange Inc. will be returned if they have been granted moderation powers on a site even if they have never been appointed or elected explicitly. This method checks abilities, not the manner in which they were obtained.\n \nThe sorts accepted by this method operate on the follow fields of the user object:\n - reputation - reputation\n - creation - creation_date\n - name - display_name\n - modified - last_modified_date\n  reputation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of users.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/moderators/elected",
    "method": "getElectedModerators",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns those users on a site who both have moderator powers, and were actually elected.\n \nThis method excludes Stack Exchange Inc. employees, unless they were actually elected moderators on a site (which can only have happened prior to their employment).\n \nThe sorts accepted by this method operate on the follow fields of the user object:\n - reputation - reputation\n - creation - creation_date\n - name - display_name\n - modified - last_modified_date\n  reputation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of users.\n",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}",
    "method": "getUserListByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the users identified in ids in {ids}.\n \nTypically this method will be called to fetch user profiles when you have obtained user ids from some other source, such as /questions.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the user object:\n - reputation - reputation\n - creation - creation_date\n - name - display_name\n - modified - last_modified_date\n  reputation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of users.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = reputation => number\nsort = creation => date\nsort = name => string\nsort = modified => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/answers",
    "method": "getUserAnswers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the answers the users in {ids} have posted.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the answer object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of answers.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/associated",
    "method": "listAssociatedAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns all of a user's associated accounts, given their account_ids in {ids}.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.\n \nThis method returns a list of network_users.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/users/{ids}/badges",
    "method": "listUserBadges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Get the badges the users in {ids} have earned.\n \nBadge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.\n \nThis means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.\n \nFor ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.\n \nrank is the default sort.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThis method returns a list of badges.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\nsort = type => string\nsort = awarded => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = rank => string\nsort = name => string\nsort = type => string\nsort = awarded => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/comments",
    "method": "listUserComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Get the comments posted by users in {ids}.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the comment object:\n - creation - creation_date\n - votes - score\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of comments.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/comments/{toid}",
    "method": "getCommentsByUsersAndTargetUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Get the comments that the users in {ids} have posted in reply to the single user identified in {toid}.\n \nThis method is useful for extracting conversations, especially over time or across multiple posts.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects. {toid} can contain only 1 id, found in the same manner as those in {ids}.\n \nThe sorts accepted by this method operate on the follow fields of the comment object:\n - creation - creation_date\n - votes - score\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of comments.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "toid",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/favorites",
    "method": "getUserFavorites",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Get the questions that users in {ids} have favorited.\n \nThis method is effectively a view onto a user's favorites tab.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n - added - when the user favorited the question\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = added => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\nsort = added => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/mentioned",
    "method": "getUserMentionedComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets all the comments that the users in {ids} were mentioned in.\n \nNote, to count as a mention the comment must be considered to be \"in reply to\" a user. Most importantly, this means that a comment can only be in reply to a single user.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the comment object:\n - creation - creation_date\n - votes - score\n  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of comments.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/merges",
    "method": "getUserAccountMerges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a record of merges that have occurred involving the passed account ids.\n \nThis method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.\n \nThis is most useful when confirming that an account_id is in fact \"new\" to an application.\n \nAccount merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.\n \nNote that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.\n \nThis method returns a list of account_merge.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
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
    "url": "/users/{ids}/questions",
    "method": "getUserQuestionsByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the questions asked by the users in {ids}.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/questions/featured",
    "method": "getUserFeaturedQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the questions on which the users in {ids} have active bounties.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/questions/no-answers",
    "method": "getQuestionsNoAnswers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the questions asked by the users in {ids} which have no answers.\n \nQuestions returns by this method actually have zero undeleted answers. It is completely disjoint /users/{ids}/questions/unanswered and /users/{ids}/questions/unaccepted, which only return questions with at least one answer, subject to other contraints.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/questions/unaccepted",
    "method": "getUnacceptedQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the questions asked by the users in {ids} which have at least one answer, but no accepted answer.\n \nQuestions returned by this method have answers, but the owner has not opted to accept any of them.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/questions/unanswered",
    "method": "listUnansweredQuestionsByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets the questions asked by the users in {ids} which the site consideres unanswered, while still having at least one answer posted.\n \nThese rules are subject to change, but currently any question without at least one upvoted or accepted answer is considered unanswered.\n \nTo get the set of questions that a user probably considers unanswered, the returned questions should be unioned with those returned by /users/{id}/questions/no-answers. These methods are distinct so that truly unanswered (that is, zero posted answers) questions can be easily separated from mearly poorly or inadequately answered ones.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/reputation",
    "method": "getUserReputationSubset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Gets a subset of the reputation changes for users in {ids}.\n \nReputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThis method returns a list of reputation objects.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/reputation-history",
    "method": "getUserReputationHistoryList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns users' public reputation history.\n \nThis method returns a list of reputation_history.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/suggested-edits",
    "method": "getUserSuggestedEditsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the suggested edits a users in {ids} have submitted.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the suggested_edit object:\n - creation - creation_date\n - approval - approval_date Does not return unapproved suggested_edits\n - rejection - rejection_date Does not return unrejected suggested_edits\n  creation is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of suggested-edits.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = creation => date\nsort = approval => date\nsort = rejection => date\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/tags",
    "method": "getUserTagsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the tags the users identified in {ids} have been active in.\n \nThis route corresponds roughly to user's stats tab, but does not include tag scores. A subset of tag scores are available (on a single user basis) in /users/{id}/top-answer-tags and /users/{id}/top-question-tags.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThe sorts accepted by this method operate on the follow fields of the tag object:\n - popular - count\n - activity - the creation_date of the last question asked with the tag\n - name - name\n  popular is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of tags.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = popular => number\nsort = activity => date\nsort = name => string\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{ids}/timeline",
    "method": "getUserTimeline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a subset of the actions the users in {ids} have taken on the site.\n \nThis method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.\n \n{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.\n \nThis method returns a list of user timeline objects.\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Number list (semicolon delimited)."
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{id}/inbox",
    "method": "listUserInboxItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a user's inbox.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.\n \n{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.\n \nThis method returns a list of inbox items.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{id}/inbox/unread",
    "method": "getUserInboxUnreadItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the unread items in a user's inbox.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.\n \n{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.\n \nThis method returns a list of inbox items.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
      },
      {
        "name": "since",
        "schema": "integer",
        "description": "Unix date."
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
    "url": "/users/{id}/notifications",
    "method": "getUserNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a user's notifications.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method returns a list of notifications.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{id}/notifications/unread",
    "method": "getUserUnreadNotificationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a user's unread notifications.\n \nThis method requires an access_token, with a scope containing \"read_inbox\".\n \nThis method returns a list of notifications.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{id}/privileges",
    "method": "getUserPrivilegesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the privileges a user has.\n \nApplications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.\n \n{id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.\n \nThis method returns a list of privileges.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{id}/reputation-history/full",
    "method": "getUserReputationHistoryFull",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a user's full reputation history, including private events.\n \nThis method requires an access_token, with a scope containing \"private_info\".\n \nThis method returns a list of reputation_history.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{id}/tags/{tags}/top-answers",
    "method": "getUserTopAnswersByTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the top 30 answers a user has posted in response to questions with the given tags.\n \n{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.\n \nThe sorts accepted by this method operate on the follow fields of the answer object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of answers.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{id}/tags/{tags}/top-questions",
    "method": "getUserTopQuestionsByTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the top 30 questions a user has asked with the given tags.\n \n{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.\n \nThe sorts accepted by this method operate on the follow fields of the question object:\n - activity - last_activity_date\n - creation - creation_date\n - votes - score\n  activity is the default sort.\n \n It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.\n\n \nThis method returns a list of questions.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "String list (semicolon delimited)."
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "min",
        "schema": "string",
        "description": "sort = activity => date\nsort = creation => date\nsort = votes => number\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromdate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "todate",
        "schema": "integer",
        "description": "Unix date."
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{id}/top-answer-tags",
    "method": "getUserTopAnswerTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a single user's top tags by answer score.\n \nThis a subset of the data returned on a user's tags tab.\n \n{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.\n \nThis method returns a list of top_tag objects.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{id}/top-question-tags",
    "method": "getUserTopQuestionTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns a single user's top tags by question score.\n \nThis a subset of the data returned on a user's tags tab.\n \n{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.\n \nThis method returns a list of top_tag objects.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
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
    "url": "/users/{id}/write-permissions",
    "method": "getUserWritePermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "core",
    "typeScriptTag": "core",
    "description": "Returns the write permissions a user has via the api.\n \nThe Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.\n \nThis method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.\n \nThis method returns a list of write_permissions.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "#Discussion\n\nThe Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.\n\nAn application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.\n\nFilters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.\n\nThe motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).\n\n#Safety\n\nFilters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.\n\nNote that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).\n\nWhen using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.\n\n#Built In Filters\n\nThe following filters are built in:\n\ndefault, each type documents which fields are returned under the default filter (for example, answers).\nwithbody, which is default plus the *.body fields\nnone, which is empty\ntotal, which includes just .total\n\n#Compatibility with V1.x\n\nFor ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.\n"
      },
      {
        "name": "callback",
        "schema": "string",
        "description": "All API responses are JSON, we do support JSONP with the callback query parameter.\n"
      },
      {
        "name": "site",
        "schema": "string",
        "required": true,
        "description": "Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="StackExchange"
      apiBaseUrl="https://api.stackexchange.com/2.0"
      apiVersion="2.0"
      endpoints={124}
      sdkMethods={124}
      schemas={34}
      parameters={1118}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stack-exchange/openapi.yaml"
    />
  );
}
  