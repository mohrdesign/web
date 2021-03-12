import React from 'react'
import styled from 'styled-components'
import * as Color from '../utils/colors'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentContainer from '../layouts/ContentContainer'
import Section from '../components/Section'
// import ArticleHeader from '../components/ArticleHeader'
import ContactSection from '../components/ContactSection'
import AnimatedSVG from '../components/svgs/AnimatedSVG'
import { breakpoint } from '../layouts/breakpoints'
import GridImage from '../../static/grid.svg'
import CircleImage from '../../static/primitive-circle-purple.svg'
import CircleImageSm from '../../static/primitive-circle-small-purple.svg'
import TriangleImage from '../../static/primitive-triangle-purple.svg'
import { StaticImage } from "gatsby-plugin-image"
import TwitterIcon from '../components/svgs/TwitterIcon'
import FacebookIcon from '../components/svgs/FacebookIcon'
import LinkedInIcon from '../components/svgs/LinkedInIcon'

const AccessibilityPartOne = () => {
  return (
    <div>
      <ContentContainer><Header/></ContentContainer>
      <Helmet>
        <html className="secondarypage"/>
      </Helmet>
      <ContentContainer>
        <Grid>
          <Title>Accessibility Talk Pt 1: Defaults</Title>
          <HeroImage></HeroImage>
          <ArticleContent>
            <ArticleText>
              <ParagraphTitle>Introduction</ParagraphTitle>
              <p>Mohr Design has been working on accessibility designs over the last two years, using the user’s experience to guide us. Most organizations are still figuring out the best way to approach accessibility (a11y) design, so we reached out to accessibility expert, Thomas Logan (owner of Equal Entry), for advice on how to create a delightful experience for our users with disabilities. See below for that conversation.</p>
              <SecondaryParagraphTitle>Cort Langworthy</SecondaryParagraphTitle>
              <p>When is it appropriate to deviate from the default top left to bottom right tab order? Priority of communication is taken care of for sighted users in many different ways through the use of typography color and other basic design techniques. But in doing so creates a mismatch between visual design and an a11y considerate experience. Creating a custom tab order can and should compensate for that of course, but when do golden paths for the accessible user rise to a level where we should break from this typical pattern?</p>
              <SecondaryParagraphTitle>Thomas Logan</SecondaryParagraphTitle>
              <p>For the logo consideration a "Skip to content" link should be thought about. We basically avoid having the logo be the first thing someone encounters by adding the Skip to content link that allows a keyboard user to skip over both the homepage logo and the various repetitive navigation links that exist at the top of the page.</p>
            </ArticleText>
            <Figure hasShadow>
              <StaticImage 
                src="../assets/images/articles/a11y-pt1/skip_to_content.png"
                alt="Google search results page with skip to content link"
                width={1270}
                height={872}
              />
              {/* <FigureCaption>Google's search results page</FigureCaption> */}
            </Figure>
            <ArticleText>
              <p>First canonical example for me is the Google homepage. You start in the search field rather than tabbing through Gmail, Images, Menu, and Profile Photo at the top. I think this rule should be broken more frequently when it is a web site or application that a person uses frequently. I agree with the traditional logo example as another logical place where we don't want to go to the immediate default.</p>
            </ArticleText>
            <Figure hasShadow>
              <StaticImage 
                src="../assets/images/articles/a11y-pt1/google_focus_on_search.png"
                alt="Google home page with search bar focused"
                width={1270}
              />
            </Figure>
            <ArticleText>
              <p>If you hire someone from the accessibility Consulting world, they're going to teach you the general rules. They're going through so many things and then somewhere in the translation the general rule just becomes this like absolute rule and a lot of organizations like there. They've somehow turned it into like no it has to be this way. It's like well technically that's not even what the standard says but the nature of how this stuff gets taught. It's easier just to be like well, generally Do it like this and then somewhere that becomes don't change it.</p>
              <p>The Web Content Accessibility Guidelines <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html">Success Criterion 2.4.3 Focus Order</a> allow for "focusable components receive focus in an order that preserves meaning and operability" however they do not give concrete illustrations of when it is appropriate to do so. I hope as we continue this conversation we can help illustrate thoughtful cases where it is appropriate to deviate from top to bottom left to right. Many people end up following the WCAG guidelines with a very rigid thought that it must always be top to bottom left to right.</p>
            </ArticleText>
            <Figure>
              <StaticImage 
                src="../assets/images/articles/a11y-pt1/default_tab_order.png"
                alt=""
                width={1270}
              />
            </Figure>
            <Figure>
              <StaticImage 
                src="../assets/images/articles/a11y-pt1/user_tab_order.png"
                alt=""
                width={1270}
              />
            </Figure>
            <ArticleText>
              <SecondaryParagraphTitle>Cort Langworthy</SecondaryParagraphTitle>
              <p>Most examples are developer focused and provide code examples… We need more design guidance.</p>
              <SecondaryParagraphTitle>Andre Mohr</SecondaryParagraphTitle>
              <p>Why is that? So they can't get sued over things?</p>
              <SecondaryParagraphTitle>Thomas Logan</SecondaryParagraphTitle>
              <p>Probably because there were arguments in the working group when this was getting written that like, hey, we can't make this like an absolute rule because there are things that we're probably you know gonna put into the discussion but I think because they don't put in examples. Like that's always a critique. It's not like they put in like hey, here's an example of when it did make sense to change the order and it still preserved the meaning and operability. They don't show you that as a reference case. So then everyone ends up being like okay, just make it this rule of like top-down left to right. I think that's why it's like good if we put in examples and then we actually put the discussion of like here's how we thought about the meaning and operability. You know, either through user testing or through our thoughts we're explaining it and I mean be really interesting to people so my party sort of pointing that out from the w3c. Well, they say that but they don't actually illustrate it. So in this conversation, we're trying to like Show you like in it one or two examples and say like here's how you could think about that.</p>
              <SecondaryParagraphTitle>Cort Langworthy</SecondaryParagraphTitle>
              <p>I think your example is a good one. And I think it's an interesting take on that question. It would be helpful to show a small piece of a website and talk about how that particular problem might be addressed and create specific examples. Because that is exactly what is so annoying – there's nothing but talk about all this. Show me. There's no “Here’s an example of how I did it, and I'm going to explain why I did it this way.</p>
              <SecondaryParagraphTitle>Thomas Logan</SecondaryParagraphTitle>
              <p>Try hitting tab once the close button is the first element that receives focus on this <a href="https://getbootstrap.com/docs/4.0/components/modal/">modal dialog example.</a></p>
            </ArticleText>
            <Figure hasShadow>
              <StaticImage 
                src="../assets/images/articles/a11y-pt1/bootstrap_modal_demo.png"
                alt="The Bootstrap CSS Framework's modal dialog"
                width={1270}
              />
            </Figure>
            <ArticleText>
              <p>Another example could be a sequenced set of actions in a user interface. For example Google Maps searching for nearby restaurants every time I make a selection the focus order does not move back up to the top of page. It keeps moving through a logical context on the page.</p>
              <SecondaryParagraphTitle>Cort Langworthy</SecondaryParagraphTitle>
              <p>I think they're always a desire to teach somebody how to obey a rule rather than how to think– you can scale rules. It's harder to scale thinking. If you write rules, then you can automate a bunch of it, or pay someone less money to do it. If you have to hire people to think, it takes a longer and they are expensive.</p>
              <SecondaryParagraphTitle>Thomas Logan</SecondaryParagraphTitle>
              <p>Right, and then you're worried because if they thought the wrong way and then they did it wrong. You're like kind of legally at risk or becoming more legally at risk with this stuff incidents.</p>
            </ArticleText>
          </ArticleContent>
          <ShareLinks>
            <p>Share this article</p>
            <SocialLinks>
              <SocialLink><TwitterIcon/></SocialLink>
              <SocialLink><FacebookIcon/></SocialLink>
              <SocialLink><LinkedInIcon/></SocialLink>
            </SocialLinks>
          </ShareLinks>
        </Grid>
      {/* </ContentContainer> */}
        <Divider />
      {/* <ContentContainer> */}
        <Grid>
          <About>
            <AboutCard>
              {/* <AboutImage bgImage={Color.GradientDark}></AboutImage> */}
              <AboutImage>
                <StaticImage 
                  src="../assets/images/articles/about_mohr.png"
                  alt=""
                />
              </AboutImage>
              <AboutContent>
                <AboutTitle>About Mohr Design</AboutTitle>
              </AboutContent>
            </AboutCard>
            <AboutCard>
              <AboutImage>
                <StaticImage 
                  src="../assets/images/articles/about_equalentry.png"
                  alt=""
                />
              </AboutImage>
              <AboutContent>
                <AboutTitle>About Equal Entry</AboutTitle>
              </AboutContent>
            </AboutCard>
          </About>
        </Grid>
        <Primitives/>
      </ContentContainer>
      <Footer/>
    </div>
  )
}

