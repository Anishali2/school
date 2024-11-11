import { atom, selector, useRecoilValueLoadable } from 'recoil'
import { axiosClient } from '@/src/lib/api'
import { IUser } from '@/src/types'

interface ISchool {
  name: string
  email: string
  mobile: string
  address: string
  avatar?: string
  isActive: boolean
}
interface AuthState {
  token: string
  user?: IUser | null
  school?: ISchool | null
}
export const authAtom = atom<AuthState>({
  key: 'auth',
  default: {
    token: '',
    user: null,
    school: null
  }
})
export const authUserDataSelector = selector<any>({
  key: 'auth-user-data',
  get: async () => {
    // const { data } = await apiClient.get('/auth/user-data')
    const res = await axiosClient.GET('/user/data')
    return res.data
  }
})

export const useLoggedInUser = (): {
  data: Promise<{
    user: IUser
    dashboardData: {
      totalStudents: number
      totalEmployees: number
      revenue: number
      totalProfit: number
      estimatedFee: {
        estimation: number
        collection: number
        remaining: number
      }

      absentsStudentsToday: number
      presentEmployeesToday: number
      newAdmissionsToday: number
    }
  }> | null
  loading: boolean
  error: any
} => {
  const userLoadAble = useRecoilValueLoadable(authUserDataSelector)
  switch (userLoadAble.state) {
    case 'hasValue':
      return {
        data: userLoadAble.contents,
        error: null,
        loading: false
      }
    case 'loading':
      return { data: userLoadAble.contents, error: null, loading: true }
    case 'hasError':
      return { data: null, error: userLoadAble.contents, loading: false }
  }
}
