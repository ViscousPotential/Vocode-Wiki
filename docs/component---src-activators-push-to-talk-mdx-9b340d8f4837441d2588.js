(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{kFat:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n("Fcif"),o=n("dV/x"),i=(n("mXGw"),n("/FXl")),l=n("TjRS"),r=n("5hvn");n("aD51");const c=["components"],b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!Object.prototype.hasOwnProperty.call(b,"__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/activators/push-to-talk.mdx"}});const p={_frontmatter:b},s=l.a;function m(e){let{components:t}=e,n=Object(o.a)(e,c);return Object(i.b)(s,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"push-to-talk"},"Push-to-talk"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"This no longer works well on Android 13+ (see ",Object(i.b)("a",{parentName:"strong",href:"https://www.reddit.com/r/tasker/comments/wpt39b/dev_warning_if_you_update_to_android_13_the/"},"here")," for an explanation)")),Object(i.b)("p",null,"Using ",Object(i.b)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=en_GB"},"Tasker"),", it is possible to use Vocode as a push-to-talk quick capture method."),Object(i.b)(r.a,{type:"info",variant:"outer",mdxType:"Hint"},"Better integrations with Tasker are coming.."),Object(i.b)("p",null,"These steps are specific to setting up push-to-talk with the power button (Android 12 Samsung Device) but can be adjusted to work with any device and button with some work"),Object(i.b)("hr",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add a New Profile with ",Object(i.b)("inlineCode",{parentName:"li"},"Event")," ⮕ ",Object(i.b)("inlineCode",{parentName:"li"},"Logcat Entry")),Object(i.b)("li",{parentName:"ol"},"Use a component and filter so that it triggers when you want recording to start",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Component: ",Object(i.b)("inlineCode",{parentName:"li"},"PhoneWindowManagerExt")),Object(i.b)("li",{parentName:"ul"},"Filter: ",Object(i.b)("inlineCode",{parentName:"li"},"consume powerLongPress")))),Object(i.b)("li",{parentName:"ol"},"Create a ",Object(i.b)("inlineCode",{parentName:"li"},"Send Intent")," task that looks like this to communicate with Vocode",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Action: ",Object(i.b)("inlineCode",{parentName:"li"},"START_RECORDING")),Object(i.b)("li",{parentName:"ul"},"Package: ",Object(i.b)("inlineCode",{parentName:"li"},"com.viscouspot.vocode")),Object(i.b)("li",{parentName:"ul"},"Class: ",Object(i.b)("inlineCode",{parentName:"li"},"com.viscouspot.vocode.VocodeService")),Object(i.b)("li",{parentName:"ul"},"Target: ",Object(i.b)("inlineCode",{parentName:"li"},"Service"))))),Object(i.b)("hr",null),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Add a New Profile with ",Object(i.b)("inlineCode",{parentName:"li"},"Event")," ⮕ ",Object(i.b)("inlineCode",{parentName:"li"},"Logcat Entry")),Object(i.b)("li",{parentName:"ol"},"Use a component and filter so that it triggers when you want recording to end",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Component: ",Object(i.b)("inlineCode",{parentName:"li"},"PhoneWindowManagerExt")),Object(i.b)("li",{parentName:"ul"},"Filter: ",Object(i.b)("inlineCode",{parentName:"li"},"interceptKeyTq code=26 down=false repeatCount=0")))),Object(i.b)("li",{parentName:"ol"},"Create a ",Object(i.b)("inlineCode",{parentName:"li"},"Send Intent")," task that looks like this to communicate with Vocode",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Action: ",Object(i.b)("inlineCode",{parentName:"li"},"STOP_RECORDING")),Object(i.b)("li",{parentName:"ul"},"Package: ",Object(i.b)("inlineCode",{parentName:"li"},"com.viscouspot.vocode")),Object(i.b)("li",{parentName:"ul"},"Class: ",Object(i.b)("inlineCode",{parentName:"li"},"com.viscouspot.vocode.VocodeService")),Object(i.b)("li",{parentName:"ul"},"Target: ",Object(i.b)("inlineCode",{parentName:"li"},"Service"))))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!Object.prototype.hasOwnProperty.call(m,"__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/activators/push-to-talk.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-activators-push-to-talk-mdx-9b340d8f4837441d2588.js.map