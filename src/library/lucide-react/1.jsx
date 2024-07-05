import { Facebook, Linkedin, Youtube, Twitter, Instagram } from 'lucide-react';

const LucideReactApp = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
<ul className="social-media-list">
      <li><a href="https://facebook.com" onClick={() => handleIconClick('https://facebook.com')}><Facebook size={30} /></a></li>
      <li><a href="https://linkedin.com" onClick={() => handleIconClick('https://linkedin.com')}><Linkedin size={30} /></a></li>
      <li><a href="https://youtube.com" onClick={() => handleIconClick('https://youtube.com')}><Youtube size={30} /></a></li>
      <li><a href="https://twitter.com" onClick={() => handleIconClick('https://twitter.com')}><Twitter size={30} /></a></li>
      <li><a href="https://instagram.com" onClick={() => handleIconClick('https://instagram.com')}><Instagram size={30} /></a></li>
    </ul>
    </>
  )
}

export default LucideReactApp