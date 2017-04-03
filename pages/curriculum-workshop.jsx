var React = require('react');
var HeroUnit = require('../components/hero-unit.jsx');
// use this LinkAnchorSwap component for hyperlinks
var LinkAnchorSwap = require('../components/link-anchor-swap.jsx');
var Illustration = require('../components/illustration.jsx');

var CurriculumWorkshop = React.createClass({
  statics: {
    pageClassName: 'curriculum-workshop',
    pageTitle: 'Curriculum Workshops'
  },
  render: function () {
    return (
        <div className="inner-container call-container">
          <section className="intro intro-after-banner">
           <Illustration
             height={175} width={175}
             src1x="/img/pages/community/svg/icon-circle-community.svg"
             alt="icon toolkit">
               <h1>Mozilla Curriculum Workshop</h1>
               <h2>Join us for a new episode each quarter!</h2>
           </Illustration>
          </section>

          <p>
          Co-hosts Amira Dhalla and Chad Sansing, along with producer Paul Oh, help participants answer the question, <em>"How can I use the web to teach and learn what’s important to me?"</em> Join us as we prototype teaching and learning materials live on-air and think out-loud through the curriculum design process.
          </p>

          <section className="callout-box">
            <h2>Upcoming Workshop</h2>
            <p className="date">February 16, 7 AM PT / 10 AM ET / 2PM UTC</p>
            <h1>Privacy & Security</h1>
          </section>

          <p>
            Join us for a discussion about the privacy and security as we begin a new quarterly schedule on the Mozilla Curriculum Workshop. What are the privacy and security choices that face youth every day? How can we help them develop the habits they need to keep themselves safe as participants on an open and free internet? How might we contribute to internet health by promoting strong privacy rights for all? Join co-hosts Amira Dhalla and Chad Sansing as they talk and prototype learning materials with Vishal Chavan, Cynthia Lieberman, and Chad Walker.
          </p>

          <p>
            You can also join the discussion on <LinkAnchorSwap to="https://discourse.webmaker.org/c/mozilla-curriculum-workshop">our community forum</LinkAnchorSwap> or <LinkAnchorSwap to="https://github.com/MozillaFoundation/curriculum-workshop">GitHub</LinkAnchorSwap>.
          </p>

          <h3>Workshop Video Stream</h3>
          <p>
            On the day of the Curriculum Workshop, the livestream will appear below. You may need to refresh your browser.
          </p>
          <div className="video-wrapper">
          <iframe width="560" height="315" src="https://air.mozilla.org/mozilla-curriculum-workshop-february-2017-privacy-security/video" frameBorder="0" allowFullScreen></iframe>
          </div>

          <h4>
            Open Agenda
            <a title="Open the agenda in a new tab" className="fa fa-external-link open-etherpad" href="https://public.etherpad-mozilla.org/p/curriculum-workshop-february-16-2017">
            </a>
          </h4>

          <iframe className="etherpad" src="https://public.etherpad-mozilla.org/p/curriculum-workshop-february-16-2017"></iframe>

          <h2>Upcoming Workshops</h2>

          <ul className="upcoming-workshops">
            <li>
              <p className="date">May 11th, 2017, 10am ET</p>
              <h2>Fake News</h2>
              <p>
                Join us on Thursday, May 11th, 2017, at 10 AM ET, to talk about teaching and learning in response to the Fake News phenomenon.
              </p>
            </li>
            <li>
              <p className="date">August 10th, 2017, 10am ET</p>
              <h2>Online Safety</h2>
              <p>
                Join us on Thursday, August 10th, 2017, at 10 AM ET, to revisit privacy and security. What resources can we make together to help learners understand the choices they have about online safety?
              </p>
            </li>
            <li>
              <p className="date">November 16th, 2017, 10am ET</p>
              <h2>Digital Inclusion and Equity</h2>
              <p>
                Join us on Thursday, November 16th, 2017, at 10 AM ET, to work on prototype teaching and learning resources that help promote digital inclusion and equity throughout our networks.
              </p>
            </li>
          </ul>

          <h2>Past Workshops</h2>

          <ul className="past-workshops">
            <li>
              <p className="date">October 30th, 2016</p>
              <h2>Live from MozFest</h2>
              <p>
                Join co-hosts Amira Dhalla and Chad Sansing live from London as they talk with guests from around the world about all the learning and making going on at at the festival. Members of the Mozilla Clubs network will appear on the webcast, as well, to share their MozFest experiences throughout the network.
              </p>
              <p className="watch-archive">
                <LinkAnchorSwap to="/community/curriculum-workshop/oct-30-2016/">Watch the Replay</LinkAnchorSwap>
              </p>
            </li>
            <li>
              <p className="date">October 11th, 2016</p>
              <h2>Ada Lovelace Day</h2>
              <p>
                Ada Lovelace is largely regarded as the first computer programmer, and her work and skills exemplified strength in STEM as she worked on the analytic engine, also known as an early mechanical general-purpose computer. Her work ethic and diligence in the field is an inspiration for women is to be celebrated and shared around the world. In our webcast this month, we’ll be recognizing the challenges, accomplishments and contributions of women leaders from the Mozilla Leadership Network around the globe. Join us to help build teaching and learning resources promoting women and the web.
              </p>
              <p className="watch-archive">
                <LinkAnchorSwap to="/community/curriculum-workshop/oct-11-2016/">Watch the Replay</LinkAnchorSwap>
              </p>
            </li>
            <li>
              <p className="date">September 29th, 2016</p>
              <h2>Maker Party & Copyright</h2>
              <p>
                Join us on September 29th as co-hosts Amira Dhalla and Chad Sansing and invited guests dig into this year’s Maker Party campaign around copyright and political action, especially in the EU. Learn about the copyright reform issues at play in Europe and how they connect to - or might impact - your local community and others around the world. Help us develop teaching and learning materials that make copyright, open licensing, and public domain clear and compelling to learners wherever you live.
              </p>
              <p className="watch-archive">
                <LinkAnchorSwap to="/community/curriculum-workshop/sept-29-2016/">Watch the Replay</LinkAnchorSwap>
              </p>
            </li>
            <li>
              <p className="date">July 12th, 2016</p>
              <h2>Brokering Web Literacy Learning Around the World</h2>
              <p>
                Join co-hosts Amira Dhalla and Chad Sansing to talk about brokering web literacy learning around the world. How do you connect youth with opportunities to learn about the web and use it in their daily lives?  Invited guests Mmaki Jantjies, Arkodyuti Saha, and friends will talk shop about brokering, network-building, and earning the trust of local communities and youth interested in the web.
              </p>
              <p className="watch-archive">
                <LinkAnchorSwap to="/community/curriculum-workshop/july-12-2016/">Watch the Replay</LinkAnchorSwap>
              </p>
            </li>
            <li>
              <p className="date">June 16th, 2016</p>
              <h2>Summer Learning</h2>
              <p>
                Join co-hosts Amira Dhalla and Chad Sansing broadcasting live from Mozilla’s all-hands work-week. Invited guests Su Adams, Bud Hunt, and Christopher Rogers, as well as drop-in Mozillians, will talk shop about summer learning, participatory learning outside school, and curriculum development on the web.
              </p>
              <p className="watch-archive">
                <LinkAnchorSwap to="/community/curriculum-workshop/june-16-2016/">Watch the Replay</LinkAnchorSwap>
              </p>
            </li>
            <li>
              <p className="date">May 10th, 2016</p>
              <h2>Youth Civic Engagement</h2>
              <p>
                On our May episode of the Mozilla Curriculum Workshop, Rafranz Davis, Jeremy Dean, and D.C. Vito will help us learn about youth civic engagement. We’ll talk about compelling examples of youth organization and leadership before we prototype resources that might help foster both. Join the work on our shared etherpad and help us build something useful to youth near you!
              </p>
              <p className="watch-archive">
                <LinkAnchorSwap to="/community/curriculum-workshop/may-10-2016/">Watch the Replay</LinkAnchorSwap>
              </p>
            </li>
            <li>
              <p className="date">April 12th, 2016</p>
              <h2>Physical Computing</h2>
              <p>
                On our April episode of the Mozilla Curriculum Workshop, <LinkAnchorSwap to="http://scholarslab.org/people/jeremy-boggs/">Jeremy Boggs</LinkAnchorSwap>, <LinkAnchorSwap to="http://www.nataliefreed.com/">Natalie Freed</LinkAnchorSwap>, <LinkAnchorSwap to="http://andregarzia.com/pages/en/blog/">Andre Garzia</LinkAnchorSwap>, and <LinkAnchorSwap to="http://technolojie.com/">Jie Qi</LinkAnchorSwap> will help us understand physical computing as a gateway into the Internet of Things (IoT), the network of connected devices embedded in everyday objects. An in-depth episode on IoT will follow this summer.
              </p>
              <p className="watch-archive">
                <LinkAnchorSwap to="/community/curriculum-workshop/april-12-2016/">Watch the Replay</LinkAnchorSwap>
              </p>
            </li>
            <li>
              <p className="date">March 8th, 2016</p>
              <h2>International Women's Day</h2>
              <p>
                On our inaugural, International Women’s Day episode, Ingrid Dahl, Claire Shorall, Kim Wilkens and friends prototype teaching and learning materials addressing women’s issues, rights, and accomplishments. Viewers can ask questions and share ideas and prototypes of their own through the embedded agenda and chat.
              </p>
              <p className="watch-archive">
                <LinkAnchorSwap to="/community/curriculum-workshop/march-8-2016/">Watch the Replay</LinkAnchorSwap>
              </p>
            </li>
          </ul>
        </div>
    );
  }
});

module.exports = CurriculumWorkshop;
