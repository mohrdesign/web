import React from "react"
import AppleTouchIcon from '../static/favicon/apple-touch-icon.png'
import FavIcon32 from '../static/favicon/favicon-32x32.png'
import FavIcon16 from '../static/favicon/favicon-16x16.png'
import IconManifest from '../static/favicon/manifest.json'
import SafariPinnedTabIcon from '../static/favicon/safari-pinned-tab.svg'


let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={FavIcon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={FavIcon16} />
          <link rel="manifest" href={IconManifest} />
          <link rel="mask-icon" href={SafariPinnedTabIcon} color="#336cf8" />
          <meta name="apple-mobile-web-app-title" content="Mohr Design" />
          <meta name="application-name" content="Mohr Design" />
          <meta name="theme-color" content="#ffffff" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

export default HTML