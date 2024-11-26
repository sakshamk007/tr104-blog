import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const pages = Array.from({ length: 30 }, (_, index) => {
    const dayNumber = index + 1; // Days start from 1
    return { name: `Day ${dayNumber}`, path: `/page${dayNumber}` };
  });

  const location = useLocation(); // Get the current route
  const currentPageIndex = pages.findIndex((page) => page.path === location.pathname);

  const previousPage = currentPageIndex > 0 ? pages[currentPageIndex - 1] : null;
  const nextPage = currentPageIndex < pages.length - 1 ? pages[currentPageIndex + 1] : null;

  return (
    <nav className="flex justify-between items-center px-10 py-5 text-black">
      {/* Previous Day */}
      <div className="min-w-[130px]">
        {previousPage && (
          <Link
            to={previousPage.path}
            className="text-white px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-500 active:bg-gray-700"
          >
            &larr; Previous Day
          </Link>
        )}
      </div>

      {/* Current Day */}
      <div>
        {currentPageIndex >= 0 ? (
          <span className="font-bold text-4xl text-green-600">&lt; {pages[currentPageIndex].name} &gt;</span>
        ) : (
          <span className="text-gray-400">No Day Selected</span>
        )}
      </div>

      {/* Next Day */}
      <div className="min-w-[130px]">
        {nextPage && (
          <Link
            to={nextPage.path}
            className="text-white px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-500 active:bg-gray-700"
          >
            Next Day &rarr;
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
