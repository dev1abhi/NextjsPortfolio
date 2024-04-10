

import Theming from "@/Theme/Theming";
import "./globals.css";
import Headerpage from "@/app/Header/page";
import Footerpage from "@/app/Footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
          <Headerpage />
          {children}
          <Footerpage />
        </Theming>
      </body>
    </html>
  );
}