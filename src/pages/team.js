import React from 'react'
import styled from 'styled-components'
import * as Color from '../utils/colors'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentContainer from '../layouts/ContentContainer'
import Section from '../components/Section'
import PageIntro from '../components/PageIntro'
import ContactSection from '../components/ContactSection'
import Person from '../components/Person'
import Partner from '../components/Partner'
import GridImage from '../../static/grid.svg'
import CircleImage from '../../static/primitive-circle.svg'
import TriangleImage from '../../static/primitive-triangle.svg'
import { breakpoint } from '../layouts/breakpoints'
import Layout from '../layouts/index'
import { graphql } from 'gatsby'

const TeamPage = ({ data }) => {
    return (
      <Layout>
        <ContentContainer><Header/></ContentContainer>
          <Helmet>
            <html className="secondarypage"/>
          </Helmet>
          <ContentContainer>
            <PageIntro>We are a group of experts in product design, research, content, strategy and business management.</PageIntro>
            <TeamGrid>
              <Person
                name="Alisha Dopkin"
                location="Denver"
                position="Stage Director"
                desc="Alisha has one belief in life: be fierce. She brings this fierceness and relentless enthusiasm to the table, managing teams to see products to the finish line. When she’s not kicking butt organizing a project, you can find her running bazillions of miles around Colorado with her 5yr old on her back."
                img={data.alishaImage.childImageSharp.gatsbyImageData}
                capabilities={["Project Management","Roadmapping","Design Workshops","Research", "Business & Technical Processes"]}
              />
              <Person
                name="Andre Mohr"
                location="Brooklyn"
                position="Head Honcho"
                desc="Andre has a passion for bringing a human experience to a digital world. He has 10+ years doing Product design for frog, Microsoft, and AOL, among others. A native German now residing in NYC, Andre’s (not so) secret resume includes DJ, snowboarder, photographer, sommelier, and father to a well-mannered and opinionated 4yr old."
                img={data.andreImage.childImageSharp.gatsbyImageData}
                capabilities={["Human-Centered Design","Design Workshops","Ideation Facilitation","User Research", "Creative Direction"]}
              />
              <Person
                name="Haley Love"
                location="Portland"
                position="Aesthetician"
                desc="Haley is so good at helping people fix their UX hang-ups we call her &quot;The Operator.&quot; With 8 years in the biz, she’s made games, sites, apps and everything else. If you plan to visit Haley, her husband and their 2 year old in beautiful Portland, OR, please bring your own snowboard or Ultimate disc."
                img={data.haleyImage.childImageSharp.gatsbyImageData}
                capabilities={["Visual Design","Branding","Usability Testing","Interaction Design"]}
              />
              <Person
                name="Alan Dickinson"
                location="Brooklyn"
                position="Pixel Pusher"
                desc="Alan is based in Brooklyn, New York. Most recently he designed for Spotify and Karma on their in-house teams. Before that, he worked at frog where he led interaction design efforts for fortune 500 clients. He’s a bit of a mystery man but what we do know is he’s insanely dependable, irritatingly level-headed, and incredibly driven. "
                img={data.alanImage.childImageSharp.gatsbyImageData}
                capabilities={["Interaction Design","Visual Design","Prototyping","Frontend Engineering"]}
              />
              <Person
                name="Julynn Benedetti"
                location="Portland"
                position="UX Artisan"
                desc="For Julynn, finally figuring out she was a designer was like finding out she got into Hogwarts. In her past life, she was a small town girl from Texas, a French and History double major, and an officer in the Air Force. Now Julynn works her magic by creating beautiful, intuitive experiences for frog design, AOL and most recently, Apple. In her free time, she thoroughly enjoys instigating impromptu arm wrestling tournaments, beating her husband at board games, and reading books (complete with accents and voices) aloud to her kids."
                img={data.julynnImage.childImageSharp.gatsbyImageData}
                capabilities={["User Experience Design","User Interface Design","Research"]}
              />
              <Person
                name="Sam Kang"
                location="New York"
                position="The Mechanic"
                desc="Sam has a natural curiosity which started as a kid taking apart and putting back together all the machines in his house. It later manifested itself through digital games, multi user experiences, and online entertainment for all ages. These days that curiosity helps drive serious change for serious clients (and the not so serious). Off the clock, Sam hangs out with his two kids and wife in glorious Northern New Jersey."
                img={data.samImage.childImageSharp.gatsbyImageData}
                capabilities={["Interaction Design","Visual Design","Branding","Motion Design","Prototyping"]}
              />
              <Person
                name="Cort Langworthy"
                location="Denver"
                position="Flowmaster"
                desc="Cort makes beautiful experiences flow like music from the toughest design challenges. He's been jamming on designs as long as he can remember, bringing over 30 years of experience to the Mohr Design team. Despite the Dad vibes, Cort is a bit of a savant, keeping his fingers on the pulse of any and all things technology. Outside of work, you can find him fronting his band, Open Space, and enjoying the stunning wilderness of Colorado in his vintage Airstream, fly rod in hand."
                img={data.cortImage.childImageSharp.gatsbyImageData}
                capabilities={["Interaction Design","Visual Design","Branding","Usability Testing","Motion Graphics"]}
              />
              <Person
                name="Jorge De La Garza"
                location="Brooklyn"
                position="Project Doula"
                desc="Jorge has been supporting projects for years, guiding their growth and transition with care and enthusiasm. His experience is wide-ranging, including product and process design, media strategy development, content creation, and experiential event production. When he’s not talking about contracts and timelines, he's creating project plans for complicated dinners, testing recipes, and working on his faux taxidermy obsession."
                img={data.jorgeImage.childImageSharp.gatsbyImageData}
                capabilities={["Project Management","Roadmapping","Design Workshops","Research", "Technical & Business Processes"]}
              />
              <Person
                name="Laura Zimbaldi"
                location="New York"
                position="Project Maven"
                desc="Laura knows how to run a project like she knows the back of her hand. It's fair to say that Laura kicks butt at pretty much everything. She has years of experience working on every kind of project - including jet engines(!!!), and brings a sense of humor and a killer sense of style to her work. When she's not managing to perfection, she's teaching her two boys how to boat, crush it on the ski slopes and sweat awesomeness."
                img={data.lauraImage.childImageSharp.gatsbyImageData}
                capabilities={["Project Management","Roadmapping","Design Workshops","Research","Technical & Business Processes"]}
              />
              <Person
                name="Amy Fisher"
                location="Denver"
                position="Socialist"
                desc="Amy is our social media expert and content strategist. With an adventurous spirit and a discerning eye, she distills complicated messages into approachable prose. For 12 years she has been crafting her writing and editing skills in various roles and industries. Amy may be our social guru, but she's more inclined to be scaling a mountain; this gal has summited 15 of Colorado's 14,000-foot peaks."
                img={data.amyImage.childImageSharp.gatsbyImageData}
                capabilities={["Content Strategy","Copywriting","Social"]}
              />
            </TeamGrid>
            <PartnerHeader>We partner with some great people.</PartnerHeader>
            <PartnerGrid>
              <Partner
                name="Evan Hirsch"
                position=""
                desc={<div dangerouslySetInnerHTML={{ __html: "Evan is Managing Partner of Engine Co. 4, LLC a consortium of business, creative and technical executives providing strategic direction to clients in games, healthcare and applied research. He is also a partner at <a target='_blank' href='http://theplayniceinstitute.com/'>The PlayNice Institute</a>, a company that designs fun, evidence based games to help children overcome anxiety and depression disorders." }} />}
                img={data.evanImage.childImageSharp.gatsbyImageData}
              />
              <Partner
                name="Thomas Logan"
                position=""
                desc={<div dangerouslySetInnerHTML={{ __html: "<div>As owner of <a target='_blank' href='https://equalentry.com'>Equal Entry</a>, Thomas has spent the past 15 years assisting organizations to create technology solutions that work for people with disabilities. Over his career Logan has worked on project deliverables for federal, state, and local government agencies as well as private organizations from startups to Fortune 500s.</div>" }} />}
                img={data.thomasImage.childImageSharp.gatsbyImageData}
              />
            </PartnerGrid>
            <Primitives/>
          </ContentContainer>
          <Section dark>
            <ContentContainer>
              <SpecialtiesGrid>
                <Intro>
                  <PageIntro inPage withSubhead color={Color.White}>And though she be but little, she is fierce.</PageIntro>
                  <p>Our small team packs a big punch, with a diverse range of specializations and skillsets. Our flexible and nimble structure helps us integrate seamlessly into teams from organizations of all sizes to do great work with minimal overhead.</p>
                </Intro>
                <List>
                  <ul>
                    <li>Seeing the Big Picture</li>
                    <li>Putting Users First</li>
                    <li>Prioritizing</li>
                    <li><del>Giving into Demands</del></li>
                    <li>Finding Balance</li>
                    <li>Strategizing</li>
                    <li><del>Lighting Fires</del></li>
                    <li>Putting out Fires</li>
                    <li><del>Buying Kegerators</del></li>
                  </ul>
                </List>
                <List>
                  <ul>
                    <li>Listening</li>
                    <li>Snacking</li>
                    <li>Listening to Podcasts</li>
                    <li><del>Discriminating</del></li>
                    <li>Snowboarding & Skiing</li>
                    <li><del>Putzing Around</del></li>
                    <li>Drinking (lots of) Wine</li>
                  </ul>
                </List>
              </SpecialtiesGrid>
            </ContentContainer>
          </Section>
          <ContactSection/>
          <Footer/>
      </Layout>
    )
  }

