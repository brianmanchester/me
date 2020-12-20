import { FC } from 'react';
import crypto from 'crypto';
import { NextScript, DocumentProps } from 'next/document';

type DirectiveName =
  | 'defaultSrc'
  | 'childSrc'
  | 'connectSrc'
  | 'fontSrc'
  | 'frameSrc'
  | 'imgSrc'
  | 'manifestSrc'
  | 'mediaSrc'
  | 'objectSrc'
  | 'prefetchSrc'
  | 'scriptSrc'
  | 'scriptSrcElem'
  | 'scriptSrcAttr'
  | 'styleSrc'
  | 'styleSrcElem'
  | 'styleSrcAttr'
  | 'workerSrc'
  | 'baseUri'
  | 'pluginTypes'
  | 'sandbox'
  | 'formAction'
  | 'frameAncestors'
  | 'navigateTo'
  | 'reportURI'
  | 'reportTo'
  | 'blockAllMixedContent'
  | 'referrer'
  | 'requireSRIFor'
  | 'requireTrustedTypesFor'
  | 'trustedTypes'
  | 'upgradeInsecureRequests';

const srcMap: { [key in DirectiveName]: string } = {
  defaultSrc: 'default-src',
  childSrc: 'child-src',
  connectSrc: 'connect-src',
  fontSrc: 'font-src',
  frameSrc: 'frame-src',
  imgSrc: 'img-src',
  manifestSrc: 'manifest-src',
  mediaSrc: 'media-src',
  objectSrc: 'object-src',
  prefetchSrc: 'prefetch-src',
  scriptSrc: 'script-src',
  scriptSrcElem: 'script-src-elem',
  scriptSrcAttr: 'script-src-attr',
  styleSrc: 'style-src',
  styleSrcElem: 'style-src-elem',
  styleSrcAttr: 'style-src-attr',
  workerSrc: 'worker-src',
  baseUri: 'base-uri',
  pluginTypes: 'plugin-types',
  sandbox: 'sandbox',
  formAction: 'form-action',
  frameAncestors: 'frame-ancestors',
  navigateTo: 'navigate-to',
  reportURI: 'report-uri',
  reportTo: 'report-to',
  blockAllMixedContent: 'block-all-mixed-content',
  referrer: 'referrer',
  requireSRIFor: 'require-sri-for',
  requireTrustedTypesFor: 'require-trusted-types-for',
  trustedTypes: 'trusted-types',
  upgradeInsecureRequests: 'upgrade-insecure-requests'
};

export type Directives = Partial<{ [key in DirectiveName]: string[] }>;

function writePolicies(directives: Directives): string {
  const policies: string[] = [];

  for (const d in directives) {
    const rules = directives[d as DirectiveName];

    if (!rules || !rules.length) {
      continue;
    }

    policies.push(`${srcMap[d as DirectiveName]} ${rules.join(' ')}`);
  }

  return policies.join('; ');
}

function getHash(scriptSrc: string): string {
  const hash = crypto.createHash('sha256');
  hash.update(scriptSrc);
  return `'sha256-${hash.digest('base64')}`;
}

export enum Rule {
  SELF = "'self'",
  UNSAFE_INLINE = "'unsafe-inline'",
  UNSAFE_EVAL = "'unsafe-eval'"
}

export interface NextCSPProps {
  documentProps: DocumentProps;
  directives: Directives;
}

const NextCSP: FC<NextCSPProps> = ({ documentProps, directives }) => {
  // If there are "script-src" directives, then add a hash.
  if (directives.scriptSrc?.length) {
    const selfRule = directives.scriptSrc.findIndex(rule => rule === Rule.SELF);

    if (selfRule > -1) {
      directives.scriptSrc[selfRule] = `${Rule.SELF} ${getHash(NextScript.getInlineScriptSource(documentProps))}`;
    }
  }

  return (
    <meta
      httpEquiv="Content-Security-Policy"
      content={writePolicies(directives)}
    />
  );
};

export default NextCSP;
