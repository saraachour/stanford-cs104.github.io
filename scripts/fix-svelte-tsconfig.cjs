/**
 * svelte-kit sync writes importsNotUsedAsValues / preserveValueImports, which
 * TypeScript 5.5+ rejects. Patch the generated tsconfig after each sync.
 */
const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', '.svelte-kit', 'tsconfig.json');
if (!fs.existsSync(target)) {
	process.exit(0);
}

const raw = fs.readFileSync(target, 'utf8');
const j = JSON.parse(raw);
const co = j.compilerOptions;
if (!co) process.exit(0);

delete co.importsNotUsedAsValues;
delete co.preserveValueImports;
co.verbatimModuleSyntax = true;

fs.writeFileSync(target, JSON.stringify(j, null, '\t') + '\n');
