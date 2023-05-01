import Image from 'next/image'

import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'

import useCurrentUser from '@/hooks/userCurrentUser';
import Navbar from '@/components/navbar';


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <main>
      <Navbar />
    </main>
  )
}
