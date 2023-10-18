const Services = () => {
  const services = {
    one: "Web Development",
    two: "Mobile Development",
    three: "Data Analytics",
    four: "Datascience",
    five: "Business Analytics",
  };
  return (
    <div className="services">
      <h2>Services Section</h2>
      <p>This is a paragraph</p>
      <h3>Our Services</h3>
      <ul>
        <li>Service One: {services.one}</li>
        <li>Service Two: {services.two}</li>
        <li>Service Three: {services.three}</li>
        <li>Service Four: {services.four}</li>
        <li>Service Five: {services.five}</li>
      </ul>
      <hr />
    </div>
  );
};

export default Services;
