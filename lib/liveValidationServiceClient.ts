/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { LiveValidationServiceClientContext } from "./liveValidationServiceClientContext";

class LiveValidationServiceClient extends LiveValidationServiceClientContext {
  // Operation groups
  tools: operations.Tools;

  /**
   * Initializes a new instance of the LiveValidationServiceClient class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.LiveValidationServiceClientOptions) {
    super(options);
    this.tools = new operations.Tools(this);
  }
}

// Operation Specifications

export {
  LiveValidationServiceClient,
  LiveValidationServiceClientContext,
  Models as LiveValidationServiceModels,
  Mappers as LiveValidationServiceMappers
};
export * from "./operations";
