import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { CorsMiddleware } from './cors.middleware';

@Module({
    imports: []
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CorsMiddleware).forRoutes('*');
        // consumer.apply(JWTMiddleware).forRoutes({path: '*', method: RequestMethod.ALL});
    }
}
