import testimonial from "../testimonial-bg.jpg";

function About() {
  return (
    <div className="about">
      <h2>About Section</h2>
      <img src={testimonial} alt="testimonial-image" height={300} width={800} />
      <p>
        Create user interfaces from components React lets you build user
        interfaces out of individual pieces called components. Create your own
        React components like Thumbnail, LikeButton, and Video. Then combine
        them into entire screens, pages, and apps.
      </p>
      <hr />
    </div>
  );
}

export default About;
