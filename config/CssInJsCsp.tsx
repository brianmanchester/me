import { FC } from 'react';

interface CssInJsScpProps {
  nonce: string;
}

const CssInJsCsp: FC<CssInJsScpProps> = ({ nonce }) => (
  <meta property="csp-nonce" content={nonce} />
);

export default CssInJsCsp;