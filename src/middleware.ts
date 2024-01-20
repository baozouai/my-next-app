import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import Request from '@request'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  afterAuth(auth, req, res){
    if(!auth.userId && !auth.isPublicRoute){
      return redirectToSignIn({ returnBackUrl: req.url })
    }
    Request.POST('/user', { userId: auth.userId })
      .then(res => {
        console.log('res ------> ', res)
        return res
      })
  }
});
 
export const config = {
  // matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  matcher: [ '/' ],
};