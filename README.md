# Node-Helm

## Getting Started

This library will automatically download the helm binary for your system when possible and co-locate it on install. If you wish to disable this behavior you can set the environment variable `NODE_HELM_SKIP_DOWNLOAD` to true or disable the script execution using npm's `--ignore-scripts`. However, if you do this you are responsible for providing a compatible helm binary.

If you wish to validate how the binary is downloaded see: [here](https://raw.githubusercontent.com/bryopsida/node-helm/main/scripts/fetchHelmBinary.js)

To install this library run `npm install --save @bryopsida/helm`

In your app,

Start by adding the import

### CommonJS

```javascript
const { Helm } = require('@bryopsida/helm')
```

### ESM

```javascript
import { Helm } from '@bryopsida/helm'
```

### Creating an instance

#### Defaults

```javascript
const helm = new Helm()
```

#### Specify helm binary

```javascript
const helm = new Helm({
    binaryPath: <path to your helm3 binary>
})
```

### Listing Helm Releases

```javascript
const releases = await helm.list({
  all: true,
  allNamespaces: true,
})
console.log('==== Helm Releases ====')
releases.forEach((release) => {
  console.log(`Name = ${release.name}`)
  console.log(`Namespace = ${release.namespace}`)
  console.log(`Chart = ${release.chart}`)
  console.log(`Status = ${release.status}`)
})
console.log('==== End Helm Releases ====')
```
