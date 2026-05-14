import Link from "next/link";

export default function CampaignsPage() {
  const campaigns = [
    ["Summer Sale", "Running", "5000"],
    ["Product Launch", "Completed", "3200"],
    ["Festival Promo", "Scheduled", "8700"],
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h1 className="text-3xl font-bold text-cyan-400 mb-10">PulseMail</h1>

        <nav className="space-y-5">
          <Link href="/dashboard" className="block">Dashboard</Link>
          <Link href="/campaigns" className="block text-cyan-400">Campaigns</Link>
          <Link href="/analytics" className="block">Analytics</Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">
        <h2 className="text-5xl font-bold mb-10">Campaigns</h2>

        <div className="bg-white rounded-2xl shadow p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-4">Campaign</th>
                <th>Status</th>
                <th>Emails</th>
              </tr>
            </thead>

            <tbody>
              {campaigns.map((item, i) => (
                <tr key={i} className="border-b">
                  <td className="py-4">{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}