deno compile --allow-net --target x86_64-pc-windows-msvc --output ./bin/anilist-list-windows index.ts
deno compile --allow-net --target x86_64-unknown-linux-gnu --output ./bin/anilist-list-linux index.ts
deno compile --allow-net --target x86_64-apple-darwin --output ./bin/anilist-list-apple-intel index.ts
deno compile --allow-net --target aarch64-apple-darwin --output ./bin/anilist-list-apple-m1 index.ts