import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/adventure-project-image.png'
import pic03 from '../images/adventure-project-image-2.png'
import pic04 from '../images/a-glass-of-harmony-image.png'
import pic05 from '../images/a-glass-of-harmony-image-2.png'
import pic06 from '../images/about-pic.jpg'


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="screen with code" /></span>
          <p>I'm a passionate and driven Junior Full-Stack web developer looking for new opportunites to expand my experience/knowledge. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>My technology stack consists of knowledge and experience with:</p>
          <ul>
            <li>
              Javascript
            </li>
            <li>
              HTML5
            </li>
            <li>
              CSS3
            </li>
            <li>
              React.js
            </li>
            <li>
              Gatsby.js
            </li>
            <li>
              Angular.js
            </li>
            <li>
              Express.js
            </li>
            <li>
              Node.js
            </li>
            <li>
              PostgreSQL
            </li>
          </ul> 
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <a href='https://www.adventureproject.tk/'><h1>Adventure Project</h1></a>
          <p>A hiking trail information, full-stack application that allows users to look up trails by state or their location and update their to-do/have-done section of their profile. 
Technologies used:</p>
          <ul>
            <li>
              React.js
            </li>
            <li>
              Express.js
            </li>
            <li>
              Node.js
            </li>
            <li>
              PostgreSQL
            </li>
            <li>
              Utilized CSS media queries to build a mobile first and responsive design
            </li>
            <li>
              Used Redux to manage global state and user specific information
            </li>
            <li>
              Used bcrypt for authenticating users
            </li>
            <li>
              API's: Trail API, Google Maps API, Google Geolocation API, & Dark Sky API
            </li>
            <li>
              Hosted Project with Digital Ocean on Ubuntu server
            </li>
          </ul>
          <span className="image main"><img src={pic02} alt="adventure project site 1" /></span>
          <span className="image main"><img src={pic03} alt="adventure project site 2" /></span>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <a href='https://www.aglassofharmony.com/'><h1>A Glass of Harmony</h1></a>
          <p>A fully funcional ecommerce website, including administrator capabilities, created for a small handmade jewelry business. Technologies used:</p>
          <ul>
            <li>
              React.js
            </li>
            <li>
              Express.js
            </li>
            <li>
              Node.js
            </li>
            <li>
              PostgreSQL
            </li>
            <li>
              Used Nodemailer to allow users to contact website's administrator
            </li>
            <li>
              Used Auth0 for authenticating users
            </li>
            <li>
              Used Redux and Redux Thunk Middleware for state management
            </li>
            <li>
              Utilized sessions and sessionStorage to manage the cart
            </li>
            <li>
              Project was awarded the "Best Overall" award at DevMountain Bootcamp
            </li>
            <li>
              Hosted Project with Digital Ocean on Ubuntu server
            </li>
          </ul>
          <span className="image main"><a href='https://aglassofharmony.com/'><img src={pic04} alt="a glass of harmony site home page" /></a></span>
          <span className="image main"><a href='https://aglassofharmony.com/products'><img src={pic05} alt="a glass of harmony site product page" /></a></span>
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic06} alt="" /></span>
          <p>I am a former Home & Commercial Claims Specialist for State Farm transitioning careers into web and software development. I'm excited to embark into the world of web application development to further my knowledge and skillset. I'm interested in employment opportunities where I will be impactful in the development process and be in an environment that encourages personal development.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form name="contact" method="POST" netlify>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li> */}
            <li><a href="https://www.facebook.com/drew.mcintire.79" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            {/* <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li> */}
            <li><a href="https://github.com/mcintdre000" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main