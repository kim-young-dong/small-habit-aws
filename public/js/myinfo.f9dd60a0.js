(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["myinfo"],{"003c":function(t,e,n){},"0418":function(t,e,n){"use strict";var c=n("7a23"),a=n("cf05"),i=n.n(a),o=n("6a59"),r=n.n(o),s=function(t){return Object(c["w"])("data-v-a4e9c9c4"),t=t(),Object(c["u"])(),t},u={class:"헤더"},l=s((function(){return Object(c["g"])("div",{class:"숨김"},null,-1)})),d=s((function(){return Object(c["g"])("div",{class:"로고"},[Object(c["g"])("img",{src:i.a,alt:""})],-1)})),b={key:0,class:"로그인"},f=s((function(){return Object(c["g"])("div",null,"로그아웃",-1)})),O=[f],j={key:0,class:"상단메뉴"};function p(t,e,n,a,i,o){var s=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["f"])("header",null,[Object(c["g"])("div",u,[l,d,o.user?(Object(c["t"])(),Object(c["f"])("div",{key:1,class:"로그아웃",onClick:e[1]||(e[1]=function(){return o.logout&&o.logout.apply(o,arguments)})},O)):(Object(c["t"])(),Object(c["f"])("div",b,[Object(c["g"])("img",{src:r.a,alt:"kakao_login_button",class:"login_btn",onClick:e[0]||(e[0]=function(){return o.kakaoLogin&&o.kakaoLogin.apply(o,arguments)})})]))]),o.user?(Object(c["t"])(),Object(c["f"])("div",j,[Object(c["i"])(s,{to:"/total"},{default:Object(c["H"])((function(){return[Object(c["g"])("div",{class:Object(c["o"])({"현재페이지":"/total"==t.$route.path})}," 전체습관 ",2)]})),_:1}),Object(c["i"])(s,{to:"/today"},{default:Object(c["H"])((function(){return[Object(c["g"])("div",{class:Object(c["o"])({"현재페이지":"/today"==t.$route.path})}," 오늘실천 ",2)]})),_:1}),Object(c["i"])(s,{to:"/myinfo"},{default:Object(c["H"])((function(){return[Object(c["g"])("div",{class:Object(c["o"])({"현재페이지":"/myinfo"==t.$route.path})}," 마이페이지 ",2)]})),_:1})])):Object(c["e"])("",!0)])}var v=n("1da1"),g=(n("96cf"),{computed:{user:function(){return this.$store.state.user}},methods:{kakaoLogin:function(){window.Kakao.init("bad1e05dc28d7a8492c354f2a5f62e6b"),window.Kakao.Auth.authorize({redirectUri:"http://ec2-52-79-218-70.ap-northeast-2.compute.amazonaws.com/loading"})},logout:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios({method:"delete",url:"/api/auth"});case 3:location.href="/",e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0.data);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},props:["isActived","notActived"]}),m=(n("85e6"),n("6b0d")),h=n.n(m);const k=h()(g,[["render",p],["__scopeId","data-v-a4e9c9c4"]]);e["a"]=k},"0c1a":function(t,e,n){},"114d":function(t,e,n){"use strict";n("003c")},"27ae":function(t,e,n){},"2f1e":function(t,e,n){"use strict";n("79fb")},"4b7f":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a=function(t){return Object(c["w"])("data-v-01b0322a"),t=t(),Object(c["u"])(),t},i={class:"컨테이너"},o={key:1,class:"컨테이너_내용"},r={class:"유저정보_컨테이너"},s=a((function(){return Object(c["g"])("div",{class:"닉네임"},"닉네임",-1)})),u=a((function(){return Object(c["g"])("div",{class:"이메일"},"이메일",-1)})),l=a((function(){return Object(c["g"])("div",{class:"모달_헤더"},"정말 탈퇴하시겠습니까?",-1)})),d=a((function(){return Object(c["g"])("div",{class:"모달_내용"},[Object(c["g"])("p",null,"탈퇴하실 경우 회원님의 모든 정보가"),Object(c["g"])("p",null,"사라지고 복구할 수 없습니다.")],-1)})),b={class:"모달_버튼"};function f(t,e,n,a,f,O){var j=Object(c["B"])("Header"),p=Object(c["B"])("pulse-loader"),v=Object(c["B"])("base-modal");return Object(c["t"])(),Object(c["f"])("div",i,[Object(c["i"])(j,{class:"header"}),1==O.loading?(Object(c["t"])(),Object(c["d"])(p,{key:0,class:"로딩중"})):Object(c["e"])("",!0),0==O.loading?(Object(c["t"])(),Object(c["f"])("div",o,[Object(c["g"])("div",r,[Object(c["g"])("div",{class:"유저정보_내용",style:Object(c["p"])({backgroundColor:f.nicknamesBackgroundColor})},[s,Object(c["g"])("div",null,Object(c["D"])(f.user.nickname),1)],4),Object(c["g"])("div",{class:"유저정보_내용",style:Object(c["p"])({backgroundColor:f.emailsBackgroundColor})},[u,Object(c["g"])("div",null,Object(c["D"])(f.user.email),1)],4)]),f.confirm?(Object(c["t"])(),Object(c["d"])(v,{key:1},{header:Object(c["H"])((function(){return[l]})),contents:Object(c["H"])((function(){return[d]})),confirm:Object(c["H"])((function(){return[Object(c["g"])("div",b,[Object(c["g"])("div",{class:"삭제_버튼",onClick:e[1]||(e[1]=function(){return O.authWithdrawal&&O.authWithdrawal.apply(O,arguments)})},"확인"),Object(c["g"])("div",{class:"취소_버튼",onClick:e[2]||(e[2]=function(){return O.activeConfirm&&O.activeConfirm.apply(O,arguments)})},"취소")])]})),_:1})):(Object(c["t"])(),Object(c["f"])("div",{key:0,class:"탈퇴_버튼",onClick:e[0]||(e[0]=function(){return O.activeConfirm&&O.activeConfirm.apply(O,arguments)})}," 탈퇴하기 "))])):Object(c["e"])("",!0)])}var O=n("1da1"),j=(n("96cf"),n("0418")),p=n("c1ec"),v=n("8a5d"),g={components:{Header:j["a"],BaseModal:p["a"],PulseLoader:v["a"]},data:function(){return{user:this.$store.state.user,backgroundColor:["#B8B1F0","#EAA2A6","#A8DDAD","#FFD98E","#AFC2FF","#95DFD2","#FFBAAA","#FFB6F2"],nicknamesBackgroundColor:"#000",emailsBackgroundColor:"#000",confirm:!1}},computed:{loading:function(){return this.$store.state.loading}},methods:{activeConfirm:function(){this.confirm=!this.confirm},authWithdrawal:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios({method:"delete",url:"/api/withdrawal"});case 3:location.href="/main",e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0.data);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},created:function(){var t=Math.floor(8*Math.random()),e=Math.floor(8*Math.random());while(t==e)e=Math.floor(8*Math.random());this.nicknamesBackgroundColor=this.backgroundColor[t],this.emailsBackgroundColor=this.backgroundColor[e]}},m=(n("114d"),n("6b0d")),h=n.n(m);const k=h()(g,[["render",f],["__scopeId","data-v-01b0322a"]]);e["default"]=k},"6a59":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAeCAYAAAEHn03ZAAAAAXNSR0IArs4c6QAABNxJREFUWAnlWH1oHEUU/+1dLrnEpPk4vaathpQWRYofsTYxtmjU/JHGVONHxAT/CNaaYmm1NjSGBmkthNIKioJaFP8QsVBQJIViRaSgYhqtbZAiJDWxpV7SSmPSa3J3vY913mxmZ+/27jYx3K3Ygbl58z7nvX375u0pYCP2J1RaE4eiYExJRRTMDgKuXQOWVgkU0PvuIn1jqSEtA1ev60oAOFHYrW+9iZO//cHN17Rq0xITrJi2+pkea9fcFkcgzolJJxeIxRRU1CzB/veL2F7hOPpZmGXFjVt0VfMEFNWHz1QVrfOUAxld2LHna9HIr0eboiwmMVCkd+wtgaoqoGjTOHEqD6sbF3OYfnJ0aBZofFhidm31Q1FUNjVcTVVIEhmk+3x2FFi5PI5mudGFLTmTMOg+J6GlRTFPJv71c06reQ7EBbk8B/0pWZKG69Z1Ml0obfqOSfloVMGPJ/P0KSnJIC096lq0+mLkMBm+rwm4Om1kATa/JvfhMMukyghqV4f4lBQNqmrQcre6aTGaN3o40j9tMiNT06hgWw9wZgjo2gI8wrx3apWIs7yyu8TIijtvDyMajUPhqcYADnxQhAdq5Huw/qFgHJN9z5huo7ijZGmjqJdxM0IYYKVzSTZsMkcPKUvRZkuouXGrOz9TUTDneaYsJei1zbDpfqIqZSwYhTcAQ9/L41LVEmNZeRQVyyJiG7eOX3Ki3BvF6TO5uHsVa88Shsljo1HipSpG/Y0Yt62IQMxPPi/gaLp1aZ67oPnRyW5jMnp/sxeR5OeCybAwYFzHLsrdHfVelJVE+ezZdoUTHA4VNCcmNXVr14TwzseFWHuv2VOhyWT4wVpBkuvAUQn/+s0lHD5SwPuMqSvx4r6LWm19oiGAqlVhHOiZlIIJUNL3mG6kt3YD1WxdXiEl6Lnte49aRjk21Acxct5QzBlpU9s0NnaW4elHZzhjXW0I+e74Nj6pYak2c1B8rDJnx6T5+jJMN6KDOj5THDKNyEO1di0GMchyrizT9uzUzwPsxl3UVvuy1QPY6TDZptSyrXzY5bxt1cMuh03dR6qDTPwNHPyUfV7/Apz9Q+NaWQnU3AN0PMcKQGkqyf8W3jKlycFnOoBwiu5FuONioTt8UAuAwNEaCDrQubfYiOLw4G8uNNQFIRqY198sxlfHZStnFOjv+4s3N8OjLmzfUwz/VQUR9sHavcWPpvoAfh7MRUd3KU4eNXRJRgUG2PIJt75k7Szpo4AQ70i/QTsDFfbX4ZfH3FhRGYWTdWRiuHJUeD0xscUbnVNs6lsODI240NTu4c4Soqt3EdpbZnhPQ33Quie97Ds2FC9ksbN8h7c+b6HBQH75BcMmCciqJP/zSKwnTuUm4ZKo3885eQ8tMF98eJl/iL/9URGGR3Mw/N04a+Jk0ARfutUypUmYvvR37GEpe8SsqtwLvPoi8Ozj7O+yhHyZCTjw06BLFxo4ncuedj56u6Z03I2lMZz3OVldSBDWOTSgrTkAT2kU3fuKUVigYtdsL0/UQFCBb9zJssjivWO8c3KYlK5ZD7RsALZvAlzSByJldfR9nY/+FJmxc7MfJcXpn/icHc6qVxk0ZvkOZ9C2LaqvP4dZxTxkS6htMEq+sosCmP0jcT8D6/5vHxLMyTHm13HkYafiwYV/AHfxfSNeFo7AAAAAAElFTkSuQmCC"},"79fb":function(t,e,n){},"85e6":function(t,e,n){"use strict";n("0c1a")},"8a5d":function(t,e,n){"use strict";var c=n("7a23"),a={class:"v-spinner"};function i(t,e,n,i,o,r){return Object(c["I"])((Object(c["t"])(),Object(c["f"])("div",a,[Object(c["g"])("div",{class:"v-pulse v-pulse1",style:Object(c["p"])([o.spinnerStyle,o.spinnerDelay1])},null,4),Object(c["g"])("div",{class:"v-pulse v-pulse2",style:Object(c["p"])([o.spinnerStyle,o.spinnerDelay2])},null,4),Object(c["g"])("div",{class:"v-pulse v-pulse3",style:Object(c["p"])([o.spinnerStyle,o.spinnerDelay3])},null,4)],512)),[[c["F"],n.loading]])}var o={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},r=(n("2f1e"),n("6b0d")),s=n.n(r);const u=s()(o,[["render",i]]);e["a"]=u},9872:function(t,e,n){"use strict";n("27ae")},c1ec:function(t,e,n){"use strict";var c=n("7a23"),a=function(t){return Object(c["w"])("data-v-1ec0a277"),t=t(),Object(c["u"])(),t},i={class:"모달"},o=a((function(){return Object(c["g"])("div",{class:"배경"},null,-1)})),r={class:"모달영역"};function s(t,e,n,a,s,u){return Object(c["t"])(),Object(c["f"])("div",i,[o,Object(c["g"])("div",r,[Object(c["A"])(t.$slots,"header",{},void 0,!0),Object(c["A"])(t.$slots,"contents",{},void 0,!0),Object(c["A"])(t.$slots,"confirm",{},void 0,!0)])])}var u={},l=(n("9872"),n("6b0d")),d=n.n(l);const b=d()(u,[["render",s],["__scopeId","data-v-1ec0a277"]]);e["a"]=b},cf05:function(t,e,n){t.exports=n.p+"img/logo.b51246fe.png"}}]);
//# sourceMappingURL=myinfo.f9dd60a0.js.map