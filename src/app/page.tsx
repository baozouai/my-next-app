import { UserButton } from '@clerk/nextjs';
import { Button } from '@nextui-org/button';
import { ThemeSwitcher } from '@/app/components/ThemeSwitcher'
export default function Home(){
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
      <ThemeSwitcher />
    </div>
  );
}
