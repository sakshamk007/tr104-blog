import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const weeks = Array.from({ length: 2 }, (_, index) => {
    const weekNumber = index + 1;
    return { name: `Week ${weekNumber}`, path: `/week${weekNumber}` };
  });

  const location = useLocation();
  const currentWeekIndex = weeks.findIndex((week) => week.path === location.pathname);

  const previousWeek = currentWeekIndex > 0 ? weeks[currentWeekIndex - 1] : null;
  const nextWeek = currentWeekIndex < weeks.length - 1 ? weeks[currentWeekIndex + 1] : null;

  return (
    <nav className="flex justify-between items-center px-10 py-5 text-black">

      <div className="min-w-[130px]">
        {previousWeek && (
          <Link
            to={previousWeek.path}
            className="text-white px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-500 active:bg-gray-700"
          >
            &larr; Previous Week
          </Link>
        )}
      </div>

      <div>
        {currentWeekIndex >= 0 ? (
          <span className="font-bold text-4xl text-green-600">&lt; {weeks[currentWeekIndex].name} &gt;</span>
        ) : (
          <span className="text-gray-400">No Week Selected</span>
        )}
      </div>

      <div className="min-w-[130px]">
        {nextWeek && (
          <Link
            to={nextWeek.path}
            className="text-white px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-500 active:bg-gray-700"
          >
            Next Week &rarr;
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
