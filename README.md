# Dust & Echo

`Dust & Echo` is a ten-song AI-assisted music showcase shaped around American folk, bluesy rock, and Red Dirt country.

## Current stack

- Website: static `HTML + CSS`
- Music generation: Suno
- Cover art generation: ChatGPT Images and Adobe Firefly
- Site scaffold/code support: Codex

## Project structure

- `index.html` contains the showcase site
- `styles.css` contains the visual design
- `assets/audio/` is where final exported song files should go
- `assets/images/` is where final cover art should go
- `assets/lyrics/` contains lyrics and instrumental direction notes
- `assets/descriptions/` contains song descriptions plus music and image prompts

## Song list

1. Dust on the Dashboard
2. River Town Revival
3. Flint & Honey
4. Cedar Creek Gospel
5. County Line After Midnight
6. Old Blue Flame
7. Broken Wheel Hallelujah
8. Red Clay Interlude
9. Lanterns in the Wind
10. Backroads Don't Forget

## Suggested workflow

1. Generate the music in Suno using each file in `assets/descriptions/` and `assets/lyrics/`.
2. Generate the cover art in ChatGPT Images or Adobe Firefly using each image prompt.
3. Save the finished files into `assets/audio/` and `assets/images/` using the filename pattern already listed in the folder readmes.
4. Replace the image placeholders in `index.html` with the final image files and add audio players once the tracks are exported.
5. Initialize a Git repo, push to GitHub, and publish with GitHub Pages.
