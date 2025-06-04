import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Score",
  description: "Score",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-info d-flex">
        {children}
      </body>
    </html>
  );
}