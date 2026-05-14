export default function DashboardPage() {
  return (
    <div
      style={{
        padding: "40px",
        background: "#f4f7fb",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* Top Brand */}
      <div
        style={{
          marginBottom: "25px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "42px",
            color: "#2563eb",
            fontWeight: "bold",
          }}
        >
          GloboPersona
        </h1>

        <p
          style={{
            marginTop: "8px",
            color: "#6b7280",
            fontSize: "18px",
          }}
        >
          Email Marketing Dashboard
        </p>
      </div>

      {/* Welcome Header */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "34px",
            color: "#111827",
          }}
        >
          Welcome Back Rakesh👋
          
        </h2>

        <p
          style={{
            color: "#6b7280",
            marginTop: "10px",
          }}
        >
          How could i help you today?
          
          Here’s what’s happening with your campaigns today.
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {[
          ["Revenue", "$48,250", "#2563eb"],
          ["Campaigns", "24", "#16a34a"],
          ["Emails Sent", "58K", "#9333ea"],
          ["Open Rate", "82%", "#f59e0b"],
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                color: "#6b7280",
                marginBottom: "10px",
              }}
            >
              {item[0]}
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "34px",
                color: item[2],
              }}
            >
              {item[1]}
            </h2>
          </div>
        ))}
      </div>

      {/* Campaign Table */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#111827" }}>
          Recent Campaigns
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#f9fafb" }}>
              <th style={th}>Campaign</th>
              <th style={th}>Status</th>
              <th style={th}>Open Rate</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={td}>Summer Sale</td>
              <td style={green}>Running</td>
              <td style={td}>72%</td>
            </tr>

            <tr>
              <td style={td}>Launch Offer</td>
              <td style={blue}>Completed</td>
              <td style={td}>81%</td>
            </tr>

            <tr>
              <td style={td}>Festival Promo</td>
              <td style={orange}>Scheduled</td>
              <td style={td}>65%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Styles */

const th = {
  padding: "14px",
  textAlign: "left",
  color: "#374151",
};

const td = {
  padding: "14px",
  borderBottom: "1px solid #eee",
};

const green = {
  padding: "14px",
  color: "green",
  fontWeight: "bold",
};

const blue = {
  padding: "14px",
  color: "#2563eb",
  fontWeight: "bold",
};

const orange = {
  padding: "14px",
  color: "#f59e0b",
  fontWeight: "bold",
};