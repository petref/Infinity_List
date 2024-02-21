import "./global.css";
import TopBar from "../components/TopBar/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bodyContainer">
          <TopBar />
          {children}
        </div>
      </body>
    </html>
  );
}
