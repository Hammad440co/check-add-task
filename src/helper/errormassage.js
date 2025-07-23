import { sendStatusCode } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export async function forerror(message,status,success){
    return NextResponse.json({
        message:message,
        status :StatusCode,
        success :statusStatus 
    })
}