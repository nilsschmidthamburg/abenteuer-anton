import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import YouTubePlayer from '@components/YouTubePlayer'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Abenteuer Anton</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Header title="Willkommen bei Abenteuer Anton"/>
                {/*
                <div className={'container'}>
                    <img src="/anton.jpg" alt="Abenteuer Anton" className='mainImage'/>
                </div>
                */
                }

                <h1>Allgemeine Infos</h1>
                <p>Herzlich willkommen, hier findest du alle wichtigen Infos zu Abenteuer Anton! Klick dich durch und schau dir die Videos in Ruhe an.
                    Falls du noch Fragen hast, schreib mir eine Email oder ruf auf der bekannten Nummer an.</p>

                <h1>Videos</h1>
                <h2>Kochfeld & Gas</h2>
                <YouTubePlayer url="https://youtube.com/shorts/3MViNBYUl9E"/>
                <h2>Frischwasser und Abwasser</h2>
                <YouTubePlayer url="https://youtube.com/shorts/3MViNBYUl9E"/>
                <YouTubePlayer url="https://youtube.com/shorts/3MViNBYUl9E"/>
                <h2>Kühlschrank</h2>
                <YouTubePlayer url="https://youtube.com/shorts/3MViNBYUl9E"/>
                <YouTubePlayer url="https://youtube.com/shorts/3MViNBYUl9E"/>
                <YouTubePlayer url="https://youtube.com/shorts/3MViNBYUl9E"/>
                <h2>Fenster</h2>
                <YouTubePlayer url="https://youtube.com/shorts/3MViNBYUl9E"/>
                <h2>Heizung</h2>
                <YouTubePlayer url="https://youtube.com/shorts/3MViNBYUl9E"/>
                <h2>Toilette</h2>
                <YouTubePlayer url="https://youtube.com/shorts/3MViNBYUl9E"/>
            </main>

            <Footer/>
        </div>
    )
}
