import { apiClient } from '@/src/lib/api'
import { atom, selector } from 'recoil'
import { IDBEmployee } from './types'

export const employeeListAtom = atom<{
  page: number
  limit: number
  loading: boolean
  refetch: boolean
}>({
  key: 'employeeListAtom',
  default: {
    page: 1,
    limit: 10,
    loading: false,
    refetch: false
  }
})

export const employeeTableDataSelector = selector<{
  employees: IDBEmployee[]
  total: number
}>({
  key: 'employeeTableDataSelector',
  get: async ({ get }) => {
    const { limit, page } = get(employeeListAtom)
    try {
      const res = await apiClient.get(
        `/employee/all?page=${page}&limit=${limit}`
      )
      const data = res.data as {
        employees: IDBEmployee[]
        total: number
      }
      return data
    } catch (error) {
      return {
        employees: [],
        total: 0
      }
    }
  }
})
