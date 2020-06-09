const Footer = () => (
    <div className="footer static flex flex-row justify-around hidden md:flex">
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
);

export default Footer;