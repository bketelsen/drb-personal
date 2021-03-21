![tailwind-nextjs-banner](/public/static/images/twitter-card.png)

# Tailwind Nextjs Starter Blog

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/bketelsen/drb-personal)

This is a [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) blogging starter template. Comes out of the box configured with the latest technologies to make technical writing a breeze. Easily configurable and customizable. Perfect as a replacement to existing Jekyll and Hugo individual blogs.

[Demo Blog - this repo](https://drb-personal.vercel.app/)

## Content & Data

All data that powers the site is in the `/content` directory. Your first stop should be to edit `/content/siteMetadata.json` and change titles, labels, social media handles, etc.

### Editing Content in a Web-Based CMS

Start the development server with `pnpm start` - this watches the content directory and reloads on changes. Then start the cms proxy with `pnpm cms` in a separate terminal. This runs a proxy that saves content edits locally. Navigate to `/admin/index.html` to see the content types you can create and modify.

### Images

Images are hosted on [Cloudinary](https://www.cloudinary.com). A free account should be more than sufficient for general purpose websites, since image transformations are cached by Next.js.

## TODO

- [ ] Move content to separate repo served by graphql and/or REST
- [ ] Page route at the root
- [ ] MDX enhancements
- [ ] Nav menu convert to CMS file
- [ ] RSS
- [ ] SiteMap
- [ ] Cue vet for content types
- [ ] API Endpoints for content
- [ ] Possibly GraphQL endpoints for content
