import { Open_Sans, Big_Shoulders_Stencil_Display } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});
export const stencilDisplay = Big_Shoulders_Stencil_Display({
  subsets: ['latin'],
  variable: '--font-header',
});
