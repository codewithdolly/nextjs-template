import './globals.css'

export const metadata = {
  title: 'Blog Page',
  description: 'Built By Dolly S.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
