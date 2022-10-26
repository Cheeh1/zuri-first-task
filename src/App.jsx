import pic from './assets/profileImg.png'
import {github, slack, share, zuri, logo} from './assets'
import './App.css'

function App() {

  return (
    <div className='container'>
     <header className='profile'>
        <img className='profile-pic' id='profile__img' src={pic} alt="profile-pic" />
        <p className='profile-name'id='twitter'>@iamcheeh</p>
        <p className='profile-name-2'id='slack'>divineedwin</p>
     </header>

    <section className='links'>
      <a href="http://twitter.com/iamcheeh" target="_blank"><p className='link-txt'>Twitter Links </p></a>
      <a id='btn__zuri' href="https://training.zuri.team/" target="_blank"><p className='link-txt'>Zuri Team</p></a>
      <a id='books' href="http://books.zuri.team" target="_blank"><p className='link-txt'>Zuri Books</p></a>
      <a id='book__python' href="https://books.zuri.team](https://books.zuri.team)/python-for-beginners?ref_id=<divineedwin>" target="_blank"><p className='link-txt'>Python Books</p></a>
      <a id='pitch' href="https://background.zuri.team/" target="_blank"><p className='link-txt'>Background Checks for Coders</p></a>
      <a id='book__design' href="https://books.zuri.team/design-rules" target="_blank"><p className='link-txt'>Design Books</p></a>

      <div className='social-icon'>
        <img src={slack} alt="slack-icon" />
        <img src={github} alt="github-icon" />
      </div>
    </section>
    </div>
  )
}

export default App
