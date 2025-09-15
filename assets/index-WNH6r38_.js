import{u as J,r as u,w as K,o as Z,a as H,b as v,c as Q,v as tt,d as r,e as d,f as m,g as x,h as e,i as P,j as O,t as f,k as et,n as b,l as st,F as h,m as _,p as y,q as at,s as q,x as W,y as z,z as nt,A as ot,B as it}from"./vendor-CCA-240T.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();const p=(a,t)=>{const i=a.__vccOpts||a;for(const[s,o]of t)i[s]=o;return i},rt={name:"FloatingBackButton",setup(){const a=J(),t=u(!1),i=()=>{const o=a.path.includes("/animation/");t.value=o},s=()=>{i()};return K(()=>a.path,()=>{i()}),Z(()=>{i(),window.addEventListener("scroll",s)}),H(()=>{window.removeEventListener("scroll",s)}),{showButton:t}}},dt={class:"floating-back-button"};function ct(a,t,i,s,o,c){const n=v("router-link");return Q((r(),d("div",dt,[m(n,{to:"/",class:"back-btn",title:"返回首页"},{default:x(()=>t[0]||(t[0]=[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M19 12H5M12 19L5 12L12 5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),e("span",null,"首页",-1)])),_:1,__:[0]})],512)),[[tt,s.showButton]])}const lt=p(rt,[["render",ct],["__scopeId","data-v-10e0ffd3"]]),pt={name:"App",components:{FloatingBackButton:lt}},ft={id:"app"},mt={class:"header"},ut={class:"container"},gt={class:"logo"},vt={class:"nav"},ht={class:"main"};function _t(a,t,i,s,o,c){const n=v("router-link"),l=v("router-view"),g=v("FloatingBackButton");return r(),d("div",ft,[e("header",mt,[e("div",ut,[e("h1",gt,[m(n,{to:"/"},{default:x(()=>t[0]||(t[0]=[P("大集动画文档库")])),_:1,__:[0]})]),e("nav",vt,[m(n,{to:"/",class:"nav-link"},{default:x(()=>t[1]||(t[1]=[P("首页")])),_:1,__:[1]})])])]),e("main",ht,[m(l)]),t[2]||(t[2]=e("footer",{class:"footer"},[e("div",{class:"container"},[e("p",null,"© 2024 大集动画文档库 - 简单易用的Vue3 + SCSS动画示例")])],-1)),m(g)])}const yt=p(pt,[["render",_t],["__scopeId","data-v-4439a8a0"]]),N=[{id:"loading-dots",title:"文字逐个闪烁",description:"文字按顺序依次闪烁显示的动画效果",category:"加载动画",difficulty:"简单",tags:["文字","闪烁","加载"],component:"LoadingDots"},{id:"loading-circle",title:"圆形加载器",description:"经典的圆形旋转加载动画",category:"加载动画",difficulty:"简单",tags:["圆形","旋转","加载"],component:"LoadingCircle"},{id:"bounce-ball",title:"弹跳小球",description:"小球上下弹跳的动画效果",category:"运动动画",difficulty:"简单",tags:["弹跳","小球","运动"],component:"BounceBall"},{id:"fade-slide",title:"淡入滑动",description:"元素从透明到不透明并伴随滑动效果",category:"过渡动画",difficulty:"简单",tags:["淡入","滑动","过渡"],component:"FadeSlide"},{id:"pulse-heart",title:"心跳脉搏",description:"心形图标的脉搏跳动动画",category:"图标动画",difficulty:"简单",tags:["心跳","脉搏","图标"],component:"PulseHeart"},{id:"wave-loading",title:"波浪加载",description:"模拟波浪起伏的加载动画",category:"加载动画",difficulty:"中等",tags:["波浪","起伏","加载"],component:"WaveLoading"},{id:"typing-text",title:"打字机效果",description:"模拟打字机逐字显示文本的效果",category:"文字动画",difficulty:"中等",tags:["打字机","文字","逐字"],component:"TypingText"},{id:"floating-button",title:"浮动按钮",description:"按钮悬浮上下浮动的动画效果",category:"交互动画",difficulty:"简单",tags:["浮动","按钮","交互"],component:"FloatingButton"},{id:"shimmer-loading",title:"闪光加载",description:"模拟骨架屏的闪光加载效果",category:"加载动画",difficulty:"中等",tags:["闪光","骨架屏","加载"],component:"ShimmerLoading"},{id:"spinner-dots",title:"旋转点阵",description:"多个点围成圆形旋转的加载动画",category:"加载动画",difficulty:"中等",tags:["旋转","点阵","加载"],component:"SpinnerDots"},{id:"progress-bar",title:"进度条",description:"带闪光效果的进度条动画",category:"加载动画",difficulty:"中等",tags:["进度条","闪光","百分比"],component:"ProgressBar"},{id:"rotating-card",title:"3D翻转卡片",description:"鼠标悬停触发的3D卡片翻转效果",category:"交互动画",difficulty:"中等",tags:["3D","翻转","悬停"],component:"RotatingCard"},{id:"shine-text",title:"文字扫光",description:"文字上的光线扫过效果，打造科技感",category:"文字动画",difficulty:"中等",tags:["扫光","文字","科技感"],component:"ShineText"},{id:"camera-icon",title:"相机图标动画",description:"SVG相机图标的描边动画和脉冲效果",category:"SVG动画",difficulty:"中等",tags:["SVG","相机","描边","脉冲"],component:"CameraIcon"},{id:"bouncing-dots",title:"弹跳加载点",description:"三个小圆点依次向上弹跳的加载动画",category:"加载动画",difficulty:"简单",tags:["加载","弹跳","点"],component:"BouncingDots"},{id:"rainbow-border",title:"彩虹流光边框",description:"彩虹渐变背景移动形成流光边框效果",category:"交互动画",difficulty:"简单",tags:["边框","渐变","流光"],component:"RainbowBorder"},{id:"breathing-light",title:"呼吸灯效果",description:"通过阴影强度变化模拟呼吸光效",category:"过渡动画",difficulty:"简单",tags:["呼吸","发光","阴影"],component:"BreathingLight"},{id:"ripple-button",title:"按钮波纹点击",description:"点击位置产生扩散涟漪的按钮特效",category:"交互动画",difficulty:"简单",tags:["按钮","波纹","点击"],component:"RippleButton"}],xt=["全部","加载动画","运动动画","过渡动画","图标动画","文字动画","交互动画","SVG动画"],bt={},kt={class:"loading-dots-container"};function wt(a,t){return r(),d("div",kt,t[0]||(t[0]=[O('<span class="loading-dots" data-v-4239e5c2><span class="dot" data-v-4239e5c2>视</span><span class="dot" data-v-4239e5c2>频</span><span class="dot" data-v-4239e5c2>上</span><span class="dot" data-v-4239e5c2>传</span><span class="dot" data-v-4239e5c2>成</span><span class="dot" data-v-4239e5c2>功</span></span>',1)]))}const k=p(bt,[["render",wt],["__scopeId","data-v-4239e5c2"]]),$t={},Ct={class:"loading"};function Lt(a,t){return r(),d("div",Ct)}const w=p($t,[["render",Lt],["__scopeId","data-v-10c9f196"]]),It={},Bt={class:"bounce-ball"};function St(a,t){return r(),d("div",Bt,t[0]||(t[0]=[e("div",{class:"ball"},null,-1)]))}const $=p(It,[["render",St],["__scopeId","data-v-dc308113"]]),Tt={},Dt={class:"fade-slide-container"};function Yt(a,t){return r(),d("div",Dt,t[0]||(t[0]=[e("div",{class:"fade-slide-item"},"淡入滑动效果",-1)]))}const C=p(Tt,[["render",Yt],["__scopeId","data-v-b46aa137"]]),Ft={},jt={class:"pulse-heart"};function Mt(a,t){return r(),d("div",jt,t[0]||(t[0]=[e("div",{class:"heart"},"❤️",-1)]))}const L=p(Ft,[["render",Mt],["__scopeId","data-v-4399a070"]]),Rt={},At={class:"wave-loading"};function Vt(a,t){return r(),d("div",At,t[0]||(t[0]=[e("div",{class:"wave-container"},[e("div",{class:"wave"}),e("div",{class:"wave"}),e("div",{class:"wave"})],-1)]))}const I=p(Rt,[["render",Vt],["__scopeId","data-v-a20fc2fb"]]),Et={name:"TypingText",setup(){const a="大集动画文档库",t=u("");let i=0,s=null;const o=()=>{i<a.length?(t.value+=a[i],i++):setTimeout(()=>{t.value="",i=0},2e3)};return Z(()=>{s=setInterval(o,200)}),H(()=>{s&&clearInterval(s)}),{displayText:t}}},zt={class:"typing-text"},Pt={class:"text"};function Nt(a,t,i,s,o,c){return r(),d("div",zt,[e("span",Pt,f(s.displayText),1),t[0]||(t[0]=e("span",{class:"cursor"},"|",-1))])}const B=p(Et,[["render",Nt],["__scopeId","data-v-bc080f3c"]]),Zt={},Ht={class:"floating-button"};function Ot(a,t){return r(),d("div",Ht,t[0]||(t[0]=[e("button",{class:"float-btn"}," 点击我 ",-1)]))}const S=p(Zt,[["render",Ot],["__scopeId","data-v-298342b4"]]),Xt={},Gt={class:"shimmer-loading"};function Ut(a,t){return r(),d("div",Gt,t[0]||(t[0]=[e("div",{class:"shimmer-card"},[e("div",{class:"shimmer-line long"}),e("div",{class:"shimmer-line medium"}),e("div",{class:"shimmer-line short"})],-1)]))}const T=p(Xt,[["render",Ut],["__scopeId","data-v-5249fe7a"]]),qt={},Wt={class:"spinner-dots"};function Jt(a,t){return r(),d("div",Wt,t[0]||(t[0]=[O('<div class="dot-container" data-v-d697f2fa><div class="dot dot-1" data-v-d697f2fa></div><div class="dot dot-2" data-v-d697f2fa></div><div class="dot dot-3" data-v-d697f2fa></div><div class="dot dot-4" data-v-d697f2fa></div><div class="dot dot-5" data-v-d697f2fa></div><div class="dot dot-6" data-v-d697f2fa></div><div class="dot dot-7" data-v-d697f2fa></div><div class="dot dot-8" data-v-d697f2fa></div></div>',1)]))}const D=p(qt,[["render",Jt],["__scopeId","data-v-d697f2fa"]]),X={name:"ProgressBar",setup(){const a=u(0);let t=null;const i=()=>{a.value=0,t=setInterval(()=>{a.value<100?a.value+=1:setTimeout(()=>{a.value=0},1e3)},50)};return Z(()=>{i()}),H(()=>{t&&clearInterval(t)}),{progress:a}}},G=()=>{et(a=>({"432153bc":a.progress+"%"}))},U=X.setup;X.setup=U?(a,t)=>(G(),U(a,t)):G;const Kt={class:"progress-bar"},Qt={class:"progress-container"},te={class:"progress-text"};function ee(a,t,i,s,o,c){return r(),d("div",Kt,[e("div",Qt,[t[0]||(t[0]=e("div",{class:"progress-fill"},null,-1)),e("div",te,f(s.progress||0)+"%",1)])])}const Y=p(X,[["render",ee],["__scopeId","data-v-5b6ddf19"]]),se={name:"RotatingCard",setup(){return{isFlipped:u(!1)}}};function ae(a,t,i,s,o,c){return r(),d("div",{class:"rotating-card",onMouseenter:t[0]||(t[0]=n=>s.isFlipped=!0),onMouseleave:t[1]||(t[1]=n=>s.isFlipped=!1)},[e("div",{class:b(["card-3d",{flipped:s.isFlipped}])},t[2]||(t[2]=[e("div",{class:"card-front"},[e("div",{class:"card-icon"},"🎨"),e("h3",null,"前面"),e("p",null,"悬停查看背面")],-1),e("div",{class:"card-back"},[e("div",{class:"card-icon"},"✨"),e("h3",null,"背面"),e("p",null,"3D 翻转效果")],-1)]),2)],32)}const F=p(se,[["render",ae],["__scopeId","data-v-553b9755"]]),ne={},oe={class:"shine-text-container"};function ie(a,t){return r(),d("div",oe,t[0]||(t[0]=[e("div",{class:"shine-text"},"为全球用户提供专业AI系统性解决方案",-1)]))}const j=p(ne,[["render",ie],["__scopeId","data-v-bd921ce8"]]),re={name:"CameraIcon"},de={class:"camera-container"};function ce(a,t,i,s,o,c){return r(),d("div",de,t[0]||(t[0]=[e("div",{class:"camera-wrapper group"},[e("svg",{width:"64",height:"54",viewBox:"0 0 64 54",fill:"none",class:"camera-icon"},[e("path",{d:"M63.8788 45.168C63.9023 45.1284 63.9301 45.0864 63.9464 45.0422L64 45.0422C63.9651 45.1028 63.9187 45.154 63.8789 45.2099L63.8789 49.1567C63.8789 51.3247 62.1069 53.0874 59.9298 53.0874L3.94921 53.0874C1.77214 53.0874 0 51.3247 0 49.1567L0 10.8894C0 8.72271 1.77214 6.96 3.94921 6.96L15.9178 6.96L15.9854 6.82964L17.5502 3.71988C17.6178 3.56733 19.2407 7.37868e-07 21.4435 7.37868e-07L42.4377 0C44.5916 0 46.1728 3.36244 46.3497 3.75599L47.8958 6.82964L47.9634 6.96L59.9297 6.96C62.1068 6.96 63.8788 8.72271 63.8788 10.8894L63.8788 45.168ZM49.2881 15.486C49.2881 17.222 50.7016 18.6353 52.4364 18.6353C54.1735 18.6353 55.5869 17.222 55.5869 15.486C55.5869 13.7477 54.1735 12.3354 52.4364 12.3354C50.7016 12.3354 49.2881 13.7477 49.2881 15.486ZM18.2138 28.4839C18.2138 35.9003 24.2819 41.936 31.7379 41.936C39.1939 41.936 45.2598 35.9003 45.2598 28.4839C45.2598 21.0676 39.1939 15.0343 31.7379 15.0343C24.2819 15.0343 18.2138 21.0676 18.2138 28.4839ZM22.3817 28.4839C22.3817 23.3565 26.5777 19.186 31.7378 19.186C36.8956 19.186 41.0938 23.3565 41.0938 28.4839C41.0938 33.6114 36.8956 37.7842 31.7378 37.7842C26.5777 37.7842 22.3817 33.6114 22.3817 28.4839Z",class:"camera-path"})])],-1)]))}const M=p(re,[["render",ce],["__scopeId","data-v-0d952b5e"]]),le={name:"BouncingDots"},pe={class:"bouncing-dots","aria-label":"加载中"};function fe(a,t,i,s,o,c){return r(),d("div",pe,t[0]||(t[0]=[e("span",null,null,-1),e("span",null,null,-1),e("span",null,null,-1)]))}const R=p(le,[["render",fe],["__scopeId","data-v-6fd76f5e"]]),me={name:"RainbowBorder"},ue={class:"rainbow-border-animate"};function ge(a,t,i,s,o,c){return r(),d("div",ue,"Rainbow Border")}const A=p(me,[["render",ge],["__scopeId","data-v-efba1812"]]),ve={name:"BreathingLight"},he={class:"breathing-light"};function _e(a,t,i,s,o,c){return r(),d("div",he,"Breathing Light")}const V=p(ve,[["render",_e],["__scopeId","data-v-ce8e1304"]]),ye={name:"RippleButton",setup(){const a=u(null),t=i=>{const s=a.value;if(!s)return;const o=document.createElement("span");o.className="ripple";const c=s.getBoundingClientRect();o.style.left=i.clientX-c.left+"px",o.style.top=i.clientY-c.top+"px";const n=Math.max(s.offsetWidth,s.offsetHeight);o.style.width=o.style.height=n+"px",s.appendChild(o);const l=()=>o.remove();o.addEventListener("animationend",l,{once:!0})};return st(()=>{const i=a.value;if(!i)return;i.querySelectorAll(".ripple").forEach(o=>o.remove())}),{btnRef:a,createRipple:t}}};function xe(a,t,i,s,o,c){return r(),d("button",{ref:"btnRef",class:"ripple-btn",onClick:t[0]||(t[0]=(...n)=>s.createRipple&&s.createRipple(...n))},"点击有波纹",512)}const E=p(ye,[["render",xe],["__scopeId","data-v-e70bd40a"]]),be={name:"Home",components:{LoadingDots:k,LoadingCircle:w,BounceBall:$,FadeSlide:C,PulseHeart:L,WaveLoading:I,TypingText:B,FloatingButton:S,ShimmerLoading:T,SpinnerDots:D,ProgressBar:Y,RotatingCard:F,ShineText:j,CameraIcon:M,BouncingDots:R,RainbowBorder:A,BreathingLight:V,RippleButton:E},setup(){const a=at(),t=u("全部"),i=y(()=>t.value==="全部"?N:N.filter(n=>n.category===t.value));return{categories:xt,activeCategory:t,filteredAnimations:i,setActiveCategory:n=>{t.value=n},goToDetail:n=>{a.push(`/animation/${n}`)},getComponent:n=>({LoadingDots:k,LoadingCircle:w,BounceBall:$,FadeSlide:C,PulseHeart:L,WaveLoading:I,TypingText:B,FloatingButton:S,ShimmerLoading:T,SpinnerDots:D,ProgressBar:Y,RotatingCard:F,ShineText:j,CameraIcon:M,BouncingDots:R,RainbowBorder:A,BreathingLight:V,RippleButton:E})[n]}}},ke={class:"home"},we={class:"container"},$e={class:"filters"},Ce={class:"filter-tabs"},Le=["onClick"],Ie={class:"animations-grid"},Be=["onClick"],Se={class:"card-preview"},Te={key:1,class:"preview-placeholder"},De={class:"card-content"},Ye={class:"card-title"},Fe={class:"card-description"},je={class:"card-meta"},Me={class:"category"},Re={class:"card-tags"};function Ae(a,t,i,s,o,c){return r(),d("div",ke,[e("div",we,[t[0]||(t[0]=e("section",{class:"hero"},[e("h1",{class:"hero-title"},"大集动画文档库"),e("p",{class:"hero-subtitle"},"简单易用的Vue3 + SCSS动画示例集合")],-1)),e("section",$e,[e("div",Ce,[(r(!0),d(h,null,_(s.categories,n=>(r(),d("button",{key:n,class:b(["filter-tab",{active:s.activeCategory===n}]),onClick:l=>s.setActiveCategory(n)},f(n),11,Le))),128))])]),e("section",Ie,[(r(!0),d(h,null,_(s.filteredAnimations,n=>(r(),d("div",{key:n.id,class:"animation-card card",onClick:l=>s.goToDetail(n.id)},[e("div",Se,[s.getComponent(n.component)?(r(),q(W(s.getComponent(n.component)),{key:0})):(r(),d("div",Te,f(n.title),1))]),e("div",De,[e("h3",Ye,f(n.title),1),e("p",Fe,f(n.description),1),e("div",je,[e("span",{class:b(["difficulty",n.difficulty])},f(n.difficulty),3),e("span",Me,f(n.category),1)]),e("div",Re,[(r(!0),d(h,null,_(n.tags,l=>(r(),d("span",{key:l,class:"tag"},f(l),1))),128))])])],8,Be))),128))])])])}const Ve=p(be,[["render",Ae],["__scopeId","data-v-04fb6f06"]]),Ee={"loading-dots":{template:`<template>
  <h2 class="text-title">
    视频上传成功
    <span class="loading-dots">
      <span class="dot">视</span>
      <span class="dot">频</span>
      <span class="dot">上</span>
      <span class="dot">传</span>
      <span class="dot">成</span>
      <span class="dot">功</span>
    </span>
  </h2>
