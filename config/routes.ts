export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录',access:'noLogin', path: '/user/login', component: './user/Login' }] },
      {component: './404' },
    ],
  },
  { path: '/welcome',access: 'canGuest', name: '首页', icon: 'smile', component: './Welcome' },
  { path: '/user/login',access: 'noLogin', name: '登录', icon: 'smile', component: './user/Login' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
      { component: './404' },
    ],
  },
  {
    name: '我的账户',
    icon: 'user',
    access: 'canUser',
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        name: '个人中心',
        icon: 'user',
        path: '/account/center',
        component: './account/center',
      },
    ],
  },
  { name: '预约管理', icon: 'table', access: "canUser",path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
