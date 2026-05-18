// eslint-disable-next-line no-commented-code/no-commented-code
/// <reference types="vite/client" />

type TEnvKeys =
    | 'VITE_BACKEND_URL'
    | 'VITE_YAMAP_KEY';

type ImportMetaEnv = Record<TEnvKeys, string>;

type ImportMeta = {
    readonly env: ImportMetaEnv;
};