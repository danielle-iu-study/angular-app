
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 494, hash: 'fbd9b7b6882309f81000faf43deca41f27ac64019faa077580f66bd32d884444', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: 'cacf410505898207bc7cabfea7fa99a76cbb74429d8a6fa55da62ec18068aaa0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20834, hash: '616b68df7a72cc09caf07836b34b132cdc3bcc161eabdfc50873d51ba836df89', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
