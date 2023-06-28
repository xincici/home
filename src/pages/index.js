import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: '96px 20px',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  textAlign: 'center'
}
const headingAccentStyles = {
  color: "#663399",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyle: 'none',
  textAlign: 'center',
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const links = [
  {
    text: "Number Puzzle",
    url: "https://xincici-puzzle.netlify.app/",
    description: "A number puzzle game, feel free to play with it.",
  },
  {
    text: "Click Game",
    url: "https://xincici-clickgame.netlify.app/",
    description: "A easy number click game.",
  },
  {
    text: "Guess Number",
    url: "https://xincici-1a2b.netlify.app/",
    description: "A guess number game, also called 1a2b.",
  },
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>xincici games</span>
      </h1>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
