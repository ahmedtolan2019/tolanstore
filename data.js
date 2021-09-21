const roles = {
  ADMIN: "admin",
  CUSTOMER: "customer",
  SUPPLIER: "supplier",
};

// module.exports = {
//   orders: [
//     {
//       id: "1",
//       user: "1", //user id
//       products: [1, 2, 3], //products id
//       isDelivered: false,
//       date: {
//         ordered: "20/7/2020",
//         delivered: "",
//       },
//       totalPrice: 26599,
//       mostCategory: 2, //category id
//     },
//   ],

//   categories: [
//     {
//       id: "1",
//       name: "Electronics",
//       products: [1, 2, 3, 4],
//       soldTimes: 50,
//     },
//     {
//       id: "2",
//       name: "Cloth",
//       products: [5, 6, 7, 8],
//       soldTimes: 60,
//     },
//     {
//       id: "3",
//       name: "kitchen",
//       products: [9, 10, 11, 12],
//       soldTimes: 70,
//     },
//     {
//       id: "4",
//       name: "Tools",
//       products: [13, 14, 15, 16],
//       soldTimes: 80,
//     },
//   ],

//   products: [
//     {
//       id: "1",
//       name: "product fjdkfd",
//       img: `assets/products/Rectangle -3@2x.png`,
//       category: "electronics",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 253,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "1", //supplier id from user
//     },
//     {
//       id: "2",
//       name: "product lorem2",
//       img: `assets/products/Rectangle -4@2x.png`,
//       category: "electronics",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "3",
//       name: "product lorem3",
//       img: `assets/products/Rectangle -5@2x.png`,
//       category: "electronics",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "4",
//       name: "product lorem4",
//       img: `assets/products/Rectangle -2@2x.png`,
//       category: "electronics",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "5",
//       name: "product lorem5",
//       img: `assets/products/Rectangle -1@2x.png`,
//       category: "electronics",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "6",
//       name: "product lorem6",
//       img: `assets/products/Rectangle -7@2x.png`,
//       category: "cloth",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "7",
//       name: "product lorem7",
//       img: `assets/products/Rectangle -6@2x.png`,
//       category: "cloth",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "8",
//       name: "product lorem8",
//       img: `assets/products/Rectangle -1@2x.png`,
//       category: "kitchen",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "9",
//       name: "product lorem9",
//       img: `assets/products/Rectangle -4@2x.png`,
//       category: "kitchen",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "10",
//       name: "product lorem10",
//       img: `assets/products/Rectangle -5@2x.png`,
//       category: "tools",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "11",
//       name: "product lorem12",
//       img: `assets/products/Rectangle -6@2x.png`,
//       category: "tools",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "13",
//       name: "product lorem13",
//       img: `assets/products/Rectangle -1@2x.png`,
//       category: "tools",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "14",
//       name: "product lorem14",
//       img: `assets/products/Rectangle -7@2x.png`,
//       category: "tools",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "15",
//       name: "product lorem15",
//       img: `assets/products/Rectangle -5@2x.png`,
//       category: "tools",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "16",
//       name: "product lorem16",
//       img: `assets/products/Rectangle -2@2x.png`,
//       category: "tools",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//     {
//       id: "17",
//       name: "product lorem17",
//       img: `assets/products/Rectangle -1@2x.png`,
//       category: "tools",
//       description: {
//         body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//         features:
//           "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
//         specification:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
//       },
//       price: 32,
//       gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
//       supplier: "2", //supplier id from user
//     },
//   ],

//   reviews: [
//     {
//       id: "1",
//       user: "1", //user who commented
//       comment: {
//         body: "this is an amazing product, i cannot agree more !",
//         date: "12/6/1999",
//       },
//       date: "20/10/2012",
//       stars: 4.5,
//     },
//     {
//       id: "2",
//       user: "2", //user who commented
//       comment: {
//         body: "this is an amazing product, i cannot agree more !",
//         date: "12/6/1969",
//       },
//       date: "20/10/2032",
//       stars: 3,
//     },
//     {
//       id: "3",
//       user: "3", //user who commented
//       comment: {
//         body: "",
//         date: "",
//       },
//       date: "20/6/2021",
//       stars: 3,
//     },
//   ],

