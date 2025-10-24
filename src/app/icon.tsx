/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'

export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: '#40BA37',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '50%',
                }}
            >
                <img
                    src={`${process.env.NEXT_PUBLIC_SITE_URL}img/icon.png`}
                    width={32}
                    height={32}
                    alt='carousel image 3'
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
