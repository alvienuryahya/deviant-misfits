import './styles/globals.css'

export const metadata = {
  title: 'Deviant Misfits',
  description: 'Geng geng lang',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#212121] font-mono font-family: ui-monospace">{children}</body>
    </html>
  )
}
