/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    canUser: currentUser && (currentUser.access === 'admin' || currentUser.access==='user'),
    noLogin: (currentUser?.access === 'guest')||!currentUser,
  };
}
