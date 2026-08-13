// scripts/optimize-images.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imageDir = path.join(process.cwd(), 'public/images');

// Get all PNG files
const files = fs.readdirSync(imageDir).filter(f => f.endsWith('.png'));

console.log(`📸 Found ${files.length} images to convert...\n`);

files.forEach((file, index) => {
    const inputPath = path.join(imageDir, file);
    const outputPath = path.join(imageDir, file.replace('.png', '.webp'));

    sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => {
            // Get file sizes
            const originalSize = fs.statSync(inputPath).size / 1024 / 1024;
            const newSize = fs.statSync(outputPath).size / 1024 / 1024;
            console.log(`✅ [${index + 1}/${files.length}] ${file}`);
            console.log(`   📦 ${originalSize.toFixed(2)}MB → ${newSize.toFixed(2)}MB (${Math.round((1 - newSize / originalSize) * 100)}% smaller)\n`);
        })
        .catch(err => {
            console.error(`❌ Error converting ${file}:`, err);
        });
});