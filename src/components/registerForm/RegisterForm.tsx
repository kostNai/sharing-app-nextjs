'use client'

import { ChangeEvent, useActionState, useEffect, useState } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Spinner } from '@/components/ui/spinner'
import { toast } from 'sonner'

import { GoEye, GoEyeClosed } from 'react-icons/go'

import { register } from '@/actions'
import { User } from '@/types'

const initialState = {
    status: false,
    message: '',
    fieldErrors: {
        password: '',
        confirmPassword: '',
    },
}
const initialUserState = {
    name: '',
    email: '',
    password: '',
}

export default function RegisterForm() {
    const [state, action, isPending] = useActionState(register, initialState)

    const [userData, setUserData] = useState<User | undefined>(initialUserState)
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState<boolean>(false)

    useEffect(() => {
        if (!state.status) {
            setFieldErrors(state.fieldErrors || {})
            if (state.message) {
                if (Array.isArray(state.message)) {
                    state.message.forEach((mes: string) => toast.error(mes))
                } else {
                    toast.error(state.message)
                }
            }
        } else {
            toast.success(state.message)
            setUserData(initialUserState)
            setFieldErrors({})
        }
    }, [state])

    const onChangeUserDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData!, [e.target.name]: e.target.value })
    }

    return (
        <Card className='w-full max-w-sm'>
            <CardHeader>
                <CardTitle>Реєстрація акаунту</CardTitle>
                <CardDescription>Введіть дані для реєстрації</CardDescription>
                <CardAction>
                    <Link
                        href='/login'
                        className='font-semibold underline transition duration-300 hover:text-[#40BA37]'
                    >
                        Вхід
                    </Link>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form action={action}>
                    <div className='flex flex-col gap-6'>
                        <div className='grid gap-2'>
                            <Label htmlFor='name'>Ім&apos;я</Label>
                            <Input
                                type='text'
                                placeholder="Ім'я"
                                name='name'
                                value={userData?.name}
                                onChange={onChangeUserDataHandler}
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                type='email'
                                placeholder='m@example.com'
                                name='email'
                                value={userData?.email}
                                onChange={onChangeUserDataHandler}
                            />
                        </div>
                        <div className='grid gap-2 relative'>
                            <Label htmlFor='password'>Пароль</Label>
                            <Input
                                type={isPasswordVisible ? 'text' : 'password'}
                                name='password'
                                value={userData?.password}
                                onChange={onChangeUserDataHandler}
                                className={
                                    fieldErrors.password ? 'border-red-300' : ''
                                }
                            />
                            {isPasswordVisible && (
                                <GoEye
                                    className='absolute top-8 right-2 cursor-pointer transition duration-300 hover:scale-110'
                                    onClick={() => setIsPasswordVisible(false)}
                                />
                            )}
                            {!isPasswordVisible && (
                                <GoEyeClosed
                                    className='absolute top-8 right-2 cursor-pointer transition duration-300 hover:scale-110'
                                    onClick={() => setIsPasswordVisible(true)}
                                />
                            )}
                        </div>
                        <div className='grid gap-2 relative'>
                            <Label htmlFor='confirmPassword'>
                                Повторіть пароль
                            </Label>
                            <Input
                                type={
                                    isConfirmPasswordVisible
                                        ? 'text'
                                        : 'password'
                                }
                                name='confirmPassword'
                                className={
                                    fieldErrors.confirmPassword
                                        ? 'border-red-300'
                                        : ''
                                }
                            />
                            {isConfirmPasswordVisible && (
                                <GoEye
                                    className='absolute top-8 right-2 cursor-pointer transition duration-300 hover:scale-110'
                                    onClick={() =>
                                        setIsConfirmPasswordVisible(false)
                                    }
                                />
                            )}
                            {!isConfirmPasswordVisible && (
                                <GoEyeClosed
                                    className='absolute top-8 right-2 cursor-pointer transition duration-300 hover:scale-110'
                                    onClick={() =>
                                        setIsConfirmPasswordVisible(true)
                                    }
                                />
                            )}
                        </div>
                    </div>
                    <Button
                        type='submit'
                        className='w-full mt-8'
                        disabled={isPending}
                    >
                        {isPending && <Spinner />} Реєстрація
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
