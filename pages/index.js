import Calendar from '@/components/calendar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Calendar</title>
        <meta name="description" content="Basic calendar app using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Calendar />
      </main>
    </>
  )
}
