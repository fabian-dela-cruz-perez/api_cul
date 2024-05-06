import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TaskStatusModule } from './task_status/task_status.module';
import { TaskCategoriesModule } from './task_categories/task_categories.module';
import { TaskModule } from './task/task.module';
import { Task } from './task/entities/task.entity';
import { TaskStatus } from './task_status/entities/task_status.entity';
import { TaskCategory } from './task_categories/entities/task_category.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: '03160606',
   database: 'api_cul',
   entities: [User,Task,TaskStatus,TaskCategory],
   synchronize: true,
  }), UserModule,  TaskStatusModule, TaskCategoriesModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
