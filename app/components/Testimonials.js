import { Avatar } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
        <div className='h-full p-5 bg-[#0A3A40]'>
            <div className='text-white text-center'>
                <h1 className='text-3xl'>Testimonials</h1>
                <p className='mt-2 mx-auto w-6/7 '>
                    We always provide the best service for customer comfort
                </p>
            </div>
            <div className="grid my-6 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                            kunci kesuksesan operasional kami dengan solusi manajemen data yang inovatif
                        </h1>
                        <p className="my-4 italic">
                            "Solusi mereka yang inovatif telah memberikan visibilitas yang luar biasa,
                            memungkinkan pengambilan keputusan yang lebih cepat dan cerdas. Tim dukungan
                            mereka sangat responsif dan berpengetahuan, membuat kolaborasi kami sangat efektif."
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <Avatar  
                            Image="/heropic.jpg"
                            alt="profile picture"
                            rounded
                        />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>John Doe</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">
                                CTO PiquePalse
                            </div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                            interaksi kami dengan data bisnis menjadi lebih mudah dan efisien.
                        </h1>
                        <p className="my-4 italic">
                            "Dengan PalseSphere Tech latform yang user-friendly dan fungsionalitas analisis yang
                            kuat membuat kami dapat mengoptimalkan efisiensi operasional. Mereka bukan hanya
                            penyedia teknologi, tetapi mitra yang peduli tentang kesuksesan kami."
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <Image
                            className="rounded-full w-9 h-9"
                            src="/logocompany.png"
                            alt="profile picture"
                            width={9}
                            height={9}
                        />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Itmamul</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">
                                Founder Binal
                            </div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Palsesphere Tech telah memberikan kontribusi luar biasa dalam meningkatkan strategi data kami.
                        </h1>
                        <p className="my-4 italic">
                            "Platform canggih mereka dan dukungan tim ahli telah memberikan nilai tambah signifikan bagi
                            bisnis kami. Dengan bantuan Palsesphere Tech, kami berhasil meningkatkan akurasi prediksi
                            dan efisiensi operasional."
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <Image
                            className="rounded-full w-9 h-9"
                            src="/logocompany.png"
                            alt="profile picture"
                            width={9}
                            height={9}
                        />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div> Afizy</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">
                                Founder Amarillo
                            </div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Palsesphere Tech membuat kami mengubah cara kami berurusan dengan data bisnis.
                        </h1>
                        <p className="my-4 italic">
                            "Solusi mereka yang canggih memberikan visibilitas yang luar biasa, memungkinkan
                            pengambilan keputusan yang lebih cerdas. Kami sangat puas dengan dukungan tim
                            mereka yang responsif dan pengetahuan yang mendalam."
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <Image
                            className="rounded-full w-9 h-9"
                            src="/logocompany.png"
                            alt="profile picture"
                            width={9}
                            height={9}
                        />
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Ddy</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">
                                Founder Shipping
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Testimonials