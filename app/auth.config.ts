import type { NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

/**
 * Routes that are public and don't require authentication
 */
export const publicRoutes = [
  "/",
  "/about",
  "/api/people"
]

/**
 * Routes that are used for authentication
 */
export const authRoutes = [
  "/auth/signin",
]

/**
 * The prefix for API authentication routes
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT = "/"

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Add user data to token
        token.id = user.id
        token.name = user.name
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        // Add token data to session
        session.user.id = token.id as string
        session.user.name = token.name as string | null
        session.user.email = token.email as string | null
      }
      return session
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnPublicRoute = publicRoutes.includes(nextUrl.pathname)
      const isOnAuthRoute = authRoutes.includes(nextUrl.pathname)
      const isOnApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)

      if (isOnApiAuthRoute) return true
      if (isOnAuthRoute) {
        if (isLoggedIn) return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        return true
      }
      if (isOnPublicRoute) return true
      return isLoggedIn
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig
