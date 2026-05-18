export const routesPaths = {
  root: '/',
  login: 'login',
  main: 'main',
  report: 'report',
  pageNotFound: '404',
} as const;

export const routesLinks = {
  root: '/',
  login: `/${routesPaths.login}`,
  main: `/${routesPaths.main}`,
  report(id: number) {
    return `/${routesPaths.report}?$id=${id}`;
  },
  pageNotFound: `/${routesPaths.pageNotFound}`,
};