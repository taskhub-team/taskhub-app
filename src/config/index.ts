/**
 * Application configuration
 *
 * This module centralizes all configuration settings and provides environment-specific values.
 * Environment variables are loaded from .env files by Vite during build time.
 */

export interface AppConfig {
  environment: 'preview1' | 'preview2' | 'production';
  apiUrl: string;
  loggingLevel: 'debug' | 'info' | 'warn' | 'error';
  version: string;
}

// Load all environment variables with proper typing
const environment =
  (import.meta.env.VITE_ENVIRONMENT as AppConfig['environment']) || 'preview1';
const apiUrl =
  (import.meta.env.VITE_API_URL as string) || 'http://localhost:3000';
const loggingLevel =
  (import.meta.env.VITE_LOGGING_LEVEL as AppConfig['loggingLevel']) || 'info';
const version = (import.meta.env.PACKAGE_VERSION as string) || '0.0.0';

// Build the complete configuration object
const config: AppConfig = {
  environment,
  apiUrl,
  loggingLevel,
  version,
};

// Log configuration only in non-production environments
if (config.environment !== 'production') {
  console.log('App Configuration:', config);
}

export default config;
