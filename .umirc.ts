import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  ssr: {},
  exportStatic: {
    extraRoutePaths: async () => {
      // const result = await request('https://your-api/news/list');
      //return Promise.resolve(['/news/1', 'news/2']);
    },
  },
  routes: [
    { path: '/testPage', component: '@/pages/testPage' },
    { path: '/', component: '@/pages/index' },
  ],
});