export const query = graphql`
  query BlurUpQuery {
    alanImage: file(relativePath: {regex: "/alan_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          placeholder: TRACED_SVG,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 },
          transformOptions: { duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }}
        )
      }
    }
    alishaImage: file(relativePath: {regex: "/alisha_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          placeholder: TRACED_SVG,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 },
          transformOptions: { duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }}
        )
      }
    }
    andreImage: file(relativePath: {regex: "/andre_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 }, 
          transformOptions: {
            duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }
          }
        )
      }
    }
    haleyImage: file(relativePath: {regex: "/haley_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 }, 
          transformOptions: {
            duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }
          }
        )
      }
    }
    julynnImage: file(relativePath: {regex: "/julynn_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 }, 
          transformOptions: {
            duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }
          }
        )
      }
    }
    cortImage: file(relativePath: {regex: "/cort_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 }, 
          transformOptions: {
            duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }
          }
        )
      }
    }
    samImage: file(relativePath: {regex: "/sam_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 }, 
          transformOptions: {
            duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }
          }
        )
      }
    }
    jorgeImage: file(relativePath: {regex: "/jorge_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 }, 
          transformOptions: {
            duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }
          }
        )
      }
    }
    lauraImage: file(relativePath: {regex: "/laura_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 }, 
          transformOptions: {
            duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }
          }
        )
      }
    }
    amyImage: file(relativePath: {regex: "/amy_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 }, 
          transformOptions: {
            duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }
          }
        )
      }
    }
    evanImage: file(relativePath: {regex: "/hirsch_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 }, 
          transformOptions: {
            duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }
          }
        )
      }
    }
    thomasImage: file(relativePath: {regex: "/thomas_front/"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          quality: 80,
          tracedSVGOptions: { background: "#8CFFE6", color: "#A6A8AF", turdSize: 0 }, 
          transformOptions: {
            duotone: { highlight: "#19FFCD", shadow: "#4E535F", opacity: 80 }
          }
        )
      }
    }
  }
`

