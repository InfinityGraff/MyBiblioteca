const fs = require('fs')
const path = require('path')
const fontsDir = path.join(__dirname, 'KitFontes')

function findFonts(dir) {
    return fs.readdirSync(dir).flatMap(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            return findFonts(filePath)
        }
        return /\.(woff|woff2|ttf|otf)$/i.test(file) ? [filePath] : []
    })
}

const fontFaceRules = findFonts(fontsDir).map(file=>{
    const fontName = path.basename(file, path.extname(file))
    const fontPath = `url('Server Fonts/${path.relative(__dirname, file).replace(/\\/g, '/')}')`
    const fontFormat = path.extname(file).slice(1);
    //return `@font-face{font-family:'${fontName}';src:${fontPath} format('${fontFormat}')}`
    return `'${fontName}',`
})

// Exibe as regras no terminal
console.log(fontFaceRules.join('\n'))
