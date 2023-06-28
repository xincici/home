import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
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
    color: "#E95800",
  },
  {
    text: "Click Game",
    url: "https://xincici-clickgame.netlify.app/",
    description: "A easy number click game.",
    color: "#E95800",
  },
  {
    text: "Guess Number",
    url: "https://xincici-1a2b.netlify.app/",
    description: "A guess number game, also called 1a2b",
    color: "#E95800",
  },
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>🎉🎉 xincici 🎉🎉</span>
      </h1>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
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
