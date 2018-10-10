# An isomorphic javascript sdk for - LiveValidationServiceClient
This project provides an isomorphic javascript package. Right now it supports:
- node.js version 6.x.x or higher
- browser javascript

## How to Install

- nodejs
```
npm install azure_live_validation
```
- browser
```html
<script type="text/javascript" src="azure_live_validation/dist/azure_live_validation.js"></script>
```

## How to use

### nodejs - Authentication, client creation and liveValidationWhiteList tools as an example written in TypeScript.

```ts
import * as msRest from "ms-rest-js";
import { LiveValidationServiceClient, LiveValidationServiceModels, LiveValidationServiceMappers } from "azure_live_validation";
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

const token = "<access_token>";
const creds = new msRest.TokenCredentials(token);
const client = new LiveValidationServiceClient(creds, subscriptionId);
client.tools.liveValidationWhiteList().then((result) => {
  console.log("The result is:");
  console.log(result);
}).catch((err) => {
  console.error(err);
});
```

### browser - Authentication, client creation and liveValidationWhiteList tools as an example written in javascript.

- index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>azure_live_validation sample</title>
    <script type="text/javascript" src="./node_modules/ms-rest-js/dist/msRest.browser.js"></script>
    <script type="text/javascript" src="./dist/azure_live_validation.js"></script>
    <script type="text/javascript">
      const subscriptionId = "<Subscription_Id>";
      const token = "<access_token>";
      const creds = new msRest.TokenCredentials(token);
      const client = new AzureLiveValidation.LiveValidationServiceClient(creds, subscriptionId);
      client.tools.liveValidationWhiteList().then((result) => {
        console.log("The result is:");
        console.log(result);
      }).catch((err) => {
        console.error(err);
      });
    </script>
  </head>
  <body>
  </body>
</html>
```

# Related projects
 - [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)
