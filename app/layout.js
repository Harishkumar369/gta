import "./globals.css";

export const metadata = {
  title: "GoToAnalyze",
  description: "GoToAnalyze is a powerful platform offering data analysis, AI-driven insights, and customizable dashboards to streamline decision-making and business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
