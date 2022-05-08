import React from "react";
import "./Footer.css";
import { BsTelephoneFill,BsTwitter,BsInstagram,BsLinkedin} from "react-icons/bs";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="arrange--foot">
          <div>
            <h4>Find us</h4>
            <p>
              lorem Id culpa fugiat enim reprehenderit culpa commodo aliquip
              ipsum nulla quis ad pariatur sit non.
            </p>
            <p>
              <span>
                <BsTelephoneFill />
              </span>
              +0-458262548
              <p>
                <span>
                  <FaEnvelope />
                </span>
                info@example.com
              </p>
            </p>
          </div>
          <div>
            <h4>Quick links</h4>
            <p className="Quick--links">
              <a href="#">Link1</a>
              <a href="#">Link2</a>
              <a href="#">Link3</a>
              <a href="#">Link4</a>
              <a href="#">Link5</a>
            </p>
          </div>
          <div>
            <h4>Quick links</h4>
            <p className="Quick--links">
              <a href="#">Link1</a>
              <a href="#">Link2</a>
              <a href="#">Link3</a>
              <a href="#">Link4</a>
              <a href="#">Link5</a>
            </p>
          </div>
          <div>
            <h4>Follow us</h4>
            <p>Aute ea consectetur esse ex in laborum ipsum veniam do in dolore sunt.
               Irure do aliqua esse laboris.Proident veniam sint enim ea amet fugiat fugiat.</p>
          </div>
        </div>
        <div className="Social--foot">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
              <BsTwitter/>
          </a>
          <a href="#">
              <BsInstagram/>
          </a>
          <a href="#">
              <BsLinkedin/>
          </a>
        </div>
      </footer>
    </>
  );
}
