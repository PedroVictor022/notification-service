import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notication';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipentNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      new Notification({
        category: 'social',
        content: new Content('New solicitacion frindly'),
        recipientId: 'recipient-1',
      }),
    );
    await notificationRepository.create(
      new Notification({
        category: 'social',
        content: new Content('New solicitacion frindly'),
        recipientId: 'recipient-1',
      }),
    );
    await notificationRepository.create(
      new Notification({
        category: 'social',
        content: new Content('New solicitacion frindly'),
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRecipentNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
