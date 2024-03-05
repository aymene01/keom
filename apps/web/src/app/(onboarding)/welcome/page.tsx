'use client'

import { Button } from '@keom/react-ui'
import { signOut } from '@keom/auth/react'

export default function Onboarding() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col space-y-4">
      <h1>Hey from Keom App</h1>
      <Button onClick={() => signOut()}>Button</Button>
    </div>
  )
}
