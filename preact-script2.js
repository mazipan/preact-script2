import { h, Component } from 'preact';
import _ from './utils'

var customAttrs = ['unload']
var staticProps = customAttrs.concat(['src', 'type', 'async', 'integrity', 'text', 'crossorigin'])

export default class PreactScript2 extends Component {
	constructor(props) {
		super(props);
		this.load.bind(this);
    this.state = {
      installed: false,
			loaded: {},
			p: Promise.resolve()
    }
	}

	componentDidMount() {
		const __self = this
		const __el = __self.base
		const parent = __el.parentElement

		if (!__self.props.src) {
			const s = document.createElement('script')
			// get inline script
			console.log(__self)
			let h = __self.props.inlineScript
			h = h.replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&amp;/gi, '&')
			s.type = 'text/javascript'
			s.appendChild(document.createTextNode(h))
			parent.appendChild(s)
		} else {
			let opts = _.omitBy(_.pick(this, staticProps), _.isUndefined)
			opts.parent = parent
			// this syntax results in an implicit return
			var load = () => __self.load(__self.props.src, opts)
			_.isUndefined(__self.props.async)
				? __self.state.p = __self.state.p.then(load) // serialize execution
				: load()
		}

		parent.removeChild(__el)
	}

	componentWillUnmount() {
	}

  load (src, opts = {parent: document.head}) {
		const __self = this
    return __self.state.loaded[src] ? Promise.resolve(src)
    : new Promise(function (resolve, reject) {
			var s = document.createElement('script')
      _.defaults2(s, _.omit(opts, ['unload', 'parent']), {type: 'text/javascript'})
      s.async = false // therefore set this to false
      s.src = src
      if (opts.crossorigin) {
        s.crossOrigin = opts.crossorigin
			}
      s.onload = () => {
				__self.state.loaded[src] = 1;
				resolve(src);
			}
      s.onerror = () => reject(new Error(src))
      opts.parent.appendChild(s)
    })
  }

  render({ ...props }) {
		return (
			<div style="display:none"></div>
		);
	}
}