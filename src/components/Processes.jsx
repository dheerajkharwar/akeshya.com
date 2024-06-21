const Processes = () => {
  return (
    <div className="processes-page flex flex-col items-center justify-center pb-10 border-b-2">
      <h5 className="text-center mytitle mt-10 mb-5">Our Processes</h5>
      <p className="text-center mb-20">
        Over the years we’ve evolved a tested method for attaining achievement
        for each one of our clients.
      </p>
      <div className="flex flex-col lg:flex-row lg:mb-8 mb-0">
        <div className="flex flex-col p-5 mb-5 lg:mx-20 mx-5">
          <h3 className="text-xl font-bold">1. Planning</h3>
          <p>
            We help you turn all of your ideas into a digital product that meets
            all of your requirements. We begin each project by determining its
            scope and needs. This is done by collaborating closely with you to
            ensure that we're all on the same page.
          </p>
        </div>
        <div className="flex flex-col p-5 mb-5 lg:mx-20 mx-5">
          <h3 className="text-xl font-bold">2. Design</h3>
          <p>
            We build our websites carefully through a series of workshops,
            wire-framing, and user experience (UX) sessions, resulting in a site
            that reinforces trust, conveys important brand messaging, and
            provides a return on innovation.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col p-5 mb-5 lg:mx-20 mx-5">
          <h3 className="text-xl font-bold">3. Development</h3>
          <p>
            We provide extensive front-end and back-end development that allows
            your idea to stand alone. Our in-house developers work side-by-side
            with the artistic team to seek out natural breakpoints inside the
            content and order practicality based on acknowledged statistics.
          </p>
        </div>
        <div className="flex flex-col p-5 mb-5 lg:mx-20 mx-5">
          <h3 className="text-xl font-bold">4. Marketing</h3>
          <p>
            We come up with ideas and campaigns to help your business prosper
            online. Our campaigns and virtual approach have a verified tune
            report of accomplishing brilliant results, gathering new leads and
            site visitors in your website and assist them convert.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Processes;
