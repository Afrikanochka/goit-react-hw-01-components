(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,t,a){e.exports={profile:"profile_profile__11nlQ",description:"profile_description__2Kf5U",avatar:"profile_avatar__1BwEq",name:"profile_name__2Pnq9",tag:"profile_tag__2sfE9",location:"profile_location__1z4Pk",stats:"profile_stats__1f2ER",label:"profile_label__HK26x",quantity:"profile_quantity__3R9AG"}},,function(e,t,a){e.exports={statistics:"statistics_statistics__18let",title:"statistics_title__1Q2Xb",stat_list:"statistics_stat_list__2auy1",item:"statistics_item__1VyBL",label:"statistics_label__1y829",percentage:"statistics_percentage__2oUIH"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,t,a){e.exports={item:"friendListItem_item__Qw3yR",online:"friendListItem_online__3LpWf",offline:"friendListItem_offline__w5f1u",name:"friendListItem_name__3tJ2Y"}},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e,t,a){e.exports={friend_list:"friendList_friend_list__34D50"}},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e,t,a){e.exports={transaction_history:"transactionHistory_transaction_history__2GH9W"}},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),i=a(7),n=a.n(i),r=(a(17),a(1)),l=a.n(r),d=a(0),o=function(e){var t=e.name,a=e.tag,s=e.location,c=e.avatar,i=e.stats;return Object(d.jsxs)("div",{className:l.a.profile,children:[Object(d.jsxs)("div",{className:l.a.description,children:[Object(d.jsx)("img",{src:c,alt:"User avatar",className:l.a.avatar}),Object(d.jsx)("p",{className:l.a.name,children:t}),Object(d.jsxs)("p",{className:l.a.tag,children:["@",a]}),Object(d.jsx)("p",{className:l.a.location,children:s})]}),Object(d.jsxs)("ul",{className:l.a.stats,children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Followers"}),Object(d.jsx)("span",{className:l.a.quantity,children:i.followers})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Views"}),Object(d.jsx)("span",{className:l.a.quantity,children:i.views})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Likes"}),Object(d.jsx)("span",{className:l.a.quantity,children:i.likes})]})]})]})},b=a(4),p=a(3),f=a.n(p),m=function(e){var t=e.title,a=e.stats;return Object(d.jsxs)("section",{className:f.a.statistics,children:[Object(d.jsx)("h2",{className:f.a.title,children:t}),Object(d.jsx)("ul",{className:f.a.stat_list,children:a.map((function(e){return Object(d.jsxs)("li",{className:f.a.item,children:[Object(d.jsx)("span",{className:f.a.label,children:e.label}),Object(d.jsxs)("span",{className:f.a.percentage,children:[e.percentage,"%"]})]},e.id)}))})]})},j=a(8),u=a(5),_=a.n(u),y=function(e){var t=e.avatar,a=e.name,s=e.isOnline;return Object(d.jsxs)("li",{className:_.a.item,children:[Object(d.jsx)("span",{className:s?_.a.online:_.a.offline}),Object(d.jsx)("img",{className:_.a.avatar,src:t,alt:a,width:"100"}),Object(d.jsx)("p",{className:_.a.name,children:a})]})},h=a(9),O=a.n(h),x=function(e){var t=e.friends;return Object(d.jsx)("ul",{className:O.a.friend_list,children:t.map((function(e){var t=e.id,a=e.avatar,s=e.name,c=e.isOnline;return Object(d.jsx)(y,{avatar:a,name:s,isOnline:c},t)}))})},v=a(10),w=a(11),g=a.n(w),N=function(e){var t=e.items;return Object(d.jsxs)("table",{className:g.a.transaction_history,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.type}),Object(d.jsx)("td",{children:e.amount}),Object(d.jsx)("td",{children:e.currency})]},e.id)}))})]})},L=a(12),U=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{name:b.name,tag:b.tag,location:b.location,avatar:b.avatar,stats:b.stats}),Object(d.jsx)(m,{title:"Upload stats",stats:j}),Object(d.jsx)(x,{friends:v}),Object(d.jsx)(N,{items:L})]})};a(19);n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.2ab556e9.chunk.js.map