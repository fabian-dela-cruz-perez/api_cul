import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ActividadesModule } from './actividades/actividades.module';
import { actividades } from './actividades/entities/actividade.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: '03160606',
   database: 'api_cul',
   entities: [User,actividades],
   synchronize: true,
  }), UserModule, ActividadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
