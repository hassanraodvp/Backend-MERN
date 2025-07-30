import { useContext, useEffect , useState} from "react";
import { ShopContext } from "../context/ShopContext";
import { IoSearch } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { useLocation } from "react-router-dom";

const searchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(location.pathname.includes('collection') && showSearch) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }, [location])
  return showSearch && visible ? (
    <>
      <div className="bg-gray-200 text-center py-5 border-t border-b mt-20 md:mt-22">
        <div className="flex items-center justify-center">
          <div className="border w-[80%] md:w-[30%] 4xl:w-[50%] rounded-md flex items-center justify-between">
            <input
              className="px-3 py-2 border-none outline-none"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IoSearch className="text-2xl text-black cursor-pointer mr-1 md:mr-2" />
          </div>
        <MdCancel className="text-2xl mx-1 md:mx-5 cursor-pointer" onClick={() => setShowSearch(false)} />
        </div>
      </div>
    </>
  ) : null;
};

export default searchBar;
