import "./globals.css";
import Header from "@/components/layouts/Header";
import Provider from "@/components/Provider";

export const metadata = {
  title: "My New Gallery App",
  description: "Gallery of examples for Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <Provider> {children}</Provider>
      </body>
    </html>
  );
}
