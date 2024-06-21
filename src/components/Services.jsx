const Services = () => {
  return (
    <div className="services_page pb-10 border-b-2">
      <h1 className="mytitle text-center font-bold mb-10 pt-40">Services</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col p-8 m-5">
          <i className="fa-solid fa-pencil text-3xl"></i>
          <h3 className="text-xl font-bold py-5">Design</h3>
          <p>
            Our web design services can assist you in reclaiming your company's
            online image. Your business will flourish on the Internet thanks to
            the combination of style and technology we provide, as well as our
            experience.
          </p>
        </div>
        <div className="flex flex-col p-8 m-5">
          <i className="fa-solid fa-code text-3xl"></i>
          <h3 className="text-xl font-bold py-5">Development</h3>
          <p>
            Our development team can construct platforms to help your business
            thrive by creating powerful customised solutions tailored to your
            particular requirements. Akeshya makes use of established and
            effective web development tools.
          </p>
        </div>
        <div className="flex flex-col p-8 m-5">
          <i className="fa-solid fa-chart-simple text-3xl"></i>
          <h3 className="text-xl font-bold py-5">Marketing</h3>
          <p>
            A beautiful website is the foundation of effective marketing. Our
            customers achieve success where it counts—in the real world—by
            combining our proven approach with our passion for improving
            conversions and increasing ROI.
          </p>
        </div>
        <div className="flex flex-col p-8 m-5">
          <i className="fa-solid fa-ticket text-3xl"></i>
          <h3 className="text-xl font-bold py-5">Support</h3>
          <p>
            Since the beginning, we at Akeshya have specialised in website
            maintenance. We recognise the significance of having your business
            online 24 hours a day, seven days a week, and we've created a system
            to ensure that we're always available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
