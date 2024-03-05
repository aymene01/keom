'use client'

import { Button } from '@keom/react-ui'
import { signIn } from '@keom/auth/react'
import { FcGoogle } from 'react-icons/fc'

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="p-6 rounded-lg bg-white shadow-lg flex flex-col space-y-4 text-center">
        <h1 className="text-2xl text-gray-800 font-light">Welcome to Keom Platform</h1>
        <p className="text-gray-500">Streamline your workflow with a single click</p>
        <div className="pt-4">
          <div className="inline-block">
            <Button size="lg" onClick={() => signIn('google')} leftIcon={<FcGoogle />}>
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