const BaseText = props => `
  color: ${Color.Black};
  margin: 0em;
  font-weight: 400;
  ${breakpoint.for_phone_only`
    font-size: 15px;
    line-height: 24px;
    grid-column: span 12;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 16px;
    line-height: 25px;
    grid-column: 2 / span 10;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 18px;
    line-height: 29px;
    grid-column: 2 / span 10;
  `}
  ${breakpoint.for_desktop_up`
    font-size: 18px;
    line-height: 29px;
    grid-column: 3 / span 8;
  `}
`

const BaseGrid = props => `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1em;
`

const Divider = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background: #dadada;
`

const Grid = styled.div`
  ${BaseGrid}
`
const Title = styled.h1`
  grid-column: 3 / span 8;
  text-align: center;
  color: ${Color.Black};
  margin: 2em 0em 1em;
  font-weight: 800;
  ${breakpoint.for_phone_only`
    font-size: 29px;
    line-height: 36px;
    grid-column: 2 / span 10;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 40px;
    line-height: 48px;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 50px;
    line-height: 56px;
  `}
`
const ShareLinks = styled.div`
  ${breakpoint.for_phone_only`
    margin: 2em auto;
  `}
  ${breakpoint.for_tablet_portrait_up`
    margin: 7em auto;
    margin-bottom: 14em;
  `}
  text-align: center;
  grid-column: span 12;
  font-size: 14px;
  font-weight: 500;
