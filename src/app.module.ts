import { Module } from '@nestjs/common';
import { FungosModule } from './modules/fungos/fungos.module';

@Module({
  imports: [FungosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

