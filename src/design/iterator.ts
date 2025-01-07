interface CustomIterator {
	hasNext(): boolean;
	next(): void;
}

class BooksInterator implements CustomIterator {
	private books: string[] = [];
	private index = 0;

	constructor(books: string[]) {
		this.books = books;
	}

	hasNext(): boolean {
		return this.index < this.books.length;
	}

	next(): void {
		if (this.hasNext()) {
			console.log(this.books[this.index++]);
		} else {
			console.log("No more books");
		}
	}
}

const books = ["Book 1", "Book 2", "Book 3", "Book 4"];

const customIterator = new BooksInterator(books);

while (customIterator.hasNext()) {
	customIterator.next();
}
