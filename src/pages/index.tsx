import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Container from '~/components/Container';

export default function Home() {
  let { status } = useSession()
  let isAuth = status == 'authenticated';
  let router = useRouter();
  return (
    <>
      <section className={`bg-primary`}>
        <div className='bg-[url("/bg/bg.svg")]'>
          <Container className='p-4 justify-center items-center min-h-screen flex-col'>
            {/* <div className='flex flex-row absolute w-full top-0 justify-between border-b border-black pb-5'>
            <h1 className='font-bold text-xl'>Nulisan</h1>
            <h1 className='font-bold text-xl'>Nulisan</h1>
          </div> */}
            <div className='flex flex-col gap-10 max-w-3xl'>
              <div className='relative'>
                {/* <h1 className='absolute font-[kalnia] bottom-8 text-glow-red-thin right-40'>Kalo ada saran bilang yaa~</h1> */}
                <h1 className='font-["Rethink_Sans"] font-extrabold leading-[55px] sm:leading-[85px] text-glows text-transparent bg-clip-text tracking-wide text-[50px] sm:text-[80px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700'>
                  Mau <span className='text-glow-skys'>nulis</span>, tapi kok mager? yaudah <span className='text-glow-ambers'>nulis online</span> aja~
                </h1>
              </div>
              <h1 className='font-["comfortaa"] text-amber-200 text-glow-thin leading-8 font-bold tracking-wider text-[20px] max-w-lg'>
                Pakai dengan bijak yaa, sstt jangan kasih tau siapa - siapa just for fun~
              </h1>
              <div className='flex flex-row gap-3 items-center'>
                {isAuth && <h1 onClick={() => router.push('/nulis')} className='button-sky'>Mulai Nulis</h1>}
                {!isAuth && <h1 onClick={() => router.push('/auth/login')} className='button'>Login dulu</h1>}
              </div>
            </div>
          </Container>
        </div>
        {/* <Container id='stats' className='justify-center items-center h-full flex-col my-20'>
          <div className='flex flex-col gap-10 w-full mx-auto mt-5 sm:mt-10'>
            <div className='flex flex-col items-center gap-3'>
              <h1 className='text-xl bg-amber-500/30 border border-amber-600 px-3 py-1 rounded-3xl'>Fitur</h1>
              <h1 className='text-[40px] sm:text-5xl font-semibold mx-auto'>Apa yang bisa kamu dapatkan?</h1>
            </div>
            <div className='flex flex-col max-w-5xl mx-auto w-full sm:mt-10 gap-5 sm:gap-8'>
              <h1 className='flex flex-row justify-between items-center font-[kalnia] text-2xl sm:text-4xl'>
                <span className='underline underline-offset-8 decoration-amber-500 decoration-wavy'>Pengunjung</span>
                <span className='font-[Quicksand] tracking-wider font-bold'>22.1k</span>
              </h1>
              <h1 className='flex flex-row justify-between items-center font-[kalnia] text-2xl sm:text-4xl'>
                <span className='underline underline-offset-8 decoration-amber-500 decoration-wavy'>Pengguna</span>
                <span className='font-[Quicksand] tracking-wider font-bold'>19.8k</span>
              </h1>
              <h1 className='flex flex-row justify-between items-center font-[kalnia] text-2xl sm:text-4xl'>
                <span className='underline underline-offset-8 decoration-amber-500 decoration-wavy'>Kertas</span>
                <span className='font-[Quicksand] tracking-wider font-bold'>12</span>
              </h1>
              <h1 className='flex flex-row justify-between items-center font-[kalnia] text-2xl sm:text-4xl'>
                <span className='underline underline-offset-8 decoration-amber-500 decoration-wavy'>Fonts</span>
                <span className='font-[Quicksand] tracking-wider font-bold'>23</span>
              </h1>
            </div>
          </div>
        </Container>
        <Container className='justify-center items-center h-full flex-col my-20'>
          <div className='flex flex-col gap-10 w-full mx-auto mt-5 sm:mt-10'>
            <h1 className='text-[40px] sm:text-5xl font-semibold font-[kalnia] mx-auto'>About</h1>
            <div className='flex flex-col max-w-5xl mx-auto w-full sm:mt-10 gap-16'>
              <h1 className='flex flex-row justify-between items-center font-[kalnia] text-2xl sm:text-4xl'>
                <span className='underline underline-offset-8 decoration-sky-500 decoration-wavy'>Open Source</span>
                <a href='https://github.com/zaadevofc/nulisan.vercel.app' target='_blank' className='group flex flex-row items-center gap-3 link'>
                  <h1>Github</h1>
                  <img className='w-7 sm:w-9 drop-shadow-md group-hover:w-0 group-hover:animate-spin duration-500' src="/logo/github.png" alt="" />
                </a>
              </h1>
              <h1 className='flex flex-row justify-between font-[kalnia] text-2xl sm:text-4xl'>
                <span className='underline underline-offset-8 decoration-sky-500 decoration-wavy'>Author</span>
                <span className='flex flex-col gap-3 sm:gap-6 items-end'>
                  <a href='https://zaadevofc.tech' target='_blank' className='group flex flex-row items-center gap-3 link'>
                    <h1>zaadevofc.tech</h1>
                    <img className='w-7 sm:w-9 drop-shadow-md group-hover:w-0 group-hover:animate-spin duration-500 rounded-full' src="/logo/zaadevofc.jpeg" alt="" />
                  </a>
                  <a href='https://instagram.com/zaadevofc' target='_blank' className='group flex flex-row items-center gap-3 link'>
                    <h1>@zaadevofc</h1>
                    <img className='w-7 sm:w-9 drop-shadow-md group-hover:w-0 group-hover:animate-spin duration-500' src="/logo/instagram.png" alt="" />
                  </a>
                  <a href='https://t.me/zaadevofc' target='_blank' className='group flex flex-row items-center gap-3 link'>
                    <h1>zaadevofc</h1>
                    <img className='w-7 sm:w-9 drop-shadow-md group-hover:w-0 group-hover:animate-spin duration-500' src="/logo/telegram.png" alt="" />
                  </a>
                  <a href='https://github.com/zaadevofc' target='_blank' className='group flex flex-row items-center gap-3 link'>
                    <h1>zaadevofc</h1>
                    <img className='w-7 sm:w-9 drop-shadow-md group-hover:w-0 group-hover:animate-spin duration-500' src="/logo/github.png" alt="" />
                  </a>
                </span>
              </h1>
              <h1 className='flex flex-row justify-between font-[kalnia] text-2xl sm:text-4xl'>
                <span className='flex flex-col'>
                  <span className='underline underline-offset-8 decoration-sky-500 decoration-wavy'>Donation</span>
                  <span className='text-sm max-w-[160px] sm:max-w-full sm:text-xl mt-3 text-amber-600'>Biar website nya bisa jalan terus~</span>
                </span>
                <span className='flex flex-col gap-3 sm:gap-6 items-end'>
                  <a href='https://saweria.co/zaadevofc' target='_blank' className='group flex flex-row items-center gap-3 link'>
                    <h1>Saweria</h1>
                    <img className='w-7 sm:w-9 drop-shadow-md group-hover:w-0 group-hover:animate-spin duration-500' src="/logo/saweria.png" alt="" />
                  </a>
                  <a href='https://trakteer.id/zaadevofc/tip' target='_blank' className='group flex flex-row items-center gap-3 link'>
                    <h1>Trakteer</h1>
                    <img className='w-7 sm:w-9 drop-shadow-md rounded-lg group-hover:w-0 group-hover:animate-spin duration-500' src="/logo/trakteer.png" alt="" />
                  </a>
                </span>
              </h1>
            </div>
          </div>
        </Container> */}
      </section>
    </>
  )
}
