import { ImageResponse } from 'next/og';
import { parseSlug } from '../../lib/seo-data';

export const runtime = 'edge';

export const alt = 'Service Preview';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  const service = parsed?.service || 'Expert Services';
  const location = parsed ? `${parsed.locality}, ${parsed.city}` : 'Your City';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#0f172a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            opacity: 0.5,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 40px',
          }}
        >
          <div
            style={{
              fontSize: 32,
              background: '#ffd700',
              color: '#000',
              padding: '10px 30px',
              borderRadius: 50,
              fontWeight: 700,
              marginBottom: 40,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            India's Best Service Provider
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 20,
              backgroundImage: 'linear-gradient(90deg, #fff, #cbd5e1)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {service}
          </div>
          <div
            style={{
              fontSize: 48,
              color: '#94a3b8',
              fontWeight: 600,
            }}
          >
            in {location}
          </div>
        </div>

        {/* Brand Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          www.yourbusiness.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
