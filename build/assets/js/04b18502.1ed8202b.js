"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1942],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(4137));const l={title:"Prepare for Packaging",summary:"Quick guide on getting your system set up for packaging on Solus",date:new Date("2022-12-16T00:00:00.000Z")},o="Prepare for Packaging",r={unversionedId:"packaging/index",id:"packaging/index",title:"Prepare for Packaging",description:"Setting up Packager file",source:"@site/docs/packaging/index.md",sourceDirName:"packaging",slug:"/packaging/",permalink:"/docs/packaging/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packaging/index.md",tags:[],version:"current",frontMatter:{title:"Prepare for Packaging",summary:"Quick guide on getting your system set up for packaging on Solus",date:"2022-12-16T00:00:00.000Z"},sidebar:"packagingSidebar",next:{title:"Local Repository",permalink:"/docs/packaging/local-repository"}},s={},p=[{value:"Setting up Packager file",id:"setting-up-packager-file",level:2},{value:"Installing Development Tools",id:"installing-development-tools",level:2},{value:"Setting Up solbuild",id:"setting-up-solbuild",level:2},{value:"Initializing solbuild",id:"initializing-solbuild",level:3},{value:"Updating solbuild",id:"updating-solbuild",level:3},{value:"Setting up common",id:"setting-up-common",level:2},{value:"Building packages (Solus only)",id:"building-packages-solus-only",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prepare-for-packaging"},"Prepare for Packaging"),(0,i.kt)("h2",{id:"setting-up-packager-file"},"Setting up Packager file"),(0,i.kt)("p",null,"In order to utilise the build system, you must first set up a configuration file that has your packager details."),(0,i.kt)("p",null,"This file lives in the ",(0,i.kt)("inlineCode",{parentName:"p"},".config/solus")," folder of your home directory. You will need to create the ",(0,i.kt)("inlineCode",{parentName:"p"},".config/solus")," folder as well as the inner ",(0,i.kt)("inlineCode",{parentName:"p"},"packager")," file. Inside the packager file, you need two keys, ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Email"),". This is used when generating the machine\nfile so that the packager details are stored within the resulting binary package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[Packager]\nName=Your Name Here\nEmail=your.email@address\n")),(0,i.kt)("h2",{id:"installing-development-tools"},"Installing Development Tools"),(0,i.kt)("p",null,"We need to install a few things in order to get started with packaging.",(0,i.kt)("br",{parentName:"p"}),"\n","The main packages we need are provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"system.devel")," component."),(0,i.kt)("p",null,"Namely:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ypkg")," the program that actually builds packages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make")," used by our build tools for scripting")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it -c system.devel\n")),(0,i.kt)("p",null,"Additonally, we need a few more tools to carry out the packaging process:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git")," is used for version control of the solus sources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arcanist")," is required to submit patches for packages to the ",(0,i.kt)("a",{parentName:"li",href:"https://dev.getsol.us"},"Solus Dev Tracker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"solbuild")," is a lightweight container environment for building packages repeatably"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"solbuild-config-unstable")," sets up solbuild for working with the ",(0,i.kt)("inlineCode",{parentName:"li"},"unstable")," repository")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it git arcanist solbuild solbuild-config-unstable\n")),(0,i.kt)("h2",{id:"setting-up-solbuild"},"Setting Up solbuild"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"solbuild")," tool must first be initialized with a base image. All builds thereafter will use this as a base, and construct a temporary overlay root to save on time and disk space in builds."),(0,i.kt)("h3",{id:"initializing-solbuild"},"Initializing solbuild"),(0,i.kt)("p",null,"Next, you need to initialize solbuild via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo solbuild init\n")),(0,i.kt)("p",null,"This will take some time as it downloads and prepares the image."),(0,i.kt)("h3",{id:"updating-solbuild"},"Updating solbuild"),(0,i.kt)("p",null,"It is a good idea to keep the base image updated. It will help reduce build times by not having to repeatedly download updates to packages in the base image, and will strictly need to pull down the packages your build needs."),(0,i.kt)("p",null,"To update solbuild, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo solbuild update\n")),(0,i.kt)("h2",{id:"setting-up-common"},"Setting up common"),(0,i.kt)("p",null,"Next you need to set up ",(0,i.kt)("inlineCode",{parentName:"p"},"common"),", a set of make scripts that enables you to more easily manage, build, check, and publish packages."),(0,i.kt)("p",null,"You need to clone the common repository with git by doing ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://dev.getsol.us/source/common.git")," in the same directory you will have sub-folders for packages you are building."),(0,i.kt)("p",null,"Next you need to set up symlinks. Do this from the same directory you executed the ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ln -sv common/Makefile.common .\nln -sv common/Makefile.toplevel Makefile\nln -sv common/Makefile.iso .\n")),(0,i.kt)("p",null,"Next, inside the ",(0,i.kt)("strong",{parentName:"p"},"folder")," of the ",(0,i.kt)("strong",{parentName:"p"},"package")," you are building, run: ",(0,i.kt)("inlineCode",{parentName:"p"},'echo "include ../Makefile.common" > Makefile')),(0,i.kt)("p",null,"This will enable you to call ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," commands from inside the package folder."),(0,i.kt)("p",null,"Your folder should look something similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"| common/\n| your-package/\n| - Makefile\n| Makefile\n| Makefile.common\n| Makefile.iso\n")),(0,i.kt)("h2",{id:"building-packages-solus-only"},"Building packages (Solus only)"),(0,i.kt)("p",null,"After setting up common, you can now build the package. Note that build dependencies and such will be installed locally (in the chroot environment)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,i.kt)("p",null,"You will be prompted to enter your password by sudo so dependencies may be downloaded and the necessary eopkg files may be generated."),(0,i.kt)("p",null,"Once you\u2019ve achieved a successful build, the resulting ",(0,i.kt)("inlineCode",{parentName:"p"},".eopkg")," files will be moved to the current directory, along with the machine file, ",(0,i.kt)("inlineCode",{parentName:"p"},"pspec_*.xml")," (currently ",(0,i.kt)("inlineCode",{parentName:"p"},"pspec_x86_64.xml"),"). We recommending checking the contents of your\ngenerated eopkg file(s) to ensure everything is located in the appropriate locations. You can do this by using ",(0,i.kt)("inlineCode",{parentName:"p"},"lseopkg file_name.eopkg"),"."))}c.isMDXComponent=!0}}]);