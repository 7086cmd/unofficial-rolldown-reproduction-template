# Unofficial Rolldown Reproduction Template

This repository is an unofficial template for reproducing issues with the rolldown.

- [ ] If you are using Nightly Rolldown, please click here to show that the rolldown should be loaded with the file.

## Steps to reproduce

1. Clone this repository, or create a new repository and use this as a template.
2. Run `pnpm install` (recommended) or `npm install` to install the dependencies, especially the rolldown.

   > [!NOTE]
   > You need to specify the relative path starts with `file:` in the `package.json` to load the local rolldown,
   > which is not the root folder but the path `./packages/rolldown` relative to the root folder.

3. Run `pnpm build` or `npm run build` to build the project.
