// Github
import {Octokit} from '@octokit/rest';
import Repo from '../../types/Repo';

/** official GitHub wrapper library */
const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
  userAgent: 'devBook v1',
});

/**
 * fetch one user github repos and create a
 * @param owner githubusername
 * @returns a Repo array or undefined
 */
const getGithubRepos = async (owner: string) => {
  try {
    const {data: repos} = await octokit.repos.listForAuthenticatedUser({
      owner,
    });

    const newRepo: Repo[] = repos
      .filter((r: any) => r.private === false)
      .map((r: any) => ({
        url: r.html_url,
        stars: r.stargazers_count,
        forks: r.forks_count,
        description: r.description,
        name: r.name,
        watchers: r.watchers_count,
      }));
    return newRepo;
  } catch (err) {
    console.error(err);
  }
};

export default getGithubRepos;
