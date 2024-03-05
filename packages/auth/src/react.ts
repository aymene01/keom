import type { DefaultSession } from 'next-auth'
import type { SessionContextValue } from 'next-auth/react'
import { useSession as useAuthSession } from 'next-auth/react'

export { SessionProvider, signIn, signOut } from 'next-auth/react'

// in the case of `useSession`, we want to augment the type of the session object
interface Session extends DefaultSession {}

// @ts-expect-error Hacking the type so we don't have to do the module augmentation technique.
export const useSession: () => Session & SessionContextValue = useAuthSession
