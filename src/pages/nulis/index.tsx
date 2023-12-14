import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import Container from '~/components/Container';
import Input from '~/components/Input';
import Options from '~/components/Options';

const Result = dynamic(() => import('~/components/Result'), { ssr: false })

let listKertas = [
  {
    title: '🔸 Kertas', value: [
      ['kertas-1', 'Kertas 1'],
      ['kertas-1', 'Kertas 1'],
      ['kertas-1', 'Kertas 1'],
    ]
  },
]

export default function Home() {
  const [text, setText] = useState('')
  
  let { data: session, status }: any = useSession()

  return (
    <>
      <section className={`bg-primary`}>
        <div className='bg-[url("/bg/bg.svg")]'>
          <Container className='p-4 bg-[url("/bg/bg.svg")] min-h-screen flex-col'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col w-full'>
                <div className='flex flex-row items-center gap-3'>
                  <Image className='w-10 rounded-full drop-shadow-lg border border-amber-500' src={session?.token?.picture} width={100} height={100} alt={session?.token?.name + ' picture'} />
                  <div className='flex flex-col -space-y-1'>
                    <h1 className='font-extrabold text-lg'>{session?.token?.name}</h1>
                    <h1 className='text-sm opacity-60'>{session?.token?.email}</h1>
                  </div>
                </div>
                <div className='flex flex-col mt-14 max-w-xl gap-10'>
                  <div className='flex flex-row justify-between gap-3'>
                    <Options alt='Font :' lists={listKertas} />
                    <Options alt='Kertas :' lists={listKertas} />
                  </div>
                  <div className='flex flex-row justify-between gap-3'>
                    <Input onChange={(e: any) => setText(e.target.value)} placeholder='kejaa' alt='Nama :' />
                    <Input placeholder='xxxx' alt='Kelas :' />
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='min-w-[500px] min-h-[600px] relative'>
                  {/* <Result /> */}
                  <p className='absolute text-black z-10 select-none top-[72px] text-[12px] rotate-2 left-[62px]'>{text}</p>
                  <Image className='h-full w-full object-cover rounded-3xl border-2 border-gray-600 drop-shadow-lg' src={'/assets/kertas/folio-1.jpg'} width={1000} height={1000} alt={session?.token?.name + 'picture'} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  )
}
