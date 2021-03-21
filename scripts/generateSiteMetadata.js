const { promises: fs } = require('fs');
const path = require('path');
const { getNode } = require("next-mdx/server");


async function generate() {


  const metadata = await fs.readFile(
    path.join(__dirname, '..', 'data', 'siteMetadata.json')
  );
  var parsed = JSON.parse(metadata);

  const author = await getNode("author", parsed.author);
  parsed.author = author.frontMatter;

  await fs.writeFile('./content/siteMetadata.json', JSON.stringify(parsed));
}

generate();
