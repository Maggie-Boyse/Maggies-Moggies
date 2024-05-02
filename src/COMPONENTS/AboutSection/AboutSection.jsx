import "../AboutSection/AboutSection.scss";
import placeholder from "../../assets/images/crochet-image-placeholder.jpg";

function AboutSection() {
  return (
    <section className="about">
      <h2 className="about__title">About the Site</h2>
      <div className="about__text-image">
        <p className="about__text">
          Hello everyone, and welcome to Maggie's Moggies! <br />
          This website began as a small dream to attempt to make something of a
          business out of crocheting. I set out to try to make a change in my
          career, made a scattered attempt with selling, eventually moving on to
          teaching others. While the initial intent was to find a way to support
          myself, I found so much more value in connecting with my community.{" "}
          <br />
          I now have some more tools in my tool belt, and am so delighted to
          open a new chapter both in career and crochet! And I want to continue
          connecting with my community in an inclusive, accessible way. <br />
          SO I've developed this website, aimed at connecting and teaching
          others within the wonderful world of crochet! Search for patterns
          using both the Maggie's Moggies and Raverly database! Upload your own
          with a user account! Learn to crochet from scratch on the learning
          page! Sign up to create posts on the Community Board to connect with
          other folks in the area! <br />
          
          <span className="about__span"></span>
        </p>
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="about__image-1"
          // replace with proper class name later
        />
      </div>
    </section>
  );
}

export default AboutSection;

// No data uploaded/given to Maggie's Moggies will be sold elsewhere.