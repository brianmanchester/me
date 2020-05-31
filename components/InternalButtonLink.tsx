import Link from 'next/link';
import Button, { ButtonProps } from '@material-ui/core/Button';

// Internal
import { Routes } from '../lib/routes';

interface InternalButtonLinkProps {
  href: Routes;
  as?: string;
  text: string;
  variant: ButtonProps['variant']
  size?: ButtonProps['size']
}

export default function InternalButtonLink({ href, as, text, variant, size }: InternalButtonLinkProps) {
  return (
    <Link href={href} as={as}>
      <Button
        component='a'
        variant={variant}
        size={size}
      >
        {text}
      </Button>
    </Link>
  );
}