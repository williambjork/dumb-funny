import Nav from "../components/Nav/Nav"
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      
      <body>
      <Nav />
      {children}</body>
    </html>
  )
}
