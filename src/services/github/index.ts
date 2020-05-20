// Github
import {Octokit} from '@octokit/rest';

/** official GitHub wrapper library */
const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
  userAgent: 'devBook v1',
});

export default async () => {
  const {data: repos} = await octokit.repos.listForAuthenticatedUser({
    owner: 'rjNemo',
  });

  console.log(repos);
};
