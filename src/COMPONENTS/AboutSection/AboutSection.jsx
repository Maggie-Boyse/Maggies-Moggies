import "../AboutSection/AboutSection.scss";
// import placeholder from "../../assets/images/crochet-image-placeholder.jpg";

function AboutSection() {
  return (
    <section className="about">
      <div className="about__hero"></div>
      <p className="about__text">
        <span className="about__title-text">
          Hello, and welcome to Maggie's Moggies!
        </span>
        <br />
        <br />
        This website began as a small dream to attempt to make something of a
        business out of crocheting. I set out to try to make a change in my
        career, made a scattered attempt with selling, eventually moving on to
        teaching others. While the initial intent was to find a way to support
        myself, I found so much more value in connecting with my community.{" "}
        <br />
        <br />
        I now have some more tools in my tool belt, and am so delighted to open
        a new chapter both in career and crochet! And I want to continue
        connecting with my community in an inclusive, accessible way.
        <br />
        <br />
        SO I've developed this website, aimed at connecting and teaching others
        within the wonderful world of crochet! Search for patterns using both
        the Maggie's Moggies and Raverly database! Upload your own with a user
        account! Learn to crochet from scratch on the learning page! Sign up to
        create posts on the Community Board to connect with other folks in the
        area!
        <span className="about__span"></span>
      </p>
    </section>
  );
}

export default AboutSection;

// No data uploaded/given to Maggie's Moggies will be sold elsewhere.
