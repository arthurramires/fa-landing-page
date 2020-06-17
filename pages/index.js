import React from 'react';
import Head from 'next/head'
import Router from 'next/router';
import Header from '../components/Header';
import Description from '../components/Description';
import Footer from '../components/Footer';
import { Form } from '@unform/web';
import Input from '../components/Input';
import fetch from 'isomorphic-unfetch';


const Home = () => {
  async function handleSubmit(data){
    try {
      fetch('http://localhost:3333/users', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(function(response) {
        Router.push('/salutation/congrats');
      }, function(error) {
        error.message
        alert("Aconteceu um erro, tente novamente!!") 
      });
    }catch (err){
      alert("Aconteceu um erro, tente novamente!!")
    }

  }

  const Content = () => (
    <div className="flex flex-col w-auto lg:flex-row pr-0 ">
      <section className="container-text h-1/2 flex flex-col w-full px-6 sm:mt-16 px-0 lg:ml-6 xl:ml-32 w-1/2 mt-10 pl-0">
        <p className="content ml-3 text-base text-center sm:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl">Seja um dos primeiros a utilizar o <strong className="content-title text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Fidelize Mais</strong> Faça a sua inscrição e garanta essa novidade.</p>
        <Form onSubmit={handleSubmit} className="inputContainer px-4 flex flex-col">
          <Input name="name" type="text" className="input h-1/2 sm:h-12" required placeholder="Insira seu nome aqui ;)"/>
          <Input name="email" type="email" className="input h-1/2 sm:h-12" required  placeholder="Insira seu e-mail aqui ;)"/>
          <button type="submit"className="formButton h-1/2 mb-2 sm:h-12">FAZER MEU CADASTRO</button>
        </Form>
      </section>
      <aside className="h-1/2 xl:w-1/2">
        <img src="/main.png" alt="Fidelize Mais" width={600} className="image-main hidden sm:block"/>
        <img src="/main.png" alt="Fidelize Mais" className="image block m-auto w-56 sm:hidden"/>
      </aside>
    </div>
  );
  return (
    <>
      <div className="w-screen justify-center sm:h-full justify-start">
        <Header />
        <div className="container">
          <Head>
            <title>Fidelize Mais</title>
            <link rel="icon" href="/icon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Merriweather:ital,wght@0,900;1,400&family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"></link>
          </Head>
          <Content />
        </div>
      </div>
            
      <div className="w-full flex pl-32 mt-4 justify-end sm:flex mt-24 pl-0 ">
        <img src="/stylebar.png" alt="Barras"/>
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
        <img className="flex lg:hidden self-center mt-8 justify-center mb-2" src="/city1.png" alt="Cidade" width={200} />  
      </div>
    </>
  );
};

export default Home;
