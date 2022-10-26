import pic from './assets/profileImg.png'
import './App.css'

function App() {

  return (
    <div className='container'>
     <header className='profile'>
        <img className='profile-pic' id='profile__img' src={pic} alt="profile-pic" />
        <p className='profile-name'id='twitter'>@iamcheeh</p>
        <p className='profile-name-2'id='slack'>iamcheeh</p>
     </header>

    <section className='links'>
      <a className='link-tw' href="http://twitter.com/iamcheeh">Twitter Link</a>
      <a className='link-tw' href="http://">Zuri Team</a>
      <a className='link-tw' href="http://">Zuri Books</a>
      <a className='link-tw' href="http://">Python Books</a>
      <a className='link-tw' href="http://">Background Checks for Coders</a>
      <a className='link-tw' href="http://">Design Books</a>
    </section>
    </div>
  )
}

export default App
