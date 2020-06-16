import Link from 'next/link'
import Head from 'next/head'
import Header from '../../components/Header';
import Description from '../../components/Description';
import Footer from '../../components/Footer';



const Content = () => (
    <div className="flex flex-col lg:flex-row">
      <section className="flex flex-col sm:justify-start lg:ml-6 xl:ml-32 mt-16">
        <p className="content ml-3 w-6 text-base text-center sm:text-lg md:text-xl lg:text-left w-full text-2xl xl:text-3xl"><strong className="content-title text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Fique de olho em seu e-mail</strong> <br />Em breve entraremos em contato.</p>
        <div className="message w-full sm:justify-center">
            <div className="message-content flex items-center justify-center">
                <p>CADASTRO REALIZADO ;)</p>
            </div>
        </div>
      </section>
      <aside className="mt-0 ml-0 mt-6 px-6 sm:px-0 mt-0 ml-0 lg:px-6 w-screen mt-0 md:px-0 mt-0">
        <img src="/congrats.png" alt="Fidelize Mais" width={900} className="banner"/>
      </aside>
    </div>
  );

const Congrats = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Head>
                    <title>Fidelize Mais</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Merriweather:ital,wght@0,900;1,400&family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"></link>
                </Head>
                <Content />
            </div>

            <div className="w-full flex pl-32 mt-4 justify-end sm:flex mt-32 pl-0 ">
                <img src="/stylebar.png" alt="Barras" width={600}/>
            </div>
            <section className="pr-0 xl:pr-64">
                <Description />
            </section>

            <Footer />

            <footer className="footer-media flex flex-column lg:hidden  ">
                <div className="flex items-center">
                    <img src="/whatsapp.svg" alt="Whatsapp" />
                    <p className="ml-3 mr-9">(65) 9 9338-5486</p>
                </div>

                <div className="flex items-center">
                    <img src="/instagram.svg" alt="instagram" />
                    <a href="https://www.instagram.com/fidelizemais/" className="ml-3 mr-9">@fidelizemais</a>
                </div>

                <div className="flex items-center">
                    <img src="/facebook.svg" alt="facebook" />
                    <p className="ml-3 mr-9">Fidelizemais</p>
                </div>
            </footer>
            <div className="flex justify-center">
                <img className="flex lg:hidden self-center mt-8 justify-center mb-2" src="/city1.png" alt="Cidade" width={300} />  
            </div>
        </>
    );
}

export default Congrats;