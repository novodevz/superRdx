function getRelatedCategories(data, departmentId) {
  let categories = [];
  for (let dept of data.departments) {
    if (dept.id === departmentId) {
      categories.push(...dept.categories);
      break;
    }
  }
  return categories;
}

function getAllProds(data) {
  let allProducts = [];

  // Iterate over each department
  data.departments.forEach((department) => {
    // Iterate over products in each department
    department.products.forEach((product) => {
      // Push the product to the allProducts array
      allProducts.push({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        slug: product.slug,
        image: product.image,
      });
    });
  });

  return allProducts;
}

function getAllDepsInfo(data) {
  let allDepsInfo = [];

  // Iterate over each department
  data.departments.forEach((department) => {
    // Extract relevant information for each department
    let departmentInfo = {
      id: department.id,
      name: department.name,
      description: department.description,
      slug: department.slug,
    };

    // Push departmentInfo object to allDepsInfo array
    allDepsInfo.push(departmentInfo);
  });

  return allDepsInfo;
}

const data = {
  departments: [
    {
      id: 1,
      name: "Fresh",
      description: "Fresh department",
      slug: "fresh",
      categories: [
        {
          id: 7,
          name: "Fruits",
          description: "Fruits category",
          slug: "fruits",
        },
        {
          id: 8,
          name: "Vegetables",
          description: "Vegetables category",
          slug: "vegetables",
        },
        {
          id: 9,
          name: "Herbs",
          description: "Herbs category",
          slug: "herbs",
        },
      ],
      products: [
        {
          id: 13,
          name: "Apple",
          description: "Description of apple",
          price: 0.79,
          slug: "apple",
          image: "apple.jpg",
        },
        {
          id: 14,
          name: "Banana",
          description: "Description of banana",
          price: 0.59,
          slug: "banana",
          image: "banana.jpg",
        },
        {
          id: 15,
          name: "Orange",
          description: "Description of orange",
          price: 0.89,
          slug: "orange",
          image: "orange.jpg",
        },
        {
          id: 16,
          name: "Carrot",
          description: "Description of carrot",
          price: 0.99,
          slug: "carrot",
          image: "carrot.jpg",
        },
        {
          id: 17,
          name: "Broccoli",
          description: "Description of broccoli",
          price: 1.49,
          slug: "broccoli",
          image: "broccoli.jpg",
        },
        {
          id: 18,
          name: "Tomato",
          description: "Description of tomato",
          price: 0.79,
          slug: "tomato",
          image: "tomato.jpg",
        },
        {
          id: 19,
          name: "Basil",
          description: "Description of basil",
          price: 1.99,
          slug: "basil",
          image: "basil.jpg",
        },
        {
          id: 20,
          name: "Mint",
          description: "Description of mint",
          price: 1.49,
          slug: "mint",
          image: "mint.jpg",
        },
        {
          id: 21,
          name: "Rosemary",
          description: "Description of rosemary",
          price: 1.79,
          slug: "rosemary",
          image: "rosemary.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Bread",
      description: "Bread department",
      slug: "bread",
      categories: [
        {
          id: 4,
          name: "Whole Bread",
          description: "Whole bread category",
          slug: "whole-bread",
        },
        {
          id: 5,
          name: "White Bread",
          description: "White bread category",
          slug: "white-bread",
        },
        {
          id: 6,
          name: "Baguette",
          description: "Baguette category",
          slug: "baguette",
        },
      ],
      products: [
        {
          id: 7,
          name: "Whole Grain Bread",
          description: "Description of whole grain bread",
          price: 3.49,
          slug: "whole-grain-bread",
          image: "whole-grain-bread.jpg",
        },
        {
          id: 8,
          name: "Multigrain Bread",
          description: "Description of multigrain bread",
          price: 3.99,
          slug: "multigrain-bread",
          image: "multigrain-bread.jpg",
        },
        {
          id: 9,
          name: "White Sandwich Bread",
          description: "Description of white sandwich bread",
          price: 2.49,
          slug: "white-sandwich-bread",
          image: "white-sandwich-bread.jpg",
        },
        {
          id: 10,
          name: "White French Bread",
          description: "Description of white french bread",
          price: 3.29,
          slug: "white-french-bread",
          image: "white-french-bread.jpg",
        },
        {
          id: 11,
          name: "Classic Baguette",
          description: "Description of classic baguette",
          price: 2.99,
          slug: "classic-baguette",
          image: "classic-baguette.jpg",
        },
        {
          id: 12,
          name: "Garlic Baguette",
          description: "Description of garlic baguette",
          price: 3.49,
          slug: "garlic-baguette",
          image: "garlic-baguette.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Wine",
      description: "Wine department",
      slug: "wine",
      categories: [
        {
          id: 1,
          name: "Red",
          description: "Red wine category",
          slug: "red",
        },
        {
          id: 2,
          name: "White",
          description: "White wine category",
          slug: "white",
        },
        {
          id: 3,
          name: "Rose",
          description: "Rose wine category",
          slug: "rose",
        },
      ],
      products: [
        {
          id: 1,
          name: "pino 2017",
          description: "Description of pino 2017",
          price: 25.99,
          slug: "pino-2017",
          image: "pino-2017.jpg",
        },
        {
          id: 2,
          name: "pt 2016",
          description: "Description of pt 2016",
          price: 19.99,
          slug: "pt-2016",
          image: "pt-2016.jpg",
        },
        {
          id: 3,
          name: "sb 2023",
          description: "Description of sb 2023",
          price: 29.99,
          slug: "sb-2023",
          image: "sb-2023.jpg",
        },
        {
          id: 4,
          name: "riesling 2022",
          description: "Description of riesling 2022",
          price: 24.99,
          slug: "riesling-2022",
          image: "riesling-2022.jpg",
        },
        {
          id: 5,
          name: "pink 2022",
          description: "Description of pink 2022",
          price: 19.99,
          slug: "pink-2022",
          image: "pink-2022.jpg",
        },
        {
          id: 6,
          name: "pink 2023",
          description: "Description of pink 2023",
          price: 22.99,
          slug: "pink-2023",
          image: "pink-2023.jpg",
        },
      ],
    },
  ],
  categories: [
    {
      id: 1,
      name: "Red",
      description: "Red wine category",
      slug: "red",
      departments: [
        {
          id: 3,
          name: "Wine",
          description: "Wine department",
          slug: "wine",
        },
      ],
      products: [
        {
          id: 1,
          name: "pino 2017",
          description: "Description of pino 2017",
          price: 25.99,
          slug: "pino-2017",
          image: "pino-2017.jpg",
        },
        {
          id: 2,
          name: "pt 2016",
          description: "Description of pt 2016",
          price: 19.99,
          slug: "pt-2016",
          image: "pt-2016.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "White",
      description: "White wine category",
      slug: "white",
      departments: [
        {
          id: 3,
          name: "Wine",
          description: "Wine department",
          slug: "wine",
        },
      ],
      products: [
        {
          id: 3,
          name: "sb 2023",
          description: "Description of sb 2023",
          price: 29.99,
          slug: "sb-2023",
          image: "sb-2023.jpg",
        },
        {
          id: 4,
          name: "riesling 2022",
          description: "Description of riesling 2022",
          price: 24.99,
          slug: "riesling-2022",
          image: "riesling-2022.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Rose",
      description: "Rose wine category",
      slug: "rose",
      departments: [
        {
          id: 3,
          name: "Wine",
          description: "Wine department",
          slug: "wine",
        },
      ],
      products: [
        {
          id: 5,
          name: "pink 2022",
          description: "Description of pink 2022",
          price: 19.99,
          slug: "pink-2022",
          image: "pink-2022.jpg",
        },
        {
          id: 6,
          name: "pink 2023",
          description: "Description of pink 2023",
          price: 22.99,
          slug: "pink-2023",
          image: "pink-2023.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Whole Bread",
      description: "Whole bread category",
      slug: "whole-bread",
      departments: [
        {
          id: 2,
          name: "Bread",
          description: "Bread department",
          slug: "bread",
        },
      ],
      products: [
        {
          id: 7,
          name: "Whole Grain Bread",
          description: "Description of whole grain bread",
          price: 3.49,
          slug: "whole-grain-bread",
          image: "whole-grain-bread.jpg",
        },
        {
          id: 8,
          name: "Multigrain Bread",
          description: "Description of multigrain bread",
          price: 3.99,
          slug: "multigrain-bread",
          image: "multigrain-bread.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "White Bread",
      description: "White bread category",
      slug: "white-bread",
      departments: [
        {
          id: 2,
          name: "Bread",
          description: "Bread department",
          slug: "bread",
        },
      ],
      products: [
        {
          id: 9,
          name: "White Sandwich Bread",
          description: "Description of white sandwich bread",
          price: 2.49,
          slug: "white-sandwich-bread",
          image: "white-sandwich-bread.jpg",
        },
        {
          id: 10,
          name: "White French Bread",
          description: "Description of white french bread",
          price: 3.29,
          slug: "white-french-bread",
          image: "white-french-bread.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "Baguette",
      description: "Baguette category",
      slug: "baguette",
      departments: [
        {
          id: 2,
          name: "Bread",
          description: "Bread department",
          slug: "bread",
        },
      ],
      products: [
        {
          id: 11,
          name: "Classic Baguette",
          description: "Description of classic baguette",
          price: 2.99,
          slug: "classic-baguette",
          image: "classic-baguette.jpg",
        },
        {
          id: 12,
          name: "Garlic Baguette",
          description: "Description of garlic baguette",
          price: 3.49,
          slug: "garlic-baguette",
          image: "garlic-baguette.jpg",
        },
      ],
    },
    {
      id: 7,
      name: "Fruits",
      description: "Fruits category",
      slug: "fruits",
      departments: [
        {
          id: 1,
          name: "Fresh",
          description: "Fresh department",
          slug: "fresh",
        },
      ],
      products: [
        {
          id: 13,
          name: "Apple",
          description: "Description of apple",
          price: 0.79,
          slug: "apple",
          image: "apple.jpg",
        },
        {
          id: 14,
          name: "Banana",
          description: "Description of banana",
          price: 0.59,
          slug: "banana",
          image: "banana.jpg",
        },
        {
          id: 15,
          name: "Orange",
          description: "Description of orange",
          price: 0.89,
          slug: "orange",
          image: "orange.jpg",
        },
      ],
    },
    {
      id: 8,
      name: "Vegetables",
      description: "Vegetables category",
      slug: "vegetables",
      departments: [
        {
          id: 1,
          name: "Fresh",
          description: "Fresh department",
          slug: "fresh",
        },
      ],
      products: [
        {
          id: 16,
          name: "Carrot",
          description: "Description of carrot",
          price: 0.99,
          slug: "carrot",
          image: "carrot.jpg",
        },
        {
          id: 17,
          name: "Broccoli",
          description: "Description of broccoli",
          price: 1.49,
          slug: "broccoli",
          image: "broccoli.jpg",
        },
        {
          id: 18,
          name: "Tomato",
          description: "Description of tomato",
          price: 0.79,
          slug: "tomato",
          image: "tomato.jpg",
        },
      ],
    },
    {
      id: 9,
      name: "Herbs",
      description: "Herbs category",
      slug: "herbs",
      departments: [
        {
          id: 1,
          name: "Fresh",
          description: "Fresh department",
          slug: "fresh",
        },
      ],
      products: [
        {
          id: 19,
          name: "Basil",
          description: "Description of basil",
          price: 1.99,
          slug: "basil",
          image: "basil.jpg",
        },
        {
          id: 20,
          name: "Mint",
          description: "Description of mint",
          price: 1.49,
          slug: "mint",
          image: "mint.jpg",
        },
        {
          id: 21,
          name: "Rosemary",
          description: "Description of rosemary",
          price: 1.79,
          slug: "rosemary",
          image: "rosemary.jpg",
        },
      ],
    },
  ],
};

const d = getRelatedCategories(data, 1);
console.log(d);

// const allProducts = getAllProds(data);
// console.log(allProducts);

// const allDepartmentsInfo = getAllDepsInfo(data);
// console.log(allDepartmentsInfo);
