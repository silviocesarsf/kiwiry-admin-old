import { resend } from "../lib/resend";

export async function sendVerificationToken(to?: string, token?: string) {
    const link = `${process.env.APP_URL}/verify-email?token=${token}`;
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'silvio14dmc@gmail.com',
        subject: 'Acesse sua conta no Kiwire 🚀',
        html: `<a href='${link}'>Clique aqui para confirmar o token</a>`
    })
}