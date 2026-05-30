export const routesPaths = {
  root: '/',
  login: 'login',
  signup: 'signup',
  main: 'main',
  report: 'report',
  pageNotFound: '404',
} as const;

export const routesLinks = {
  root: '/',
  login: `/${routesPaths.login}`,
  signup: `/${routesPaths.signup}`,
  main: `/${routesPaths.main}`,
  report(id: number) {
    return `/${routesPaths.report}/${id}`;
  },
  pageNotFound: `/${routesPaths.pageNotFound}`,
};