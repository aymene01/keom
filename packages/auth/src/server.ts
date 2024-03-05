import NextAuth from './next-auth'
import GoogleProvider from 'next-auth/providers/google'

const AUTHORIZED_FELLOWS = ['ay.bousbia@gmail.com']

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? '',
  pages: {
    signIn: '/signin',
    error: '/error',
  },
  callbacks: {
    signIn: async ({ profile }) => {
      const isAllowed = profile && profile.email?.endsWith('@gmail.com') && AUTHORIZED_FELLOWS.includes(profile.email)
      return isAllowed ?? false
    },
  },
})

export type { Session, DefaultSession as DefaultAuthSession } from 'next-auth'
