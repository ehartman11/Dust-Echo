# Dust & Echo

`Dust & Echo` is a ten-song AI-assisted music showcase shaped around American folk, bluesy rock, and Red Dirt country.

## Current status

- The project has a finished one-page showcase site in `index.html`
- All ten songs have lyric or arrangement files in `assets/lyrics/`
- All ten songs have short description files in `assets/descriptions/`
- Final cover images are present in `assets/images/`
- Web-ready `.mp3` audio exports are present in `assets/audio/`
- Original `.wav` exports are preserved in `assets/audio.wav/`
- Before GitHub Pages publish, `index.html` still needs its audio source paths switched from `.wav` to `.mp3`

## Creative stack

- Website: static `HTML + CSS`
- Music generation: Suno
- Cover art generation: ChatGPT Images and Adobe Firefly
- Site organization and code support: Codex

## Project structure

- `index.html` contains the showcase site
- `styles.css` contains the visual design
- `assets/audio/` contains the compressed `.mp3` files intended for the website
- `assets/audio.wav/` contains the larger original `.wav` exports
- `assets/images/` contains the final cover art files
- `assets/lyrics/` contains lyrics and instrumental direction notes
- `assets/descriptions/` contains one short description per song

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

## Asset naming notes

- Some exported media uses alternate names from the original concept titles
- `River Town Revival` uses the `Neon River Worn (Instrumental)` audio export and `Neon River Worn.jpg`
- `County Line After Midnight` currently uses `Headlight Fenceposts (Hard Rock).mp3` with `generated-image-cover-art-1776747546869.jpg`
- `Red Clay Interlude` currently uses `Red Clay Breath.mp3` and `Red Clay Breath.jpg`
- `Lanterns in the Wind` currently uses `Lanterns in Wind.mp3` and `Laterns in Wind.jpg`

## Remaining publish steps

1. Update the `<audio>` sources in `index.html` from `.wav` to the matching `.mp3` files in `assets/audio/`.
2. Initialize or connect the project to the target GitHub repository.
3. Push the site and publish with GitHub Pages.
