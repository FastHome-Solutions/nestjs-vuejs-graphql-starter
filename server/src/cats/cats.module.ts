import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatSchema } from './cat.schema';
import { CatsResolvers } from './cats.resolvers';
import { CatsService } from './cats.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DEVELOPMENT_MONGODB_URL || 'mongodb://localhost/development', { connectionName: 'DevelopmentDbConnection' }),
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }], 'DevelopmentDbConnection'),
  ],
  providers: [CatsService, CatsResolvers],
})
export class CatsModule {}
