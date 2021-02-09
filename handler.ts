// eslint-disable-next-line import/no-unresolved
import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

// eslint-disable-next-line import/prefer-default-export
export async function hello(
  event: APIGatewayEvent,
  context: Context,
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v2.0! ${(await message({ time: 1, copy: 'Your function executed successfully!' }))}`,
      event,
      context,
    }),
  };
}

const message = ({ time, ...rest }) => new Promise((resolve) => setTimeout(() => {
  resolve(`${rest.copy} (with a delay)`);
}, time * 1000));
