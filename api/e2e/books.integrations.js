const request = require("supertest");
const { generateManyBooks } = require("../src/fakes/book.fake");
const mockGetAll = jest.fn();
const createApp = require("../src/app");

jest.mock("../src/lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

describe("Test for books", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });
  describe("test for [GET] /api/v1/books", () => {
    test("should return books list", () => {
      //Arrange
      const fakeBooks = generateManyBooks(5);
      mockGetAll.mockResolvedValue(fakeBooks);
      //Act
      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          //Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
