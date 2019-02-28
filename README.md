# preact-script2

Library for insert &lt;script> tag for Preact, inspired by vue-script2

[![version](https://img.shields.io/npm/v/preact-script2.svg)](https://www.npmjs.com/package/preact-script2) ![minified](https://badgen.net/bundlephobia/minzip/preact-script2) [![downloads](https://img.shields.io/npm/dt/preact-script2.svg)](https://www.npmjs.com/package/preact-script2) [![Travis](https://img.shields.io/travis/mazipan/preact-script2.svg)](https://travis-ci.org/mazipan/preact-script2)

## Download

```bash
# NPM
npm install preact-script2

# Yarn
yarn add preact-script2
```

## Usage

```js
import Script2 from 'preact-script2';

export default class App extends Component {
  render() {
    return (
      <div>
        <Script2
          src="/test.js"
          async
          type="some-type"
					integrity="1234567890"
					text="QWERTYUIOP"
					crossorigin="anonymous"
        />
        <Script2
          inlineScript="(function a() {console.warn('Hey, you just loading an inline script')})()"/>
      </div>
    );
  }
}
```

## Available Props

TODO

## Development

```bash
# NPM

# Running development
npm run dev
# Build demo apps
npm run build
# Build library for publish
npm run bundle

# Yarn

# Running development
yarn dev
# Build demo apps
yarn build
# Build library for publish
yarn bundle
```

## Credit

-   [Preact](https://preactjs.com/)
-   [Vue-Script2](https://github.com/taoeffect/vue-script2)
-   [Microbundle](https://github.com/developit/microbundle)

* * *

Copyright © 2019 by Irfan Maulana