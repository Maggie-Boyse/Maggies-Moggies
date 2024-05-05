import "../Chaining/Chaining.scss";
import chain1 from "../../assets/images/chain/chain-1.jpg";
import chain2 from "../../assets/images/chain/chain-2.jpg";
import chain3 from "../../assets/images/chain/chain-3.jpg";
import chain4 from "../../assets/images/chain/chain-4.jpg";
import chain5 from "../../assets/images/chain/chain-5.jpg";
import chain6 from "../../assets/images/chain/chain-6.jpg";


function Chaining() {
  return (
    <section className="chaining">
      <h2 className="chaining__title">Slipknot & Chaining</h2>
      <div className="chaining__chaining-1">
        <p className="chaining__text">
          {" "}
          To begin, we will hold our yarn at one end, in a loop. Make sure your
          tail is <span className="chaining__span">behind</span>! Pop your hook
          through the loop you made. <br />
          <span className="chaining__span">
            Note, finding a comfy way to hold the yarn is highly individualized.
            Pictured is my preferred method.
          </span>
        </p>
        <div className="chaining__mulitple-images">
          <img src={chain1} alt="chaining image" className="chaining__image-multi" />
          <img src={chain2} alt="chaining image" className="chaining__image-multi" />
        </div>
      </div>

      <div className="chaining__chaining-2">
        <img src={chain3} alt="chaining image" className="chaining__image" />
        <p className="chaining__text">
          Then, catch your trailing yarn, and pull it back{" "}
          <span className="chaining__span">through</span> the loop you made,
          pulling snug.
        </p>
      </div>

      <div className="chaining__chaining-3">
        <p className="chaining__text">
          Now, keeping our hook snug inside the loop, we'll grasp the knot
          between finger and thumb. Catch the trailing yarn once more, and pull
          through the loop.
        </p>
        <div className="chaining__mulitple-images">
          <img src={chain4} alt="placeholder" className="chaining__image-multi" />
          <img src={chain5} alt="placeholder" className="chaining__image-multi" />
        </div>
      </div>

      <div className="chaining__chaining-4">
        <img src={chain6} alt="placeholder" className="chaining__image" />
        <p className="chaining__text">
          Repeat until desired length of project!
        </p>
      </div>
    </section>
  );
}

export default Chaining;
