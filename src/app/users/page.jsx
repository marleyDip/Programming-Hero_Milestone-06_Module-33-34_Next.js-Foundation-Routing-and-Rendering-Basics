import Link from "next/link";

export const metadata = {
  title: "Users | Sofian Hasan",
  description:
    "Explore a collection of users and their profile information in this Next.js learning project.",

  keywords: [
    "Users",
    "User Profiles",
    "Next.js",
    "React",
    "Next.js Learning Project",
  ],

  openGraph: {
    title: "Users | Next.js Learning Journal",
    description:
      "Explore user profiles and learn how Next.js handles pages, routing, and dynamic data.",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Users | Next.js Learning Journal",
    description: "Explore user profiles in this Next.js learning project.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const UsersPage = async () => {
  /* => fetch() returns a Response object.
  => .json() reads the response body and converts it into JavaScript data.

    API
     ↓
    fetch()
     ↓
    Response object → data
     ↓
    data.json()
     ↓
    JavaScript array → users
*/

  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  // console.log(users);

  return (
    <main className="min-h-screen bg-base-200">
      {/* Header */}
      <section className="border-b border-base-300 bg-base-100">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="badge badge-primary mb-3">
                JSONPlaceholder API
              </span>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Users
              </h1>

              <p className="mt-3 max-w-2xl text-base-content/60">
                Explore our user directory with contact information, locations,
                and company details.
              </p>
            </div>

            <div className="stats bg-base-200 shadow-sm">
              <div className="stat px-6 py-4">
                <div className="stat-title">Total Users</div>
                <div className="stat-value text-primary">{users.length}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Users */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => {
            const initials = user.name
              .split(" ")
              .map((name) => name[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <article
                key={user.id}
                className="group rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* User Header */}
                <div className="flex items-center gap-4">
                  <div className="avatar placeholder">
                    <div className="flex size-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-content">
                      {initials}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h2 className="truncate text-lg font-bold">{user.name}</h2>

                    <p className="text-sm text-base-content/50">
                      @{user.username}
                    </p>
                  </div>
                </div>

                <div className="divider my-5" />

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-primary">✉</span>

                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-base-content/40">
                        Email
                      </p>

                      <p className="truncate text-sm font-medium">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-primary">☎</span>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-base-content/40">
                        Phone
                      </p>

                      <p className="text-sm font-medium">{user.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-primary">⌖</span>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-base-content/40">
                        Location
                      </p>

                      <p className="text-sm font-medium">
                        {user.address.city}, {user.address.zipcode}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="divider my-5" />

                {/* Company */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-base-content/40">
                    Company
                  </p>

                  <p className="mt-1 font-semibold">{user.company.name}</p>

                  <p className="mt-1 text-sm italic text-base-content/50">
                    "{user.company.catchPhrase}"
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="badge badge-outline">User #{user.id}</span>

                  <Link
                    href={`/users/${user.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Profile
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default UsersPage;
