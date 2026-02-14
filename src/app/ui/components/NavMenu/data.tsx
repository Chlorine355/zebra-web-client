import { IconCatalog } from '@ab/ui-kit';

import { routesPaths } from '@shared/model/data/routesLinks.ts';
import { LocalIconCatalog } from '@shared/ui/assets/icons';

export const navigationItems = [
  {
    key: routesPaths.projects,
    label: 'Кадастровая карта',
    icon: <IconCatalog.Archive />,
    activeIcon: <IconCatalog.FilledArchive />,
  },
  {
    key: routesPaths.estimations,
    label: 'Управление оценками',
    icon: <IconCatalog.ListChecks />,
    activeIcon: <LocalIconCatalog.FilledListChecks />,
  },
  {
    key: routesPaths.catalogs,
    label: 'Справочники',
    icon: <LocalIconCatalog.Catalog />,
    activeIcon: <LocalIconCatalog.FilledCatalog />,
  },
];
