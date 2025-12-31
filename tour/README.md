This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


### Smoth User experience where low configuration of users ###
Pipeline story from page load → smooth 3D on low-end devices.

1️⃣ First Load Rule (Critical Path)

Goal: Page must become usable in <2 seconds.

How it works

Browser first parses HTML → CSS → minimal JS

If heavy JS runs here, the main thread blocks → slow devices freeze

What to do

Load only UI logic first (buttons, text, layout)

No 3D, no big data, no physics on initial load

👉 Result: even weak devices feel fast immediately

2️⃣ Lazy Loading (Only When Needed)

Goal: Heavy code loads only after user intent.

How it works

Use dynamic imports:

Browser downloads JS only when function is called

Not included in initial bundle

Flow

User clicks “Open 3D”

App runs import('three.js')

Then loads scene logic

👉 Low-end users who never open 3D never pay the cost

3️⃣ Code Splitting (Smaller Chunks)

Goal: Avoid one huge JS file.

How it works

Bundler splits code into chunks:

UI chunk

3D chunk

Data chunk

Flow

Browser loads only required chunk

Others stay on server

👉 Faster download + faster parse on slow CPUs

4️⃣ Device Capability Detection

Goal: Adapt quality automatically.

What browser gives you

navigator.hardwareConcurrency → CPU cores

navigator.deviceMemory → RAM (approx)

Decision

Low device → low-poly models, small textures

High device → full quality

👉 Same app, different experience per device

5️⃣ Level of Detail (LOD)

Goal: Don’t render what user can’t see.

How it works

Far objects → simple geometry

Near objects → detailed geometry

Three.js swaps models automatically

Flow

Camera moves

Engine picks correct mesh

👉 Massive performance win for weak GPUs

6️⃣ Progressive Asset Loading

Goal: Never show a blank screen.

How it works

Show static image / poster

Load environment

Load main model

Load effects (shadows, particles)

Flow

Each step is usable

User sees progress instantly

👉 Perceived speed increases even if load time stays same

7️⃣ Streaming Data (Not Bulk Load)

Goal: Avoid loading everything upfront.

How it works

Load models, tiles, or data in chunks

Cesium / map engines stream by camera position

Flow

User moves → request nearby data

Old data discarded

👉 Memory stays low on weak devices

8️⃣ Web Workers (Free the Main Thread)

Goal: UI must never freeze.

How it works

Heavy math / parsing runs in background thread

Main thread handles rendering + input

Use for

Physics calculations

JSON parsing

Pathfinding

👉 Buttons and camera stay smooth

9️⃣ Throttling & Frame Control

Goal: Don’t force 60 FPS everywhere.

How it works

Weak devices → 20–30 FPS

Strong devices → 60 FPS

Flow

Measure frame time

Adjust render loop

👉 Battery + thermal friendly

🔟 Caching (Second Visit Is Instant)

Goal: Never re-download same assets.

How it works

Service Worker caches models & JS

Browser serves from disk next time

Flow

First visit → network

Later visits → cache

👉 Huge UX boost on slow networks

🧠 One-Line Memory Rule

Load nothing heavy until user asks → adapt quality → stream in pieces → never block the main thread.