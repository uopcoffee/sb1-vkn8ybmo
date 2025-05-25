// External dependencies: openai, octokit, gray-matter
import OpenAI from 'openai';
import { Octokit } from 'octokit';
import matter from 'gray-matter';

const { OPENAI_API_KEY, GH_TOKEN } = process.env;

if (!OPENAI_API_KEY || !GH_TOKEN) {
  console.error('Missing OPENAI_API_KEY or GH_TOKEN');
  process.exit(1);
}

const systemPrompt = "You are Ballast Financial's pragmatic finance voice...";
const userPrompt =
  'Write a post explaining why founders should adopt GAAP before their first institutional round. The post should be 600-800 words long and formatted in Markdown.';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function generatePost() {
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
  });

  return completion.choices[0].message.content.trim();
}

async function commitPost(body) {
  const title = 'Founders Should Adopt GAAP Early';
  const description =
    'Why early adoption of GAAP sets startups up for smoother institutional funding.';
  const tags = ['gaap', 'fundraising', 'accounting'];

  const date = new Date().toISOString().split('T')[0];
  const slug = slugify(title);
  const fileName = `${date}-${slug}.md`;

  const fileContent = matter.stringify(body, {
    title,
    date,
    author: 'Ballast Team',
    description,
    tags,
  });

  const octokit = new Octokit({ auth: GH_TOKEN });

  await octokit.rest.repos.createOrUpdateFileContents({
    owner: 'BallastFinancial',
    repo: 'website',
    path: `content/blog/${fileName}`,
    message: `chore: publish ${title}`,
    content: Buffer.from(fileContent).toString('base64'),
    branch: 'main',
  });

  console.log('Post committed!');
}

async function main() {
  try {
    const body = await generatePost();
    await commitPost(body);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
