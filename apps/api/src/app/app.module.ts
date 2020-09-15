import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity.js'],
      synchronize: process.env.DB_SYNC === 'true' ? true : false,
    }),
    // GraphQLModule.forRoot({
    //   typePaths: ['./**/*.gql'],
    //   playground: true,
    //   debug: true,
    // }),
    /* THE ABOVE CODE FIRST GRAPHQL APPROACH IS THE CONCERN HERE */
  ],
  providers: [],
})
export class AppModule {}
