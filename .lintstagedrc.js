const fs = require('fs');
const generateTSConfig = (fileName, type) => {
    const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
    const include = ['src/**/*.d.ts', 'auto-imports.d.ts', 'components.d.ts', ...fileName].filter((file) => !file.includes('TabContent'));
    tsconfig.include = include;
    fs.writeFileSync('tsconfig.lint.json', JSON.stringify(tsconfig));
    return `${type} --noEmit --project tsconfig.lint.json`;
};

module.exports = {
    'src/**/*{js,jsx,ts,tsx,vue}': ['prettier --write', 'eslint --fix'],
    'src/**/*{css,less,scss,vue}': ['stylelint --fix'],
    'src/**/*.{ts,tsx}': [(fileName) => generateTSConfig(fileName, 'tsc')],
};
