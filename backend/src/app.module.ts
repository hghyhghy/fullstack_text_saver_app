import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/posts.entity';
import { FileModule } from './file/file.module';

@Module({
  imports: [

    TypeOrmModule.forRoot({

      type:"mysql",
      host:"localhost",
      port: 3306,
      username:"root",
      password:"subham0902003@#",
      database:"testdb",
      entities:[Post],
      synchronize:true

    }),

    PostsModule,

    FileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
