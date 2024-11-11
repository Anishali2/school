export enum RolesEnum {
  'ADMIN' = 'ADMIN',
  'TEACHER' = 'TEACHER',
  'STUDENT' = 'STUDENT',
  'ACCOUNTANT' = 'ACCOUNTANT',
  'PRINCIPLE' = 'PRINCIPLE',
  'STORE_MANAGER' = 'STORE_MANAGER',
  'MANAGEMENT_STAFF' = 'MANAGEMENT_STAFF'
}

export enum GenderEnum {
  'MALE' = 'MALE',
  'FEMALE' = 'FEMALE'
}

export interface IUser {
  _id: string
  name: string
  email: string
  role: RolesEnum
  school: string
  isActive: boolean
  profile: {
    mobileNumber: string
    joinDate: string
    salary: number
    gender: GenderEnum
    fatherHusbandName: string
    experience: string
    nationalId: string
    education: string
    bloodGroup: string
    dob: string
    _id: string
  }
}
