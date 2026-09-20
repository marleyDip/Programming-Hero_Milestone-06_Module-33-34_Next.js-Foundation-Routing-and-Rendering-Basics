import Link from "next/link";

// const UserDetailPage = async ({
//   params,
// }: UserDetailPageProps) => {

export async function generateMetadata({ params }) {
  const { userId } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!response.ok) {
    return {
      title: "User Not Found",
      description: "The requested user profile could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const user = await response.json();

  return {
    title: `${user.name} | Users`,
    description: `View the profile and contact information of ${user.name} (@${user.username}).`,

    authors: [
      {
        name: user.name,
      },
    ],

    openGraph: {
      title: `${user.name} | Users`,
      description: `View the profile and contact information of ${user.name}.`,
      type: "profile",
    },

    twitter: {
      card: "summary",
      title: `${user.name} | Users`,
      description: `View the profile of ${user.name}.`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

const UserDetailPage = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  // const user: User = await res.json();
  const user = await res.json();

  const initials = user.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen bg-base-200">
      {/* Hero */}
      <section className="border-b border-base-300 bg-base-100">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <Link href="/users" className="btn btn-ghost btn-sm mb-8 gap-2">
            ← Back to Users
          </Link>

          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            {/* Avatar */}
            <div className="avatar placeholder">
              <div className="grid place-content-center size-24 rounded-full bg-primary text-3xl font-bold text-primary-content shadow-lg">
                {initials}
              </div>
            </div>

            {/* User Info */}
            <div>
              <div className="mb-2 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <span className="badge badge-primary">User #{user.id}</span>

                <span className="badge badge-outline">Active User</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {user.name}
              </h1>

              <p className="mt-1 text-base-content/60">@{user.username}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="card border border-base-300 bg-base-100 shadow-sm lg:col-span-2">
            <div className="card-body">
              <h2 className="card-title text-xl">Contact Information</h2>

              <p className="text-sm text-base-content/50">
                Personal contact details for {user.name}.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {/* Email */}
                <div className="rounded-xl border border-base-300 bg-base-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                    Email
                  </p>

                  <p className="mt-2 break-all font-medium">{user.email}</p>
                </div>

                {/* Phone */}
                <div className="rounded-xl border border-base-300 bg-base-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                    Phone
                  </p>

                  <p className="mt-2 font-medium">{user.phone}</p>
                </div>

                {/* Website */}
                <div className="rounded-xl border border-base-300 bg-base-200 p-4 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                    Website
                  </p>

                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block font-medium text-primary hover:underline"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-xl">Location</h2>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                    Address
                  </p>

                  <p className="mt-1 font-medium">
                    {user.address.suite}
                    <br />
                    {user.address.street}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                    City
                  </p>

                  <p className="mt-1 font-medium">{user.address.city}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                    Zip Code
                  </p>

                  <p className="mt-1 font-medium">{user.address.zipcode}</p>
                </div>

                <div className="divider my-2" />

                <div className="flex gap-6">
                  <div>
                    <p className="text-xs text-base-content/40">Latitude</p>
                    <p className="font-mono text-sm">{user.address.geo.lat}</p>
                  </div>

                  <div>
                    <p className="text-xs text-base-content/40">Longitude</p>
                    <p className="font-mono text-sm">{user.address.geo.lng}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="card border border-base-300 bg-base-100 shadow-sm lg:col-span-3">
            <div className="card-body">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="badge badge-secondary mb-2">Company</span>

                  <h2 className="text-2xl font-bold">{user.company.name}</h2>
                </div>

                <span className="badge badge-outline">Business Profile</span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-base-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                    Catchphrase
                  </p>

                  <p className="mt-2 text-lg font-medium italic">
                    "{user.company.catchPhrase}"
                  </p>
                </div>

                <div className="rounded-xl bg-base-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                    Business Focus
                  </p>

                  <p className="mt-2 text-lg font-medium capitalize">
                    {user.company.bs}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex justify-center">
          <Link href="/users" className="btn btn-primary px-8">
            View All Users
          </Link>
        </div>
      </section>
    </main>
  );
};

export default UserDetailPage;
