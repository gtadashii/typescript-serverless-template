import { handle } from './hello';

describe("Test hello function", () => {
  jest.resetModules();

  it("Integração - Hello", async () => {

    const response = await handle();

    expect(response.statusCode).toEqual(200);
  })
})