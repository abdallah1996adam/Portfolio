import React, { useEffect } from "react";
import { useHistory } from "react-router";
import $ from "jquery";

import "./contact.css";
//icons
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
//images
import menu from "../../assets/img/menu.svg";
import logo from "../../assets/img/logo2.png";
import airplane from "../../assets/img/contactplane.png";
import fluidDark from "../../assets/img/splatterdark.png";

import "bootstrap/dist/css/bootstrap.min.css";

export const Contact = () => {
  const history = useHistory();

  useEffect(() => {
    $(document).ready(function () {
      $(".open-menu").on("click", function () {
        $(".overlay").addClass("open");
      });

      $(".close-menu").on("click", function () {
        $(".overlay").removeClass("open");
      });
    });
  }, []);
  const handleClick = () => {
    alert("Merci pour le message.Je vous contacterai bientôt !");
    history.push("/");
  };
  return (
    <>
      {/* <!----LEFT-BAR-------> */}
      <div className="right-bar-section">
        <div className="right-content-inner d-flex justify-content-between flex-column h-100">
          <div className="ham-section d-flex justify-content-center">
            <span className="open-menu">
              <img src={menu} className="img-fluid" alt="menu" />
            </span>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/abdallah-adam0">
              <FaLinkedinIn />
            </a>
            <a href="https://fr-fr.facebook.com/">
              <FaFacebookF />
            </a>

            <a href="https://twitter.com/?lang=fr">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      {/* <!----LEFT-BAR-------> */}
      {/* <!----Right-BAR-------> */}
      <div className="left-bar-section">
        <div className="left-content-inner d-flex justify-content-between flex-column h-100">
          <div className="logo-section">
            <a href="/">
              <img
                src={logo}
                style={{ margin: "14px 0px 0px 0px" }}
                className="img-fluid"
                alt="logo"
              />
            </a>
          </div>

          <div className="copyright-section text-center">
            <p>© Abdallah ADAM</p>
          </div>
        </div>
      </div>
      {/* <!----Right-BAR-------> */} {/* <!----nav-------> */}
      <section className="nav-section overlay">
        <div className="close-menu">
          <svg
            width="23.312"
            height="23.32"
            fill="#fff"
            viewBox="0 0 1000 1000"
          >
            <path d="M945.7 989.4L10 53.8 54.3 9.4 990 945.1l-44.3 44.3z" />
            <path d="M10 946.2L945.7 10.6 990 54.9 54.3 990.6 10 946.2z" />
          </svg>
        </div>
        <div className="container">
          <div className="row m-200">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="navcolumn" id="nav-column-first">
                    <h2>Page d'accueil</h2>
                    <a className="cd-btn" href="/">
                      Accueil
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="navcolumn" id="nav-column-second">
                    <h2>Mes projets</h2>
                    <a
                      className="cd-btn"
                      href="https://evernote-clone-7e3b6.web.app/"
                    >
                      Evernote Clone
                    </a>
                    <a
                      className="cd-btn"
                      href="https://abdallah1996adam.github.io/The-Tours/"
                    >
                      The Tours
                    </a>
                    <a
                      className="cd-btn"
                      href="https://abdallah1996adam-shopping-website.netlify.app/"
                    >
                      E-commerce Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!----nav-------> */}
      <main>
        <div className="cd-contact2 cd-main-content2">
          <div className="wrapper2 contacty2">
            <div className="contactbanner2">
              <div className="bannertxtc2">
                <div className="paperplane2">
                  <img src={airplane} alt="airplane" />
                </div>
                <div className="bannersplat2">
                  <img
                    src={fluidDark}
                    alt="fluid dark"
                    className="splatoverlay2"
                  />
                  <div className="fluid2 lbdark2"></div>
                </div>
                <h1 class="fade-in2">Envoyez-moi une note</h1>
              </div>
              <div className="scroll2 bounce2"></div>
            </div>
            <div className="formholder2">
              <div class="bluewrapcontact2 group2">
                <form action="" onSubmit={handleClick}>
                  <div className="fieldwrap group2">
                    <div className="formleft">
                      <h3 className="fieldlabel">Votre nom</h3>
                      <br />
                      <input
                        type="text"
                        name="cf_name"
                        id=""
                        placeholder="Votre nom"
                      />
                      <br />
                    </div>
                    <div className="formright">
                      <h3 className="fieldlabel">Votre e-mail</h3>
                      <br />
                      <input
                        type="text"
                        name="cf_name"
                        id=""
                        placeholder="Votre email"
                      />
                      <br />
                    </div>
                  </div>
                  <div className="formmessage">
                    <h3 className="fieldlabel">Votre message</h3>
                    <br />
                    <textarea
                      name="cf_message"
                      placeholder="votre message"
                      className="formmessagestyle"
                    ></textarea>
                    <br />
                  </div>
                  <input type="submit" value="Envoyer !" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Contact;
