const data = {
    plugins: [
        {
            name: 'vit-singlefile-gzip',
            desc: 'This Vite build plugin allows you to inline all JavaScript and CSS resources directly into the final dist/index.html file. By doing this, your enter web app can be embedded and distributed as a single HTML file.',
            git: 'https://github.com/MillerRen/vite-singlefile-gzip',
            npm:'https://www.npmjs.com/package/vite-plugin-singlefile',
            section: 'Vanilla'

        },
        {
            name: '11st-Starter-Kit',
            desc: '11ty, powered by Vite with Tailwind CSS and Alpine.js.',
            git: 'https://github.com/stefanfrede/11st-starter-kit',
            npm:'https://www.npmjs.com/package/vite-plugin-singlefile',
            section: 'Vanilla'
        },
        {
            name: 'Vitesse ',
            desc: 'Opinionated starter template.',
            git: 'https://github.com/antfu/vitesse',
            npm:'',
            section: 'Vue 3'

        },

        { git: "https://github.com/antfu/vitesse", name: 'Vitesse', section: 'Vue 3', desc:'Opinionated starter template.'},
        { git: "https://github.com/web2033/vite-vue3-tailwind-starter", name: 'vite-vue3-tailwind-starter', section: 'Vue 3', desc:'Vue 3, Vue Router and Tailwind CSS.'},
        { git: "https://github.com/Uninen/vite-ts-tailwind-starter", name: 'vite-ts-tailwind-starter', section: 'Vue 3', desc:'TypeScript, Tailwind CSS, Cypress.io e2e tests + CI.'},
        { git: "https://github.com/MangoTsing/vite-electron-quick", name: 'vite-electron-quick', section: 'Vue 3', desc:'Starter template with Vue 3, TypeScript and Electron 11.'},
        { git: "https://github.com/cawa-93/vite-electron-builder/", name: 'vite-electron-builder', section: 'Vue 3', desc:'Electron apps using Vite for both back and front-end, with automatic releases.'},
        { git: "https://github.com/anncwb/vue-vben-admin", name: 'vue-vben-admin', section: 'Vue 3', desc:'Background management template based on Vue3, Ant-Design-Vue, TypeScript.'},
        { git: "https://github.com/ci010/electron-vue-next", name: 'electron-vue-next', section: 'Vue 3', desc:'Vue 3 and Electron with VS Code debug and GitHub release process out-of-box.'},
        { git: "https://github.com/cyytemplate/vite-electron-ts", name: 'vite-electron-ts', section: 'Vue 3', desc:'Electron 12, Vue 3 and TypeScript.'},
        { git: "https://github.com/xiaoxian521/vue-pure-admin", name: 'vue-pure-admin', section: 'Vue 3', desc:'Background management template based on Vue3, TypeScript, Tailwind CSS, element-plus.'},
        { git: "https://github.com/hocili/vite-electron-typescript-template/", name: 'vite-electron-typescript-template', section: 'Vue 3', desc:'Electron 12 TypeScript Template.'},
        { git: "https://github.com/pohunchn/vite-ts-quick", name: 'vite-ts-quick', section: 'Vue 3', desc:'Vue 3 + Vuex + Vue-router + TypeScript Quick Template.'},
        { git: "https://github.com/fast-crud/fast-crud", name: 'fast-crud', section: 'Vue 3', desc:'Options-oriented crud framework, developing crud as fast as lightning.'},
        { git: "https://github.com/logustra/vivu", name: 'vivu', section: 'Vue 3', desc:'Opinionated scalable vue boilerplate.'},
        { git: "https://github.com/yingpengsha/electron-vite-quick-start", name: 'electron-vite-quick-start', section: 'Vue 3', desc:'Full stack uses Vite to run Electron application, including main process.'},
        { git: "https://github.com/yooneskh/vite-neutralinojs-template", name: 'NeuVite', section: 'Vue 3', desc:'Desktop app template with neutralinojs', name: 'Neutralino.js', section: 'Vue 3'},
        { git: "https://github.com/dongnaebi/vue3-SSR-starter", name: 'vue3-SSR-starter', section: 'Vue 3', desc:'Vue3-SSR, prefetch and sync state to client with one line of code.'},
        { git: "https://github.com/umbrella22/electron-vite-template", name: 'electron-vite-template', section: 'Vue 3', desc:'Electron 13, Vue 3 and TypeScript. Make your desktop development easier.'},
        { git: "https://github.com/yooneskh/vite-tauri-template", name: 'vite-tauri-template', section: 'Vue 3', desc:'Tauri + Vite + Vue 3 + Vuetify 3 desktop app template.'},
        { git: "https://github.com/LZHD/vue-vite-h5", name: 'vue-vite-h5', section: 'Vue 3', desc:'Use Vue3, TypeScript and Vant to develop mobile applications.'},
        { git: "https://github.com/caoxiemeihao/electron-vue-vite", name: 'electron-vue-vite', section: 'Vue 3', desc:'Electron, Vue3, Vite integration.'},
        { git: "https://github.com/alvarosaburido/vitesome", name: 'Vitesome', section: 'Vue 3', desc:'Vue3 + TypeScript + WindiCSS + Vue Router 4, i18n and Iconify.'},
        { git: "https://github.com/antfu/vitesse-lite", name: 'vitesse-lite', section: 'Vue 3', desc:'Lightweight version of Vitesse.'},
        { git: "https://github.com/antfu/vitesse-webext", name: 'vitesse-webext', section: 'Vue 3', desc:'WebExtension Vite Starter Template.'},
        { git: "https://github.com/frandiox/vitesse-ssr-template", name: 'Vitesse SSR', section: 'Vue 3', desc:'Vitesse-based Server Side Rendering. Deploy to Vercel or any Node.js environment.'},
        { git: "https://github.com/frandiox/vitessedge-template", name: 'Vitesse Edge', section: 'Vue 3', desc:'Vitesse-based Edge Side Rendering, powered by Vitedge. Deploy to Cloudflare Workers.'},
        { git: "https://github.com/nabaonan/todos-action/tree/master/vue-vite-ts-setup", name: 'vite-ts-vue3-todo', section: 'Vue 3', desc:'Vue3 + TS + Vue-Router4 + Pinia2 template.'},
        { git: "https://github.com/Houtaroy/vue-component-template", name: 'vue-component-template', section: 'Vue 3', desc:'A template for creating own Vue3 TSX component.'},
        { git: "https://github.com/snowdreamtech/vite-vue3-tsx-starter", name: 'vite-vue3-tsx-starter', section: 'Vue 3', desc:'Vite, Vue 3, and Tsx.'},
        { git: "https://github.com/ArcherGu/fast-vite-electron", name: 'fast-vite-electron', section: 'Vue 3', desc:'Vue3 + Vite + Electron with esbuild.'},
        { git: "https://github.com/ArcherGu/fast-vite-nestjs-electron", name: 'fast-vite-nestjs-electron', section: 'Vue 3', desc:'Vue3 + Vite + Electron + Nestjs with esbuild.'},
        { git: "https://github.com/Innei/naive-ui-dashboard-template", name: 'naive-ui-dashboard-template', section: 'Vue 3', desc:'UI friendly, Vue 3 + TSX + TailwindCSS 2 JIT + PostCSS + Naive UI.'},
        { git: "https://github.com/zynth17/vitailse", name: 'vitailse', section: 'Vue 3', desc:'Like Vitesse but with Tailwind CSS.'},
        { git: "https://github.com/ctholho/vitespa", name: 'vitespa', section: 'Vue 3', desc:'Vitesse-based SPA without SSG.'},
        { git: "https://github.com/sushil-kamble/vue-tail-fire", name: 'vue-tail-fire', section: 'Vue 3', desc:'Vue 3 + Vite + Firebase 9 + Tailwind CSS.'},
        { git: "https://github.com/helixsoftco/vuelix", name: 'Vuelix', section: 'Vue 3', desc:'Vue 3 + Auth System + OpenAPI Client Generator + Routes Transitions + i18n + File System Routing + Layouts System + Universal Icons Framework.'},
        { git: "https://github.com/fyeeme/vite-quasar", name: 'vite-quasar-starter', section: 'Vue 3', desc:'Vite 2.x + Vue 3.x + quasar 2.x starter.'},
        { git: "https://github.com/parajs/vue3-mobile-template", name: 'vue3-mobile-template', section: 'Vue 3', desc:'Vite + Vue3 + TS + Vue-Router4 + Vuex4 + Vant + Vue-use + Vue-i18n Mobile Template.'},
        { git: "https://github.com/lecoueyl/vue3-template", name: 'vue3-template', section: 'Vue 3', desc:'Vite / Vue 3 / Tailwind CSS / vue-router / PNPM / ESlint Airbnb / Stylelint / GitHub pages actions / Netlify.'},
        { git: "https://github.com/byoungd/modern-vue-template", name: 'Modern Vue', section: 'Vue 3', desc:'Modern Vue stack 2022.'},
        { git: "https://github.com/caoxiemeihao/electron-vite-boilerplate", name: 'electron-vite-boilerplate', section: 'Vue 3', desc:'Support SerialPort, SQLite3 and node C/C++ addons.'},
        { git: "https://github.com/Edsonalencar/Vitalis-template", name: 'Vitalis', section: 'Vue 3', desc:'Vite / Vue 3 / Vue Router 4 / TypeScript / Tailwind CSS / ESlint / Prettier.'},
        { git:"https://github.com/lstoeferle/vite-vue2-windicss-starter", name: 'vite-vue2-windicss-starter', desc:'Vue 2, Vue Router, Composition API, VueUse, Windi CSS and TypeScript', section: 'Vue 2'},
        { git:"https://github.com/artskin/admin-base-tmpl", name: 'admin-base-tmpl', desc:'Basic admin template using Vue2, TypeScript, Element UI', section: 'Vue 2'},
        { git:"https://github.com/nabaonan/todos-action/tree/master/vue2-vite-ts", name: 'vite-ts-vue2-todo', desc:'Vue2 + ts + Vue-Router3 + Pinia1 + Composition API', section: 'Vue 2'},
        { git:"https://github.com/byoungd/vite-vue2-typescript", name: 'vite-vue2-typescript', desc:'Vue2 TypeScript starter template using composition-api', section: 'Vue 2'},
        { git:"https://github.com/selene-y/vite-vue2-mpa-template", name: 'vite-vue2-mpa-template', desc:'A multi-page application template using Vue2', section: 'Vue 2'},
        { git:"https://github.com/logue/vite-vue2-ts-starter", name: 'vite-vue2-ts-starter', desc:'Vue2 TypeScript startar template usng vue-property-decorator, vue-router, Vuex', section: 'Vue 2'},
        { git:"https://github.com/logue/vite-vue2-vuetify-ts-starter", name: 'vite-vue2-ts-vuetify-starter', desc:'It is the above vite-vue2-ts-starter with Vuetify and its optimized settings. Includes basic templates', section: 'Vue 2'},
        { git:"https://github.com/ryuhojin/vite-vue2-simple-starter", name: 'vite-vue2-simple-starter', desc:'Vue2 + Vue Router + Vuex + Axios Api + SASS With Sample Code', section: 'Vue 2'},
        { git: "https://github.com/lTimeless/vite-reactts-electron-starter", name: 'vite-reactts-electron-starter', desc: '- React, Tailwind CSS, TypeScript and Electron.', section: 'React'},
{ git: "https://github.com/jctaoo/vite-electron-esbuild-starter", name: 'vite-electron-esbuild-stater', desc: '- Starter template with React, TypeScript, Electron and esbuild.', section: 'React'},
{ git: "https://github.com/wtchnm/Vitamin", name: 'Vitamin', desc: '- React TypeScript, TailwindCSS, SPA + PWA, Cypress and CI.', section: 'React'},
{ git: "https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier", name: 'vite-reactts-eslint-prettier', desc: '- React, TypeScript, ESlint, Prettier, Pre-commit.', section: 'React'},
{ git: "https://github.com/asurraa/react-vite2-ts-antd", name: 'vite-reactts-antd-starter', desc: '- React, TypeScript, Antd.', section: 'React'},
{ git: "https://github.com/ychengcloud/react-vite-admin", name: 'react-vite-admin', desc: '- React, Recoil, React Query, React Hooks, TypeScript, Axios.', section: 'React'},
{ git: "https://github.com/SafdarJamal/vite-template-react", name: 'vite-template-react', desc: '- A Create React App-like template.', section: 'React'},
{ git: "https://github.com/jihchi/vitejs-template-react-rescript", name: 'vitejs-template-react-rescript', desc: '- React + ReScript.', section: 'React'},
{ git: "https://github.com/PrinceRajRoy/vite-react-rtkq", name: 'vite-react-rtkq', desc: '- A React + Redux Toolkit Query starter template with opt-in TypeScript.', section: 'React'},
{ git: "https://github.com/pohunchn/vite-react-quick", name: 'vite-react-quick', desc: '- Vite + React + React-router-dom + TypeScript Quick Template.', section: 'React'},
{ git: "https://github.com/0x219/vite-template-react-plus", name: 'vite-template-react-plus', desc: '- Vite + React + TypeScript + ESLint + Prettier.', section: 'React'},
{ git: "https://github.com/lmachens/vite-boilerplate", name: 'vite-boilerplate', desc: '- Full-Stack template with TypeScript, React, Storybook and Express.', section: 'React'},
{ git: "https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate", name: 'reactjs-vite-tailwindcss-boilerplate', desc: '- React, TypeScript, Jest, Testing Library, Tailwind CSS, ESLint and Prettier.', section: 'React'},
{ git: "https://github.com/bensmithett/tropical", name: 'Tropical', desc: '- React, Storybook, MDX, Fela, SSR prerendering, and islands architecture.', section: 'React'},
{ git: "https://github.com/fengxinming/vite-plugins/tree/main/packages/vite-plugin-react-refresh", name: 'vite-plugin-react-refresh', desc: '- Provide enhancements for @vitejs/plugin-react-refresh.', section: 'React'},
{ git: "https://github.com/The24thDS/vite-reactts17-chakra-jest-husky", name: 'vite-reactts17-chakra-jest-husky', desc: '- React 17, TypeScript, Chakra UI, Jest, ESLint, Prettier, Husky.', section: 'React'},
{ git: "https://github.com/fabien-ml/react-ts-vite-template", name: 'react-ts-vite-template', desc: '- React, TypeScript, Jest, Testing Library, Cypress, ESLint, Prettier, Husky.', section: 'React'},
{ git: "https://github.com/IsaiaPhiliph/vite-reactts-tailwind-rtk-eslint", name: 'vite-reactts-tailwind-rtk-eslint', desc: '- React, TypeScript, Tailwind CSS, Redux Toolkit, eslint.', section: 'React'},
{ git: "https://github.com/Innei/vite-react-tailwind-template", name: 'vite-react-tailwind-template', desc: '- React 17, TypeScript, Jest, ESLint, Prettier, Husky, Tailwind CSS, PostCSS, pnpm.', section: 'React'},
{ git: "https://github.com/Innei/vite-react-ssr", name: 'vite-react-ssr', desc: '- Server Side Rendering project template base on Vite + React + React-router-dom, Tailwind CSS 2 JIT inside.', section: 'React'},
{ git: "https://github.com/christopher-caldwell/vite-material-ui", name: 'vite-material-ui', desc: '- Material UI v5, TypeScript, Dark mode toggle.', section: 'React'},
{ git: "https://github.com/rizkimcitra/stravital", name: 'stravital', desc: '- React 17 + Vite + <code>react-router-dom</code> + <code>react-icons</code> + Prop-Types + Tailwind CSS with JIT.', section: 'React'},
{ git: "https://github.com/TeXmeijin/vite-react-ts-tailwind-firebase-starter", name: 'vite-react-ts-tailwind-firebase-starter', desc: '- Starter using Vite + React + TypeScript + Tailwind CSS (daisyUI) + Firebase (v9) + Prettier + ESLint.', section: 'React'},
{ git: "https://github.com/joeynguyen/vite-react-express-boilerplate", name: 'vite-react-express-boilerplate', desc: '- Full-Stack template with React and Express.', section: 'React'},
{ git: "https://github.com/joeynguyen/vite-react-express-docker-boilerplate", name: 'vite-react-express-docker-boilerplate', desc: '- Full-Stack template with Docker, React, and Express.', section: 'React'},
{ git: "https://github.com/uchihamalolan/vite-react-ts", name: 'vite-react-ts-starter', desc: '- React, TypeScript, Jest, ESLint, Prettier, TailwindCSS, Husky, Conventional Commits.', section: 'React'},
{ git: "https://github.com/KrishGarg/vite-react-tailwind-jit-template", name: 'vite-react-tailwind-jit', desc: '- React with TailwindCSS configured.', section: 'React'},
{ git: "https://github.com/jvidalv/vital", name: 'vital', desc: '- React, TypeScript, Tailwind (JIT), CSS-Modules, Jest, Atomic Design, Prettier, Husky, Commit-lint.', section: 'React'},
{ git: "https://github.com/caoxiemeihao/vite-react-electron", name: 'vite-react-electron', desc: '- Vite + React + Electron template.', section: 'React'},
{ git: "https://github.com/KrishGarg/vite-react-vendor-split-template", name: 'vite-react-vendor-split', desc: '- React + TypeScript + Vendor Chunk Splitting.', section: 'React'},
{ git: "https://github.com/xixixao/vite-react-stitches-radix", name: 'vite-react-stitches-radix', desc: '- React, ESLint, Stitches, Radix.', section: 'React'},
{ git: "https://github.com/pchmn/vite-react-ts-ghactions-template", name: 'vite-react-ts-ghactions-template', desc: '- React, TypeScript, Jest + React Testing Library, GitHub Actions + GitHub Pages, ESLint, Prettier, Husky, Commitlint.', section: 'React'},
{ git:"https://github.com/srmullen/sttv", name:'sttv', desc:'Svelte, Tailwind CSS, TypeScript.', section: 'Svelte'},
{ git:"https://github.com/jiangfengming/svelte-vite-ssr", name:'svelte-vite-ssr', desc:'Svelte with SSR support.', section: 'Svelte'},
{ git:"https://github.com/baileyherbert/svelte-vite-starter", name:'svelte-vite-starter', desc:'Next template for Svelte, TypeScript, SCSS, Babel, and HMR.', section: 'Svelte'},
{ git:"https://github.com/sveltejs/kit", name:'svelte kit', desc:'The fastest way to build Svelte apps.', section: 'Svelte'},

{ git: "https://github.com/vitejs/vite/tree/main/packages/plugin-legacy", name: '@vitejs/plugin-legacy', desc: 'Legacy browser support.', section: 'Integrations'},
{ git: "https://github.com/antfu/vite-plugin-pwa", name: 'vite-plugin-pwa', desc: 'Zero-config PWA.', section: 'Integrations'},
{ git: "https://github.com/windicss/vite-plugin-windicss", name: 'vite-plugin-windicss', desc: 'Windi CSS integration.', section: 'Integrations'},
{ git: "https://github.com/axe-me/vite-plugin-node", name: 'vite-plugin-node', desc: 'Integration with Node.js backend servers.', section: 'Integrations'},
{ git: "https://github.com/nshen/vite-plugin-cesium", name: 'vite-plugin-cesium', desc: 'Integration with Cesium library.', section: 'Integrations'},
{ git: "https://github.com/IndexXuan/vite-plugin-mpa", name: 'vite-plugin-mpa', desc: 'Out-of-box multi-page application (MPA) integration.', section: 'Integrations'},
{ git: "https://github.com/alloc/vite-react-jsx", name: 'vite-react-jsx', desc: 'React 17s automatic JSX runtime for your entire bundle.', section: 'Integrations'},
{ git: "https://github.com/evont/vite-plugin-spritesmith", name: 'vite-plugin-spritesmith', desc: 'Converts a set of images into a spritesheet and SASS/LESS/Stylus mixins.', section: 'Integrations'},
{ git: "https://github.com/falstack/vite-plugin-host", name: 'vite-plugin-host', desc: 'Allow you to use the custom domain for development.', section: 'Integrations'},
{ git: "https://github.com/wuxiuran/vite-plugin-eruda", name: 'vite-plugin-eruda', desc: 'Help you automatically open debugging tools in the development environment.', section: 'Integrations'},
{ git: "https://bitbucket.org/unimorphic/vite-plugin-linter", name: 'vite-plugin-linter', desc: 'Extensible linter framework that shows the linting output in the Vite output and the browser console, includes ESLint &amp; TypeScript ootb.', section: 'Integrations'},
{ git: "https://github.com/fi3ework/vite-plugin-checker", name: 'vite-plugin-checker', desc: 'Fast run checkers (TypeScript/VLS/vue-tsc, etc.) in worker threads with overlay and terminal hint.', section: 'Integrations'},
{ git: "https://github.com/ElMassimo/vite-plugin-stimulus-hmr", name: 'vite-plugin-stimulus-hmr', desc: 'Integration with Stimulus enabling HMR.', section: 'Integrations'},
{ git: "https://github.com/nabla/vite-plugin-eslint", name: '@nabla/vite-plugin-eslint', desc: 'Runs ESLint asynchronously in a worker to keep HMR fast.', section: 'Integrations'},
{ git: "https://github.com/oscartbeaumont/vite-plugin-relay", name: 'vite-plugin-relay', desc: 'Allows for the usage of Relay.', section: 'Integrations'},
{ git: "https://github.com/amrbashir/vite-plugin-tauri", name: 'vite-plugin-tauri', desc: 'Integrate Tauri in a Vite project to build cross-platform apps.', section: 'Integrations'},
{ git: "https://github.com/originjs/vite-plugin-federation", name: 'vite-plugin-federation', desc: 'Support Module Federation, Inspired by Webpack Module Federation feature.', section: 'Integrations'},
{ git: "https://github.com/nshen/vite-plugin-wasm-pack", name: 'vite-plugin-wasm-pack', desc: 'Integration with rust wasm-pack, the simple way.', section: 'Integrations'},
{ git: "https://github.com/mathe42/vite-plugin-comlink", name: 'vite-plugin-comlink', desc: 'Use WebWorkers with the power of Comlink to make them enjoyable.', section: 'Integrations'},
{ git: "https://github.com/activeguild/vite-plugin-sass-dts", name: 'vite-plugin-sass-dts', desc: 'This is a plugin that automatically creates a type file when using the CSS module type-safely.', section: 'Integrations'},
{ git: "https://github.com/time4dev/vite-esbuild-typescript-checker", name: 'vite-esbuild-typescript-checker', desc: 'Type checker (TypeScript, Vue SFC, etc.) based on the webpack 5 plugin.', section: 'Integrations'},
{ git: "https://github.com/alansikora/vite-plugin-simple-gql", name: 'vite-plugin-simple-gql', desc: 'Easily import .graphql and .gql files.', section: 'Integrations'},
{ git: "https://github.com/xiaweiss/vite-plugin-ali-oss", name: 'vite-plugin-ali-oss', desc: 'Upload the production files bundled in the project to Ali OSS, except for HTML.', section: 'Integrations'},
{ git: "https://github.com/Eazymov/vite-plugin-flow", name: 'vite-plugin-flow', desc: 'Flow type checker support.', section: 'Integrations'},
{ git: "https://github.com/feat-agency/vite-plugin-webfont-dl", name: 'vite-plugin-webfont-dl', desc: 'Downloads and injects webfonts (Google Fonts) to improve websites performance.', section: 'Integrations'},
{ git: "https://github.com/owlsdepartment/vite-plugin-babel", name: 'vite-plugin-babel', desc: 'Babel integration for both build and server to support f.ex. decorators or class fields in pure JS/JSX files.', section: 'Integrations'},
{ git: "https://github.com/caoxiemeihao/vite-plugins/tree/main/packages/resolve", name: 'vite-plugin-resolve', desc: 'Custom resolve module content.', section: 'Integrations'},
{ git: "https://github.com/caoxiemeihao/vite-plugins/tree/main/packages/electron-renderer", name: 'vite-plugin-electron-renderer', desc: 'Use Electron and Node.js API in Renderer-process.', section: 'Integrations'},
{ git: "https://github.com/caoxiemeihao/vite-plugins/tree/main/packages/fast-external", name: 'vite-plugin-fast-external', desc: 'Support browser, Node.js and Electron. Without lexical transform. Support custom external code.', section: 'Integrations'},


{ name:"https://github.com/antfu/unplugin-icons", name: 'unplugin-icons', desc:'Access thousands of icons as components.', section: 'Loaders'},
{ name:"https://github.com/anncwb/vite-plugin-svg-icons", name: 'vite-plugin-svg-icons', desc:'Fast creating SVG sprites.', section: 'Loaders'},
{ name:"https://github.com/lencx/vite-plugin-rsw", name: 'vite-plugin-rsw', desc:'Load rust-compiled (wasm-pack) WebAssembly packages.', section: 'Loaders'},
{ name:"https://github.com/JonasKruckenberg/vite-imagetools", name: 'vite-imagetools', desc:'Load and transform images using url query parameters.', section: 'Loaders'},
{ name:"https://github.com/stafyniaksacha/vite-plugin-radar", name: 'vite-plugin-radar', desc:'All in one analytics loader (with 7+ providers supported).', section: 'Loaders'},
{ name:"https://github.com/zheeeng/vite-plugin-virtual-plain-text", name: 'vite-plugin-virtual-plain-text', desc:'Loads file as plain text from the virtual assets workspace.', section: 'Loaders'},
{ name:"https://github.com/vdesjs/vite-plugin-monaco-editor", name: 'vite-plugin-monaco-editor', desc:'Monaco Editor integration.', section: 'Loaders'},
{ name:"https://github.com/williamyorkl/vite-plugin-svg-path-hot", name: 'vite-plugin-svg-path-hot', desc:'Dynamic Created Svg Folder And Hot update.', section: 'Loaders'},
{ name:"https://github.com/xingw-z/vite-plugin-raw", name: 'vite-plugin-raw', desc:'Transform any type file to string.', section: 'Loaders'},

{ git: "https://github.com/alloc/vite-plugin-compress", name: 'vite-plugin-compress', desc:'Compress your bundle + assets', section: 'Bundling'},
{ git: "https://github.com/anncwb/vite-plugin-imagemin", name: 'vite-plugin-imagemin', desc:'Compress image assets', section: 'Bundling'},
{ git: "https://github.com/ajuner/vite-plugin-importer", name: 'vite-plugin-importer', desc:'Integration for babel-plugin-import', section: 'Bundling'},
{ git: "https://github.com/chengpeiquan/vite-plugin-banner", name: 'vite-plugin-banner', desc:'Adds a banner to the top of each generated chunk', section: 'Bundling'},
{ git: "https://github.com/anncwb/vite-plugin-compression", name: 'vite-plugin-compression', desc:'Use gzip or brotli to compress resources', section: 'Bundling'},
{ git: "https://github.com/nystudio107/rollup-plugin-critical", name: 'rollup-plugin-critical', desc:'Generate critical CSS', section: 'Bundling'},
{ git: "https://github.com/qmhc/vite-plugin-dts", name: 'vite-plugin-dts', desc:'Generate declaration files from <code>.ts</code> or <code>.vue</code> source files for lib', section: 'Bundling'},
{ git: "https://github.com/SasanFarrokh/vite-plugin-multi-device", name: 'vite-plugin-multi-device', desc:'Outputs for different devices', section: 'Bundling'},
{ git: "https://github.com/meetqy/vite-plugin-vue-docs", name: 'vite-plugin-vue-docs', desc:'Analyze vue components to automatically generate previewable documents', section: 'Bundling'},
{ git: "https://github.com/XeryYue/vite-compression-plugin", name: 'vite-compression-plugin', desc:'Use Node.js stream compress file to gzip or mor', section: 'Bundling'},


{ git: "https://github.com/anncwb/vite-plugin-html", name: 'vite-plugin-html', desc: 'Plugin to minimize and use ejs template syntax in <code>index.html</code>.', section: 'Transformers'}
,{ git: "https://github.com/Shinigami92/vite-plugin-ts-nameof", name: 'vite-plugin-ts-nameof', desc: 'Ability to resolve nameof in TypeScript.', section: 'Transformers'}
,{ git: "https://github.com/alexlafroscia/vite-plugin-handlebars", name: 'vite-plugin-handlebars', desc: 'Process HTML files with Handlebars.', section: 'Transformers'}
,{ git: "https://github.com/ahwgs/vite-plugin-html-config", name: 'vite-plugin-html-config', desc: 'HTML tag configuration, such as script link style meta favicon and more.', section: 'Transformers'}
,{ git: "https://github.com/IndexXuan/vite-plugin-html-template", name: 'vite-plugin-html-template', desc: 'HTML template, like <code>html-webpack-plugin</code> for Webpack.', section: 'Transformers'}
,{ git: "https://github.com/WangXueZhi/vite-plugin-md2vue", name: 'vite-plugin-md2vue', desc: 'Transform markdown module to Vue component.', section: 'Transformers'}
,{ git: "https://github.com/Windson1806/vite-plugin-virtual-html", name: 'vite-plugin-virtual-html', desc: 'Make Vite MPA consistent with <code>@vue/cli</code>.', section: 'Transformers'}
,{ git: "https://github.com/chromeos/static-site-scaffold-modules/tree/main/modules/vite-plugin-posthtml", name: 'vite-plugin-posthtml', desc: 'Vite plugin to run PostHTML. Currently only runs on served/built HTML files <code>index.html</code>.', section: 'Transformers'}
,{ git: "https://github.com/zheeeng/vite-plugin-plain-text", name: 'vite-plugin-plain-text', desc: 'A Vite plugin transforms the rule-matched file as plain text.', section: 'Transformers'}
,{ git: "https://github.com/hex-ci/vite-plugin-virtual-html-template", name: 'vite-plugin-virtual-html-template', desc: 'HTML template, support flexible virtual URL.', section: 'Transformers'}
,{ git: "https://github.com/originjs/vite-plugins/tree/main/packages/vite-plugin-require-context", name: 'vite-plugin-require-context', desc: 'Supports <code>require.context</code>.', section: 'Transformers'}
,{ git: "https://github.com/alloc/vite-remark-html", name: 'vite-remark-html', desc: 'Transform <code>.md</code> imports into HTML strings.', section: 'Transformers'}
,{ git: "https://github.com/originjs/vite-plugins/tree/main/packages/vite-plugin-commonjs", name: 'vite-plugin-commonjs', desc: 'Support CommonJS to ESM.', section: 'Transformers'}
,{ git: "https://github.com/originjs/origin.js/tree/main/packages/vite-plugin-content", name: 'vite-plugin-content', desc: 'Convert <code>yaml</code>, <code>xml</code>, <code>ini</code>, <code>toml</code>, <code>csv</code>, <code>plist</code> and <code>properties</code> files to ES6 modules.', section: 'Transformers'}
,{ git: "https://github.com/wangzongming/vite-plugin-require", name: 'vite-plugin-require', desc: 'A Vite plugin that supports <code>require</code> by code transforming.', section: 'Transformers'}
,{ git: "https://github.com/wangzongming/vite-plugin-css-modules", name: 'vite-plugin-css-modules', desc: 'vite projects to support can use css modules, Not just <code>.module.xxx</code> .', section: 'Transformers'}
,{ git: "https://github.com/viteland/vite-plugin-macro", name: 'vite-plugin-macro', desc: 'Brings macro capabilities to Vite based projects.', section: 'Transformers'}
,{ git: "https://github.com/originjs/origin.js/tree/main/packages/vite-plugin-global-style", name: 'vite-plugin-global-style', desc: 'Deal with global styles for CSS, SASS, LESS and Stylus.', section: 'Transformers'}
,{ git: "https://github.com/zheeeng/vite-plugin-shared-modules", name: 'vite-plugin-shared-modules', desc: 'Share node_modules in monorepos.', section: 'Transformers'}
,{ git: "https://github.com/Jax-p/vite-plugin-nunjucks", name: 'vite-plugin-nunjucks', desc: 'Nunjucks templating engine.', section: 'Transformers'}
,{ git: "https://github.com/WarrenJones/vite-plugin-require-transform", name: 'vite-plugin-require-transform', desc: 'Converts the code from require syntax to import.', section: 'Transformers'}
,{ git: "https://github.com/fiadone/vite-plugin-twig", name: 'vite-plugin-twig', desc: 'Twig template engine support.', section: 'Transformers'}
,{ git: "https://github.com/pYr0x/vite-plugin-stache", name: 'vite-plugin-stache', desc: 'CanJS template engine. Transforms <code>stache</code> files and template strings.', section: 'Transformers'}
,


{ git: "https://github.com/aleclarson/vite-tsconfig-paths", name: 'vite-tsconfig-paths', desc: '- Support for TypeScripts path mapping', section: 'Helpers'},
{ git: "https://github.com/vue-toys/vite-plugin-faker", name: 'vite-plugin-faker', desc: '- Use TypeScript compiler to generate mock data', section: 'Helpers'},
{ git: "https://github.com/anncwb/vite-plugin-style-import", name: 'vite-plugin-style-import', desc: '- Introduces component library styles on demand', section: 'Helpers'},
{ git: "https://github.com/anncwb/vite-plugin-mock", name: 'vite-plugin-mock', desc: '- Mock plugin for development and production', section: 'Helpers'},
{ git: "https://github.com/minjs1cn/vite-plugin-mocker", name: 'vite-plugin-mocker', desc: '- Mocker server', section: 'Helpers'},
{ git: "https://github.com/anncwb/vite-plugin-theme", name: 'vite-plugin-theme', desc: '- Dynamically changing the theme color', section: 'Helpers'},
{ git: "https://github.com/subwaytime/vite-aliases", name: 'vite-aliases', desc: '- Alias auto-generation based on project structure', section: 'Helpers'},
{ git: "https://github.com/meowtec/vite-plugin-import", name: 'vite-plugin-import', desc: '- Modular import plugin', section: 'Helpers'},
{ git: "https://github.com/onebay/vite-plugin-imp", name: 'vite-plugin-imp', desc: '- Import library component styles on demand, make your app slimmer', section: 'Helpers'},
{ git: "https://github.com/view-launcher/view-launcher", name: 'view-launcher', desc: '- Inspect Vue components and jump to source code directly from browsers', section: 'Helpers'},
{ git: "https://github.com/liuweiGL/vite-plugin-mkcert", name: 'vite-plugin-mkcert', desc: '- Provide certificates https dev server', section: 'Helpers'},
{ git: "https://github.com/vadxq/vite-plugin-vconsole", name: 'vite-plugin-vconsole', desc: '- Help developers use vconsole to facilitate mobile development and debugging', section: 'Helpers'},
{ git: "https://github.com/MMF-FE/vite-plugin-cdn-import", name: 'vite-plugin-cdn-import', desc: '- Import packages from CDN', section: 'Helpers'},
{ git: "https://github.com/alloc/vite-dts", name: 'vite-dts', desc: '- Blazing fast plugin that generates <code>.d.ts</code> modules for libraries', section: 'Helpers'},
{ git: "https://github.com/crcong/vite-plugin-externals", name: 'vite-plugin-externals', desc: '- Exclude dependencies from the output bundles', section: 'Helpers'},
{ git: "https://github.com/WJCHumble/vite-plugin-async-catch", name: 'vite-plugin-async-catch', desc: '- Auto inject try catch code for async function', section: 'Helpers'},
{ git: "https://github.com/enjoycoding/vite-plugin-mock-server", name: 'vite-plugin-mock-server', desc: '- Mock server plugin, support using TS and JS to write Mock API and HMR', section: 'Helpers'},
{ git: "https://github.com/jy0529/vite-plugin-dynamic-publicpath", name: 'vite-plugin-dynamic-publicpath', desc: '- Use dynamic import handler to change runtime public base path, like Webpacks __webpack_public_path__', section: 'Helpers'},
{ git: "https://github.com/huibizhang/vitawind", name: 'vitawind', desc: '- Install and Setting Tailwind CSS automatically', section: 'Helpers'},
{ git: "https://github.com/antfu/vite-plugin-restart", name: 'vite-plugin-restart', desc: '- Restart the Vite server on file changes', section: 'Helpers'},
{ git: "https://github.com/ElMassimo/vite-plugin-full-reload", name: 'vite-plugin-full-reload', desc: '- Reload the browser on file changes', section: 'Helpers'},
{ git: "https://github.com/yingpengsha/vite-plugin-tips", name: 'vite-plugin-tips', desc: '- Provide better development server status tips on the page', section: 'Helpers'},
{ git: "https://github.com/fengxinming/vite-plugins/tree/main/packages/vite-plugin-external", name: 'vite-plugin-external', desc: '- Better to define externals', section: 'Helpers'},
{ git: "https://github.com/fanhaoyuan/vite-plugin-vars-modifier", name: 'vite-plugin-vars-modifier', desc: '- Convert variables from css preprocessor file', section: 'Helpers'},
{ git: "https://github.com/antfu/unplugin-auto-import", name: 'unplugin-auto-import', desc: '- On-demand API auto-importing', section: 'Helpers'},
{ git: "https://github.com/antfu/vite-plugin-inspect", name: 'vite-plugin-inspect', desc: '- Inspect the intermediate state of Vite plugins', section: 'Helpers'},
{ git: "https://github.com/williamyorkl/vite-plugin-proxy-middleware", name: 'vite-plugin-proxy-middleware', desc: '- A Plugin allows you to turn on <code>proxy</code> and <code>h2</code> options at the same time', section: 'Helpers'},
{ git: "https://github.com/GitOfZGT/vite-plugin-theme-preprocessor", name: '@zougt/vite-plugin-theme-preprocessor', desc: '- Easily implementing dynamic themes based on LESS or SASS', section: 'Helpers'},
{ git: "https://github.com/xiaoxian521/vite-plugin-remove-console", name: 'vite-plugin-remove-console', desc: '- A vite plugin that deletes console.log in the production environment', section: 'Helpers'},
{ git: "https://github.com/owlsdepartment/vite-plugin-dev-manifest", name: 'vite-plugin-dev-manifest', desc: '- Generates <code>manifest.dev.json</code> during dev server, for backend integration with any language/framework', section: 'Helpers'},
{ git: "https://github.com/jycouet/kitql/tree/main/packages/vite-plugin-watch-and-run", name: 'vite-plugin-watch-and-run', desc: '- Watch some files (glob) and trigger a command. To enable any tool to have a watch mode', section: 'Helpers'},
{ git: "https://github.com/chenxch/vite-plugin-dynamic-base", name: 'vite-plugin-dynamic-base', desc: '- Resolve all resource files dynamic publicPath', section: 'Helpers'},

    ],
    sections: [

        'Vanilla',
        'Vue 3',
        'Vue 2',
        'React',
        'Svelte',
        'Elm',
        'Mithril',
        'Others',

        'Integrations',
        'Loaders',
        'Bundling',
        'Transformers',
        'Helpers',
        'Testing'
    ]
}



export default data;