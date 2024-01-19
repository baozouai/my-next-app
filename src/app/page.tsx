import { UserButton } from '@clerk/nextjs';
import { Button } from '@nextui-org/button';
import { ThemeSwitcher } from '@/app/components/ThemeSwitcher'

export default function Home(){
  return (
    <div className="h-screen">
      <header className='w-full h-14'>
        <div className='fixed top-4 right-8 flex justify-stretch items-center'>
          <ThemeSwitcher className='mr-2'/>
          <UserButton afterSignOutUrl="/"/>
        </div>
      </header>
    </div>
  );
}
