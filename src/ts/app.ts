import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Phone from './domain/Phone';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie('The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин', 1, "BlaBla", 209));
cart.add(new Phone(23, 'Samsung', 23500));
cart.add(new Phone(25, 'Iphone', 70000));
cart.add(new Phone(23, 'Samsung', 23500));
console.log(cart.items);

console.log(cart.countSum(cart.items));
console.log(cart.countDiscountedSum(cart.items, 10));
console.log(cart.delete(1));
console.log(cart.items);