// export const dynamic = "force-static";
// export const revalidate = false;
export const dynamicParams = false;
export const dynamic = "force-dynamic";
import { NextResponse } from 'next/server';


export async function GET() {
  return new NextResponse(
    `<!DOCTYPE html>
    <html>
      <head>
        <title>410 Gone</title>
        <meta name="robots" content="noindex" />
      </head>
      <body>
        <h1>410 - Content Permanently Removed</h1>
        <p>The page you are looking for has been permanently removed.</p>
        <p><a href="/">Return to Homepage</a></p>
      </body>
    </html>`,
    { 
      status: 410,
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
}
