import{S as e,i as t,s as o,C as a,v as s,w as n,D as i,y as r,z as h,A as d,E as p,e as l,a as c,b as g,c as u,n as m,f}from"./main-552490a3.js";import{T as b}from"./Tutorial-42b2f2f1.js";function x(e){let t,o,a,s,n,i,r,h,d,p,b,x,w,y,v,S,T,$,C;return{c(){t=l("p"),t.textContent="Using anchor links with a fixed header is a problem, as the body text may be hidden underneath the header as the browser’s default offset is zero pixels from top. So, how to change the starting point to be 60px down from the top?",o=c(),a=l("p"),a.textContent="I have found two ways to handle this problem. First, I can use the empty space before or after ID. Most of the time that looks good if the header’s height is less than 60px. If header is higher than that’s probably not going and one must use another way to force the browser to scroll to the right position.",s=c(),n=l("p"),n.textContent="The best way to solve this problem is using padding and margin. First, use :before and padding to it (padding-top: 90px) to make enough space before the ID. Then, degree that same amount with margin (margin-top: -90px).",i=c(),r=l("p"),r.textContent="The reason I’m needing this is because I have fixed layers at the top of the page, so the comment is appearing overlapped behind the fixed header div.",h=c(),d=l("p"),d.textContent="Just in case, because of cross-browser compliance I prefer a solution that does not involve changing the container of the comment to fixed and positioning top minus the height of the header.",p=c(),b=l("h3"),b.textContent="HTML",x=c(),w=l("pre"),y=c(),v=l("h3"),v.textContent="CSS",S=c(),T=l("pre"),$=c(),C=l("p"),C.innerHTML='You should also use <a href="/tutorials/animated-smooth-scrolling-effect" title="Animated smooth scrolling effect for one-page website">smooth scrolling</a> with anchor links.',g(b,"id","html"),g(w,"class","language-HTML"),g(v,"id","css"),g(T,"class","language-CSS")},m(e,l){u(e,t,l),u(e,o,l),u(e,a,l),u(e,s,l),u(e,n,l),u(e,i,l),u(e,r,l),u(e,h,l),u(e,d,l),u(e,p,l),u(e,b,l),u(e,x,l),u(e,w,l),w.innerHTML='<code class="language-HTML">&lt;div class=&quot;jump&quot; id=&quot;info&quot;&gt;\n&lt;h2&gt;Info&lt;/h2&gt;\n&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ex sed tellus viverra rutrum.&lt;/p&gt;\n&lt;/div&gt;</code>',u(e,y,l),u(e,v,l),u(e,S,l),u(e,T,l),T.innerHTML='<code class="language-CSS">.jump:before &#123;\n    content: &quot;&quot;;\n    display: block;\n    padding-top: 90px; /* header height + empty space */\n    margin-top: -50px; /* header height to degrees padding’s space */\n&#125;</code>',u(e,$,l),u(e,C,l)},p:m,d(e){e&&f(t),e&&f(o),e&&f(a),e&&f(s),e&&f(n),e&&f(i),e&&f(r),e&&f(h),e&&f(d),e&&f(p),e&&f(b),e&&f(x),e&&f(w),e&&f(y),e&&f(v),e&&f(S),e&&f(T),e&&f($),e&&f(C)}}}function w(e){let t,o;const l=[y];let c={$$slots:{default:[x]},$$scope:{ctx:e}};for(let e=0;e<l.length;e+=1)c=a(c,l[e]);return t=new b({props:c}),{c(){s(t.$$.fragment)},m(e,a){n(t,e,a),o=!0},p(e,[o]){const a=0&o?i(l,[p(y)]):{};1&o&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){o||(r(t.$$.fragment,e),o=!0)},o(e){h(t.$$.fragment,e),o=!1},d(e){d(t,e)}}}const y={title:"How to leverage browser caching for images, CSS and JavaScript",pub:[4,"Oct"],published:"2016-10-04T03:35:53.000Z",modified:"2016-10-04T03:35:53.000Z",summary:"Using anchor links with a fixed header is a problem, as the body text may be hidden underneath the header. No JavaScript needed.",layout:"tutorial"};export default class extends e{constructor(e){super(),t(this,e,null,w,o,{})}}export{y as metadata};
//# sourceMappingURL=offsetting-anchor-links-with-fixed-header-9b459883.js.map
