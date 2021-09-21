const roles = {
  ADMIN: "admin",
  CUSTOMER: "customer",
  SUPPLIER: "supplier",
};
export const data = {
  categories: [
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
  ],
  products: [
    {
      id: "1",
      name: "product fjdkfd",
      img: `assets/products/gallery.png`,
      category: "electronics",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 253,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "1", //supplier id from user
    },
    {
      id: "2",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
    {
      id: "3",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
    {
      id: "4",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
    {
      id: "5",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
    {
      id: "6",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
    {
      id: "7",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
    {
      id: "8",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
    {
      id: "9",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
    {
      id: "10",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
    {
      id: "11",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
    {
      id: "12",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
    {
      id: "13",
      name: "product lorem2",
      img: `assets/products/gallery.png`,
      category: "cloth",
      description: {
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
        features:
          "Features lorem fjdfd dfsd;fl dsfd fdkfkdjfk dshazdsjfh  aopiuedfd fasdfkdhsf dsjhfjkdshfh dsjf",
        specification:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tenetur voluptatem et commodi laborum id temporibus, cumque soluta ratione harum? Nemo dolorem nesciunt sequi asperiores pariatur placeat consequatur voluptatem corporis.",
      },
      price: 32,
      gallery: [`assets/products/gallery.png`, `assets/products/gallery.png`],
      supplier: "2", //supplier id from user
    },
  ],
  reviews: [
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
  ],
  users: [
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
  ],
};
