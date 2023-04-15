import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Next 13 Crash course',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