const PartnerHeader = styled.h3`
  color: ${Color.Primary};
  margin: 0em 0em 1em 0em;
  width: 13em;
  max-width: 90%;
`
const Intro = styled.div`
  color: ${Color.White};
  & p {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${breakpoint.for_phone_only`
    grid-column: span 2;
  `}
  ${breakpoint.for_tablet_portrait_up`
    padding-right: 3em;
  `}
`
const List = styled.div`
  color: ${Color.AccentBright};
  padding-top: 8px;
  font-size: 1.2em;
  font-weight: 500;
  line-height: 1.45;
  & li {
    padding: 5px 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  & del {
    text-decoration: line-through;
  }
  ${breakpoint.for_phone_only`
    &:first-child {
      grid-row-start: 2;
    }
    margin-top: 0;
    padding-top: 0;
    font-size: 1em;
    font-weight: 500;
  `}
`
const SpecialtiesGrid = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-row-gap: 0em;
  ${breakpoint.for_phone_only`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1.7fr;
  `}
  ${breakpoint.for_tablet_portrait_up`
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  `}
  ${breakpoint.for_desktop_up`
    grid-template-columns: 2fr 1fr 1fr;
  `}
`
const TeamGrid = styled.div`
  margin-bottom: 3em;
`
const PartnerGrid = styled.div`
  display: table;
  & > * {
    display: table-cell;
    vertical-align: top;
  }
  ${breakpoint.for_phone_only`
    & > * {
      display: block;
    }
  `}
  @supports (display:grid) {
    display: grid;
    grid-gap: 3em;
    grid-template-columns: 1fr 1fr;
  }

  ${'' /* display: grid;
  grid-gap: 3em;
  grid-template-columns: 1fr 1fr; */}
  margin: 3em 0em 6em 0em;
  ${breakpoint.for_phone_only`
    grid-template-columns: 1fr;
  `}
`
const Primitives = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.2;
  overflow: hidden;
  background-image:    url(${GridImage}),
                       url(${CircleImage}),
                       url(${TriangleImage});
  background-repeat:   no-repeat,
                       no-repeat,
                       no-repeat;
  background-position: left -40em top 45em,
                       right -12em top 95em,
                       left -14em top 140em;
   ${breakpoint.for_phone_only`
     background-position: left -26em top 21em,
                          right -12em top 115em,
                          left -10em top 210em;
     background-size: 600px, 370px, 290px;

   `}
   ${breakpoint.for_tablet_portrait_up`
     background-position: left -34em top 23em,
                          right -12em top 70em,
                          left -10em top 140em;
     background-size: 720px, 420px, 290px;
   `}
   ${breakpoint.for_tablet_landscape_up`
     background-position: left -26em top 28em,
                          right -12em top 70em,
                          left -10em top 140em;
     background-size: 760px, 500px, 320px;
   `}
   ${breakpoint.for_desktop_up`
     background-position: left -40em top 28em,
                          right -12em top 70em,
                          left -10em top 140em;
     background-size: 1000px, 600px, 390px;
   `}
   ${breakpoint.for_big_desktop_up`
     background-position: calc(50% - 30em) calc(0% + 28em),
                          calc(50% + 30em) calc(0% + 100em),
                          calc(50% - 42em) calc(0% + 140em);
     background-size: 1000px, 690px, 450px;
   `}
`
export default TeamPage
