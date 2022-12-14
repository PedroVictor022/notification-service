import { Content } from './content';

describe('Notification content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('You receive a new message');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('it should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('s'.repeat(241))).toThrow();
  });
});