</template>`,style:`<style scoped lang="scss">
.text-title {
  font-size: 30px;
  font-weight: 600;
  color: #1A1A1A;
  margin: 20px 0 0 40px;
  position: relative;
}

.loading-dots {
  display: inline-block;
  margin-left: 4px;
  position: absolute;
  left: 0;
  top: 0;
}

.dot {
  animation: blink 1.4s infinite both;
  font-weight: bold;
  color: #eed174d3;
}

.dot:nth-child(1) { animation-delay: 0s; }
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
.dot:nth-child(4) { animation-delay: 0.6s; }
.dot:nth-child(5) { animation-delay: 0.8s; }
.dot:nth-child(6) { animation-delay: 1s; }

@keyframes blink {
  0%, 80%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. 使用 nth-child 选择器为每个字符设置不同的动画延迟
2. blink 关键帧动画控制透明度变化
3. animation-delay 属性让每个字符依次显示
4. infinite 让动画无限循环播放`},"loading-circle":{template:`<template>
  <div class="loading"></div>
</template>`,style:`<style scoped lang="scss">
.loading {
  position: relative;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.4);
  animation: rotate 1.6s infinite linear;

  &::after {
    position: absolute;
    content: '';
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-right: 4px solid #fff;
    animation: rotate 4s infinite ease-in-out;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(0deg);
  }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. 主圆环设置半透明背景色作为轨道
2. 使用 ::after 伪元素创建旋转的进度条
3. transform: rotate() 实现旋转动画
4. 两个元素设置不同的旋转速度创造层次感`},"bounce-ball":{template:`<template>
  <div class="bounce-ball">
    <div class="ball"></div>
  </div>
</template>`,style:`<style scoped lang="scss">
.bounce-ball {
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  .ball {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
    border-radius: 50%;
    animation: bounce 1.5s infinite ease-in-out;
    box-shadow: 0 2px 10px rgba(255, 107, 107, 0.3);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-60px);
  }
  60% {
    transform: translateY(-30px);
  }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. 使用 translateY 控制垂直位移
2. 关键帧设置不同高度模拟弹跳效果
3. ease-in-out 缓动函数让运动更自然
4. 渐变背景和阴影增强视觉效果`},"fade-slide":{template:`<template>
  <div class="fade-slide-container">
    <div class="fade-slide-item">淡入滑动效果</div>
  </div>
</template>`,style:`<style scoped lang="scss">
.fade-slide-container {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .fade-slide-item {
    background: linear-gradient(45deg, #4ecdc4, #44a08d);
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    font-weight: 600;
    animation: fadeSlideIn 2s infinite;
    box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
  }
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  50% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. 同时控制 opacity 和 translateX 属性
2. 从左侧淡入到中央，再淡出到右侧
3. 50% 关键帧为完全显示状态
4. 创造出流畅的滑动过渡效果`},"pulse-heart":{template:`<template>
  <div class="pulse-heart">
    <div class="heart">❤️</div>
  </div>
</template>`,style:`<style scoped lang="scss">
.pulse-heart {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .heart {
    font-size: 40px;
    animation: pulse 1.2s infinite;
    filter: drop-shadow(0 0 10px rgba(255, 69, 0, 0.5));
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. 使用 scale 属性控制元素缩放
2. 多个关键帧创造不规则的脉搏节奏
3. drop-shadow 滤镜增加发光效果
4. 模拟真实心跳的律动感`},"wave-loading":{template:`<template>
  <div class="wave-loading">
    <div class="wave-container">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  </div>
</template>`,style:`<style scoped lang="scss">
.wave-loading {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .wave-container {
    display: flex;
    gap: 4px;
    align-items: flex-end;
    height: 60px;
  }
  
  .wave {
    width: 6px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 3px;
    animation: wave 1.2s ease-in-out infinite;
    
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
}

@keyframes wave {
  0%, 40%, 100% {
    height: 20px;
  }
  20% {
    height: 60px;
  }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. 多个条形元素组成波浪效果
2. 控制 height 属性创造起伏动画
3. animation-delay 让每个条形错开时间
4. 形成连续的波浪传播效果`},"typing-text":{template:`<template>
  <div class="typing-text">
    <span class="text">{{ displayText }}</span>
    <span class="cursor">|</span>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const fullText = '大集动画文档库'
    const displayText = ref('')
    let currentIndex = 0
    let timer = null

    const typeText = () => {
      if (currentIndex < fullText.length) {
        displayText.value += fullText[currentIndex]
        currentIndex++
      } else {
        setTimeout(() => {
          displayText.value = ''
          currentIndex = 0
        }, 2000)
      }
    }

    onMounted(() => {
      timer = setInterval(typeText, 200)
    })

    onUnmounted(() => {
      if (timer) clearInterval(timer)
    })

    return { displayText }
  }
}
<\/script>`,style:`<style scoped lang="scss">
.typing-text {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  
  .text {
    color: #3498db;
  }
  
  .cursor {
    animation: blink 1s infinite;
    color: #3498db;
    margin-left: 2px;
  }
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. JavaScript 控制文字逐个显示
2. setInterval 定时器控制打字速度
3. CSS 动画实现光标闪烁效果
4. 循环播放模拟真实打字过程`},"floating-button":{template:`<template>
  <div class="floating-button">
    <button class="float-btn">点击我</button>
  </div>
</template>`,style:`<style scoped lang="scss">
.floating-button {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .float-btn {
    padding: 15px 30px;
    background: linear-gradient(45deg, #ff9a56, #ff6b6b);
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    animation: float 2s ease-in-out infinite;
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. translateY 控制垂直浮动
2. 简单的上下往复运动
3. hover 状态增强交互体验
4. 渐变背景和阴影增加立体感`},"shimmer-loading":{template:`<template>
  <div class="shimmer-loading">
    <div class="shimmer-card">
      <div class="shimmer-line long"></div>
      <div class="shimmer-line medium"></div>
      <div class="shimmer-line short"></div>
    </div>
  </div>
</template>`,style:`<style scoped lang="scss">
.shimmer-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 20px;
}

.shimmer-card {
  width: 200px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.shimmer-line {
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  margin-bottom: 12px;
  animation: shimmer 1.5s infinite;
  
  &.long { width: 100%; }
  &.medium { width: 75%; }
  &.short { width: 50%; }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. 线性渐变背景模拟闪光效果
2. background-position 控制闪光位置
3. background-size 扩大背景尺寸
4. 不同宽度的条形模拟骨架屏`},"spinner-dots":{template:`<template>
  <div class="spinner-dots">
    <div class="dot-container">
      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
      <div class="dot dot-4"></div>
      <div class="dot dot-5"></div>
      <div class="dot dot-6"></div>
      <div class="dot dot-7"></div>
      <div class="dot dot-8"></div>
    </div>
  </div>
</template>`,style:`<style scoped lang="scss">
.spinner-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.dot-container {
  position: relative;
  width: 80px;
  height: 80px;
  animation: containerSpin 2s linear infinite;
}

.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  animation: dotPulse 1.5s ease-in-out infinite;
}

.dot-1 { transform: translate(-50%, -50%) rotate(0deg) translateY(-30px); animation-delay: 0s; }
.dot-2 { transform: translate(-50%, -50%) rotate(45deg) translateY(-30px); animation-delay: 0.2s; }
.dot-3 { transform: translate(-50%, -50%) rotate(90deg) translateY(-30px); animation-delay: 0.4s; }
.dot-4 { transform: translate(-50%, -50%) rotate(135deg) translateY(-30px); animation-delay: 0.6s; }
.dot-5 { transform: translate(-50%, -50%) rotate(180deg) translateY(-30px); animation-delay: 0.8s; }
.dot-6 { transform: translate(-50%, -50%) rotate(225deg) translateY(-30px); animation-delay: 1s; }
.dot-7 { transform: translate(-50%, -50%) rotate(270deg) translateY(-30px); animation-delay: 1.2s; }
.dot-8 { transform: translate(-50%, -50%) rotate(315deg) translateY(-30px); animation-delay: 1.4s; }

@keyframes containerSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes dotPulse {
  0%, 100% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateY(-30px) scale(1); }
  50% { opacity: 0.3; transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateY(-30px) scale(0.6); }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. 容器整体旋转配合点的脉冲动画
2. 每个点固定在圆形轨道上的不同位置
3. animation-delay 创造错开的脉冲效果
4. 双重动画叠加产生复杂的视觉效果`},"progress-bar":{template:`<template>
  <div class="progress-bar">
    <div class="progress-container">
      <div class="progress-fill"></div>
      <div class="progress-text">{{ progress }}%</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const progress = ref(0)
    let timer = null

    const startProgress = () => {
      progress.value = 0
      timer = setInterval(() => {
        if (progress.value < 100) {
          progress.value += 1
        } else {
          setTimeout(() => {
            progress.value = 0
          }, 1000)
        }
      }, 50)
    }

    onMounted(() => startProgress())
    onUnmounted(() => timer && clearInterval(timer))

    return { progress }
  }
}
<\/script>`,style:`<style scoped lang="scss">
.progress-container {
  position: relative;
  width: 250px;
  height: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ecdc4, #44a08d);
  border-radius: 10px;
  transition: width 0.1s ease;
  width: v-bind(progress + '%');
  
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: shimmer 2s infinite;
  }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. JavaScript 控制进度数值变化
2. v-bind 响应式绑定宽度属性
3. ::after 伪元素创建闪光效果
4. 定时器实现自动进度循环`},"rotating-card":{template:`<template>
  <div class="rotating-card">
    <div class="card-3d" @mouseenter="isFlipped = true" @mouseleave="isFlipped = false" :class="{ flipped: isFlipped }">
      <div class="card-front">
        <div class="card-icon">🎨</div>
        <h3>前面</h3>
        <p>悬停查看背面</p>
      </div>
      <div class="card-back">
        <div class="card-icon">✨</div>
        <h3>背面</h3>
        <p>3D 翻转效果</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const isFlipped = ref(false)
    return { isFlipped }
  }
}
<\/script>`,style:`<style scoped lang="scss">
.rotating-card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  perspective: 1000px;
  padding: 20px;
}

.card-3d {
  width: 200px;
  height: 120px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
  cursor: pointer;
  
  &.flipped {
    transform: rotateY(180deg);
  }
}

.card-front, .card-back {
  position: absolute;
  width: 100%; height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  z-index: 2;
}

.card-back {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  transform: rotateY(180deg);
  z-index: 1;
}

.card-icon {
  font-size: 24px;
  margin-bottom: 8px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}
</style>`,explanation:`这个动画通过以下方式实现：
1. perspective 属性创建3D视角空间
2. transform-style: preserve-3d 保持子元素3D效果
3. backface-visibility: hidden 隐藏卡片背面
4. Vue响应式状态控制翻转效果，提供更好的控制力`},"shine-text":{template:`<template>
  <div class="shine-text-container">
    <div class="shine-text">为全球用户提供专业AI系统性解决方案</div>
  </div>
</template>`,style:`<style scoped lang="scss">
.shine-text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 20px;
}

/* 扫光效果 */
.shine-text {
  background: #1a1a1a linear-gradient(to left, transparent, #dcdcdc, transparent) no-repeat 0 0;
  background-size: 40% 100%;
  background-position: -100% 0;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: shine 8s infinite;
  animation-delay: 1.5s;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
}

@keyframes shine {
  0% {
    background-position: -100% 0;
  }
  20% {
    background-position: 100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>`,explanation:`这个动画通过以下方式实现：
1. 使用线性渐变作为文字背景，模拟光线效果
2. background-clip: text 让背景只在文字区域显示
3. color: transparent 让文字变透明，只显示背景
4. 动画改变 background-position 实现扫光移动效果`},"camera-icon":{template:`<template>
  <div class="camera-container">
    <div class="camera-wrapper group">
      <!-- 相机图标 -->
      <svg width="64" height="54" viewBox="0 0 64 54" fill="none" class="camera-icon">
        <path
          d="M63.8788 45.168C63.9023 45.1284 63.9301 45.0864 63.9464 45.0422L64 45.0422C63.9651 45.1028 63.9187 45.154 63.8789 45.2099L63.8789 49.1567C63.8789 51.3247 62.1069 53.0874 59.9298 53.0874L3.94921 53.0874C1.77214 53.0874 0 51.3247 0 49.1567L0 10.8894C0 8.72271 1.77214 6.96 3.94921 6.96L15.9178 6.96L15.9854 6.82964L17.5502 3.71988C17.6178 3.56733 19.2407 7.37868e-07 21.4435 7.37868e-07L42.4377 0C44.5916 0 46.1728 3.36244 46.3497 3.75599L47.8958 6.82964L47.9634 6.96L59.9297 6.96C62.1068 6.96 63.8788 8.72271 63.8788 10.8894L63.8788 45.168ZM49.2881 15.486C49.2881 17.222 50.7016 18.6353 52.4364 18.6353C54.1735 18.6353 55.5869 17.222 55.5869 15.486C55.5869 13.7477 54.1735 12.3354 52.4364 12.3354C50.7016 12.3354 49.2881 13.7477 49.2881 15.486ZM18.2138 28.4839C18.2138 35.9003 24.2819 41.936 31.7379 41.936C39.1939 41.936 45.2598 35.9003 45.2598 28.4839C45.2598 21.0676 39.1939 15.0343 31.7379 15.0343C24.2819 15.0343 18.2138 21.0676 18.2138 28.4839ZM22.3817 28.4839C22.3817 23.3565 26.5777 19.186 31.7378 19.186C36.8956 19.186 41.0938 23.3565 41.0938 28.4839C41.0938 33.6114 36.8956 37.7842 31.7378 37.7842C26.5777 37.7842 22.3817 33.6114 22.3817 28.4839Z"
          class="camera-path"
        />
      </svg>
      <div class="camera-label">相机图标动画</div>
    </div>
  </div>
</template>`,style:`<style scoped lang="scss">
.camera-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 2rem;
}

.camera-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 2rem;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(250, 62, 62, 0.05);
    transform: translateY(-2px);
  }
}

.camera-label {
  font-size: 14px;
  color: #666;
  font-weight: 500;
  text-align: center;
}

/* 相机图标SVG动画 */
.camera-icon {
  transform: scale(1);
  transition: transform 0.1s ease;
}

.camera-path {
  fill: #fa3e3e;
  stroke: none;
  transition: all 0.1s ease;
}

/* 鼠标悬停时的动画效果 */
.group:hover .camera-icon {
  animation: camera-pulse-once 1s ease-in-out forwards !important;
}

.group:hover .camera-path {
  animation: camera-stroke-once 2s ease-in-out forwards !important;
}

/* 鼠标移出时的反向动画 */
.group:not(:hover) .camera-icon {
  animation: camera-pulse-out 1s ease-in-out forwards !important;
}

.group:not(:hover) .camera-path {
  animation: camera-stroke-out 1.5s ease-in-out forwards !important;
}

@keyframes camera-stroke-once {
  0% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-dashoffset: 300;
    stroke-dasharray: 0 300;
    stroke-width: 2;
  }
  50% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-dashoffset: 0;
    stroke-dasharray: 300 0;
    stroke-width: 2;
  }
  80% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-width: 1;
  }
  100% {
    fill: rgba(250, 62, 62, 1);
    stroke: rgba(250, 62, 62, 0);
    stroke-dashoffset: -300;
    stroke-dasharray: 300 0;
    stroke-width: 0;
  }
}

