import Book from '../domain/Book';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Card.add should items++', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  expect(cart.items.length).toBe(1);
});

test('Card.delite should items--', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  cart.delite(1001)
  expect(cart.items.length).toBe(1);
});

test('Card.totalCost should sum items.price', () => {
  const cart = new Cart();
  let test = cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  let test2 = cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  expect(cart.totalCost()).toBe(4000);
});

test('Card.totalCost should sum items.price and subtract discount', () => {
  const cart = new Cart();
  let test = cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  let test2 = cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  expect(cart.discountTotalCost(10)).toBe(3600);
});



