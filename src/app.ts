import registerDependencies from '@/config/container.js';
import env from '@/config/environment.js';
import ExpressAppFactory from '@/shared/factories/express.app.factory.js';
import { logger } from '@/shared/logger.js';
import gymRouter from '@/module/gym/interfaces/gym.routes.js';

class App {
  private readonly expressAppFactory: ExpressAppFactory;
  private server: any;

  constructor() {
    registerDependencies();
    this.expressAppFactory = new ExpressAppFactory();
    this.setupModuleRoute();
  }

  public start(): void {
    this.expressAppFactory.finalizeApp();
    const app = this.expressAppFactory.getApp();

    this.server = app.listen(env.PORT, () => {
      logger.info(`🚀 Server running on port ${env.PORT} in ${env.NODE_ENV} mode`);
    });

    this.setupGracefulShutdown();
  }

  private setupModuleRoute() {
    this.expressAppFactory.addRoutes('/api/gym', gymRouter);
  }

  private setupGracefulShutdown(): void {
    const gracefulShutdown = (signal: string) => {
      logger.info(`${signal} received, shutting down gracefully`);

      this.server.close(() => {
        logger.info('✅ Process terminated gracefully');
        process.exit(0);
      });

      setTimeout(() => {
        logger.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
  }

  public getExpressApp() {
    return this.expressAppFactory.getApp();
  }
}

export default App;
