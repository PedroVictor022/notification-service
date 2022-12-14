import { Injectable } from '@nestjs/common';
import { MailService } from './mail-service.service';

@Injectable()
export class PostmarkMailService implements MailService {
  sendEmail(): string {
    return `Postmark Mail`;
  }
}
