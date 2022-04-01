# Use Agora UIKit with Remix
- [UIKit](https://github.com/AgoraIO-Community/Web-React-UIKit/)
- [Remix Docs](https://remix.run/docs)

## Development

Rename `.env.example` to `.env` and add your Agora App ID and App Certificate to it, like so:

```env
APP_ID=c0cXXXXXXXXXXXX...
CERTIFICATE=c18XXXXXXXXXXXX...
```

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

