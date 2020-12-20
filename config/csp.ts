import { Directives, Rule } from './NextCSP';

export function getDirectives(isProd: boolean, nonce: string): Directives {
  let directives: Directives = {
    defaultSrc: [Rule.SELF],
    imgSrc: [Rule.SELF],
    fontSrc: ['fonts.gstatic.com']
  };

  if (isProd) {
    directives = {
      scriptSrc: [Rule.SELF],
      styleSrc: [Rule.SELF, `'nonce-${nonce}'`, 'fonts.googleapis.com'],
      ...directives
    };
  }
  else {
    directives = {
      scriptSrc: [Rule.SELF, Rule.UNSAFE_EVAL],
      styleSrc: [Rule.SELF, Rule.UNSAFE_INLINE, 'fonts.googleapis.com'],
      ...directives
    };
  }

  return directives;
}