import { UserProvider } from "../../context/UserContext";
import "../../lib/i18n"; // inicializar traducciones
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
