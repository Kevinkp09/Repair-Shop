import { HomeIcon, File, UsersRound } from "lucide-react"
import { NavButton } from "@/components/NavButton"
import  Link  from "next/link"
import { ModeToggle } from "@/components/ModeToggle"

export default function Header() {
  return (
    <header className="animate-slide p-2 h-12 border-b sticky top-0 z-20 bg-background">

      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon}/>
          <Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="Home">
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">Computer Repair Shop</h1>
          </Link>
        </div>
        <div className="flex items-center">
        <NavButton href="/tickets" label="Tickets" icon={File}/>
        <NavButton href="/customers" label="Customers" icon={UsersRound}/>
        <ModeToggle/>
        </div>
      </div>
    </header>
  )
}