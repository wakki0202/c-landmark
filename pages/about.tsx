import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Recruit from '../components/Recruit'

const Home: NextPage = () => {
  return (
    <div className="">
      <header className=''>
        <Header />
      </header>
      <div className="bg-red-300 w-full py-20">
        <h1 className="text-main2 font-extrabold text-center text-2xl tracking-wider">About</h1>
      </div>
      <section>
        <div>
        <div className="py-32">
          <h1 className="text-main2  text-center text-3xl tracking-wider  "><span className="pb-2 border-b-2 border-dashed border-main2 ">企業理念</span></h1>

          <p className="  text-center text-2xl pt-12 pb-6">ないならつくろ一緒に！</p>
          <p className="  text-center text-2xl ">私たちと地域の輝く未来を</p>
        </div>
        </div>
      </section> 
      <section>
        <div className="bg-red-300">
          <div className="py-28 w-10/12 m-auto">
            <h1 className="text-main2 text-center text-3xl tracking-wider  "><span className="pb-2 border-b-2 border-dashed border-main2 ">事業内容</span></h1>

            <div className='grid grid-cols-2 gap-6 mt-10'>

              <div className='bg-white py-20 align-middle py-16'>
                <p className="text-center align-middle">地域活性化事業<br />(行政とも連携)</p>
              </div>


              <div className='bg-white  flex py-24  content-center justify-center '>
                <p className=""><span className="">飲食事業</span></p>

              </div>

              <div className='bg-white  py-24 text-center'>
                次世代を育てる事業
              </div>


              <div className='bg-white py-24 text-center'>
                起業支援事業

              </div>


            </div>

            <p className="text-center pt-20">主に、4つの事業に取り組んでいます。</p>
            <p className="text-center">プラス、この事業の枠に囚われることなく、「楽しそう！」とワクワクできることに果敢にチャレンジしています。</p>

            <div className="mt-12 text-center">
              <a className="border border-black py-3 px-12">Read More</a>
            </div>

            </div>
            
          </div>
      </section>

      <section className='mt-20'>
          <div className='flex'>
            <div className='w-6/12  border-t-2 pt-8'>
              <Image src={"/office.jpg"} width={"700"} height={"500"}></Image>
            </div>
          <div className='w-5/12 m-auto'>
            <h1 className='text-2xl pb-12'>TOP MESSAGE</h1>
            <p className='pb-8'>
              texttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttext
              texttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttext
              texttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttext
            </p>
            <p className='pb-12'>
              texttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttext
              texttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttext
              texttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttext
              texttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttexttexttextexttext
            </p>

            <div className='flex text-right'>
              <div className='text-sm'>
                <p>株式会社C Landmark 代表取締役</p>
                <p>一般社団法人　まむ・くりえいと　代表理事</p>
              </div>
              <div className='text-right'>
                <h3 className='text-2xl ml-8'>藤田梢</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='w-6/12 m-auto border border-black'></div>
        
          <div className='w-9/12 m-auto py-20'>
          <h3 className='text-center'>藤田 梢　活動実績</h3>
          
          <table className='text-sm text-left  m-auto mt-10 '>
            <tr className=' '>
              <th className=' py-2'>2009年〜</th>
              <td className=''>資格取得講座講師となり、それ以降約5年間、ベビーマッサージや親子のコミュニケーション講座の講師を務める。</td>
            </tr>

            <tr className=''>
              <th className=' py-2'>2015年5月〜</th>
              <td className=''>「花咲かねーさん企業組合」理事に就任。</td>
            </tr>

            <tr className=''>
              <th className=' py-2'>2015年11月〜</th>
              <td className=''>「女性起業家支援ルームACT」にてチューター。
                <br />徳島県委託事業女性の創業加速化推進事業に委託され、活動を展開。
                <br />起業を志す女性の相談と専門家とのコーディネートに従事。
              </td>
            </tr>

            <tr className=''>
              <th className=' py-2'>2017年5月〜</th>
              <td className=''>「花咲かねーさん企業組合」2代目代表理事に就任。
                <br />女性起業支援に携わる
              </td>
            </tr>

            <tr className=''>
              <th className=' py-2'>2018年4月</th>
              <td className=''>三好市男女共同参画策定委員に就任</td>
            </tr>

            <tr className='py-2'>
              <th className=''>2018年5月</th>
              <td className='  py-4'>徳島県西部地域政策総合会議委員に就任</td>
            </tr>

          </table>
        </div>
        <div className='w-6/12 m-auto border border-black'></div>

      </section>

      <section className='bg-red-300 py-1'>
        <div className=' border-2 m-8 '>
          <h1 className='text-center text-3xl'><span className="pb-2 border-b-2 border-dashed border-main2 ">会社概要</span></h1>
        </div>
      </section>

        <section id='Recruit' className='mb-32 mt-20'>
          <Recruit />
        </section>

    </div>
  )
}

export default Home