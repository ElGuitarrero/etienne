import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!); // Asegúrate de que DATABASE_URL esté configurada en tu .env

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();
        // console.log(email)

        // Validar el email
        if (!email || !email.includes('@')) {
            return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
        }

        // Verificar si el email ya está registrado
        const existing = await sql`SELECT * FROM "subscribers" WHERE email = ${email}`;
        if (existing.length > 0) {
            const subscriber = existing[0];
            if (subscriber.issubscribed === false) {
            // Actualizar el registro para marcarlo como suscrito
            await sql`UPDATE "subscribers" SET issubscribed = true WHERE email = ${email}`;
            return NextResponse.json({ message: 'You have been resubscribed to the newsletter' }, { status: 200 });
            }
            return NextResponse.json({ message: 'You already subscribed' }, { status: 400 });
        }

        // Insertar el nuevo email en la base de datos (usando valores predeterminados)
        await sql`INSERT INTO "subscribers" (email, issubscribed) VALUES (${email}, true)`;

        return NextResponse.json({ message: 'You subscribed to the newsletter' }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: `Internal Error: ${error}` }, { status: 500 });
    }
}