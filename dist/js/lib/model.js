/*! (c) Philipp König under GPL-3.0 */
(e=>{"use strict";jsu.ModelHelper=function(e){let o={textColor:{light:"#646464",dark:"#c8c8c8"},sidebarMaskColor:{light:"rgba(255,255,255,0.8)",dark:"rgba(0,0,0,0.6)"},hoverColor:{light:"#f5f5f5",dark:"#555555"},colorScheme:{light:"#1b82f1",dark:"#1f4d80"},foregroundColor:{light:"#ffffff",dark:"#333333"}},t={u:{openStates:{},hiddenEntries:{},additionalInfo:{},scrollPos:0,separators:{},customCss:"",newtabBackground:"",pinnedEntries:{},lockPinned:!0,translationHelp:!0,performReopening:!1,entryAmounts:{},lastOpened:null,sort:{name:"custom",dir:"ASC"},mostViewedPerMonth:!1,viewAsTree:!0},b:{animations:!0,contextmenu:!0,preventPageScroll:!1,toggleArea:{width:1,widthWindowed:20,height:100,top:0},blacklist:[],whitelist:[],sidebarPosition:"left",openAction:"mousedown",newTab:"foreground",newTabPosition:"afterCurrent",visibility:"always",linkAction:"current",dirAccordion:!1,reopenSidebar:!1,preventWindowed:!1,rememberState:"openStatesAndPos",tooltipDelay:.5,tooltipContent:"all",tooltipAdditionalInfo:!0,dndOpen:!0,openChildrenWarnLimit:10,dirOpenDuration:.5,scrollBarHide:1.5,openDelay:0,closeTimeout:1},n:{override:!1,autoOpen:!0,searchEngine:"google",topPagesType:"topPages",shortcuts:[{label:"Google",url:"https://google.com"}],website:""},a:{showIndicator:!0,showIndicatorIcon:!0,darkMode:!1,highContrast:!1,showBookmarkIcons:!0,showDirectoryIcons:!0,styles:{colorScheme:o.colorScheme.light,foregroundColor:o.foregroundColor.light,textColor:o.textColor.light,hoverColor:o.hoverColor.light,indicatorWidth:"40px",indicatorIconSize:"32px",indicatorIconColor:"#ffffff",indicatorColor:"rgba(0,0,0,0.5)",sidebarWidth:"350px",sidebarHeaderHeight:"50px",sidebarMaskColor:o.sidebarMaskColor.light,bookmarksFontSize:"14px",directoriesIconSize:"16px",bookmarksIconSize:"16px",bookmarksLineHeight:"38px",bookmarksDirIcon:"dir-1",bookmarksDirColor:o.textColor.light,bookmarksDirIndentation:"25px",bookmarksHorizontalPadding:"16px",scrollBarWidth:"11px",tooltipFontSize:"9px",overlayMaskColor:"rgba(0,0,0,0.5)",overlayHeaderHeight:"50px",fontFamily:"default",iconShape:"bookmark",iconColor:"#555555"}}},r={},i=null,a=null,n={};this.init=(()=>new Promise(e=>{Promise.all([l(),s()]).then(e)}));let l=()=>new Promise(e=>{a&&a.disconnect(),(a=chrome.runtime.connect({name:"background"})).onMessage.addListener(e=>{n[e.uid]&&(n[e.uid](e.result),delete n[e.uid])}),e()}),s=()=>new Promise(e=>{let o=["utility","behaviour","appearance","newtab"],t={},a=o.length,n=0;o.forEach(o=>{chrome.storage["utility"===o?"local":"sync"].get([o],l=>{t[o]=l[o]||{},++n===a&&(r=t,null===i?this.call("userType").then(o=>{o&&o.userType&&(i=o.userType),e()}):e())})})});this.getUserType=(()=>i),this.getAllData=(()=>r),this.getData=((o,i=!1)=>{let a=o;"string"==typeof a&&(a=[a]);let n={};if(a.forEach(o=>{let a=o.split("/")[0],l=o.split("/")[1],s=null,c=null;switch(a){case"u":c=r.utility;break;case"b":c=r.behaviour;break;case"a":c=r.appearance;break;case"n":c=r.newtab}null!==c&&(!0===i||void 0===c[l]?void 0!==t[a]&&void 0!==t[a][l]&&(s=t[a][l]):s=c[l]);let h=location.href.search(/chrome-extension:\/\//)>-1&&location.pathname.search(/settings\.html$/)>-1;if("b/toggleArea"===o&&matchMedia("(min-resolution: 1.25dppx)").matches&&!1===h&&(s=Object.assign({},s),Object.keys(s).forEach(e=>{e.startsWith("width")&&s[e]++})),"a/styles"===o&&(s=Object.assign({},t.a.styles,s),e.helper.font&&e.helper.font.isLoaded())){let o=e.helper.font.getFontInfo(i?"default":"config");s.fontFamily=o.name,Object.assign(s,o.fontWeights)}n[l]=s}),"string"==typeof o){let e=o.split("/")[1];n=n[e]}return n}),this.setData=(e=>new Promise(o=>{s().then(()=>{Object.keys(e).forEach(o=>{let t=o.split("/")[0],i=o.split("/")[1],a=e[o];switch(t){case"u":r.utility[i]=a;break;case"b":r.behaviour[i]=a;break;case"a":r.appearance[i]=a;break;case"n":r.newtab[i]=a}});let t=0,i=(e=1)=>{(t+=e)>=4&&o()};try{chrome.storage.local.set({utility:r.utility},()=>{i()}),chrome.storage.sync.set({behaviour:r.behaviour,appearance:r.appearance,newtab:r.newtab},()=>{chrome.runtime.lastError,i(3)})}catch(e){o()}})})),this.call=((e,o={})=>new Promise(t=>{o.type=e,o.uid=e+"_"+JSON.stringify(o)+"_"+ +new Date+Math.random().toString(36).substr(2,12),n[o.uid]=(e=>{t(e)}),a.postMessage(o)})),this.getDefaultColor=((e,t)=>o[e]?t&&o[e][t]?o[e][t]:o[e].light:null)}})();