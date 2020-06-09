import React, { useState } from 'react';
import Head from 'next/head'
import Router from 'next/router';
import Header from '../components/Header';
import Description from '../components/Description';
import Footer from '../components/Footer';
import { Form } from '@unform/web';
import Input from '../components/Input';
import fetch from 'isomorphic-unfetch'


const ImageBackground = () => (
  <div className="ml-12 mb-12">
    <img src="/main.png" alt="Fidelize Mais" width={700}/>
  </div>
);

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
        console.log(response)
      }, function(error) {
        error.message 
      });
      Router.push('/salutation/congrats');
    }catch (err){
      alert("Aconteceu um erro, tente novamente!!")
    }

  }

  const Content = () => (
    <div className="flex flex-wrap">
      <p className="content">Seja um dos primeiros a utilizar o <strong className="content-title">Fidelize Mais</strong> Faça a sua inscrição e garanta essa novidade.</p>
      <Form onSubmit={handleSubmit} className="inputContainer flex flex-col">
        <label htmlFor="nome" className="inputLabel">Insira seu nome :)</label>
        <Input name="name" type="text" className="input"/>
        <label htmlFor="email" className="inputLabel">Insira seu email :)</label>
        <Input name="email" type="email" />
        <button type="submit"className="formButton">FAZER MEU CADASTRO</button>
      </Form>
    </div>
  );
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
      <img className="flex sm:hidden mt-8 ml-24 mr-6" src="/main.png" alt="Cidade" width={400} />
      <img src="/style-bar.PNG" alt="Barras" width={320} className="flex justify-end  sm:hidden mt-12 ml-64"/> 
      <div className="flex justify-end hidden sm:flex mt-12 ">
        <img src="/style-bar.PNG" alt="Barras" width={800}/>
      </div>
      <div className="container pl-3 mt-12 sm:pr-6 px-6 md:pb-4 mx-auto flex flex-row">
        <Description />
        <img className="footer-image absolute hidden sm:inline-block" src="/city1.png" alt="Cidade" width={600} />
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
};

export default Home;
