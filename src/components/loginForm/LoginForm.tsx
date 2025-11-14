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
import Link from 'next/link'

export default function LoginForm() {
    return (
        <Card className='w-full max-w-sm'>
            <CardHeader>
                <CardTitle>Вхід в акаунт</CardTitle>
                <CardDescription>
                    Введіть email для входу в акаунт
                </CardDescription>
                <CardAction>
                    <Link
                        href='/register'
                        className='font-semibold underline transition duration-300 hover:text-[#40BA37]'
                    >
                        Реєстрація
                    </Link>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form>
                    <div className='flex flex-col gap-6'>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='m@example.com'
                                required
                            />
                        </div>
                        <div className='grid gap-2'>
                            <div className='flex items-center'>
                                <Label htmlFor='password'>Пароль</Label>
                                <Link
                                    href='#'
                                    className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                                >
                                    Забули пароль?
                                </Link>
                            </div>
                            <Input id='password' type='password' required />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className='flex-col gap-2'>
                <Button type='submit' className='w-full'>
                    Вхід
                </Button>
            </CardFooter>
        </Card>
    )
}
