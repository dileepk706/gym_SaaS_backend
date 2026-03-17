import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { logger } from '@/shared/logger.js';
import { requestLogger } from '@/shared/middleware/requestLogger.js';
import cors from 'cors';
import env from '@/config/environment.js';
import compression from 'compression';
import httpStatus from 'http-status';
import { errorHandler } from '@/shared/middleware/error_handler.js';
import { registerRoutes } from '@/routes/index.js';

class ExpressAppFactory {
  private readonly app: Express;
  private routesConfigured = false;

  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupHealthChecks();
    this.setupModuleRoutes();
  }

  private setupMiddleware(): void {
    this.app.use(requestLogger);
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(
      cors({
        origin: env.CORS_ORIGIN,
        credentials: true,
      }),
    );
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(compression());
    this.app.use(
      morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }),
    );
  }

  private setupHealthChecks(): void {
    this.app.get('/health', (req: Request, res: Response) => {
      res.status(httpStatus.OK).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
      });
    });

    this.app.get('/api/health', (req: Request, res: Response) => {
      res.status(httpStatus.OK).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        service: 'HAD Gateway Management API',
        origin: env.CORS_ORIGIN,
        mode: env.NODE_ENV || 'no mode',
      });
    });
  }

  /**
   * Register all module routes via the central route registry.
   * No need to manually add routes here — just update `src/routes/index.ts`.
   */
  private setupModuleRoutes(): void {
    this.app.use(registerRoutes());
  }

  private setupErrorHandling(): void {
    this.app.use(errorHandler);
  }

  public getApp = (): Express => this.app;

  public finalizeApp(): Express {
    if (!this.routesConfigured) {
      this.setupErrorHandling();
      this.routesConfigured = true;
    }
    return this.app;
  }
}

export default ExpressAppFactory;
