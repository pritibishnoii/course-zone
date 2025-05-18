import { NextResponse } from "next/server";

// http://localhost:3000/api
export async function GET ( req ) {
    console.log( req )
    console.log( NextResponse )
    return NextResponse.json( {
        message: "fetch all data ", success: true,
    } )
}