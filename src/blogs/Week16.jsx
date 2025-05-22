const Week16 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 21st April — Implemented Authentication Pages (Signup &
            Login)
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Created EJS signup page
              </strong>
              <p className="text-gray-300">
                Designed a responsive signup form with fields for username,
                email, password, and validation messages.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Built EJS login page</strong>
              <p className="text-gray-300">
                Developed login form with email and password inputs, along with
                error display for invalid credentials.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Added client-side form validation
              </strong>
              <p className="text-gray-300">
                Used simple JavaScript to validate input length, email format,
                and password strength before form submission.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 22nd April — Built Issue Listing Pages with Filters
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Created EJS page for getAllIssue
              </strong>
              <p className="text-gray-300">
                Rendered tabular issue lists with columns like issueId, status,
                category, and createdAt.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Added tabs for open and closed issues
              </strong>
              <p className="text-gray-300">
                Implemented tab switching UI to show open and closed issue
                subsets fetched via separate backend routes.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Developed category filter dropdown
              </strong>
              <p className="text-gray-300">
                Allowed users to filter issues by category with dynamic options
                loaded from backend data.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 23rd April — Implemented Issue Actions and Pagination
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Created issue actions view by issueId
              </strong>
              <p className="text-gray-300">
                Displayed chronological open and closed actions with timestamps
                and notes for selected issue.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Built pagination controls
              </strong>
              <p className="text-gray-300">
                Added pagination UI with previous/next buttons and page numbers
                for all list views, updating displayed data accordingly.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Ensured responsive design
              </strong>
              <p className="text-gray-300">
                Adjusted table layouts and buttons to work on mobile and desktop
                screen sizes.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 24th April — Developed User Management Interface
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Created user list page
              </strong>
              <p className="text-gray-300">
                Rendered paginated user tables showing username, email, roles,
                and status.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Added user creation and editing forms
              </strong>
              <p className="text-gray-300">
                Built modals for adding new users and updating existing users,
                including role assignment.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Implemented activation/deactivation toggles
              </strong>
              <p className="text-gray-300">
                Provided switches to activate or deactivate user accounts
                directly from the user list.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 25th April — Added Excel Export and Date Range Issue Search
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Built export form for getAllIssuesExcel
              </strong>
              <p className="text-gray-300">
                Designed date range inputs and export button that triggers
                backend Excel file generation and download.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Created issue search by date range
              </strong>
              <p className="text-gray-300">
                Enabled filtering of issue lists to show only those created
                between selected start and end dates.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Added loading indicators
              </strong>
              <p className="text-gray-300">
                Showed spinner animations during data fetches and export
                processing to improve user experience.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week16;
