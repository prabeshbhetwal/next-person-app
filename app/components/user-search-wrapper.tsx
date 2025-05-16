'use client'

import { UserDialogForm } from './user-dialog-form'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { User } from '../actions/schemas'

interface UserSearchWrapperProps {
  children: React.ReactNode
}

export function UserSearchWrapper({ children }: UserSearchWrapperProps) {
  const router = useRouter()
  return (
    <div className="space-y-6">
      {children}
    </div>
  )
}
