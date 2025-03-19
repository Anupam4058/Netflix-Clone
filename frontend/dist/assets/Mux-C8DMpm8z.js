import{r as w,_ as D,b as j,g as C}from"./index-Ih8052VR.js";function S(p,o){for(var l=0;l<o.length;l++){const a=o[l];if(typeof a!="string"&&!Array.isArray(a)){for(const u in a)if(u!=="default"&&!(u in p)){const h=Object.getOwnPropertyDescriptor(a,u);h&&Object.defineProperty(p,u,h.get?h:{enumerable:!0,get:()=>a[u]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var y,L;function B(){if(L)return y;L=1;var p=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,u=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,k=(r,e,t)=>e in r?o(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,x=(r,e)=>{for(var t in e)o(r,t,{get:e[t],enumerable:!0})},P=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of a(e))!h.call(r,s)&&s!==t&&o(r,s,{get:()=>e[s],enumerable:!(i=l(e,s))||i.enumerable});return r},M=(r,e,t)=>(t=r!=null?p(u(r)):{},P(!r||!r.__esModule?o(t,"default",{value:r,enumerable:!0}):t,r)),O=r=>P(o({},"__esModule",{value:!0}),r),n=(r,e,t)=>(k(r,typeof e!="symbol"?e+"":e,t),t),m={};x(m,{default:()=>v}),y=O(m);var E=M(w()),d=j();const R="https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs";class v extends E.Component{constructor(){super(...arguments),n(this,"onReady",(...e)=>this.props.onReady(...e)),n(this,"onPlay",(...e)=>this.props.onPlay(...e)),n(this,"onBuffer",(...e)=>this.props.onBuffer(...e)),n(this,"onBufferEnd",(...e)=>this.props.onBufferEnd(...e)),n(this,"onPause",(...e)=>this.props.onPause(...e)),n(this,"onEnded",(...e)=>this.props.onEnded(...e)),n(this,"onError",(...e)=>this.props.onError(...e)),n(this,"onPlayBackRateChange",e=>this.props.onPlaybackRateChange(e.target.playbackRate)),n(this,"onEnablePIP",(...e)=>this.props.onEnablePIP(...e)),n(this,"onSeek",e=>{this.props.onSeek(e.target.currentTime)}),n(this,"onDurationChange",()=>{const e=this.getDuration();this.props.onDuration(e)}),n(this,"mute",()=>{this.player.muted=!0}),n(this,"unmute",()=>{this.player.muted=!1}),n(this,"ref",e=>{this.player=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getPlaybackId(this.props.url);e&&(this.player.playbackId=e)}componentWillUnmount(){this.player.playbackId=null,this.removeListeners(this.player)}addListeners(e){const{playsinline:t}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),e.addEventListener("canplay",this.onReady),t&&e.setAttribute("playsinline","")}removeListeners(e){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("canplay",this.onReady)}async load(e){var t;const{onError:i,config:s}=this.props;if(!((t=globalThis.customElements)!=null&&t.get("mux-player")))try{const c=R.replace("VERSION",s.version);await D(()=>import(`${c}`),[]),this.props.onLoaded()}catch(c){i(c)}const[,f]=e.match(d.MATCH_URL_MUX);this.player.playbackId=f}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.playbackId=null}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(e.length===0)return 0;const t=e.end(e.length-1),i=this.getDuration();return t>i?i:t}getPlaybackId(e){const[,t]=e.match(d.MATCH_URL_MUX);return t}render(){const{url:e,playing:t,loop:i,controls:s,muted:f,config:c,width:g,height:_}=this.props,b={width:g==="auto"?g:"100%",height:_==="auto"?_:"100%"};return s===!1&&(b["--controls"]="none"),E.default.createElement("mux-player",{ref:this.ref,"playback-id":this.getPlaybackId(e),style:b,preload:"auto",autoPlay:t||void 0,muted:f?"":void 0,loop:i?"":void 0,...c.attributes})}}return n(v,"displayName","Mux"),n(v,"canPlay",d.canPlay.mux),y}var I=B();const T=C(I),U=S({__proto__:null,default:T},[I]);export{U as M};
