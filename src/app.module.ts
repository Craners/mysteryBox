import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config.module';
import { ProductModule } from './product/product.module';
import { GetProductModule } from './getProduct/getProduct.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { OrderModule } from './order/order.module';
import { CustomObjectModule } from './custom-object/custom-object.module';

@Module({
  imports: [
    ConfigModule,
    ProductModule,
    OrderModule,
    GetProductModule,
    AuthenticationModule,
    CustomObjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
