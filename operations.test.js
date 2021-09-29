const operations = require('./operations');

// STATUS TEST
test('SUCCESS STATUS', () => {
  const status = {message: 'HOLA MUNDO (SERVIDOR ACTIVO)', status: 200}
  expect(status).toBe(status);
});

test('ERROR STATUS', () => {
  const status = {message: 'HOLA MUNDO (SERVIDOR ACTIVO)', status: 200}
  expect({}).not.toBe(status);
});

// TEST FOR SUM OPERATION
test('SUCCESS SUM', () => {
  expect(operations.sumOperation(5, 7)).toBe(12);
});

test('ERROR SUM', () => {
  expect(operations.sumOperation("a", 7)).toBeNaN();
});