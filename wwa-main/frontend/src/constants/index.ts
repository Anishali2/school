/**
 * Employee Types
 */

export enum RolesEnum {
  'ADMIN' = 'ADMIN',
  'TEACHER' = 'TEACHER',
  'STUDENT' = 'STUDENT',
  'ACCOUNTANT' = 'ACCOUNTANT',
  'PRINCIPLE' = 'PRINCIPLE',
  'STORE_MANAGER' = 'STORE_MANAGER',
  'MANAGEMENT_STAFF' = 'MANAGEMENT_STAFF'
}
export const employeeTypesConstant: { value: RolesEnum; label: string }[] = [
  {
    value: RolesEnum.TEACHER,
    label: 'Teacher'
  },
  {
    value: RolesEnum.ACCOUNTANT,
    label: 'Accountant'
  },
  {
    value: RolesEnum.MANAGEMENT_STAFF,
    label: 'Management Staff'
  },
  {
    value: RolesEnum.PRINCIPLE,
    label: 'Principle'
  },
  {
    value: RolesEnum.STORE_MANAGER,
    label: 'Store Manager'
  }
]
/**
 * Blood Group Types
 */
export type TBloodGroups =
  | 'O+'
  | 'O-'
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
export const bloodGroupsConstant: TBloodGroups[] = [
  'O+',
  'O-',
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-'
]