//   users: [
//     {
//       id: "1",
//       name: "Ahmed Tolan",
//       img: `assets/users/user@2.png`,
//       contact: {
//         email: "ahmedTolan@gmail.com",
//         mobilePhones: ["0114852036", "0236958855"],
//         addresses: ["shemyatis-shohdaaa-menofia"],
//       },
//       pillingInfo: [
//         {
//           type: "visa",
//           card: "0253215698776589",
//           expiredDate: "20/26",
//           csv: "269",
//         },
//       ],
//       role: roles.ADMIN,
//       products: [1, 2],

//       lists: [
//         {
//           name: "Favourites",
//           products: [2, 3, 6, 8],
//         },
//       ],
//       filters: {
//         sortBy: "name",
//         priceRange: {
//           start: 10,
//           end: 1000,
//         },
//         numberOfItemsPerPage: 8,
//       },
//     },
//     {
//       id: "2",
//       name: "mohamed Tolan",
//       img: `assets/users/user@2.png`,
//       contact: {
//         email: "mohamedTolan@gmail.com",
//         mobilePhones: ["0114852036", "0236958855"],
//         addresses: ["shemyatis-shohdaaa-menofia"],
//       },
//       pillingInfo: [
//         {
//           type: "visa",
//           card: "0253215698776589",
//           expiredDate: "20/26",
//           csv: "269",
//         },
//       ],
//       role: roles.SUPPLIER,
//       products: [3, 9, 5, 8],

//       lists: [
//         {
//           name: "Favourites",
//           products: [1, 2, 13, 8],
//         },
//       ],
//       filters: {
//         sortBy: "name",
//         priceRange: {
//           start: 10,
//           end: 1000,
//         },
//         numberOfItemsPerPage: 8,
//       },
//     },
//     {
//       id: "3",
//       name: "customer Tolan",
//       img: `assets/users/user@2.png`,
//       contact: {
//         email: "customer Tolan@gmail.com",
//         mobilePhones: ["0114852036", "0236958855"],
//         addresses: ["shemyatis-shohdaaa-menofia"],
//       },
//       pillingInfo: [
//         {
//           type: "visa",
//           card: "0253215698776589",
//           expiredDate: "20/26",
//           csv: "269",
//         },
//       ],
//       role: roles.SUPPLIER,
//       products: [],

//       lists: [
//         {
//           name: "Favourites",
//           products: [1, 2, 13, 8],
//         },
//       ],
//       filters: {
//         sortBy: "name",
//         priceRange: {
//           start: 10,
//           end: 1000,
//         },
//         numberOfItemsPerPage: 8,
//       },
//     },
//   ],
// };

