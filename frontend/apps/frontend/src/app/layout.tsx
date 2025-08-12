import { ThemeProvider } from '@/components/feature/theme-provider/theme-provider';
import './global.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Coffee Management',
  description: 'Coffee Management',
  icons: {
    icon: '/logo/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={nunito.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
