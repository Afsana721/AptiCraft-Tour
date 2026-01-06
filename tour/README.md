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


### Smo0th User experience where low configuration of users ###
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




### full pipe line of data flows ###
COMPONENT DATA PIPELINE — DEEP MENTAL MODEL
Project: AptiCraft (Next.js App Router)
Goal: Understand FULL data + performance flow (server → client → UI)


*** PIPELINE STORY (from page load → render) ***

1) PAGE LOAD (Browser)
   - Browser requests / (Home page)
   - Next.js serves HTML shell (fast, minimal)
   - Critical CSS loads first (above-the-fold video + nav)

2) CLIENT BOOTSTRAP (Home)
   - Home component mounts
   - No heavy data yet (keep main thread free)
   - Home prepares state container (single source of truth)

3) CHILD REQUEST (Contents.jsx)
   - Contents mounts AFTER Home
   - Contents triggers fetch('/api')
   - This is NON-blocking (async)

4) SERVER ENTRY (app/api/route.js)
   - Runs on server (Node / Edge)
   - Gathers data:
       a) text content (approach / example / requirements)
       b) image metadata (local assets or external API)
   - Returns structured JSON (small, predictable)

5) NETWORK TRANSFER
   - JSON streamed to browser
   - No images yet (only metadata)

6) CLIENT RECEIVE (Contents.jsx)
   - Contents receives JSON
   - Parses content blocks
   - Sends data UP via callback (props)

7) STATE LIFTING (Home)
   - Home receives data
   - Stores in React state
   - Triggers re-render ONLY where needed

8) UI RENDER (Below Video Section)
   - Home maps 3 sections:
       - Our Approach
       - Example Application
       - Requirements
   - Images load lazily (loading='lazy')

9) PERFORMANCE PIPELINE (Applied Gradually)
   - Lazy Loading: images only when visible
   - Code Splitting: components loaded on demand
   - Device Detection: reduce effects on low-end
   - LOD: lower image/3D quality if needed
   - Progressive Loading: text first, media later
   - Streaming: avoid bulk payloads
   - Web Workers (future): offload heavy logic
   - Throttling: control re-renders & animations
   - Caching: browser + Next cache → instant revisit

10) RESULT
   - Fast first paint
   - Smooth UI
   - Scalable server logic
   - Ready for LLM integration (prompt → explanation)

ONE-LINE MEMORY RULE:
"Server sends meaning, client decides timing, UI renders only when needed."


=========================
GRAPHED DATA PIPELINE (ASCII)
=========================

[ BROWSER ]
    |
    |  (1) GET /
    v
[ NEXT HTML SHELL ]  --critical CSS-->  [ FIRST PAINT ]
    |
    |  (2) hydrate
    v
[ HOME (state owner) ]
    |
    |  mounts child
    v
[ CONTENTS.jsx ]
    |
    |  (3) fetch('/api', { signal: AbortController })
    v
================ NETWORK ================
    |
    v
[ API ROUTE  app/api/route.js ]
    |
    |-- (4a) build text blocks
    |-- (4b) choose images
    |        - local /public assets (fast)
    |        - OR external API (pexels/unsplash)
    |
    |-- (5) return JSON (metadata only)
    v
================ NETWORK ================
    |
    v
[ CONTENTS.jsx ]
    |
    |-- (6) receive JSON
    |-- (7) normalize data
    |-- (8) onSend(data)
    v
[ HOME ]
    |
    |-- (9) setState(data)
    |-- (10) React reconciliation
    v
[ UI BELOW VIDEO ]
    |
    |-- Our Approach     (img lazy)
    |-- Example App      (img lazy)
    |-- Requirements     (img lazy)
    v
[ IMAGES LOAD ON VIEWPORT ]

========================================
PERFORMANCE CONTROL GRAPH (WHEN / WHY)
========================================

Initial Load
  ├─ HTML shell only
  ├─ No images
  └─ No heavy JS

Scroll / Visibility
  ├─ load images (loading='lazy')
  ├─ split components
  └─ downgrade quality if low-end device

User Idle
  ├─ prefetch next section
  └─ warm cache

Second Visit
  ├─ cached API JSON
  └─ instant render

========================================
ABORT + SAFETY FLOW
========================================

User navigates away / inactive
  └─ AbortController fires
       ├─ fetch cancelled
       └─ server stops work early

========================================
ONE-LINE RULE (LOCK THIS)
========================================
Server sends meaning → Client controls timing → UI renders only when visible.


=========================
VISUAL PIPELINE GRAPH (CLIENT ↔ SERVER)
=========================

CLIENT (Browser)
┌──────────────┐
│ User Intent  │
│ URL Request  │
└──────┬───────┘
       │ GET /
       ▼
┌──────────────┐
│ HTML Shell   │  ← critical CSS
│ First Paint  │
└──────┬───────┘
       │ hydrate
       ▼
┌──────────────┐
│ Home (State) │  ← single source of truth
└──────┬───────┘
       │ mounts
       ▼
┌──────────────┐
│ Contents.jsx │
│ fetch('/api')│  ← AbortController
└──────┬───────┘
       │ JSON request
=======│==================== NETWORK ====================
       ▼
SERVER (Next.js API)
┌────────────────────────┐
│ app/api/route.js       │
│ - build text blocks    │
│ - select images        │
│ - DB / CMS / API       │
└──────┬─────────────────┘
       │ JSON response (metadata)
=======│==================== NETWORK ====================
       ▼
CLIENT
┌──────────────┐
│ Contents.jsx │
│ parse JSON   │
│ onSend(data) │
└──────┬───────┘
       │ props
       ▼
┌──────────────┐
│ Home State   │
│ setState()   │
└──────┬───────┘
       │ reconcile
       ▼
┌──────────────────────────────┐
│ UI Sections (below video)    │
│ - Our Approach               │
│ - Example Application        │
│ - Requirements               │
│ images: loading='lazy'       │
└──────────────┬───────────────┘
               ▼
        Images load on viewport


=========================
PERFORMANCE OVERLAY (APPLIES TO GRAPH)
=========================
- Lazy loading → section visible only
- Code splitting → Contents loaded on demand
- Device check → reduce quality if low-end
- Progressive → text first, media later
- Streaming → no bulk payload
- Abort → cancel unused work
- Cache → instant second visit


### System Design ###
https://www.hiredintech.com/system-design/the-system-design-process/

### free video generator link ###
https://upsampler.com/free-video-generator-no-signup 

*** development Approach *** 
https://www.ibm.com/think/topics/software-development
