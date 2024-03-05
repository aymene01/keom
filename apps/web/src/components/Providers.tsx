'use server'

import AuthGuard from './AuthGuard'
import NextAuthProvider from './SessionProvider'
import { auth } from '@keom/auth/server'

const Providers = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()

  return (
    <NextAuthProvider session={session}>
      <AuthGuard>{children}</AuthGuard>
    </NextAuthProvider>
  )
}

export default Providers
