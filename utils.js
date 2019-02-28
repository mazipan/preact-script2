
export default {
  isUndefined (x) { return x === undefined },
  pick (o, props) {
    var x = {}
    props.forEach(k => { x[k] = o[k] })
    return x
  },
  omit (o, props) {
    var x = {}
    Object.keys(o).forEach((k) => { if (props.indexOf(k) === -1) x[k] = o[k] })
    return x
  },
  omitBy (o, pred) {
    var x = {}
    Object.keys(o).forEach((k) => { if (!pred(o[k])) x[k] = o[k] })
    return x
  },
  // custom defaults function suited to our specific purpose
  defaults2 (o, ...sources) {
    sources.forEach((s) => {
      Object.keys(s).forEach((k) => {
        if (this.isUndefined(o[k]) || o[k] === '') o[k] = s[k]
      })
    })
  }
}