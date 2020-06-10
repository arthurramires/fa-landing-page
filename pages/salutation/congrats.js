import Link from 'next/link'
import Head from 'next/head'
import Header from '../../components/Header';
import Description from '../../components/Description';
import Footer from '../../components/Footer';


const ImageBackground = () => (
    <div className="ml-12 mr-0 mb-12">
      <img src="/congrats.png" alt="Fidelize Mais" width={700} />
    </div>
);

const Content = () => (
    <div className="flex flex-wrap">
      <p className="content"><strong className="content-title">Fique de olho em seu e-mail.</strong><br />Em breve entraremos em contato.</p>
      <div className="message">
        <div className="message-content flex items-center justify-center">
            <p>CADASTRO REALIZADO. ;)</p>
        </div>
      </div>
    </div>
);

const Congrats = () => {
    return (
        <>
            <div className="container p-8 mx-auto sm:p-12">
                <Head>
                    <title>Fidelize Mais</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Merriweather:ital,wght@0,900;1,400&family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"></link>
                </Head>
                <Header />
                <div className="flex sm:block md:block xl:flex">
                    <Content />
                    <ImageBackground />
                </div>
            </div>
            <img className="flex sm:hidden mt-8 ml-24 mr-6" src="/congrats.png" alt="Cidade" width={400} />
            <img src="/stylebar.png" alt="Barras" width={320} className="flex justify-end  sm:hidden mt-12 ml-64"/> 
            <div className="flex justify-end hidden sm:flex mt-12">
                <img src="/stylebar.png" alt="Barras" width={800}/>
            </div>
            <div className="container pl-3 mt-12 sm:pr-6 px-6 md:pb-4 mx-auto flex flex-row">
                <Description />
                <img className="footer-image absolute hidden sm:inline-block" src="/city.svg" alt="Cidade" width={600}/>
            </div>
            <Footer />
            <div className="footer-media flex flex-column sm:hidden">
                <div className="flex items-center">
                    <img src="/whatsapp.svg" alt="Whatsapp" />
                    <p className="ml-3 mr-9">(65) 9 9338-5486</p>
                </div>
                    <div className="flex items-center">
                    <img src="/instagram.svg" alt="instagram" />
                <p className="ml-3 mr-9">@fidelizemais</p>
                </div>
                <div className="flex items-center">
                    <img src="/facebook.svg" alt="facebook" />
                    <p className="ml-3 mr-9">Fidelizemais</p>
                </div>
            </div>
            <img className="flex sm:hidden mt-8 ml-32 mb-2" src="/city1.png" alt="Cidade" width={300} /> 
        </>
    );
}

export default Congrats;