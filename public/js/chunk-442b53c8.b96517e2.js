(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-442b53c8"],{4071:function(t,e,a){"use strict";var i=a("ade3"),s=a("bc3a"),o=a.n(s);class n{constructor(){Object(i["a"])(this,"datafilter",void 0)}getPets(t){return o.a.get("https://localhost:5001/api/v1/pets/userId="+t)}getAllpets(){return o.a.get("https://localhost:5001/api/v1/pets")}deletePet(t){return o.a.delete("https://localhost:5001/api/v1/pets/"+t)}postPet(t){return o.a.post("https://localhost:5001/api/v1/pets",t)}putPet(t,e){return o.a.put("https://localhost:5001/api/v1/pets/"+t,e)}filterPet(t,e,a){return void 0===e&&void 0===a?o.a.get("https://localhost:5001/api/v1/pets/type="+t):void 0===t&&void 0===e?o.a.get("https://localhost:5001/api/v1/pets/attention="+a):void 0===t&&void 0===a?o.a.get("https://localhost:5001/api/v1/pets/gender="+e):void 0===t?o.a.get(`https://localhost:5001/api/v1/pets/gender=${e}&attention=${a}`):void 0===e?o.a.get(`https://localhost:5001/api/v1/pets/type=${t}&attention=${a}`):void 0===a?o.a.get(`https://localhost:5001/api/v1/pets/type=${t}&gender=${e}`):o.a.get(`https://localhost:5001/api/v1/pets/type=${t}&gender=${e}&attention=${a}`)}getdatafilter(){return this.datafilter}setdatafilter(t){this.datafilter=t}}e["a"]=new n},b448:function(t,e,a){"use strict";var i=a("bc3a"),s=a.n(i);class o{postNewPublication(t){return s.a.post("https://localhost:5001/api/v1/publications",t)}getAllPublications(){return s.a.get("https://localhost:5001/api/v1/publications/")}getUserPublications(t){return s.a.get(`https://localhost:5001/api/v1/users/${t}/publications`)}getPublicationById(t){return s.a.get("https://localhost:5001/api/v1/publications/"+t)}putPublication(t,e){return s.a.put("https://localhost:5001/api/v1/publications/"+t,e)}DeletePublication(t){return s.a.delete("https://localhost:5001/api/v1/publications/"+t)}}e["a"]=new o},d5cd:function(t,e,a){"use strict";a.r(e);var i=a("7496"),s=a("8336"),o=a("b0af"),n=a("99d9"),r=a("62ad"),l=a("a523"),c=a("169a"),d=a("ce7e"),u=a("0789"),h=a("132d"),p=a("adda"),m=a("8860"),b=a("da13"),v=a("5d23"),g=a("e449"),P=a("6b53"),f=a("0fd9"),I=a("2fa4"),w=a("8654"),_=function(){var t=this,e=t._self._c;return e(i["a"],[e(c["a"],{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o["a"],[e(n["d"],[e("span",{staticClass:"text-h6"},[t._v("Choose your Pet")])]),e("div",{staticClass:"text-center"},[e(g["a"],{attrs:{top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:i}){return[e(s["a"],t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",i,!1),a),[t._v(" Chose your Pet ")])]}}])},t._l(t.pets,(function(a){return e(m["a"],{directives:[{name:"show",rawName:"v-show",value:!0!==a.isPublished,expression:"pet.isPublished!==true"}],key:a.id},[e(b["a"],[e(v["c"],{attrs:{type:"button"},on:{click:function(e){return t.filFormPubication(a)}}},[t._v(t._s(a.name))])],1)],1)})),1)],1),e(n["c"],[e(l["a"],[e(f["a"],[e(r["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[e(w["a"],{attrs:{label:"type",disabled:"",required:""},model:{value:t.tipo,callback:function(e){t.tipo=e},expression:"tipo"}})],1),e(r["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[e(w["a"],{attrs:{label:"attention",disabled:"",hint:"example of helper text only on focus"},model:{value:t.attention,callback:function(e){t.attention=e},expression:"attention"}})],1),e(r["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[e(w["a"],{attrs:{label:"race*",hint:"example of persistent helper text","persistent-hint":"",disabled:"",required:""},model:{value:t.race,callback:function(e){t.race=e},expression:"race"}})],1),e(r["a"],{attrs:{cols:"12"}},[e(w["a"],{attrs:{label:"age",disabled:"",required:""},model:{value:t.age,callback:function(e){t.age=e},expression:"age"}})],1),e(r["a"],{attrs:{cols:"12"}},[e(w["a"],{attrs:{label:"urlToImage",disabled:"",required:""},model:{value:t.urlToImage,callback:function(e){t.urlToImage=e},expression:"urlToImage"}})],1),e(r["a"],{attrs:{cols:"12"}},[e(w["a"],{attrs:{label:"comment",required:""},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)],1)],1),e("small",[t._v("*indicates required field")])],1),e(n["a"],[e(I["a"]),e(s["a"],{attrs:{color:"blue darken-1",text:""},on:{click:t.Close}},[t._v(" Close ")]),e(s["a"],{attrs:{color:"blue darken-1",text:""},on:{click:t.Save}},[t._v(" Save ")])],1)],1)],1),e(P["a"],{attrs:{"aspect-ratio":16/9}},[e(l["a"],{staticClass:"myPublications"},[e(f["a"],[e(r["a"],{attrs:{cols:"9"}},[e(w["a"],{attrs:{label:"Search...",solo:"","prepend-inner-icon":"mdi-magnify"},model:{value:t.to_find,callback:function(e){t.to_find=e},expression:"to_find"}})],1),e(r["a"],{attrs:{cols:"3"}},[e(s["a"],{staticClass:"mb-2 black--text amber darken-1",staticStyle:{width:"100%","min-height":"47px"},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[e(h["a"],{attrs:{top:""}},[t._v(" mdi-plus ")]),t._v(" New Publication ")],1)],1)],1),e(f["a"],t._l(t.publications,(function(a){return e(r["a"],{key:a.id,attrs:{cols:"12",sm:"6",md:"4"}},t._l(t.pets,(function(i){return e("div",{directives:[{name:"show",rawName:"v-show",value:i.name.includes(t.to_find)||""===t.to_find,expression:'pet.name.includes(to_find) || to_find === ""'}],key:i.id},[i.id===a.petId?e(o["a"],{staticClass:"mx-auto",attrs:{"max-width":"344"}},[e(p["a"],{staticClass:"white--text align-end",attrs:{src:i.urlToImage,height:"200",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[e(n["d"],{domProps:{textContent:t._s(i.name)}})],1),e(n["b"],[t._v(" "+t._s(a.comment)+" ")]),e(n["a"],[e(s["a"],{attrs:{color:"orange lighten-2",text:""},on:{click:function(e){return t.editPublication(i,a)}}},[t._v(" Edit ")]),e(s["a"],{attrs:{color:"orange lighten-2",text:""},on:{click:function(e){return t.DeletePublication(a.id)}}},[t._v(" Delete ")]),e(I["a"]),e(s["a"],{attrs:{icon:""},on:{click:function(e){return t.showInfCard(i.id)}}},[e(h["a"],[t._v(" "+t._s(t.showAux==i.id||1==t.showAux&&0==i.id?"mdi-chevron-up":"mdi-chevron-down")+" ")])],1)],1),e(u["a"],[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showAux==i.id||1==t.showAux&&0==i.id,expression:"showAux==pet.id || (showAux==1&&pet.id==0)"}]},[e(d["a"]),e(n["c"],{staticStyle:{"text-align":"left"},attrs:{overline:""}},[t._v(" Name: "+t._s(i.name)+" "),e("br"),t._v(" Type: "+t._s(i.type)+" "),e("br"),t._v(" Required Attention: "+t._s(i.attention)+" "),e("br"),t._v(" Race: "+t._s(i.race)+" "),e("br"),t._v(" Age: "+t._s(i.age)+" "),e("br"),t._v(" Image: "+t._s(i.urlToImage)+" "),e("br"),t._v(" Is Adopted?: "+t._s(i.isAdopted)+" ")])],1)])],1):t._e()],1)})),0)})),1)],1)],1)],1)},x=[],y=a("b448"),A=a("4071"),k={name:"ViewMyPublications",data:()=>({to_find:"",show:-1,showAux:-1,editActivate:!1,publications:[],currentPetId:-1,currentPublicationId:-1,tipo:"",name:"",attention:"",race:"",age:"",urlToImage:"",isAdopted:"",userId:"",comment:"",datetime:"00/00/00",pets:[],truevalue:!0,_id:0,dialog:!1}),publicationId:null,methods:{defaultForm(){this.currentPetId=-1,this.currentPublicationId=-1,this.tipo="",this.name="",this.attention="",this.race="",this.age="",this.urlToImage="",this.isAdopted="",this.userId="",this.comment=""},async getPets(){await A["a"].getPets(localStorage.getItem("user")).then(async t=>{this.pets=await t.data,console.log("OBTENIENDO PETS"),console.log(this.pets)})},getDisplayPublications(t){return{id:t.id,comment:t.comment}},async retrievePublications(){await y["a"].getUserPublications(localStorage.getItem("user")).then(async t=>{this.publications=await t.data})},showInfCard(t){this.showAux=0!=t?-t*this.show:-this.show,this.show=-this.show},editPublication(t,e){this.dialog=!0,this.editActivate=!0,this.tipo=t.type,this.name=t.name,this.attention=t.attention,this.race=t.race,this.age=t.age,this.urlToImage=t.urlToImage,this.isAdopted=t.isAdopted,this.userId=t.userId,this.comment=e.comment,this.datetime="12/12/12",this.currentPetId=t.id,this.currentPublicationId=e.id},async Save(){this.editActivate?await y["a"].putPublication(this.currentPublicationId,{Comment:this.comment,PetId:this.currentPetId,DateTime:this.datetime,UserId:this.userId}).then(this.retrievePublications,this.getPets,this.dialog=!1,this.editActivate=!1,this.defaultForm):(await y["a"].postNewPublication({comment:this.comment,petId:this.currentPetId,datetime:this.datetime,userId:this.userId}).then(this.retrievePublications),await A["a"].putPet(this.currentPetId,{id:this.currentPetId,type:this.tipo,name:this.name,attention:this.attention,race:this.race,age:this.age,urlToImage:this.urlToImage,isAdopted:this.isAdopted,isPublished:!0,userId:this.userId}).then(this.getPets),this.dialog=!1,this.editActivate=!1,this.defaultForm())},Close(){this.dialog=!1,this.editActivate=!1,this.defaultForm()},async DeletePublication(t){await y["a"].DeletePublication(t).then(this.retrievePublications)},filFormPubication(t){this.tipo=t.type,this.name=t.name,this.attention=t.attention,this.race=t.race,this.age=t.age,this.urlToImage=t.urlToImage,this.isAdopted=t.isAdopted,this.userId=t.userId,this.datetime="00/00/00",this.currentPetId=t.id,this.retrievePublications(),this.getPets()}},mounted(){this.retrievePublications(),this.getPets()}},T=k,C=a("2877"),S=Object(C["a"])(T,_,x,!1,null,"051b00ba",null);e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-442b53c8.b96517e2.js.map