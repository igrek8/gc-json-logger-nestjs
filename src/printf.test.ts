import { printf } from './printf';

test('printf', () => {
  const write = jest.spyOn(process.stdout, 'write');
  write.mockImplementation(() => true);
  printf('Hello %s', 'user');
  expect(write).toHaveBeenCalledWith('Hello user');
});
