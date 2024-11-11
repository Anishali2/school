import { useRecoilState } from 'recoil'
import { employeeListAtom } from './(recoil)'
import { useCallback } from 'react'

export const useEmployeeLisState = () => {
  const [state, setState] = useRecoilState(employeeListAtom)
  const refetchList = useCallback(() => {
    setState((prev) => ({ ...prev, refetch: !prev.refetch }))
  }, [setState])
  return {
    state,
    refetchList,
    setState
  }
}
