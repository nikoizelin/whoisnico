import Link from 'next/link'
 
function NotFound() {
  return (
    <div>
      <h2>not Found</h2>
      <p>could not find requested resource</p>
      <Link href="/">return to site</Link>
    </div>
  )
}

export default NotFound;