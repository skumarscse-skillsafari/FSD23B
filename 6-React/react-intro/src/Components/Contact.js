const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Section</h2>
      <form>
        <p>
          <input type="text" placeholder="Enter your name" />
        </p>
        <p>
          <input type="email" placeholder="Enter your email" />
        </p>
        <button>Submit</button> <br />
        <button>Clear</button>
      </form>
    </div>
  );
};

export default Contact;
