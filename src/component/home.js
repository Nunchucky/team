import '/Users/22HOP2D-Chintushig/Desktop/code/projects/team/my-first-app/src/App.css'
import { NavBar } from './NavBar';
import { Email } from './Email';
import { SecondPage } from '../component/SecondPage';
import { ThirdPage } from '../component/thirdpage'
import { FourthPage } from '../component/fourthpage';

export const Home = () =>{
    return(
    <>
    <div className='ye'>
        <div>
          <NavBar />
          <Email />
        </div>
    </div>
    <div>
          <SecondPage />
          <ThirdPage />
          <FourthPage />
      </div>
    </>
    )
}