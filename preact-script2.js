import { h, Component } from 'preact';
import _ from './utils'

var customAttrs = ['unload']
var staticProps = customAttrs.concat(['src', 'type', 'async', 'integrity', 'text', 'crossorigin'])

export default class PreactScript2 extends Component {
	constructor(props) {
		super(props);
    this.state = {
      installed: false,
			loaded: {},
			p: Promise.resolve()
		}

		this.loadExternalScript.bind(this);
		this.insertInlineScript.bind(this);
	}

	insertInlineScript () {
		const s = document.createElement('script')
		// get inline script
		let h = this.props.inlineScript
		if (h) {
			h = h.replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&amp;/gi, '&')
			s.type = 'text/javascript'
			s.appendChild(document.createTextNode(h))
			this.base.parentElement.appendChild(s)
		}
	}

  loadExternalScript (src, opts = { parent: document.head }) {
		const __self = this
		const promiseLoadScript = new Promise(function (resolve, reject) {
			let s = document.createElement('script')

			_.defaults2(s, _.omit(opts, ['unload', 'parent']), {type: 'text/javascript'})

      s.async = false
			s.src = src

      if (opts.crossorigin) {
        s.crossOrigin = opts.crossorigin
			}
      s.onload = () => {
				const loaded = Object.assign({}, __self.loaded, {
					[src]: 1
				})
				__self.setState({
					loaded
				})
				resolve(src);
			}
			s.onerror = () => reject(new Error(src))
			if (!__self.state.loaded[src]) {
				opts.parent.appendChild(s)
			}
		})

    return __self.state.loaded[src] ? Promise.resolve(src) : promiseLoadScript
  }

	componentDidMount() {
		const __self = this
		const __el = __self.base
		const parent = __el.parentElement

		if (!this.props.src) {
			this.insertInlineScript()
		} else {
			let opts = _.omitBy(_.pick(this, staticProps), _.isUndefined)
			opts.parent = parent

			const loadFn = () => this.loadExternalScript(this.props.src, opts)
			if (_.isUndefined(this.props.async)) {
				this.setState({
					p: this.state.p.then(loadFn)
				})
			} else {
				loadFn()
			}
		}

		this.setState({
			installed: true
		})
		// destroy itself
		parent.removeChild(__el)
	}

	componentWillUnmount() {
	}

	static getDerivedStateFromProps(props, state) {
  }

  render() {
		return (
			<div style="display:none" preact-script2></div>
		);
	}
}