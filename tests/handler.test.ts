import { APIGatewayEvent, Context } from 'aws-lambda';
import * as handler from '../handler';

// eslint-disable-next-line no-undef
test('hello', async () => {
  const event = { body: 'Test Body' } as APIGatewayEvent;
  const context = {} as Context;

  const response = await handler.hello(event, context);

  // eslint-disable-next-line no-undef
  expect(response.statusCode).toEqual(200);
  // eslint-disable-next-line no-undef
  expect(typeof response.body).toBe('string');
});
