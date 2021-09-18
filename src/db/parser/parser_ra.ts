import { i18n } from '../../calc2/i18n';

const pegParserRelalg = require('./grammar_ra.js') as any;

export function parseRelalg(text: string, relationNames: string[] = []): relalgAst.rootRelalg {
	const ast = pegParserRelalg.parse(text, {
		startRule: 'start',
		relationNames: relationNames,
		i18n,
	});
	return ast;
}

export function parseRelalgGroup(text: string): relalgAst.GroupRoot {
	return pegParserRelalg.parse(text, {
		startRule: 'groupStart',
		i18n,
	});
}
