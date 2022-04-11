import Header from "./Header";
import classes from "./Main.module.css";
import mobImg from "./img/mobile-2.svg";
import icon1 from "./img/Call-Center.svg";
import icon2 from "./img/Fixing.svg";
import icon3 from "./img/icon-right-1.svg";
import icon4 from "./img/icon-right-2.svg";
import ghmza from "./img/ghmza.svg";
import attara from "./img/attara.svg";
import alammari from "./img/alammari.svg";
import amiral from "./img/amiral.svg";
import testmonial from "./img/testmonial.svg";
import commentImgOne from "./img/unsplash_ILip77SbmOE.png";
import stars from "./img/stars.svg";
import commentImgTwo from "./img/commentImgTwo.png";
import commentImgThree from "./img/3.png";
import commentImgFour from "./img/4.png";

const Main = () => {
  return (
    <>
      <div className={classes.main}>
        <Header />
        <div className={classes.content}>
          <h1>
            Group <span>What’sApp</span> messaging service
          </h1>
          <p>
            Autowats is a sending tool for WhatsApp. It works as a WhatsApp
            Marketing Tool to send notifications/messages on WhatsApp. You can
            send personalized messages, attachments to users on WhatsApp.
          </p>
          <div className={classes.cta}>
            <a href="" className={classes.start}>
              Get Started
            </a>
            <a href="" className={classes.register}>
              Register now
            </a>
          </div>
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes["wrapper--left"]}>
          <div>
            <div>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum Lorem ipsum dolor sit amet, consect etur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
                dolor sit amet,{" "}
              </p>
            </div>
            <img src={icon1} alt="" />
          </div>
          <div>
            <div>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum Lorem ipsum dolor sit amet, consect etur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
                dolor sit amet,{" "}
              </p>
            </div>
            <img src={icon2} alt="" />
          </div>
        </div>
        <div className={classes["wrapper--middle"]}>
          <img src={mobImg} alt="" />
        </div>
        <div className={classes["wrapper--right"]}>
          <div>
            <img src={icon3} alt="" />
            <div>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum Lorem ipsum dolor sit amet, consect etur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
                dolor sit amet,{" "}
              </p>
            </div>
          </div>
          <div>
            <img src={icon4} alt="" />
            <div>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum Lorem ipsum dolor sit amet, consect etur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
                dolor sit amet,{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes["partners_wrapper"]}>
        <img src={ghmza} alt="ghmza" className={classes.ghmza} />
        <img src={attara} alt="attara" className={classes.attara} />
        <img src={alammari} alt="alammari" className={classes.alammari} />
        <img src={amiral} alt="amiral" className={classes.amiral} />
      </div>

      <div className={classes.testmonial}>
        <h2>Testimonials</h2>
        <p>
          Read hear What our clients around the world say about us and our
          service.
        </p>
        <div>
          <img src={testmonial} alt="" className={classes.background} />
          <div
            className={`${classes["comment-wrapper"]} ${classes["comment-wrapper--1"]}`}
          >
            <img
              src={commentImgOne}
              alt=""
              className={classes["first_comment"]}
            />
            <input type="checkbox" name="" id="" />
            <div className={classes["testmonial-comment"]}>
              <h3>Adam Shady</h3>
              <p>This service helped me with my bussiness.</p>
              <img src={stars} alt="" />
            </div>
          </div>
          <div
            className={`${classes["comment-wrapper"]} ${classes["comment-wrapper--2"]}`}
          >
            <img
              src={commentImgFour}
              alt=""
              className={classes["first_comment"]}
            />
            <input type="checkbox" name="" id="" />
            <div className={classes["testmonial-comment"]}>
              <h3>Adam Shady</h3>
              <p>This service helped me with my bussiness.</p>
              <img src={stars} alt="" />
            </div>
          </div>

          <div
            className={`${classes["comment-wrapper"]} ${classes["comment-wrapper--3"]}`}
          >
            <img
              src={commentImgThree}
              alt=""
              className={classes["first_comment"]}
            />
            <input type="checkbox" name="" id="" />
            <div className={classes["testmonial-comment"]}>
              <h3>Adam Shady</h3>
              <p>This service helped me with my bussiness.</p>
              <img src={stars} alt="" />
            </div>
          </div>

          <div
            className={`${classes["comment-wrapper"]} ${classes["comment-wrapper--4"]}`}
          >
            <img
              src={commentImgTwo}
              alt=""
              className={classes["first_comment"]}
            />
            <input type="checkbox" name="" id="" />
            <div className={classes["testmonial-comment"]}>
              <h3>Adam Shady</h3>
              <p>This service helped me with my bussiness.</p>
              <img src={stars} alt="" />
            </div>
          </div>

          <div
            className={`${classes["comment-wrapper"]} ${classes["comment-wrapper--5"]}`}
          >
            <img
              src={commentImgTwo}
              alt=""
              className={classes["first_comment"]}
            />
            <input type="checkbox" name="" id="" />
            <div className={classes["testmonial-comment"]}>
              <h3>Adam Shady</h3>
              <p>This service helped me with my bussiness.</p>
              <img src={stars} alt="" />
            </div>
          </div>

          <div
            className={`${classes["comment-wrapper"]} ${classes["comment-wrapper--6"]}`}
          >
            <img
              src={commentImgTwo}
              alt=""
              className={classes["first_comment"]}
            />
            <input type="checkbox" name="" id="" />
            <div className={classes["testmonial-comment"]}>
              <h3>Adam Shady</h3>
              <p>This service helped me with my bussiness.</p>
              <img src={stars} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
