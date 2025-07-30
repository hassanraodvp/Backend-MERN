import React, { useContext, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import Productitem from "../components/Productitem";
import ToTop from "../components/toTop";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [filter, setFilter] = React.useState();
  const [filterProducts, setFilterProducts] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [subCategory, setSubCategory] = React.useState([]);
  const [sort, setSort] = React.useState('relevent');
  const {search, showSearch} = useContext(ShopContext)
  // For Displaying All products
  useEffect(() => {
    setFilterProducts(products);
  }, []);
  // For Filtering Products by Category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => item !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  };
  // For Filtering Sub-Category
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  };
  // Add Filter Features
  const applyFilter = () => {
    let productCopy = products.slice();
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productCopy);
  };
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  const sortProduct = () => {
    let sortCopy = products.slice();
    switch (sort){
          case('low-high'):
          setFilterProducts(sortCopy.sort((a,b) => a.price - b.price))
          break;
          case('high-low'):
          setFilterProducts(sortCopy.sort((a,b) => b.price - a.price))
          break;
          default:
          applyFilter()  
          break;
        }
  }
  
  useEffect(() => {
    sortProduct();
  }, [sort])

  return (
    <section className="py-26">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          {/* Left Side  */}
          <div className="min-w-60">
            <h1
              onClick={() => setFilter(!filter)}
              className="text-2xl flex items-center gap-2 md:text-3xl xl:text-4xl font-bold"
            >
              Filter
              <IoMdArrowDropdown
                className={`${filter ? "" : "rotate-180 mt-2"} md:hidden`}
              />
            </h1>
            {/* Category Filter  */}
            <div
              className={`border rounded-md px-3 py-2 my-5 ${
                filter ? "" : "hidden"
              } md:block`}
            >
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Category</h2>
                <p className="flex items-center gap-2 cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    value={"Men"}
                    onChange={toggleCategory}
                  />{" "}
                  Men
                </p>
                <p className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={"Women"}
                    onChange={toggleCategory}
                  />{" "}
                  Women
                </p>
                <p className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={"Kids"}
                    onChange={toggleCategory}
                  />{" "}
                  Kids
                </p>
              </div>
            </div>
            {/* Sub Category  */}
            <div
              className={`border rounded-md px-3 py-2 mt-5 ${
                filter ? "" : "hidden"
              } md:block`}
            >
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Type</h2>
                <p className="flex items-center gap-2 cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    value={"Topwear"}
                    name="type"
                    onChange={toggleSubCategory}
                  />{" "}
                  Topwear
                </p>
                <p className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={"Bottomwear"}
                    onChange={toggleSubCategory}
                  />{" "}
                  Bottomwear
                </p>
                <p className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={"Winterwear"}
                    onChange={toggleSubCategory}
                  />{" "}
                  Winter Wear
                </p>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex-1">
            <div className="flex lg:flex-row flex-col justify-between items-start lg:items-center">
              <Title text1={"All"} text2={"Collection"} />
              <div className="flex items-center gap-2 pt-5 lg:pt-0">
                <select onChange={(e) => setSort(e.target.value)} className="border rounded-md px-3 py-1 ">
                  <option value="relevent">
                    Sort By: Relevent
                  </option>
                  <option value="high-low">Sort By: High to Low</option>
                  <option value="low-high">Sort By: Low to High</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-[20%] lg:pt-[10%]">
              {filterProducts.map((item, index) => {
                return (
                  <Productitem
                    key={index}
                    name={item.name}
                    id={item._id}
                    price={item.price}
                    image={item.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ToTop />
    </section>
  );
};

export default Collection;
