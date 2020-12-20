import { FC } from 'react';
import { ServerStyleSheets } from '@material-ui/core/styles';

interface CssInJsScpProps {
  nonce: string;
}

const CssInJsCsp: FC<CssInJsScpProps> = ({ nonce }) => (
  <>
    <meta property="csp-nonce" content={nonce} />
    <style
      id='jss-server-side'
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: new ServerStyleSheets().toString() }}
    />
  </>
);

export default CssInJsCsp;