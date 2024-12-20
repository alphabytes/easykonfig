/*
typescript-no-relative-npm-link API

A simple API based for testing typescript-no-relative-npm-link.

The version of the OpenAPI document: 1.0.0
Contact: support@example.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  TestApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { TypescriptNoRelativeNpmLinkClientCustom } from "./client-custom";

export class TypescriptNoRelativeNpmLinkClient extends TypescriptNoRelativeNpmLinkClientCustom {
  readonly test: TestApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.test = new TestApi(configuration);
  }

}