@keyframes camera-pulse-once {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1.05);
  }
}

@keyframes camera-pulse-out {
  0% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes camera-stroke-out {
  0% {
    fill: rgba(250, 62, 62, 1);
    stroke: rgba(250, 62, 62, 0);
    stroke-dashoffset: -300;
    stroke-dasharray: 300 0;
    stroke-width: 0;
  }
  30% {
    fill: rgba(250, 62, 62, 0.5);
    stroke: #fa3e3e;
    stroke-width: 1;
    stroke-dashoffset: -150;
    stroke-dasharray: 150 150;
  }
  60% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-dashoffset: 0;
    stroke-dasharray: 0 300;
    stroke-width: 2;
  }
  100% {
    fill: #fa3e3e;
    stroke: none;
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0;
    stroke-width: 0;
  }
}
</style>`,explanation:`这个SVG动画通过以下方式实现：
1. **描边动画**：使用 stroke-dasharray 和 stroke-dashoffset 创建描边绘制效果
2. **脉冲动画**：通过 transform: scale() 实现图标的缩放脉冲效果
3. **填充过渡**：从描边状态过渡到填充状态，营造绘制完成的效果
4. **反向动画**：鼠标移出时播放反向动画，回到初始状态
5. **双向交互**：悬停进入和离开都有对应的动画效果`}},ze={name:"AnimationDetail",components:{LoadingDots:k,LoadingCircle:w,BounceBall:$,FadeSlide:C,PulseHeart:L,WaveLoading:I,TypingText:B,FloatingButton:S,ShimmerLoading:T,SpinnerDots:D,ProgressBar:Y,RotatingCard:F,ShineText:j,CameraIcon:M,BouncingDots:R,RainbowBorder:A,BreathingLight:V,RippleButton:E},props:{id:{type:String,required:!0}},setup(a){const t=y(()=>N.find(n=>n.id===a.id)),i=y(()=>Ee[a.id]),s=y(()=>{var n;return(n=i.value)!=null&&n.explanation?i.value.explanation.split(`
`).filter(l=>l.trim()):[]});return{animation:t,codeExample:i,explanationLines:s,getComponent:n=>({LoadingDots:k,LoadingCircle:w,BounceBall:$,FadeSlide:C,PulseHeart:L,WaveLoading:I,TypingText:B,FloatingButton:S,ShimmerLoading:T,SpinnerDots:D,ProgressBar:Y,RotatingCard:F,ShineText:j,CameraIcon:M,BouncingDots:R,RainbowBorder:A,BreathingLight:V,RippleButton:E})[n],copyCode:async n=>{if(!i.value)return;const l=i.value[n];if(l)try{await navigator.clipboard.writeText(l),alert("代码已复制到剪贴板！")}catch(g){console.error("复制失败:",g),alert("复制失败，请手动复制代码")}}}}},Pe={class:"animation-detail"},Ne={class:"container"},Ze={key:0,class:"detail-content"},He={class:"detail-header"},Oe={class:"detail-title"},Xe={class:"detail-description"},Ge={class:"detail-meta"},Ue={class:"category"},qe={class:"detail-tags"},We={class:"animation-demo card"},Je={class:"demo-container"},Ke={key:1,class:"demo-placeholder"},Qe={key:0,class:"animation-explanation card"},ts={class:"explanation-content"},es={key:1,class:"code-examples"},ss={class:"code-section card"},as={class:"code-header"},ns={class:"code-block"},os={class:"code-section card"},is={class:"code-header"},rs={class:"code-block"},ds={key:0,class:"code-section card"},cs={class:"code-header"},ls={class:"code-block"},ps={key:1,class:"not-found"};function fs(a,t,i,s,o,c){const n=v("router-link");return r(),d("div",Pe,[e("div",Ne,[s.animation?(r(),d("div",Ze,[e("header",He,[e("h1",Oe,f(s.animation.title),1),e("p",Xe,f(s.animation.description),1),e("div",Ge,[e("span",{class:b(["difficulty",s.animation.difficulty])},f(s.animation.difficulty),3),e("span",Ue,f(s.animation.category),1)]),e("div",qe,[(r(!0),d(h,null,_(s.animation.tags,l=>(r(),d("span",{key:l,class:"tag"},f(l),1))),128))])]),e("section",We,[t[3]||(t[3]=e("h2",{class:"section-title"},"动画演示",-1)),e("div",Je,[s.getComponent(s.animation.component)?(r(),q(W(s.getComponent(s.animation.component)),{key:0})):(r(),d("div",Ke," 动画组件加载中... "))])]),s.codeExample?(r(),d("section",Qe,[t[4]||(t[4]=e("h2",{class:"section-title"},"实现原理",-1)),e("div",ts,[(r(!0),d(h,null,_(s.explanationLines,(l,g)=>(r(),d("p",{key:g,class:"explanation-line"},f(l),1))),128))])])):z("",!0),s.codeExample?(r(),d("section",es,[e("div",ss,[e("div",as,[t[5]||(t[5]=e("h3",{class:"code-title"},"Template",-1)),e("button",{class:"copy-btn",onClick:t[0]||(t[0]=l=>s.copyCode("template"))}," 复制代码 ")]),e("pre",ns,[e("code",null,f(s.codeExample.template),1)])]),e("div",os,[e("div",is,[t[6]||(t[6]=e("h3",{class:"code-title"},"Style",-1)),e("button",{class:"copy-btn",onClick:t[1]||(t[1]=l=>s.copyCode("style"))}," 复制代码 ")]),e("pre",rs,[e("code",null,f(s.codeExample.style),1)])]),s.codeExample.script?(r(),d("div",ds,[e("div",cs,[t[7]||(t[7]=e("h3",{class:"code-title"},"Script",-1)),e("button",{class:"copy-btn",onClick:t[2]||(t[2]=l=>s.copyCode("script"))}," 复制代码 ")]),e("pre",ls,[e("code",null,f(s.codeExample.script),1)])])):z("",!0)])):z("",!0),t[8]||(t[8]=O('<section class="usage-guide card" data-v-1fc14ed7><h2 class="section-title" data-v-1fc14ed7>使用方法</h2><div class="usage-steps" data-v-1fc14ed7><div class="step" data-v-1fc14ed7><span class="step-number" data-v-1fc14ed7>1</span><p data-v-1fc14ed7>复制上面的代码到你的Vue组件中</p></div><div class="step" data-v-1fc14ed7><span class="step-number" data-v-1fc14ed7>2</span><p data-v-1fc14ed7>确保已安装SCSS预处理器</p></div><div class="step" data-v-1fc14ed7><span class="step-number" data-v-1fc14ed7>3</span><p data-v-1fc14ed7>根据需要调整动画参数（如时长、颜色等）</p></div><div class="step" data-v-1fc14ed7><span class="step-number" data-v-1fc14ed7>4</span><p data-v-1fc14ed7>在需要的地方引入并使用组件</p></div></div></section>',1))])):(r(),d("div",ps,[t[10]||(t[10]=e("h2",null,"动画未找到",-1)),t[11]||(t[11]=e("p",null,"抱歉，您访问的动画不存在。",-1)),m(n,{to:"/",class:"btn primary"},{default:x(()=>t[9]||(t[9]=[P("返回首页")])),_:1,__:[9]})]))])])}const ms=p(ze,[["render",fs],["__scopeId","data-v-1fc14ed7"]]),us=[{path:"/",component:Ve},{path:"/animation/:id",component:ms,props:!0}],gs=nt({history:ot("/daji-docs-animate/"),routes:us});it(yt).use(gs).mount("#app");
