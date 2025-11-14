'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function RegisterForm() {
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
                <form>
                    <div className='flex flex-col gap-6'>
                        <div className='grid gap-2'>
                            <Label htmlFor='name'>Ім&apos;я</Label>
                            <Input
                                type='text'
                                placeholder="Ім'я"
                                required
                                name='name'
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                type='email'
                                placeholder='m@example.com'
                                name='email'
                                required
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='password'>Пароль</Label>
                            <Input type='password' required name='password' />
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='confirmPassword'>
                                Повторіть пароль
                            </Label>
                            <Input
                                type='password'
                                name='confirmPassword'
                                required
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className='flex-col gap-2'>
                <Button type='submit' className='w-full'>
                    Реєстрація
                </Button>
            </CardFooter>
        </Card>
    )
}
