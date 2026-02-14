import { useMatch } from 'react-router';

export const useBasePath = () => {
  const match = useMatch(`/:basePath/*`);

  const { basePath } = match?.params ?? {};

  return basePath;
};
