import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Authentication Project",
  description: "Learning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Navbar />
          <main style={{ flex: 1, overflowY: "auto" }}>
            {children}
          </main>
          <footer style={{ textAlign: "center", padding: "16px", fontSize: "13px", color: "#4b5563", borderTop: "1px solid #e0e3e8" }}>
            ©{new Date().getFullYear()} AuthKit. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}

