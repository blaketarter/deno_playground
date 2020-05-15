# Deno

https://deno.land/

https://deno.land/v1

https://deno.land/manual

https://github.com/denolib/awesome-deno

## Setup

1. Install Deno `brew install deno`
2. Setup vscode Deno plugin `axetroy.vscode-deno`
3. Go through https://deno.land/manual/getting_started/first_steps

## Scripts

1. remote hello world `deno run https://deno.land/std/examples/welcome.ts`
2. local hello world `deno run scripts/local-hello-world.ts`
3. hello world server `deno run --allow-net scripts/hello-world-server.ts`
4. fetch a file `deno run --allow-net=example.com scripts/fetch-url.ts http://example.com`
5. read a file `deno run --allow-read=./scripts scripts/read-file.ts scripts/read-file.ts`

## TS Config

1. https://deno.land/manual/getting_started/typescript

## Lock File

1. `deno run --lock=lock.json --lock-write ...`

## Local Deps cache

_currently not working for me_

1. set `DENO_DIR ` environment variable
2. `DENO_DIR=.deno deno run https://deno.land/std/examples/welcome.ts`

## Deps file (like a package.json)

1. create a deps file `deps.ts`
2. Re export from url imports `export { Application, HandlerFunc } from "https://deno.land/x/abc/mod.ts";`

## Formatting

1. `deno fmt --check` check for errors
1. `deno fmt` auto format

## Web Server

https://github.com/zhmushan/abc

1. `deno run --allow-net scripts/abc-hello-world.ts`
2. `deno run --allow-net scripts/abc-params.ts`


## Pros

- TS support built in
- Secure permissions system
- Built in tools
  - formatter
  - bundler
  - test framework
  - debugger
  - std library
  - node compat library (still in early works)
  - built using rust
- ES module system built in (no require or module.exports)
- Web compat when appropriate

## On the fence

- No package manager
  - I like not having to rely on one central repo
  - Having a `deps.ts` file mitigates most of the problems
- No script runner

## Cons

- most npm packages are not compatible <- this is a big one
