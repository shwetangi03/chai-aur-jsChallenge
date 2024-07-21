// task-1
let sym = Symbol("shwee");
const book1 = {
  title: "Pandit ji",
  author: "Pandit ji",
  year: "2024",
  [sym]: "shwetan",
};
console.log(obj);

// task-2
console.log(book1.title, obj.author);
console.log(book1["title"]); // this is also way to access
console.log(typeof sym);

// task-3
// when ever you are declaring object with object letrals then it will not be a singleton like Object.create()
// if we are declaring with constructor then it will be a singleton
// if you are declaring a symbol then you need to write inside []
const book = {
  title: "Pandit ji",
  author: "Pandit ji",
  year: "2024",
  getItem: function () {
    return `Title ${this.title} and author ${this.author}`;
  },
  updatedYear: function (year) {
    this.year = year;
    return this.year;
  },
};
console.log(book.getItem());

// task-4
console.log(book.updatedYear(2030));

// task-5
const obj = {
  liabrary: {
    name: "panditaine",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949,
      },
    ],
    getTitleName: function () {
      console.log(`${this.name}`);
    },
  },
};
// console.log(obj.liabrary);

// task-6
console.log(obj.liabrary.name);
obj.liabrary.books.forEach((item) => console.log(item.title));

// task-7
obj.liabrary.getTitleName();

// task-8
const object = {
  name: "shwee",
  jobRole: "frontend developer",
};
for (const key in object) {
  console.log(object[key]);
}

// task-9
console.log(Object.values(object));
console.log(Object.keys(object));
