const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Component</h2>
      <form>
        <p>
          <input type="text" placeholder="Enter your name" />
        </p>
        <p>
          <input type="email" placeholder="Enter your email" />
        </p>
        <p>
          <textarea placeholder="Enter your message"></textarea>
        </p>
        <p>
          <button>Submit</button> {"  "} <button>Clear</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
