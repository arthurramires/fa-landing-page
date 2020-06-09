import React, { useState } from 'react';
import Head from 'next/head'
import Router from 'next/router';
import Header from '../components/Header';
import Description from '../components/Description';
import Footer from '../components/Footer';
import fetch from 'isomorphic-unfetch'


const ImageBackground = () => (
  <div className="ml-12 mb-12">
    <img src="/main.png" alt="Fidelize Mais" width={700}/>
  </div>
);

export default () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  function handleInputChange(event){
    const { name, value } = event.target;
    setFormData({
        ...formData, [name]: value
    });
    console.log(name, value)
}

  async function handleSubmit(e){
    e.preventDefault();
    console.log(e)
    // try {
    //   const response = await fetch('http://localhost:3000/users', {
    //     method: 'POST',
    //     body: {
    //       name,
    //       email
    //     }
    //   });
    //   console.log(response)
    //   Router.push('/salutation/congrats');
    // }catch (err){
    //   console.log(err)
    // }

  }

  const Content = () => (
    <div className="flex flex-wrap">
      <p className="content">Seja um dos primeiros a utilizar o <strong className="content-title">Fidelize Mais</strong> Faça a sua inscrição e garanta essa novidade.</p>
      <form className="inputContainer flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="nome" className="inputLabel">Insira seu nome :)</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email" className="inputLabel">Insira seu email :)</label>
        <input type="email" name="email" id="email"/>
        <button type="submit"className="formButton">FAZER MEU CADASTRO</button>
      </form>
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
      <img src="/bars.png" alt="Barras" width={320} className="flex justify-end  sm:hidden mt-12 ml-64"/> 
      <div className="flex justify-end hidden sm:flex mt-12 ">
        <img src="/bars.png" alt="Barras" width={800}/>
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
