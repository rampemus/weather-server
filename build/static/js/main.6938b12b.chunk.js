(window.webpackJsonpweather=window.webpackJsonpweather||[]).push([[0],{23:function(e,t,a){e.exports=a(52)},28:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),u=a.n(i),l=(a(28),a(2)),c=(a(29),a(5)),d=a.n(c),o=(a(49),function(e){var t=Object(n.useState)({temperature:[0,0,0],windSpeed:[0,0,0],humidity:[0,0,0]}),a=Object(l.a)(t,2),i=a[0],u=a[1];Object(n.useEffect)(function(){if(e.data.locations){var t=new Date,a=new Date(t.valueOf()-t.valueOf()%864e5+108e5+864e5);u({temperature:function(e,t,a){for(var n=[],r=e.locations[0].data.Temperature.timeValuePairs,i=0;i<r.length;i++){var u=new Date(r[i].time);t<u&&u<a&&n.push(r[i].value)}return n}(e.data,t,a),windSpeed:function(e,t,a){for(var n=[],r=e.locations[0].data.WindSpeedMS.timeValuePairs,i=0;i<r.length;i++){var u=new Date(r[i].time);t<u&&u<a&&n.push(r[i].value)}return n}(e.data,t,a),humidity:function(e,t,a){for(var n=[],r=e.locations[0].data.Humidity.timeValuePairs,i=0;i<r.length;i++){var u=new Date(r[i].time);t<u&&u<a&&n.push(r[i].value)}return n}(e.data,t,a)})}},[e.data]);var c=i.temperature,d=i.humidity,o=i.windSpeed,m=function(e){return e.reduce(function(e,t){return e+t})},s=Math.round(Math.max.apply(Math,c)),h=Math.round(Math.min.apply(Math,c)),f=Math.round(m(d)/d.length)+" %",p=Math.round(m(o)/d.length)+" m/s";return r.a.createElement("div",{className:"todayPanel",style:{backgroundColor:"lightblue"}},r.a.createElement("h1",{style:{textTransform:"capitalize"}},"Today"),r.a.createElement("svg",null,r.a.createElement("circle",{cx:200,cy:100,r:100,fill:"yellow"}),r.a.createElement("text",{x:"20",y:"30",className:"textBig"},s>0?"+":"-",s),r.a.createElement("text",{x:"76",y:"32",className:"textMedium"},"/"),r.a.createElement("text",{x:"82",y:"36",className:"textMedium"},h>0?"+":"-",h," \xb0C"),r.a.createElement("text",{x:"80",y:"30",className:"textBig"}),r.a.createElement("text",{x:"20",y:"80",className:"textMedium"},"Wind ",p),r.a.createElement("text",{x:"20",y:"110",className:"textMedium"},"Humidity ",f)))}),m=function(e){return r.a.createElement("div",null,e.temperature,"\xa0\xa0",e.humidity,"\xa0\xa0",e.windSpeed)},s=function(e){var t=e.data.temperature,a=e.data.humidity,n=e.data.windSpeed,i=function(e){return e.reduce(function(e,t){return e+t})},u=Math.round(Math.max.apply(Math,t))+" \xb0C",l=Math.round(i(a)/a.length)+" %",c=Math.round(i(n)/a.length)+" m/s";return r.a.createElement("div",{className:"dayPanel",style:{backgroundColor:"lightyellow"}},r.a.createElement("span",{className:"dayName"},e.weekdayName)," ",r.a.createElement(m,{temperature:u,humidity:l,windSpeed:c}))},h=function(e){var t=Object(n.useState)([{temperature:[0,0,0],windSpeed:[0,0,0],humidity:[0,0,0]},{temperature:[0,0,0],windSpeed:[0,0,0],humidity:[0,0,0]}]),a=Object(l.a)(t,2),i=a[0],u=a[1];Object(n.useEffect)(function(){var t=function(e,t,a){for(var n=[],r=e.locations[0].data.Temperature.timeValuePairs,i=0;i<r.length;i++){var u=new Date(r[i].time);t<u&&u<a&&n.push(r[i].value)}return n},a=function(e,t,a){for(var n=[],r=e.locations[0].data.WindSpeedMS.timeValuePairs,i=0;i<r.length;i++){var u=new Date(r[i].time);t<u&&u<a&&n.push(r[i].value)}return n},n=function(e,t,a){for(var n=[],r=e.locations[0].data.Humidity.timeValuePairs,i=0;i<r.length;i++){var u=new Date(r[i].time);t<u&&u<a&&n.push(r[i].value)}return n};if(e.data.locations){var r=new Date,i=new Date(r.valueOf()-r.valueOf()%864e5+864e5-108e5),l=new Date(i.valueOf()+864e5),c=new Date(l.valueOf()+864e5);u([{temperature:t(e.data,i,l),windSpeed:a(e.data,i,l),humidity:n(e.data,i,l)},{temperature:t(e.data,l,c),windSpeed:a(e.data,l,c),humidity:n(e.data,l,c)}])}},[e.data]);var c=i[0],d=i[1],o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],m=o[(new Date).getDay()+1],h=o[(new Date).getDay()+2];return r.a.createElement("div",null,r.a.createElement(s,{weekdayName:m,data:c}),r.a.createElement(s,{weekdayName:h,data:d}))},f=(a(50),function(e){var t=Object(n.useState)(e.initLocation),a=Object(l.a)(t,2),i=a[0],u=a[1],c=Object(n.useState)([]),m=Object(l.a)(c,2),s=m[0],f=m[1];Object(n.useEffect)(function(){var e=new d.a.WfsConnection;e.connect("http://opendata.fmi.fi/wfs","fmi::forecast::harmonie::hybrid::point::multipointcoverage")&&e.getData({requestParameter:"Temperature,Humidity,WindDirection,WindSpeedMS",begin:new Date,end:new Date((new Date).valueOf()+2592e5),timestep:36e5,sites:"Helsinki",callback:function(t,a){f(t),e.disconnect()}})},[i]);return r.a.createElement("div",{className:"weatherContainer"},r.a.createElement("input",{type:"text",onChange:function(e){u(e.target.value)},value:i,className:"textInput"}),r.a.createElement("div",{className:"weatherPanel"},r.a.createElement(o,{className:"weatherPanelItem",data:s}),r.a.createElement(h,{className:"weatherPanelItem",data:s})))});a(51);var p=function(){return r.a.createElement("div",{className:"App"},"Hello ","Helsinki","!",r.a.createElement(f,{initLocation:"Helsinki"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.6938b12b.chunk.js.map