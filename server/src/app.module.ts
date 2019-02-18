import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { CatsModule } from './cats/cats.module';
import { CorsMiddleware } from './cors.middleware';

@Module({
    imports: [
        CatsModule,
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            installSubscriptionHandlers: true,
            definitions: {
                path: join(process.cwd(), 'src/graphql.schema.ts'),
                outputAs: 'class',
            },
        }),
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CorsMiddleware).forRoutes('*');
        // consumer.apply(JWTMiddleware).forRoutes({path: '*', method: RequestMethod.ALL});
    }
}
