import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ProductsModule, TypeOrmModule.forRoot(config)],
})
export class AppModule {}
