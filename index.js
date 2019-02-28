import { Component } from 'preact';
import Script2 from './preact-script2';

export default class App extends Component {
  constructor() {
		super();
    this.state = {
      inlineScript: "(function a() {alert('Hey, you just loading an inline script')})()",
      submittedInlineScript: '',
      src: '/test.js',
      submittedSrc: '',
    }
    this.handleClickInline = this.handleClickInline.bind(this);
    this.handleChangeInline = this.handleChangeInline.bind(this);

    this.handleClickExternal = this.handleClickExternal.bind(this);
    this.handleChangeExternal = this.handleChangeExternal.bind(this);
  }

  handleClickInline () {
    this.setState({
      submittedInlineScript: this.state.inlineScript
     });
  };

  handleChangeInline(e) {
    this.setState({ inlineScript: e.target.value });
  };

  handleClickExternal () {
    this.setState({
      submittedSrc: this.state.src
     });
  };

  handleChangeExternal(e) {
    this.setState({ src: e.target.value });
  };

  render() {
    return (
      <div>
        <section class="hero is-medium is-dark">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Preact-Script2
              </h1>
              <h2 class="subtitle">
                Preact component for insert &lt;script&gt; tag, inspired by vue-script2
              </h2>
            </div>
          </div>
        </section>

        <section class="container" style="margin-top: 2em;">
          <h3 class="subtitle">Type some IIFE script to be executed</h3>
          <div class="field">
            <label class="label">Your inline script:</label>
            <div class="control">
              <textarea class="textarea"
                placeholder="Input some inline script"
                onChange={ this.handleChangeInline }
                value={ this.state.inlineScript }>
              </textarea>
            </div>
          </div>
          <a class="button is-primary"
            onClick={ this.handleClickInline }>
            Insert inline script to DOM
          </a>
        </section>

        <section class="container" style="margin-top: 2em;">
          <h3 class="subtitle">Custom load external script with custom props</h3>
          <div class="field">
            <label class="label">Your script src:</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Input some src url"
                onChange={ this.handleChangeExternal }
                value={ this.state.src }/>
            </div>
          </div>
          <a class="button is-primary"
            onClick={ this.handleClickExternal }>
            Load external script
          </a>
        </section>

        <Script2
          src={ this.state.src }
          async
          type="some-type"
					integrity="1234567890"
					text="QWERTYUIOP"
					crossorigin="anonymous"
        />
        <Script2
          inlineScript={ this.state.submittedInlineScript } />
      </div>
    );
  }
}
