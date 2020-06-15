const Footer = () => (
    <footer className="footer flex flex-row justify-around hidden lg:flex">
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
        <a href="" className="ml-3 mr-9">Fidelizemais</a>
      </div> 
      <img className="footer-image hidden md:flex mb-38 p-0" src="/cidade.svg" alt="Cidade" width={460} />
    </footer>
);

export default Footer;