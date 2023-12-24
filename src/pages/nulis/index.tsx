import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Script from 'next/script';
import Container from '~/components/Container';
import Input from '~/components/Input';
import Options from '~/components/Options';

let listKertas = [
  {
    title: '🔸 Folio', value: [
      ['/assets/folio/folio-3.jpeg', 'Folio 1'],
    ],
  },
]

let listFonts = [
  {
    title: '🔸 Handwriting', value: [
      ['/assets/fonts/handwriting/HandwritingCR-2.ttf', 'HandwritingCR 2']
    ],
  },
]

let listTinta = [
  {
    title: '🔸 Tinta', value:
      [
        ['#000000', '⚫ Hitam'],
        ['#964B00', '🟤 Coklat'],
        ['#6A0DAD', '🟣 Ungu'],
        ['#0000FF', '🔵 Biru'],
        ['#009900', '🟢 Hijau'],
        ['#FF0000', '🔴 Merah'],
        ['#EE7214', '🟠 Orange']
      ],
  },
]

export default function Home() {
  let { data: session }: any = useSession()

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.js" async={true} />
      <Script src="/js/p5.js" />
      <section className={`bg-primary`}>
        <div className='bg-[url("/bg/bg.svg")]'>
          <Container className='p-6 min-h-screen flex-col'>
            <div className='flex flex-col sm:flex-row justify-between gap-8'>
              <div className='flex flex-col w-full'>
                <div className='flex flex-row items-center gap-3'>
                  <Image className='w-7 md:w-10 rounded-full drop-shadow-lg border border-amber-500' src={session?.token?.picture} width={100} height={100} alt={session?.token?.name + ' picture'} />
                  <div className='flex flex-col -space-y-1'>
                    <h1 className='font-extrabold text-sm md:text-lg'>{session?.token?.name}</h1>
                    <h1 className='text-xs md:text-sm opacity-60'>{session?.token?.email}</h1>
                  </div>
                </div>
                <div className='flex flex-col mt-14 max-w-xl gap-8 text-xs md:text-base'>
                  <div className='flex flex-row justify-between gap-3'>
                    <Options id='opsi-fonts' alt='Font :' lists={listFonts} />
                    <Options id='opsi-kertas' alt='Kertas :' lists={listKertas} />
                  </div>
                  <div className='flex flex-row justify-between gap-3'>
                    <Options id='opsi-tinta' alt='Tinta :' lists={listTinta} />
                    <Input placeholder='kejaa' id='row-nama' alt='Nama :' />
                  </div>
                  <div className='flex flex-row justify-between gap-3'>
                    <Input placeholder='X TM A' id='row-kelas' alt='Kelas :' />
                    <Input placeholder='Informatika' id='row-mapel' alt='Mapel :' />
                  </div>
                </div>
                <h1 className='max-w-sm mt-10 text-sm md:text-base font-extrabold text-gray-200 text-glow-thin'>*Stay tunee!! projek belum selesai nihh, sabar menanti yaa~ full thanks buat yang udah bantu support developer🤗</h1>
                <textarea name="" id='row-text' cols={30} rows={10} className='mr-36 text-black hidden'></textarea>
              </div>
              <div className='flex flex-col items-center'>
                <div className=''>
                  <canvas id='nulis' className='max-h-full md:h-full max-w-xs w-full sm:max-w-lg md:w-full object-contain object-top drop-shadow-xl' width={1000} height={1000}></canvas>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  )
}