`
const SocialLinks = styled.ul`
`

const SocialLink = styled.li`
  list-style-type: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
  border-radius: 26px;
  background-color: #F2F2F2;
  margin-right: 0.75em;
  &:last-child {
    margin-right: none;
  }
  line-height: 52px;
`

const About = styled.div`
  margin: 5em 0;
  ${breakpoint.for_phone_only`
    grid-column: span 12;
  `}
  ${breakpoint.for_tablet_portrait_up`
    grid-column: span 12;
  `}
  ${breakpoint.for_tablet_landscape_up`
    grid-column: span 12;
  `}
  ${breakpoint.for_desktop_up`
    grid-column: 2 / span 10;
  `}
`
const AboutCard = styled.div`
  ${BaseGrid}
  border-radius: 25px;
  border: 1px solid #DADADA;
  /* background-image: ${Color.GradientDark}; */
  ${breakpoint.for_phone_only`
    margin-bottom: 1em;
  `}
  ${breakpoint.for_tablet_portrait_up`
    margin-bottom: 1.5em;
  `}
`
const AboutImage = styled.div`
  ${breakpoint.for_phone_only`
    grid-column: span 12;
  `}
  ${breakpoint.for_tablet_portrait_up`
    grid-column: span 3;
    margin: 16px 0 12px 16px;
  `}
  & > .gatsby-image-wrapper img {
    border-radius: 15px;
  }
`
const AboutContent = styled.div`
  ${breakpoint.for_phone_only`
    grid-column: span 12;
  `}
  ${breakpoint.for_tablet_portrait_up`
    grid-column: span 9;
  `}
