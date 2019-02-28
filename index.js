import { Component } from 'preact';
import Script2 from './preact-script2';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Script2
          src="/test.js"
          async
          type="some-type"
					integrity="1234567890"
					text="QWERTYUIOP"
					crossorigin="anonymous"
        />
        <Script2 inlineScript="(function a() {console.warn('Hey, you just loading an inline script')})()"/>
      </div>
    );
  }
}
