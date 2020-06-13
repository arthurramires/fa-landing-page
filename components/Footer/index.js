const Footer = () => (
    <footer className="footer flex flex-row justify-around hidden lg:flex pr-64">
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
      <div className="hidden xl:flex ">
        <img className="footer-image pl-7" src="/city1.png" alt="Cidade" width={500} />
      </div>
    </footer>
);

export default Footer;