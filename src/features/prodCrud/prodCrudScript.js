export const getRelatedCategories = (data, departmentId) => {
  let categories = [];
  for (let dept of data.departments) {
    if (dept.id === departmentId) {
      categories.push(...dept.categories);
      break;
    }
  }
  return categories;
};

export const getAllProds = (data) => {
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
};

export const getAllDepsInfo = (data) => {
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
};
