import{_ as d,s as p,u as i,E as c,G as u,H as l,o as f,b as m,y as v,T as D,i as e,l as w}from"./index.321bfbf4.js";import{A as x}from"./ArticleEditorComponent.de8730bc.js";import"./ArticleComponent.d63f7fd4.js";import"./ImagePickerModalComponent.61fe8b7d.js";import"./aspect_missing_img.27806897.js";const y={__name:"DraftView",setup(R){const{error:V,loading:g,writer:a}=p(i()),{deleteDraft:o}=i(),t=c(),s=n=>a.value.drafts.find(r=>r._id===n),_=u(()=>{o(s(t.params.id))});return l("removeDraft",_),(n,r)=>(f(),m(D,{name:"article"},{default:v(()=>[e(a)?(f(),m(x,{draft:s(e(t).params.id),key:e(t).params.id,onRemoveDraft:r[0]||(r[0]=B=>e(o)(e(t).params.id))},null,8,["draft"])):w("",!0)]),_:1}))}},b=d(y,[["__scopeId","data-v-825ea01f"]]);export{b as default};
