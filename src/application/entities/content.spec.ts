import { Content } from './content';

test('it should be able to create a notification content', () => {
  const content = new Content('You receive a new message');

  expect(content).toBeTruthy();
});

test('it should not be able to create a notification content with less than 5 characters', () => {
  expect(() => new Content('aaa')).toThrow();
});

test('it should not be able to create a notification content with less than 240 characters', () => {
  expect(() => new Content('s'.repeat(241))).toThrow();
});