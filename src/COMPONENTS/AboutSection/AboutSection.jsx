import "../AboutSection/AboutSection.scss";
import placeholder from "../../assets/images/crochet-image-placeholder.jpg";

function AboutSection() {
  return (
    <section className="about">
      <h2 className="about__title">About the Site</h2>
      <div className="about__text-image">
        <p className="about__text">
          Claw your carpet in places everyone can see - why hide my amazing
          artistic clawing skills? fart in owners food . Eat the rubberband nya
          nya nyan, and plays league of legends poop in a handbag look delicious
          and drink the soapy mopping up water then puke giant foamy fur-balls.
          Run in circles get poop stuck in paws jumping out of litter box and
          run around the house scream meowing and smearing hot cat mud all over
          for cat playing a fiddle in hey diddle diddle? but under the bed, so
          kick up litter. Why must they do that wack the mini furry mouse.
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
