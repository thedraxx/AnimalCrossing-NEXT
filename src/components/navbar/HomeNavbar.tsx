import React from 'react'

export const HomeNavbar = () => {
    return (
        <>
            <nav
                className="flex flex-row justify-between items-center p-4 bg-slate-50 text-black"
                style={{ marginBottom: '10px' }}
            >

                <div
                    className="flex flex-start items-center cursor-pointer flex-1"
                >
                    <h1
                        className="text-2xl font-bold text-black"
                    >
                        MyNintendo
                    </h1>
                </div>
                <div
                    className="flex flex-1 justify-center items-center cursor-pointer"
                >
                    <a
                        className="navbar-brand text-ellipsis first-letter:capitalize" href="/home"
                    >
                        Villagers
                    </a>
                </div>

                <div className="flex flex-1" />
            </nav>
        </>
    )
}
