define(['exports', 'preact/jsx-runtime', 'preact'], (function(e,t,n){"use strict";class i{static getChildMapping(e,t=new Map,s=(()=>{})){const o=Symbol();let p={};0!==t.size&&(p=i._getMappedDeletions(e,t,o));const c=e.reduce(((e,i)=>{if(p[i.key]){const s=p[i.key];for(const i of s){const s=t.get(i);e.set(i,n.cloneElement(s,{in:!1}))}const o=t.get(i.key);e.set(i.key,n.cloneElement(i,{onExited:o.props.onExited,in:o.props.in}))}else{const t=n.cloneElement(i,{onExited:s.bind(null,i),in:!0});e.set(i.key,t)}return e}),new Map);for(const e of p[o]||[]){const i=t.get(e);c.set(e,n.cloneElement(i,{in:!1}))}return c}static _getMappedDeletions(e,t,n){const i=new Set(e.map((e=>e.key)));return[...t.keys()].reduce(((e,t)=>{if(i.has(t))e[t]=e[n],delete e[n];else{const i=e[n]?[...e[n],t]:[t];e[n]=i}return e}),{})}}class s extends n.Component{static getDerivedStateFromProps(e,t){const{childMapping:n,handleExited:s}=t;return{childMapping:i.getChildMapping(e.children,n,s)}}constructor(e){super(e),this._handleExited=(e,t,n)=>{const{children:s}=this.props;i.getChildMapping(s).has(e.key)||(e.props.onExited?.(t,n),this._mounted&&this.setState((t=>{const n=new Map(t.childMapping);return n.delete(e.key),{childMapping:n}})))},this.state={childMapping:void 0,handleExited:this._handleExited},this._mounted=!1}componentDidMount(){this._mounted=!0}componentWillUnmount(){this._mounted=!1}render(){const e=this.props.elementType,{childMapping:n}=this.state,i=[...n.values()];return t.jsx(e,{children:i})}}s.defaultProps={elementType:"div"},e.TransitionGroup=s}));
//# sourceMappingURL=TransitionGroup-b7a438aa.js.map
