(function(){"use strict";var t={6101:function(t,i,a){var e=a(6369),n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"d-flex justify-content-center",attrs:{id:"app"}},[i("div",{staticClass:"w-50 bg-black p-4"},[i("img",{staticClass:"img-thumbnail rounded-circle",attrs:{alt:"Vue logo",width:"250px",height:"auto",src:a(3234)}}),i("HelloWorld",{attrs:{msg:"Hello!"}})],1)])},o=[],s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"hello text-light bg-black p-4"},[i("h3",[t._v(t._s(t.msg))]),t._m(0),i("p",[t._v("Software Engineer")]),t._m(1),i("h3",[t._v("About Me")]),t._m(2),i("hr"),i("h3",{staticClass:"mb-3"},[t._v("Experience")]),t._l(t.items,(function(a,e){return i("div",{staticClass:"d-flex justify-content-center"},[i("div",{staticClass:"col-10 text-left mb-2"},[i("h5",{},[t._v(t._s(a.name))]),i("h6",{staticClass:"font-custom"},[t._v(t._s(a.position)+" ")]),t._v(" "+t._s(a.start+" - "+a.end)+" "),i("hr")])])})),i("h3",{staticClass:"font-custom"},[t._v("Technical Skills")]),i("ul",{staticClass:"mt-3 px-4"},t._l(t.skills,(function(t){return i("li",[i("h4",{},[i("i",{class:t.icon,attrs:{title:t.tooltip}})])])})),0),i("hr"),i("h3",{staticClass:"font-custom"},[t._v("My Work")]),i("div",{staticClass:"mt-3 mb-4"},[i("VueSlickCarousel",t._b({},"VueSlickCarousel",t.slickOptions,!1),t._l(t.works,(function(a){return i("div",{staticClass:"container d-flex justify-content-center"},[i("img",{attrs:{src:a.image,height:"285px",width:"500px"}}),i("div",{staticClass:"overlay"},[t._v(t._s(a.title))])])})),0)],1),i("div",{staticStyle:{"margin-top":"150px !important"}},[i("h3",{staticClass:"font-custom"},[t._v("Hire Me!")]),i("ul",{staticClass:"mt-4 px-4"},t._l(t.contacts,(function(t){return i("li",[i("h5",{staticClass:"text-muted"},[i("a",{staticClass:"text-light",attrs:{href:t.link}},[i("i",{class:t.icon})])])])})),0)])],2)},r=[function(){var t=this,i=t._self._c;return i("h1",[t._v(" I'm "),i("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Fahmi Tyastomo")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"d-flex justify-content-center"},[i("h3",{staticClass:"mx-2"},[i("a",{attrs:{href:"https://www.linkedin.com/in/fahmi-tyastomo-207075172/",target:"_blank",rel:"noopener"}},[i("i",{staticClass:"fab fa-linkedin"})])]),i("h3",{staticClass:"mx-2"},[i("a",{attrs:{href:"https://github.com/tyastomo",target:"_blank",rel:"noopener"}},[i("i",{staticClass:"fab fa-github"})])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"d-flex justify-content-center"},[i("p",{staticClass:"mt-2 w-75"},[t._v(" Alumni of Informatics Engineering Education "),i("span",{staticClass:"font-custom"},[t._v("Yogyakarta State University.")]),t._v(" "),i("br"),i("span",{staticClass:"font-custom"},[t._v("Web Developer")]),t._v(" from the Special Region of Yogyakarta, ID "),i("br"),t._v(" Worked as a Website Designer, Frontend and Backend Web Developer Currently working as "),i("span",{staticClass:"font-custom"},[t._v("Software Engineer")])])])}],l=a(5404),c=a.n(l),f={name:"HelloWorld",components:{VueSlickCarousel:c()},props:{msg:String},data(){return{slickOptions:{dots:!0,arrow:!0,speed:500,slidesToShow:1,slidesToScroll:1},items:[{name:"PT. Solusi Pembayaran Elektronik",position:"Software Engineer",start:"2022",end:(new Date).getFullYear()},{name:"PT. Hasil Sukses Indonesia",position:"Developer",start:"2022",end:"2022"},{name:"PT. Prima Mandiri Komunikasi",position:"Staff Developer",start:"2020",end:"2022"},{name:"PT. Solusi Digital industri",position:"Frontend Developer",start:"2020",end:"2020"},{name:"PT. Sisfomedika",position:"Web Designer",start:"2017",end:"2019"}],skills:[{icon:"fab fa-html5",tooltip:"HTML5"},{icon:"fab fa-php",tooltip:"PHP"},{icon:"fab fa-js",tooltip:"Javascript"},{icon:"fab fa-css3",tooltip:"CSS 3"},{icon:"fab fa-java",tooltip:"Java"},{icon:"fas fa-database",tooltip:"DBMS"},{icon:"fab fa-bootstrap",tooltip:"Bootstrap"},{icon:"fab fa-laravel",tooltip:"Laravel"},{icon:"fab fa-wordpress",tooltip:"Wordpress"},{icon:"fab fa-vuejs",tooltip:"Vue JS"},{icon:"fab fa-react",tooltip:"reactJS"},{icon:"fab fa-angular",tooltip:"Angular"},{icon:"fab fa-linux",tooltip:"Linux Server"},{icon:"fab fa-git-alt",tooltip:"Git"},{icon:"fab fa-figma",tooltip:"Figma"}],works:[{image:"https://i.postimg.cc/YCLVc8zW/mice.jpg",title:"MICE - Kemenparekraf"},{image:"https://i.postimg.cc/bwqGWFh6/arekdeso.png",title:"E-Arekdeso - Dinsos Jawa Timur"},{image:"https://i.postimg.cc/mkFMZcX8/pelindo.png",title:"Engineer Report - PT Pelindo"},{image:"https://i.postimg.cc/ZKR2HJ9j/kpjb.png",title:"Visitor Management - PT KPJB Jepara"},{image:"https://i.postimg.cc/FHwM1wHp/erp.png",title:"ERP Prima - PT Primakom"},{image:"https://i.postimg.cc/tTq2gzWD/bemkm.jpg",title:"BEM KM Website - UPN Veteran Yogyakarta"},{image:"https://i.postimg.cc/h477dds0/ahabaca.jpg",title:"ahabaca.com - AHA!"}],contacts:[{icon:"fab fa-facebook-f",link:"https://www.facebook.com/tyastomo.fahmi"},{icon:"fab fa-twitter",link:"https://twitter.com/tyastomo_"},{icon:"fab fa-instagram",link:"https://instagram.com/tyastomo"},{icon:"fab fa-whatsapp",link:"https://api.whatsapp.com/send/?phone=6289682808781&text&type=phone_number&app_absent=0"},{icon:"fab fa-telegram",link:"https://t.me/tyastomo"}]}}},p=f,u=a(1001),m=(0,u.Z)(p,s,r,!1,null,"61c511ce",null),h=m.exports,g={name:"App",components:{HelloWorld:h}},d=g,v=(0,u.Z)(d,n,o,!1,null,null,null),b=v.exports;e.ZP.config.productionTip=!1,new e.ZP({render:t=>t(b)}).$mount("#app")},3234:function(t,i,a){t.exports=a.p+"img/aku.4327ec1f.jpg"}},i={};function a(e){var n=i[e];if(void 0!==n)return n.exports;var o=i[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(i,e,n,o){if(!e){var s=1/0;for(f=0;f<t.length;f++){e=t[f][0],n=t[f][1],o=t[f][2];for(var r=!0,l=0;l<e.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(t){return a.O[t](e[l])}))?e.splice(l--,1):(r=!1,o<s&&(s=o));if(r){t.splice(f--,1);var c=n();void 0!==c&&(i=c)}}return i}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[e,n,o]}}(),function(){a.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(i,{a:i}),i}}(),function(){a.d=function(t,i){for(var e in i)a.o(i,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(i){return 0===t[i]};var i=function(i,e){var n,o,s=e[0],r=e[1],l=e[2],c=0;if(s.some((function(i){return 0!==t[i]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var f=l(a)}for(i&&i(e);c<s.length;c++)o=s[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(f)},e=self["webpackChunkperson_project"]=self["webpackChunkperson_project"]||[];e.forEach(i.bind(null,0)),e.push=i.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(6101)}));e=a.O(e)})();
//# sourceMappingURL=app.65b9c245.js.map