declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __ENV__: 'production' | 'development';

declare const __SUPABASE_URL__: string;
declare const __SUPABASE_KEY__: string;

declare const RootState: import('src/app/store').RootState;
declare const AppDispatch: import('src/app/store').AppDispatch;
