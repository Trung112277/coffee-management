import { ModeToggle } from '@/components/feature/button/mode-toggle';
import { Button } from '@/components/ui/button';

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Xin chào</h1>
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}
