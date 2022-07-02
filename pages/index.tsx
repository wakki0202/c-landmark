import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Recruit from '../components/Recruit';

const Home: NextPage = () => {
  return (
    <div className="">
      <header className=''>
        <Header />
      </header>
      <section id='Firstview' className='mt-60 relative '>
        <div className='flex w-11/12 m-auto '>
          <div className='w-10/12 bg-[#dedfd9]'></div>
          <div className='bg-[#dedfd9] w-4/12 pt-32 pb-20 px-5'>
            <h1 className='text-xl text-[#a19e8b] pb-12'>地方だからあきらめるのではなく、<br />地方だからこそ輝く未来を創る。</h1>
            <p className='pb-5'>いくつになっても、女性が輝ける。子供たちが自分の可能性に気づく。この場所でしか採れない食材を味わえる。</p>
            <p className='pb-5'>いつか次の世代が「このまちに帰ってきたい」と思えるようないきいきとした場所を、私たちから。</p>
            <p className='pb-5'>私たちC Landmarkは、誰もが輝くまちづくりをにし阿波から発信していきます。</p>
          </div>
          
          
        </div>
        <div className='absolute bottom-10 h-full border w-8/12 mt-10 mr-10'><Image src={"/office.jpg"} layout={'fill'} className={"object-cover"}></Image></div>
      </section>

      <section id='About' className='mt-20'>
        <div className='text-center '>
          <h1 className='text-3xl pb-8 font-bold text-[#a19e8b]'>About</h1>
          <p className='pb-8'>自分自身、<br />
            家族や友人といった自分の周りの人、<br />
            住んでいる人、<br />
            訪れる人。<br />
            よりよいまちづくりには、誰もが輝いている。</p>

          <p className='pb-8'>
            C Landmarkは、徳島県・にし阿波を拠点に<br />
            誰もが輝けるまちづくりを行い、<br />
            地域が輝く未来を創造する会社です。
          </p>

          
          <Link href="" className=''><a className='font-bold text-[#a19e8b]'>Read More</a></Link>

          <p className='pt-14 pb-20 text-[#a19e8b]'>.........................</p>
        </div>
      </section>

      

      <section id='Service'>
        <div className='flex relative '>

          <div className='w-6/12 bg-[#dedfd9] px-10  py-32 m-auto h-[508px]'>
            <div className='w-8/12 m-auto'>
            <div className='text-center'>
                <h1 className='text-left font-bold text-3xl pb-8 text-[#a19e8b]'>Service</h1>
              <p className='text-left'>私たちC Landmarkは、参加した人、訪れた人がワクワクすることはもちろん、C Landmarkで働く人たちや、かかわる全ての人たちの夢が叶い、輝けるような事業を行なっています。</p>
            </div>
            <div className='mt-16 absolute z-20'>
                <Link href=""><a className='border border-black px-10 py-3 '>Read More</a></Link>
            </div>
            </div>
            <div className='border border-black absolute w-11/12 m-auto top-10 z-10 h-5/6'></div>
          </div>

          <div className='w-6/12 h-[508px]' style={{ position: 'relative' }} >
            <Image src={"/office.jpg"} layout={'fill'} className={"object-cover"}></Image>
          </div>
          

        </div>
      </section>

      <section id='Work' className='mt-20 mb-20'>
        <div className='w-10/12 m-auto'>
          <h1 className='text-3xl font-bold pb-2 text-[#a19e8b]'>Work</h1>
        </div>
        <div className='border-b w-3/12'>

        </div>
        <div className='w-10/12 m-auto'>
          <h3 className='pt-2'>C Landmarkの活動について更新しています。</h3>
          <div className='grid grid-cols-3 gap-12 pt-16'>
            <div>
              <div className='border border-black h-52'></div>
              <h1 className='text-xl font-bold py-2'>タイトル</h1>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className=''>
              <div className='border border-black h-52'></div>
              <h1 className='text-xl font-bold py-2'>タイトル</h1>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className=''>
              <div className='border border-black h-52'></div>
              <h1 className='text-xl font-bold py-2'>タイトル</h1>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>
        </div>
      </section>


      <section id='Event'>
        <div className='flex w-11/12 m-auto'>

          <div className='w-6/12 m-auto  border-t border-b border-[#a19e8b]'>
            <div className=' w-9/12 m-auto'>
            <div className='mt-32'>
                <h1 className='font-bold text-3xl pb-8 text-[#a19e8b]'>Event</h1>
              <p>現在募集中のセミナーやイベントの最新情報はこちら</p>
            </div>
            <div className='mt-16 mb-32'>
              <Link href=""><a className='border border-black px-10 py-3 '>Read More</a></Link>
              </div>
            </div>
          </div>

          <div className='w-6/12 m-auto '  >
            <div className='w-11/12 m-auto h-[400px] text-center' style={{ position: 'relative' }}>
              <Image src={"/office.jpg"} layout={'fill'} className={"object-cover text-center"}></Image>
            </div>
          </div>

        </div>
      </section>

      <section id='Recruit' className='mb-32 mt-20'>
        <Recruit />
      </section>

    </div>
  )
}

export default Home
