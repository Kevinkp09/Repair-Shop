import Image from 'next/image'
 
export const metadata = {
    title: "Page not found"
}
export default function NotFound() {
  return (
    <div className='px-2 w-full'>
        <div className='mx-auto py-4 flex flex-col justify-center items-center gap-4'>
            <h2 className='text-2xl'>Page Not Found</h2>
            <Image  src="/public/not-found.png" width={300} height={300} sizes='300px' alt='Page not found' priority={true} title='Page not found'/>
        </div>
    </div>
  )
}