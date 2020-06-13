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
    <div className="flex flex-col sm:flex-row">
      <section className="flex flex-col flex-center pr-2 xl:ml-32 mt-16 lg:ml-10 md:ml-8 sm:flex-start pr-0 mx-6">
        <p className="content w-full ml-3 mr-6 text-base text-center sm:text-left ml-0 mr-3 text-lg md:text-xl lg:text-2xl xl:text-3xl">Seja um dos primeiros a utilizar o <strong className="content-title text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Fidelize Mais</strong> Faça a sua inscrição e garanta essa novidade.</p>
        <Form onSubmit={handleSubmit} className="inputContainer flex flex-col px-3">
          <Input name="name" type="text" className="input" required placeholder="Insira seu nome aqui ;)"/>
          <Input name="email" type="email" required  placeholder="Insira seu e-mail aqui ;)"/>
          <button type="submit"className="formButton">FAZER MEU CADASTRO</button>
        </Form>
      </section>
      <aside className="min-w-0 mt-3 ml-0 px-12 mt-6 sm:ml-16 px-0 mt-0 lg:ml-6 min-w-0 px-0 mt-0 md:ml-3 px-0 mt-0 ">
        <img src="/main.png" alt="Fidelize Mais" width={1000} className="banner"/>
      </aside>
    </div>
  );
  return (
    <>
      <Header />
      <div className="container">
        <Head>
          <title>Fidelize Mais</title>
          <link rel="icon" href="/icon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Merriweather:ital,wght@0,900;1,400&family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"></link>
        </Head>

        <aside className="w-full flex justify-between">
          <Content />
        </aside>
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
};

export default Home;
