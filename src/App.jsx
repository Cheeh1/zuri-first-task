import {profile, github, slack, share, zuri, logo} from './assets'
import './App.css'

function App() {

  return (
    <div className='container'>
     <header className='profile'>
        <img className='profile-pic' id='profile__img' src={profile} alt="profile-pic" />
        <p className='profile-name'id='twitter'>@iamcheeh</p>
        <p className='profile-name-2'id='slack'>divineedwin</p>
        <img className='share-btn' src={share} alt="share-btn" />
     </header>

    <section className='links'>
      <a className='link-item' href="http://twitter.com/iamcheeh" target="_blank"><p className='link-txt'>Twitter Links </p></a>
      <a className='link-item' id='btn__zuri' href="https://training.zuri.team/" target="_blank"><p className='link-txt'>Zuri Team</p></a>
      <a className='link-item' id='books' href="http://books.zuri.team" target="_blank"><p className='link-txt'>Zuri Books</p></a>
      <a className='link-item' id='book__python' href="https://books.zuri.team](https://books.zuri.team)/python-for-beginners?ref_id=<divineedwin>" target="_blank"><p className='link-txt'>Python Books</p></a>
      <a className='link-item' id='pitch' href="https://background.zuri.team/" target="_blank"><p className='link-txt'>Background Checks for Coders</p></a>
      <a className='link-item' id='book__design' href="https://books.zuri.team/design-rules" target="_blank"><p className='link-txt'>Design Books</p></a>

      <div className='social-icon'>
        <a href="http://slack.com" target="_blank" rel="noopener noreferrer">
        <img src={slack} alt="slack-icon" />
        </a>
        <a href="https://github.com/Cheeh1" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github-icon" />
        </a>
      </div>
    </section>

    <footer>
      <hr />
      <div className='footer-items'>
      <img className='footer-img' src={zuri} alt="zuri-logo" />
      <p className='footer-items-txt'>HNG Internship 9 Frontend Task</p>
      <img className='footer-img' src={logo} alt="IaG-logo" />
      </div>
    </footer>
    </div>
  )
}

export default App
