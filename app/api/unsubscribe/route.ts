import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

const sql = neon(process.env.DATABASE_URL!); // Asegúrate de que DATABASE_URL esté configurada en tu .env

export async function POST(req: NextRequest) {

    try {
        const { email } = await req.json();
        console.log(email)

        // Validamos el email
        if (!email || !email.includes('@')) {
            return NextResponse.json( {message: 'Invalid Email'}, {status: 400})
        }

        const existing = await sql`SELECT * FROM "subscribers" WHERE email = ${email}`;
        if (existing.length > 0) {
            await sql`UPDATE subscribers SET "issubscribed" = false WHERE email = ${email}`
            return NextResponse.json( {message: 'You have been unsubscribed'}, {status: 200} )
        }

        return NextResponse.json( {message: "Your email doesnt exist in our database"}, { status: 400})
    } catch( error ) {
        return NextResponse.json({message: `Internal Error: ${error}`}, {status: 500} )
    }

}