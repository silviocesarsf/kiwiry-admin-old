import { resend } from "../lib/resend";

export async function sendVerificationToken(to?: string, token?: string) {
    const link = `${process.env.APP_URL}/onboarding?token=${token}`;
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'silvio14dmc@gmail.com',
        subject: 'Acesse sua conta no Kiwire 🚀',
        html: `<a href='${link}'>Clique aqui para confirmar o token</a>`
    })
}

export async function sendResetPasswordToken(to?: string, token?: string) {
    const link = `${process.env.APP_URL}/reset-password?token=${token}`;
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'silvio14dmc@gmail.com',
        subject: 'Redefina sua senha',
        html: `<a href='${link}'>Clique aqui para redefinir sua senha</a>`
    })
}