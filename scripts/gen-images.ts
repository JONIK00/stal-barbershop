import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

async function gen(prompt: string, name: string, size: string) {
  const outDir = '/home/z/my-project/public/images';
  const outPath = path.join(outDir, `${name}.png`);
  if (fs.existsSync(outPath)) { console.log(`[skip] ${name}.png`); return; }
  try {
    const zai = await ZAI.create();
    const response = await zai.images.generations.create({ prompt, size: size as any });
    const b64 = response.data[0].base64;
    fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
    console.log(`[ok] ${name}.png (${fs.statSync(outPath).size} bytes)`);
  } catch (err) {
    console.error(`[FAIL] ${name}:`, err instanceof Error ? err.message : err);
  }
}

const images = [
  ['hero', '1344x768', 'Cinematic photograph of a luxury loft-industrial barbershop interior at night, exposed dark brick wall, raw concrete floor, black leather barber chair, warm Edison bulb pendant lights, steel pipes, moody dramatic lighting, rust-terracotta and brass tones, photorealistic, wide banner'],
  ['master-1', '864x1152', 'Portrait of a confident bearded male barber, late 30s, tattoos, black apron, arms crossed, dark loft-industrial barbershop, Edison bulb warm rim light, brick wall, serious expression, photorealistic, moody chiaroscuro, rust and brass tones'],
  ['master-2', '864x1152', 'Portrait of a stylish male barber, early 30s, well-groomed beard, slicked-back hair, black t-shirt and dark apron, holding scissors and comb, dark concrete background, warm Edison lighting, photorealistic portrait, confident look, moody'],
  ['master-3', '864x1152', 'Portrait of a young male barber, mid 20s, short fade haircut, mustache, dark denim apron, leaning on barber chair, industrial loft background with steel pipes, warm amber lighting, photorealistic portrait, masculine mood, rust accents'],
  ['master-4', '864x1152', 'Portrait of an older seasoned master barber, 50s, grey beard, glasses, black vest over white shirt, holding straight razor, dark wood and brick background, warm Edison lighting, photorealistic portrait, distinguished character, moody'],
  ['work-1', '1024x1024', "Professional photograph of a fresh men's undercut haircut with fade, side profile, model with beard, dark studio background, dramatic lighting, barbershop portfolio shot, sharp detail"],
  ['work-2', '1024x1024', 'Professional photograph of a sculpted full beard trim, side profile of bearded man, dark background, dramatic warm lighting, barbershop portfolio, sharp detail'],
  ['work-3', '1024x1024', 'Professional photograph of a classic slicked-back pompadour hairstyle, back view, dark moody background, warm lighting, barbershop portfolio, sharp detail'],
  ['work-4', '1024x1024', "Professional photograph of a clean straight-razor shave result, man's jaw and cheek, hot towel grooming, dark background, dramatic lighting, barbershop portfolio, sharp detail"],
  ['work-5', '1024x1024', 'Professional photograph of a modern textured crop haircut with beard, front three-quarter view, dark studio background, dramatic lighting, barbershop portfolio, sharp detail'],
  ['work-6', '1024x1024', "Professional photograph of a sharp side-part gentleman's haircut with styled mustache, three-quarter profile, dark background, warm lighting, barbershop portfolio, sharp detail"],
];

for (const [name, size, prompt] of images) {
  await gen(prompt, name, size);
}
console.log('=== ALL DONE ===');