let faker = require("faker");
faker.seed(100);
let reviews = [
  {
    id: "1",
    user: "1", //user who commented
    comment: {
      body: "this is an amazing product, i cannot agree more !",
      date: "12/6/1999",
    },
    date: "20/10/2012",
    stars: 4.5,
  },
  {
    id: "2",
    user: "2", //user who commented
    comment: {
      body: "this is an amazing product, i cannot agree more !",
      date: "12/6/1969",
    },
    date: "20/10/2032",
    stars: 3,
  },
  {
    id: "3",
    user: "3", //user who commented
    comment: {
      body: "",
      date: "",
    },
    date: "20/6/2021",
    stars: 3,
  },
];
let users = [
  {
    id: "1",
    name: "Ahmed Tolan",
    img: `assets/users/user@2.png`,
    contact: {
      email: "ahmedTolan@gmail.com",
      mobilePhones: ["0114852036", "0236958855"],
      addresses: ["shemyatis-shohdaaa-menofia"],
    },
    pillingInfo: [
      {
        type: "visa",
        card: "0253215698776589",
        expiredDate: "20/26",
        csv: "269",
      },
    ],
    role: roles.ADMIN,
    products: [1, 2],

    lists: [
      {
        name: "Favourites",
        products: [2, 3, 6, 8],
      },
    ],
    filters: {
      sortBy: "name",
      priceRange: {
        start: 10,
        end: 1000,
      },
      numberOfItemsPerPage: 8,
    },
  },
  {
    id: "2",
    name: "mohamed Tolan",
    img: `assets/users/user@2.png`,
    contact: {
      email: "mohamedTolan@gmail.com",
      mobilePhones: ["0114852036", "0236958855"],
      addresses: ["shemyatis-shohdaaa-menofia"],
    },
    pillingInfo: [
      {
        type: "visa",
        card: "0253215698776589",
        expiredDate: "20/26",
        csv: "269",
      },
    ],
    role: roles.SUPPLIER,
    products: [3, 9, 5, 8],

    lists: [
      {
        name: "Favourites",
        products: [1, 2, 13, 8],
      },
    ],
    filters: {
      sortBy: "name",
      priceRange: {
        start: 10,
        end: 1000,
      },
      numberOfItemsPerPage: 8,
    },
  },
  {
    id: "3",
    name: "customer Tolan",
    img: `assets/users/user@2.png`,
    contact: {
      email: "customer Tolan@gmail.com",
      mobilePhones: ["0114852036", "0236958855"],
      addresses: ["shemyatis-shohdaaa-menofia"],
    },
    pillingInfo: [
      {
        type: "visa",
        card: "0253215698776589",
        expiredDate: "20/26",
        csv: "269",
      },
    ],
    role: roles.SUPPLIER,
    products: [],

    lists: [
      {
        name: "Favourites",
        products: [1, 2, 13, 8],
      },
    ],
    filters: {
      sortBy: "name",
      priceRange: {
        start: 10,
        end: 1000,
      },
      numberOfItemsPerPage: 8,
    },
  },
];
let categories = [
  {
    id: "1",
    name: "Electronics",
    products: [1, 2, 3, 4],
    soldTimes: 50,
  },
  {
    id: "2",
    name: "Cloth",
    products: [5, 6, 7, 8],
    soldTimes: 60,
  },
  {
    id: "3",
    name: "kitchen",
    products: [9, 10, 11, 12],
    soldTimes: 70,
  },
  {
    id: "4",
    name: "Tools",
    products: [13, 14, 15, 16],
    soldTimes: 80,
  },
];
let products = [];
var imgs = [1, 2, 3, 4, 5, 6, 7];
for (let i = 1; i <= 503; i++) {
  let category = faker.helpers.randomize(categories);
  let img = faker.helpers.randomize(imgs);

  products.push({
    id: i,
    img: `assets/products/Rectangle -${img}@2x.png`,
    name: faker.commerce.productName(),
    category: category.name,
    description: { body: `${faker.lorem.sentence(3)}` },
    price: Number(faker.commerce.price()),
  });
}
let orders = [];
for (let i = 1; i <= 103; i++) {
  var fname = faker.name.firstName();
  var sname = faker.name.lastName();
  var order = {
    id: i,
    name: `${fname} ${sname}`,
    email: faker.internet.email(fname, sname),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
    shipped: faker.datatype.boolean(),
    products: [],
  };
  var productCount = faker.datatype.number({ min: 1, max: 5 });
  var product_ids = [];
  while (product_ids.length < productCount) {
    var candidateId = faker.datatype.number({ min: 1, max: products.length });
    if (product_ids.indexOf(candidateId) === -1) {
      product_ids.push(candidateId);
    }
  }
  for (let j = 0; j < productCount; j++) {
    order.products.push({
      quantity: faker.datatype.number({ min: 1, max: 10 }),
      product_id: product_ids[j],
    });
  }
  orders.push(order);
}
module.exports = { categories, products, orders, users, reviews };

const callback = () => console.log("done!");
var fs = require("fs");
fs.writeFile("products.json", JSON.stringify(products), "utf8", callback);
