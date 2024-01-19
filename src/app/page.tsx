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
      <div className='flex items-center justify-center m-4'>
        <main className='flex flex-col items-center justify-center w-full border-x-2 md:w-9/12 lg:w-6/12'>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis distinctio magnam voluptatibus ratione voluptatem quis commodi sit aut? Sequi placeat ratione ut facilis. Ducimus atque, sequi impedit dolor quam molestias!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio vel, perferendis aspernatur inventore ea eaque dicta veniam iure, praesentium nemo autem. Asperiores minima, consequatur modi iure corporis tempora velit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim, dolorem recusandae voluptatum minima ratione amet deserunt ipsam maxime, provident id, quibusdam similique sed accusantium harum asperiores quam nobis? Autem!</p>
        </main>
      </div>
    </div>
  );
}
