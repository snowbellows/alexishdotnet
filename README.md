# My personal portfolio and blog using Next.js and Sanity

Based on the [Next.js][nextjs] and [Sanity][sanity-homepage] starter template. It comes with a native Sanity Studio that offers features like real-time collaboration, instant side-by-side content previews, and intuitive editing.

The Studio connects to Sanity Content Lake, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more. You can use this starter to kick-start a blog or learn these technologies.

Hosted on [![Netlify Status](https://api.netlify.com/api/v1/badges/01aac088-5857-4e1a-9383-deb772918b0a/deploy-status)](https://app.netlify.com/sites/alexishdotnet/deploys)

> **Note**
>
> This starter uses the `/pages` directory for Next.js routing.
>
> The template will be migrated to the currently experimental [/app][app-dir] directory
> when Vercel announce that it is production ready.

## Features

- A performant, static blog with editable posts, authors, and site settings
- A native and customizable authoring environment, accessible on `yourblog.com/studio`
- Real-time and collaborative content editing with fine-grained revision history
- Side-by-side instant content preview that works across your whole site
- Support for block content and the most advanced custom fields capability in the industry
- Webhook-triggered Incremental Static Revalidation; no need to wait for a rebuild to publish new content
- Free and boosted Sanity project with unlimited admin users, free content updates, and pay-as-you-go for API overages
- A project with starter-friendly and not too heavy-handed TypeScript and Tailwind.css

## Table of Contents

- [Features](#features)
- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
  - [Important files and folders](#important-files-and-folders)
- [Configuration](#configuration)
  - [Setting up the project locally](#setting-up-the-project-locally)
  - [Running Next.js locally in development mode](#running-nextjs-locally-in-development-mode)
  - [Deploying to production](#deploying-to-production)
  - [How can I set up Incremental Static Revalidation?](#how-can-i-set-up-incremental-static-revalidation)
- [Next steps](#next-steps)

## Project Overview

| [Blog](https://nextjs-blog.sanity.build)                                                                       | [Studio](https://nextjs-blog.sanity.build/studio)                                                                       |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![Blog](https://user-images.githubusercontent.com/44635000/197511913-94ea36dd-099d-4dbf-b71f-3335879621c9.png) | ![Sanity Studio](https://user-images.githubusercontent.com/44635000/197511725-b2a2e2e5-287b-41a9-84c6-ec90d37ca480.png) |

### Important files and folders

| File(s)                                     | Description                                              |
| ------------------------------------------- | -------------------------------------------------------- |
| `sanity.config.ts`                          |  Config file for Sanity Studio                           |
| `sanity.cli.ts`                             |  Config file for Sanity CLI                              |
| `/pages/studio/[[...index]].tsx`            |  Where Sanity Studio is mounted                          |
| `/pages/api/revalidate.ts`                  |  Serverless route for triggering ISR                     |
| `/pages/api/preview.ts`                     |  Serverless route for triggering Preview mode            |
| `/schemas`                                  |  Where Sanity Studio gets its content types from         |
| `/plugins`                                  |  Where the advanced Sanity Studio customization is setup |
| `/lib/sanity.api.ts`,`/lib/sanity.image.ts` | Configuration for the Sanity Content Lake client         |
| `/lib/sanity.preview.ts`                    | Configuration for the live Preview Mode                  |

## Configuration

### Setting up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

Get the environment variables needed to connect Next.js and the Studio to your Sanity project from Netlify

### Running Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your blog should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Deploying to production

To deploy your changes to production just push or merge a PR to the `main` branch on github.

## Next steps

- [How to edit my content structure?][sanity-schema-types]
- [How to query content?][sanity-groq]
- [What is content modelling?][sanity-content-modelling]

### How can I set up Incremental Static Revalidation?

Go to the serverless function code in `/pages/api/revalidate.ts`. In the code comments, you'll find instructions for how to set up ISR.

[nextjs]: https://github.com/vercel/next.js

[sanity-homepage]: https://www.sanity.io?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-schema-types]: https://www.sanity.io/docs/schema-types?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-groq]: https://www.sanity.io/docs/groq?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-content-modelling]: https://www.sanity.io/docs/content-modelling?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-webhooks]: https://www.sanity.io/docs/webhooks?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[localhost-3000]: http://localhost:3000
[localhost-3000-studio]: http://localhost:3000/studio
[app-dir]: https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory
