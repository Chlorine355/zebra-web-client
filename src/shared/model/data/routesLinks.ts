export const routesPaths = {
  root: '/',
  report: 'report',
  pageNotFound: '404',
} as const;

export const routesLinks = {
  root: '/',
  report(id: number) {
    return `/${routesPaths.report}?$id=${id}`;
  },
  pageNotFound: `/${routesPaths.pageNotFound}`,
};