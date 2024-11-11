'use server'

import { revalidatePath } from 'next/cache'

export async function revalidate() {
  revalidatePath('/dashboard/classes')
}
export async function revalidateStudents() {
  revalidatePath('/dashboard/students')
}
