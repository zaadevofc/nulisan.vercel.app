import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import Container from "~/components/Container"
import { SITE_TITLE } from "~/consts"

const Login = () => {
    return (
        <>
            <section className={`bg-primary`}>
                <div className='bg-[url("/bg/bg.svg")]'>
                    <Container className='p-4 justify-center items-center mt-10 sm:mt-0 min-h-screen flex-col bg-[url("/bg/bg.svg")]'>
                        <h1 className='font-["Rethink_Sans"] text-4xl tracking-wide font-extrabold max-w-lg text-center'>{SITE_TITLE}</h1>
                        <h1 className="text-lg mt-10 text-amber-500 text-glow-thin">Login dulu habis itu bisa lanjut.</h1>
                        <h1 className="text-lg max-w-sm text-center">Ga lama kok tinggal pilih, cuss bisa langsung makai~</h1>
                        <div className="flex flex-col my-10 gap-4">
                            <div onClick={() => signIn('google')} className="flex flex-row items-center click select-none gap-4 py-2 px-4 border border-amber-600 drop-shadow-md bg-amber-500/20 rounded-3xl">
                                <Image width={50} height={50} className="w-6 drop-shadow-md" src="/logo/google.png" alt="" />
                                <h1>Lanjutin make Google</h1>
                            </div>
                            <div onClick={() => signIn('github')} className="flex flex-row items-center click select-none gap-4 py-2 px-4 border border-amber-600 drop-shadow-md bg-amber-500/20 rounded-3xl">
                                <Image width={50} height={50} className="w-7 bg-white rounded-full border border-white drop-shadow-md" src="/logo/github.png" alt="" />
                                <h1>Lanjutin make Github</h1>
                            </div>
                            <div onClick={() => signIn('discord')} className="flex flex-row items-center click select-none gap-4 py-2 px-4 border border-amber-600 drop-shadow-md bg-amber-500/20 rounded-3xl">
                                <Image width={50} height={50} className="w-7 border border-white rounded-full drop-shadow-md" src="/logo/discord.png" alt="" />
                                <h1>Lanjutin make Discord</h1>
                            </div>
                        </div>
                        <h1 className="text-sm">udah login? ke <Link href={'/'} className="text-amber-500 text-glow-thin">halaman utama</Link></h1>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Login