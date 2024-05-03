import "../DoubleCrochet/DoubleCrochet.scss";
import placeholder from "../../assets/images/crochet-image-placeholder.jpg";

function DoubleCrochet() {
  return (
    <section className="double">
      <h2 className="double__title">Double Crochet</h2>
      <div className="double__slipknot-1">
        <p className="double__text">
          Cat ipsum dolor sit amet, lick face hiss at owner, pee a lot, and meow
          repeatedly scratch at fence purrrrrr eat muffins and poutine until
          owner comes back so fight own tail or jump on human and sleep on her
          all night long be long in the bed, purr in the morning and then give a
          bite to every human around for not waking up request food, purr loud
          scratch the walls.
          <span className="double__span"></span>
        </p>
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="double__image-1"
          // replace with proper class name later
        />
      </div>

      <div className="double__slipknot-2">
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="double__image-2"
          // replace with proper class name later
        />
        <p className="double__text">
          so play with it until it dies of shock so scoot butt on the rug yet
          meow. Stare out the window. Kick up litter cats are fats i like to
          pets them they like to meow back yet small kitty warm kitty little
          balls of fur. Tweeting a baseball. Play time gnaw the corn cob make
          muffins, so to pet a cat, rub its belly,
        </p>
      </div>

      <div className="double__slipknot-3">
        <p className="double__text">
          endure blood and agony, quietly weep, keep rubbing belly kitty, and
          vommit food and eat it again. Mess up all the toilet paper chew on
          cable for climb a tree, wait for a fireman jump to fireman then
          scratch his face i love cats i am one wake up scratch humans leg for
          food then purr then i have a and relax for roll on the floor purring
          your whiskers off
        </p>
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="double__image-3"
          // replace with proper class name later
        />
      </div>

      <div className="double__slipknot-4">
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="double__image-4"
          // replace with proper class name later
        />
        <p className="double__text">
          cuddle no cuddle cuddle love scratch scratch ha ha, you're funny i'll
          kill you last. Use lap as chair meoooow. Missing until dinner time
          thinking longingly about tuna brine. Hopped up on catnip carefully
          drink from water glass and then spill it everywhere and proceed to
          lick the puddle or catch small lizards,{" "}
        </p>
      </div>
    </section>
  );
}

export default DoubleCrochet;
