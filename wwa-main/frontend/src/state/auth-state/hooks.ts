import { useCallback } from 'react'
import cookies from 'cookies-next'
import { useRouter } from 'next/navigation'
import { URLS } from '@/src/lib/URLS'
export const useLogout = () => {
  const router = useRouter()
  const logout = useCallback(async () => {
    cookies.deleteCookie('token')
    router.push(URLS.signIn)
    router.refresh()
  }, [router])
  return { logout }
}