`
const AboutTitle = styled.h4`
  ${BaseText}
  color: ${Color.Black};
  margin: 1em 0;
  font-weight: 600;
  ${breakpoint.for_phone_only`
    font-size: 18px;
    line-height: 29px;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 20px;
    line-height: 36px;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 24px;
    line-height: 40px;
  `}
`
const AboutText = styled.p`

`
const HeroImage = styled.div`
  border-radius: 25px;
  height: 310px;
  background-image: ${Color.GradientDark};
  ${breakpoint.for_phone_only`
    grid-column: span 12;
    margin-bottom: 2em;
  `}
  ${breakpoint.for_tablet_portrait_up`
    grid-column: span 12;
    margin-bottom: 3em;
  `}
  ${breakpoint.for_tablet_landscape_up`
    grid-column: span 12;
  `}
  ${breakpoint.for_desktop_up`
    grid-column: 2 / span 10;
  `}
`
const ArticleContent = styled.div`
  ${BaseText}
`
const ParagraphTitle = styled.div`
  ${BaseText}
  font-weight: 600;
  margin-bottom: 0px;
`
const SecondaryParagraphTitle = styled.div`
  ${BaseText}
  ${breakpoint.for_phone_only`
    font-size: 11.6px;
    line-height: 21px;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 12.5px;
    line-height: 25px;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 14px;
    line-height: 29px;
  `}
  ${breakpoint.for_desktop_up`
    font-size: 14px;
    line-height: 29px;
  `}
  font-weight: 500;
  margin-bottom: 0px;
  color: ${Color.Primary};
`
const ArticleText = styled.div`
  grid-column: span 12;
`
const Figure = styled.div`
  & > .gatsby-image-wrapper {
    border-radius: 6px;
    box-shadow: ${props => props.hasShadow ? 
      'rgba(0, 0, 0, 0.05) 0px 32px 32px, rgba(0, 0, 0, 0.05) 0px 16px 16px, rgba(0, 0, 0, 0.05) 0px 8px 8px, rgba(0, 0, 0, 0.05) 0px 4px 4px, rgba(0, 0, 0, 0.2) 0px 0px 2px;'
      : 'none' 
    }
  }
  ${breakpoint.for_phone_only`
    margin: 2em 0;
  `}
  ${breakpoint.for_tablet_portrait_up`
    margin: 4em 0;
  `}
`
const FigureCaption = styled.caption`
  ${BaseText}
  ${breakpoint.for_phone_only`
    font-size: 11.6px;
    line-height: 21px;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 12.5px;
    line-height: 25px;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 14px;
    line-height: 29px;
  `}
  ${breakpoint.for_desktop_up`
    font-size: 14px;
    line-height: 29px;
  `}
`

const Subhead = styled.h4`
  color: ${Color.NeutralDark};
  width: 22em;
  max-width: 90%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  opacity: 0.8;
  ${breakpoint.for_phone_only`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 20px;
    line-height: 30px;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 24px;
    line-height: 36px;
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
  background-image:    url(${CircleImageSm}),
                       url(${CircleImage}),
                       url(${TriangleImage});
  background-repeat:   no-repeat,
                       no-repeat,
                       no-repeat;
  ${breakpoint.for_phone_only`
    background-position: right -5em top 106em,
                         right -10em top -5em,
                         left -8em top 65em;
    background-size: 70%,90%,55%;
  `}
  ${breakpoint.for_tablet_portrait_up`
    background-position: right -13em top 106em,
                         right -10em top -5em,
                         left -8em top 65em;
    background-size: 50%,70%,35%;
  `}
  ${breakpoint.for_tablet_landscape_up`
    background-size: 40%,60%,35%;
  `}
  ${breakpoint.for_desktop_up`
    background-size: 35%,50%,35%;
  `}
  ${breakpoint.for_big_desktop_up`
    background-position: calc(50% + 40em) calc(0% + 90em),
                         calc(50% + 30em) calc(0% + -5em),
                         calc(50% - 34em) calc(0% + 65em);
    background-size: 400px, 690px, 450px;
  `}
`


export default AccessibilityPartOne
