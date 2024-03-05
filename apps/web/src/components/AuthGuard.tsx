'use client'

import { useSession } from '@keom/auth/react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const LOGIN_PATH = ['/signin', '/error']

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession()
  const { push } = useRouter()
  const pathname = usePathname()

  const isOnLoginPath = LOGIN_PATH.includes(pathname)

  const shouldRedirectToAuth = status === 'unauthenticated' && !isOnLoginPath
  const shouldRedirectToApp = status === 'authenticated' && isOnLoginPath

  useEffect(() => {
    if (shouldRedirectToAuth) push('/signin')
    if (shouldRedirectToApp) push('/')
  }, [shouldRedirectToApp, shouldRedirectToAuth, push])

  if (status === 'loading' || shouldRedirectToApp || shouldRedirectToAuth) return <div />

  return <div>{children}</div>
}

export default AuthGuard
