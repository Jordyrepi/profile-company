import React from 'react'
import { FaUserLarge } from "react-icons/fa6";

const TeamAbout = () => {
    return (
        <section className='bg-[#0A3A40] '>
            <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 class="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Our Teams
                </h2>

                <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div class="flex items-center gap-4">
                            <FaUserLarge size={40} />

                            <div>
                                <p class="mt-0.5 text-lg font-medium text-gray-900">
                                    Jordy Repi, CEO
                                </p>
                            </div>
                        </div>

                        <p class="mt-4 text-justify text-gray-700">
                            Working at Generix Express has been an incredibly rewarding
                            experience. From day one, it's evident that this company values
                            its team members and fosters a culture of collaboration, growth,
                            and innovation.
                        </p>
                    </blockquote>
                    <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div class="flex items-center gap-4">
                            <FaUserLarge size={40} />

                            <div>
                                <p class="mt-0.5 text-lg font-medium text-gray-900">
                                    Cixel, CTO
                                </p>
                            </div>
                        </div>

                        <p class="mt-4 text-justify text-gray-700">
                            Working at Generix Express has been an incredibly rewarding
                            experience. From day one, it's evident that this company values
                            its team members and fosters a culture of collaboration, growth,
                            and innovation.
                        </p>
                    </blockquote>
                    <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div class="flex items-center gap-4">
                            <FaUserLarge size={40} />

                            <div>
                                <p class="mt-0.5 text-lg font-medium text-gray-900">
                                    Siera, CMO
                                </p>
                            </div>
                        </div>

                        <p class="mt-4 text-justify text-gray-700">
                            Working at Generix Express has been an incredibly rewarding
                            experience. From day one, it's evident that this company values
                            its team members and fosters a culture of collaboration, growth,
                            and innovation.
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

export default TeamAbout