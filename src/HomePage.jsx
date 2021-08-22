import { useState } from 'react';

import Header from './Header';
import TTVSection from './TTVSection';
import Footer from './Footer';
import TermsOfUse from './TermsOfUse';
import SignIn from './SignIn';

export default function HomePage() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [termsOfUseOpen, setTermsOfUseOpen] = useState(false);

  const handleOpenSignIn = () => {
    setSignInOpen(true);
  };

  const handleCloseSignIn = () => {
    setSignInOpen(false);
  };

  const handleOpenTermsOfUse = () => {
    setTermsOfUseOpen(true);
  };

  const handleCloseTermsOfUse = () => {
    setTermsOfUseOpen(false);
  };

  return (
    <>
      <SignIn
        open={signInOpen}
        onClickOutside={handleCloseSignIn}
      />
      <TermsOfUse
        open={termsOfUseOpen}
        onClickOutside={handleCloseTermsOfUse}
      />
      <Header onOpenSignIn={handleOpenSignIn} />
      <TTVSection onOpenSignIn={handleOpenSignIn} />
      <Footer onOpenTermsOfUse={handleOpenTermsOfUse} />
    </>
  );
}
