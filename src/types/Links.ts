interface Links {
  website: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  github: string;
  youtube: string;
}

/**
 * ensure link is formatted as http(s)//:...
 * @param link URI to process
 */
export const parseLink = (link: string): string => {
  if (link.slice(0, 4) === 'http') {
    return link;
  } else {
    return `http://${link}`;
  }
};

/**
 * @param githubUsername
 */
export const getGithubLink = (githubUsername: string) =>
  `https://github.com/${githubUsername}`;

export default Links;
