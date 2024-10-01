const { generateManyBooks, generateOneBook } = require("../fakes/book.fake");
const BooksService = require("./books.service");

const mockGetAll = jest.fn();

jest.mock("../lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

describe("Tests for Books Service", () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe("tests for getBooks", () => {
    test("Should return a book's list", async () => {
      // AAA
      const fakeBooks = generateManyBooks(20);
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });
    test("Should return a book's name", async () => {
      // AAA
      const fakeBook = generateOneBook();
      // Arrange
      mockGetAll.mockResolvedValue(fakeBook);

      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.name).toEqual(fakeBook.name);
    });
  });
});
