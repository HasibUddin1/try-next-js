import './globals.css'

export const metadata = {
  title: 'Next Hero | Home',
  description: 'Next Hero',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className='flex gap-5 font-bold'>
          <a className='w-fit hover:bg-gray-400 px-4 py-2 rounded-lg' href="/">Home</a>
          <a className='w-fit hover:bg-gray-400 px-4 py-2 rounded-lg' href="/about">About</a>
          <a className='w-fit hover:bg-gray-400 px-4 py-2 rounded-lg' href="/contact">Contact</a>
          <a className='w-fit hover:bg-gray-400 px-4 py-2 rounded-lg' href="/dashboard">Dashboard</a>
          <a className='w-fit hover:bg-gray-400 px-4 py-2 rounded-lg' href="/blogs">Blogs</a>
        </div>
        {children}
        <div>
          <h1>Footer</h1>
        </div>
      </body>
    </html>
  )
}
export default RootLayout;