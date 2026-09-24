// Convierte un objeto en líneas de tokens para mostrarlo como JSON con resaltado de sintaxis.
// Los arreglos cortos se escriben en una sola línea; si la línea supera `maxWidth`
// caracteres, se escribe un elemento por línea para que el archivo no crezca a lo ancho.

export type TokenType = 'key' | 'string' | 'literal' | 'punct' | 'plain';
export type Token = { type: TokenType; text: string };
export type Line = Token[];

type Value = string | number | boolean | null | Value[] | { [key: string]: Value };

const tok = (type: TokenType, text: string): Token => ({ type, text });

const isObject = (v: Value): v is { [key: string]: Value } => typeof v === 'object' && v !== null && !Array.isArray(v);

const scalar = (v: Value): Token => (typeof v === 'string' ? tok('string', JSON.stringify(v)) : tok('literal', String(v)));

const inlineArray = (arr: Value[]): Token[] => [
	tok('punct', '['),
	...arr.flatMap((v, i) => (i === 0 ? [scalar(v)] : [tok('punct', ', '), scalar(v)])),
	tok('punct', ']'),
];

const width = (line: Line) => line.reduce((n, t) => n + t.text.length, 0);

export function toJson(value: { [key: string]: Value }, maxWidth = 80): Line[] {
	const lines: Line[] = [[tok('punct', '{')]];

	const walk = (obj: { [key: string]: Value }, depth: number) => {
		const indent = tok('plain', '  '.repeat(depth));
		const entries = Object.entries(obj);
		entries.forEach(([key, v], i) => {
			const comma = i < entries.length - 1 ? [tok('punct', ',')] : [];
			const head = [indent, tok('key', JSON.stringify(key)), tok('punct', ': ')];
			if (isObject(v)) {
				lines.push([...head, tok('punct', '{')]);
				walk(v, depth + 1);
				lines.push([indent, tok('punct', '}'), ...comma]);
			} else if (Array.isArray(v)) {
				const inline = [...head, ...inlineArray(v), ...comma];
				if (width(inline) <= maxWidth) {
					lines.push(inline);
				} else {
					const inner = tok('plain', '  '.repeat(depth + 1));
					lines.push([...head, tok('punct', '[')]);
					v.forEach((item, j) => lines.push([inner, scalar(item), ...(j < v.length - 1 ? [tok('punct', ',')] : [])]));
					lines.push([indent, tok('punct', ']'), ...comma]);
				}
			} else {
				lines.push([...head, scalar(v), ...comma]);
			}
		});
	};

	walk(value, 1);
	lines.push([tok('punct', '}')]);
	return lines;
}

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Genera el HTML de las líneas: cada línea es un .line con su código dentro de .line__code
// (así el número de línea queda en su propia columna) y cada token es un .tk.tk--<tipo>
export function toHtml(lines: Line[]): string {
	return lines
		.map(
			(line) =>
				`<span class="line"><span class="line__code">${line.map((t) => `<span class="tk tk--${t.type}">${escapeHtml(t.text)}</span>`).join('')}</span></span>`,
		)
		.join('');
}
