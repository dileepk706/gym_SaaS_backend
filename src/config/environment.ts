export type EnvType = {
  NODE_ENV?: string;
  LOG_LEVEL: string;
  PORT: number;
  isProduction: boolean;
  isDevelopment: boolean;
  isTest: boolean;
  CORS_ORIGIN: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
};

const isProduction = () => process.env.NODE_ENV === 'production';
const isDevelopment = () => process.env.NODE_ENV === 'development';

const env: EnvType = {
  NODE_ENV: process.env.NODE_ENV,
  LOG_LEVEL: isProduction() ? 'info' : 'debug',
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  isProduction: isProduction(),
  isDevelopment: isDevelopment(),
  isTest: false,
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  DB_NAME: process.env.DB_NAME || 'gym_saas',
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || 'postgres',
};

export default env;
