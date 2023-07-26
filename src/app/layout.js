import './globals.css'

export const metadata = {
  title: 'Next Hero | Home',
  description: 'Next Hero',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
export default RootLayout;