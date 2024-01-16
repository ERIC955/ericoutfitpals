import{l as T}from"./main-778f2c50.js";import{c as o,a as p}from"./ajaxMember-e3ce54e0.js";const i={regexp:new RegExp(""),checkAccount(e,t){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),t===""?(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",!1)},checkSignUpIndexPwd(e,t){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),t===""?(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),!1)},checkMail(e,t){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),t===""?(e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",!1)},checkName(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z ]{2,}$"),t===""?(e.nextElementSibling.textContent="請輸入姓名",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，姓名不包含數字或特殊字元（如：!、@、#、$、%、^）",!1)},checkPwd(e,t){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),t===""?(e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，密碼第一個為大寫英文，不包含特殊字元（如：!、@、#、$、%、^），最少 8 位英數字",!1)},checkNickName(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z\\d ]{1,}$"),t===""?(e.nextElementSibling.textContent="請輸入暱稱",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，暱稱最少三個英數字，不包含特殊字元（如：!、@、#、$、%、^）",!1)},checkBirth(e,t){return this.regexp=new RegExp("^[\\d]{4}-[\\d]{2}-[\\d]{2}$"),t===""?(e.nextElementSibling.textContent="請輸入生日",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，請輸入西元年/月/日",!1)},checkTel(e,t){return this.regexp=new RegExp("^09[\\d]{8}$"),t===""?(e.nextElementSibling.textContent="請輸入手機號碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，格式為0912345678",!1)}};async function A(e,t,l,d,r,c,m,k,B,u,v,I,L,f,h,y,x){if(x.classList.add("was-validated"),t.addEventListener("keyup",s=>{i.checkName(s.target,s.target.value)}),t.addEventListener("paste",s=>{i.checkName(s.target,s.target.value)}),l.addEventListener("keyup",s=>{i.checkPwd(s.target,s.target.value)}),l.addEventListener("paste",s=>{i.checkPwd(s.target,s.target.value)}),d.addEventListener("keyup",s=>{i.checkNickName(s.target,s.target.value)}),d.addEventListener("paste",s=>{i.checkNickName(s.target,s.target.value)}),r.addEventListener("keyup",s=>{i.checkBirth(s.target,s.target.value)}),r.addEventListener("paste",s=>{i.checkBirth(s.target,s.target.value)}),c.addEventListener("keyup",s=>{i.checkMail(s.target,s.target.value)}),c.addEventListener("paste",s=>{i.checkMail(s.target,s.target.value)}),m.addEventListener("keyup",s=>{i.checkTel(s.target,s.target.value)}),m.addEventListener("paste",s=>{i.checkTel(s.target,s.target.value)}),i.checkName(t,t.value)&&i.checkPwd(l,l.value)&&i.checkNickName(d,d.value)&&i.checkBirth(r,r.value)&&i.checkTel(m,m.value)&&x.checkValidity()){let s={};s.image=e.getAttribute("src"),s.name=t.value,s.password=l.value,s["nick name"]=d.value,s.birthday=r.value,s.tel=m.value,s.email=c.value,s.height=u.value?u.value:"",s.weight=v.value?v.value:"",s.PopArea=I.value,s["PopArea selectedIndex"]=I.selectedIndex,s.style=L.value,s["style selectedIndex"]=L.selectedIndex,s["outfit price"]=f.value,s["outfit price selectedIndex"]=f.selectedIndex,s["love store"]=h.value?h.value:"",s.introduce=y.value?y.value:"",k.checked===!0?s.sex="Male":s.sex="Female";const q=Number(o("outfitpalsId")),$=o("outfitpalsToken");await p.patchUsers(q,$,s),location.href=`${T}member.html`,signUpPhoto.src=e.getAttribute("src"),t.value="",l.value="",d.value="",r.value="",m.value="",c.value="",u.value="",v.value="",I.selectedIndex=0,L.selectedIndex=0,f.selectedIndex=0,h.value="",y.value=""}else console.log("all false")}const P=document.querySelector(".member-index"),g=document.querySelector(".memberIndexForm");document.querySelector(".member-signUpData");const M=document.querySelector(".memberSignUpForm"),w=document.querySelector(".member-signInProfile");document.querySelector(".memberSignInProfileForm");document.querySelector(".member-signInData");const N=document.querySelector(".memberSignInForm"),C=document.querySelector(".signInBtn"),R=document.querySelector(".signUpBtn"),b=document.querySelector(".gmailSignIn"),S=document.querySelector(".gmailSignUp"),a=document.getElementById("account"),n=document.getElementById("pwd"),F=document.getElementById("signUpImg");let E=document.querySelector(".signUpPhoto");const D=document.getElementById("signUpPwd"),j=document.getElementById("signUpMail"),H=document.getElementById("signUpName"),O=document.getElementById("signUpNickName"),W=document.getElementById("signUpBirth"),Z=document.getElementById("signUpTel"),V=document.getElementById("signUpMale"),z=document.getElementById("signUpFemale"),_=document.getElementById("signUpHeight"),G=document.getElementById("signUpWeight"),J=document.getElementById("signUpPopArea"),K=document.getElementById("signUpStyle"),Q=document.getElementById("signUpOutfitPrice"),X=document.getElementById("signUpLoveStore"),Y=document.getElementById("signUpIntroduce"),U=document.querySelector(".memberIndexSubmit"),ee=document.querySelector(".memberIndexCancel"),te=document.querySelector(".memberSignUpSubmit");(o("outfitpalsThirdParty")==="false"||o("outfitpalsThirdParty")==="google"||o("outfitpalsThirdParty")===void 0)&&o("outfitpalsToken")&&o("outfitpalsId")&&(P.classList.add("opacity-0"),a.value="",n.value="",p.renderMemberSignInProfileForm(),P.classList.add("d-none"),w.classList.remove("d-none"),w.classList.remove("opacity-0"));C.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(t=>{t.classList.remove("active")}),a.value="",n.value="",U.textContent="登入",g.classList.remove("was-validated"),a.classList.remove("is-invalid"),a.classList.remove("is-valid-customer"),a.classList.remove("is-invalid-customer"),a.setAttribute("style",""),n.classList.remove("is-invalid"),n.classList.remove("is-valid-customer"),n.classList.remove("is-invalid-customer"),n.setAttribute("style",""),e.target.classList.add("active"),S.classList.add("opacity-0"),g.classList.add("opacity-0"),setTimeout(()=>{S.classList.add("d-none"),b.classList.remove("d-none"),setTimeout(()=>{b.classList.remove("opacity-0"),g.classList.remove("opacity-0")},0)},400)});R.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(t=>{t.classList.remove("active")}),a.value="",n.value="",U.textContent="註冊",g.classList.remove("was-validated"),a.classList.remove("is-invalid"),a.setAttribute("style",""),n.classList.remove("is-invalid"),n.setAttribute("style",""),e.target.classList.add("active"),b.classList.add("opacity-0"),g.classList.add("opacity-0"),setTimeout(()=>{b.classList.add("d-none"),S.classList.remove("d-none"),setTimeout(()=>{S.classList.remove("opacity-0"),g.classList.remove("opacity-0")},0)},400)});U.addEventListener("click",e=>{if(e.preventDefault(),e.stopPropagation(),g.classList.add("was-validated"),i.checkAccount(a,a.value),i.checkSignUpIndexPwd(n,n.value),a.addEventListener("keyup",t=>{i.checkAccount(t.target,t.target.value)}),a.addEventListener("paste",t=>{i.checkAccount(t.target,t.target.value)}),n.addEventListener("keyup",t=>{i.checkSignUpIndexPwd(t.target,t.target.value)}),n.addEventListener("paste",t=>{i.checkSignUpIndexPwd(t.target,t.target.value)}),i.checkAccount(a,a.value)&&i.checkSignUpIndexPwd(n,n.value)){let t={};t.email=a.value,t.password=n.value,t["third party"]="false",C.className.includes("active")?p.signIn(t):p.register(t)}});ee.addEventListener("click",e=>{a.value="",n.value=""});F.addEventListener("change",e=>{let t=new FileReader;t.addEventListener("load",l=>{E.setAttribute("src",l.target.result)}),t.readAsDataURL(e.target.files[0])});function se(e){console.log(e);let t=new Image,l=e.match(/\.jpg/)?"image/jpeg":"image/png";return new Promise((d,r)=>{t.onload=function(){let c=document.createElement("canvas");c.width=this.naturalWidth,c.height=this.naturalHeight,c.getContext("2d").drawImage(this,0,0),d(c.toDataURL(l,1))},t.onerror=function(){r("Error: Image load failed")},t.src=e})}te.addEventListener("click",async e=>{e.preventDefault(),e.stopPropagation(),o("outfitpalsThirdParty")==="false"&&await se(E.getAttribute("src")).then(t=>{E.src=t}).catch(t=>{console.log(t)}),A(E,H,D,O,W,j,Z,V,z,_,G,J,K,Q,X,Y,M)});N.addEventListener("click",e=>{document.getElementById("signInImg");const t=document.querySelector(".signInPhoto"),l=document.getElementById("signInPwd"),d=document.getElementById("signInMail"),r=document.getElementById("signInName"),c=document.getElementById("signInNickName"),m=document.getElementById("signInBirth"),k=document.getElementById("signInTel"),B=document.getElementById("signInMale"),u=document.getElementById("signInFemale"),v=document.getElementById("signInHeight"),I=document.getElementById("signInWeight"),L=document.getElementById("signInPopArea"),f=document.getElementById("signInStyle"),h=document.getElementById("signInOutfitPrice"),y=document.getElementById("signInLoveStore"),x=document.getElementById("signInIntroduce");e.target.className.includes("memberSignInReviseSubmit")?(e.preventDefault(),e.stopPropagation(),A(t,r,l,c,m,d,k,B,u,v,I,L,f,h,y,x,N)):e.target.className.includes("memberSignInReviseCancel")&&(location.href=`${T}member.html`)},!1);Number(o("outfitpalsId"));Number(o("outfitpalsId"));
