(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{38:function(e,a,t){e.exports=t(69)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(33),l=t.n(r),o=(t(43),t(8)),i=(t(44),t(14)),s=t(3),m=(t(45),t(34)),u=t.n(m),d=t(35),_=t.n(d),p=Object(n.createContext)(),g=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},r)},E=function(){return Object(n.useContext)(p)},h=t(25),v=t.n(h),f=(v.a.initializeApp({apiKey:"AIzaSyAVXOFUU21OM0YfSk4TrXtFC81tRV-ryfo",authDomain:"clone-dbdf5.firebaseapp.com",databaseURL:"https://clone-dbdf5.firebaseio.com",projectId:"clone-dbdf5",storageBucket:"clone-dbdf5.appspot.com",messagingSenderId:"638642095107",appId:"1:638642095107:web:1405a9e37b8c668448ba36",measurementId:"G-PGM7Y7F5WD"}),v.a.auth());var b=function(){var e=E(),a=Object(o.a)(e,1)[0],t=a.basket,n=a.user;return c.a.createElement("nav",{className:"header"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(u.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(i.b,{to:!n&&"/login",className:"header__link"},c.a.createElement("div",{onClick:function(){n&&f.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello, ",null===n||void 0===n?void 0:n.email),c.a.createElement("span",{className:"header__optionLineTwo"},n?"Sign Out":"Sign in"))),c.a.createElement(i.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Return"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),c.a.createElement(i.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime"))),c.a.createElement(i.b,{className:"header__link",to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(_.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===t||void 0===t?void 0:t.length)))))};t(61),t(62);var N=function(e){var a=e.id,t=e.title,n=e.rating,r=e.price,l=e.image,i=E(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(n).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:l,alt:""}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:a,title:t,image:l,price:r,rating:n}})}},"Add to Basket"))};var k=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{className:"product__rating",id:"123546787",title:"The Lean StartUp:Now Constant Innovation creates ",price:17.96,rating:5,image:"https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"}),c.a.createElement(N,{className:"product__rating",id:"123578796",title:"The Lean StartUp:Now Constant Innovation creates ",price:16.96,rating:5,image:"https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"}),c.a.createElement(N,{className:"product__rating",id:"123548796",title:"The Lean StartUp:Now Constant Innovation creates ",price:15.96,rating:5,image:"https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{className:"product__rating",id:"123545645655678796",title:"The Lean StartUp:Now Constant Innovation creates ",price:14.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),c.a.createElement(N,{className:"product__rating",id:"1235467rt96",title:"The Lean StartUp:Now Constant Innovation creates ",price:13.96,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{className:"product__rating",id:"123546780796",title:"The Lean StartUp:Now Constant Innovation creates ",price:12.96,rating:5,image:"https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"})))};t(63),t(64);var C=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating;console.log(a,t,n,r,l);var i=E(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:n,alt:""}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},t),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from basket")))},O=(t(65),t(36)),S=t.n(O),j=t(28),w=t(18),A=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},y=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(w.a)(Object(w.a)({},e),{},{user:a.user});case"ADD_TO_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[].concat(Object(j.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(j.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("can't remove product (id : ".concat(a.id,")")),Object(w.a)(Object(w.a)({},e),{},{basket:t});default:return e}};var T=function(){var e=E(),a=Object(o.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(S.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null,"".concat(e))),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"}),"This order contains"))},decimalScale:2,value:A(t),displayType:"text",thousandSeparation:!0,prefix:"$"}),c.a.createElement("button",null,"Proceed to Checkout"))};var I=function(){var e=E(),a=Object(o.a)(e,1)[0].basket;return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===(null===a||void 0===a?void 0:a.length)?c.a.createElement("div",null,c.a.createElement("h2",null,"Your Shopping Basket is empty"),c.a.createElement("p",null,'you have no items in your basket. To buy one or more items, click "Add to basket" next to the item.')):c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),null===a||void 0===a?void 0:a.map((function(e){return console.log(e),c.a.createElement(C,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),a.length>0&&c.a.createElement("div",{className:"checkout__right"},c.a.createElement(T,null)))};t(67);var U=function(){var e=Object(s.f)(),a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],l=t[1],m=Object(n.useState)(""),u=Object(o.a)(m,2),d=u[0],_=u[1];return c.a.createElement("div",{className:"login"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{value:r,onChange:function(e){return l(e.target.value)},type:"email"}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{value:d,onChange:function(e){return _(e.target.value)},type:"password"}),c.a.createElement("button",{onClick:function(a){a.preventDefault(),f.signInWithEmailAndPassword(r,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),f.createUserWithEmailAndPassword(r,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create Your Amazon Account")))};var P=function(){var e=E(),a=Object(o.a)(e,2),t=a[0].user,r=a[1];return Object(n.useEffect)((function(){var e=f.onAuthStateChanged((function(e){r(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),console.log(t),c.a.createElement(i.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/checkout"},c.a.createElement(b,null),c.a.createElement(I,null)),c.a.createElement(s.a,{path:"/login"},c.a.createElement(U,null)),c.a.createElement(s.a,{path:"/"},c.a.createElement(b,null),c.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,{reducer:y,initialState:{basket:[],user:null}},c.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.0e7a5655.chunk.js.map