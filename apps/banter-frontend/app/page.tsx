"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter()
  const [roomID, setRoomId] = useState<null | Number>(null)

  const handleJoinRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (roomID !== null) {
      router.push(`/room/${roomID}`)
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
           <p className="px-[2%]">Banter</p>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="https://github.com/Rash023/Banter" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Github
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Banter</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Enter your unique Room ID to join the gathering space
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex gap-2">
                    <Input type="text" placeholder="Enter room ID" className="max-w-lg flex-1" onChange={(e) => {
                      setRoomId(Number(e.target.value))
                    }} />
                    <Button type="submit" onClick={handleJoinRoom}>Join Room</Button>
                    
                  </form>
                  <div className="flex flex-col w-max gap-2">
                      <p className="px-28">OR</p>
                      <Button type="submit" className="justify-left" onClick={()=>{
                          router.push(`/room/xyz`)
                      }}>Create Room</Button>
                  </div>
                </div>
              </div>
              <img
                src="/homepage.jpeg"
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}




function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
