import React from 'react'

import {ReactComponent as GitHubSVG} from './svg/github.svg'
import {ReactComponent as LinkedInSVG} from './svg/linkedin.svg'
import {ReactComponent as SlackSVG} from './svg/slack.svg'
import {ReactComponent as TwitterSVG} from './svg/twitter.svg'

const socialLinks = [
  {
    Component: GitHubSVG,
    href: 'https://github.com/hygraph/gatsby-starter-hygraph-blog',
    title: 'GitHub',
  },
  {
    Component: SlackSVG,
    href: 'http://slack.hygraph.com',
    title: 'Slack',
  },
  {
    Component: TwitterSVG,
    href: 'https://twitter.com/hygraphcom',
    title: 'Twitter',
  },
  {
    Component: LinkedInSVG,
    href: 'https://www.linkedin.com/company/hygraph',
    title: 'LinkedIn',
  },
]

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="flex flex-col md:flex-row items-center md:justify-between py-6 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl space-y-6 md:space-y-0">
        <p className="text-gray-300">Powered by Hygraph &amp; Gatsby</p>
        <ul className="inline-flex space-x-6">
          {socialLinks.map(({ Component, href, title }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                className="block text-gray-300 hover:text-white p-1 text-sm"
                rel="noopener noreferrer"
                title={title}
              >
                <Component className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer