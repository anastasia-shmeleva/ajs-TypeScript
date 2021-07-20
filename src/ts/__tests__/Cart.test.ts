import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Phone from '../domain/Phone';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('counting sum', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie('The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин', 1, "BlaBla", 209));

  expect(cart.countSum(cart.items)).toBe(3109);
});

test('counting discounted sum', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie('The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин', 1, "BlaBla", 209));

  expect(cart.countDiscountedSum(cart.items, 10)).toBe(2798.1);
});

test('deleting item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.delete(1008)

  expect(cart.items).toEqual([{id: 1001, name: "War and Piece", author: "Leo Tolstoy", price: 2000, pages: 1225}]);
});

test('does not add same books, but adds same Phones', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Phone(23, 'Samsung', 23500, true));
  cart.add(new Phone(23, 'Samsung', 23500, true));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  

  expect(cart.items).toEqual([
    {id: 1001, name: "War and Piece", author: "Leo Tolstoy", price: 2000, pages: 1225},
    {author: "Linkin Park", id: 1008, name: "Meteora", price: 900},
    {countable: true, id: 23, name: "Samsung", price: 23500},
    {countable: true, id: 23, name: "Samsung", price: 23500}
  ]);
});