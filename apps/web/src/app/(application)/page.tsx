'use client'

import { Button } from '@keom/react-ui'
import { signOut, useSession } from '@keom/auth/react'

export default function Home() {
  const { data } = useSession()

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col space-y-4">
      <h1>Hey from Keom App</h1>
      <p className="text-gray-500 text-sm">{data?.user?.email}</p>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  )
}
