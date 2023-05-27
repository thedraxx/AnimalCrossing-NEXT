import Image from 'next/image'
import React from 'react'

const ErrorPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    padding: '0 1.5rem',
                    paddingTop: '6rem',
                }}
            >
                <Image
                    src="/404.avif"
                    alt="Picture of the author"
                    width={250}
                    height={250}
                />

                <h1
                    style={{
                        fontSize: '2rem',
                        lineHeight: '1.2',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        marginTop: '3rem',
                    }}
                >Whoops!</h1>

                <p>
                    The info you're looking for can't be found!
                </p>
                <p>
                    You might want to try searching again or explore one of the links below.
                </p>
            </div>




        </div>
    )
}

export default ErrorPage