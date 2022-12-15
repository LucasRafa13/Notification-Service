import { PrismaService } from './server/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './server/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
