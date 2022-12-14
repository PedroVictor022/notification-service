import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationRepository } from './repositories/prisma-notifications-repostory';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
