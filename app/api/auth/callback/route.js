import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
      const url = new URL(request.url);
      const code = url.searchParams.get('code');

      if (code) {
            const supabase = createServerClient({ cookies })
            await supabase.auth.exchangeCodeForSession(code)
      }

      return NextResponse.redirect(url.origin)

}