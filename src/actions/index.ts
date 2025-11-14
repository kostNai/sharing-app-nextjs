'use server'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const register = async (
    initialState: {
        status: boolean
        message: string
        fieldErrors?: Record<string, string>
    },

    formData: FormData
) => {
    const data = Object.fromEntries(formData)

    const { name, email, password, confirmPassword } = data

    if (password !== confirmPassword) {
        return {
            status: false,
            message: 'Паролі мають співпадати',
            fieldErrors: {
                password: 'Паролі мають співпадати',
                confirmPassword: 'Паролі мають співпадати',
            },
        }
    }

    const res = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        body: JSON.stringify({ email, name, password }),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })

    const json = await res.json()

    if (!json.status) {
        return Array.isArray(json.message)
            ? {
                  status: false,
                  message: json.message.map((mes: string) => mes),
              }
            : { status: false, message: json.message }
    }

    return { status: true, message: 'Реєстрація успішна' }
}
