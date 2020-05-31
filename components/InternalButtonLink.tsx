import Link from 'next/link';
import Button, { ButtonProps } from '@material-ui/core/Button';

// Internal
import { Routes } from '../lib/routes';

interface InternalButtonLinkProps {
  href: Routes;
  as?: string;
  text: string;
  variant: ButtonProps['variant'];
  size?: ButtonProps['size'];
  cls?: string;
  width?: number;
}

export default function InternalButtonLink({ href, as, text, variant, size, cls, width }: InternalButtonLinkProps) {
  return (
    <Link href={href} as={as}>
      <Button
        className={cls}
        style={{ width }}
        href={href}
        variant={variant}
        size={size}
      >
        {text}
      </Button>
    </Link>
  );
}