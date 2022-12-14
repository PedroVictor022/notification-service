/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MailService } from './mail-service.service';

@Injectable()
export class SMTPMailService implements MailService {
  sendEmail(): string {
    return 'SMTP Mail!';
  }
}
