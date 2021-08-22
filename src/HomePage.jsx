import { useState } from 'react';

import SignIn from './SignIn';
import TermsOfUse from './TermsOfUse';
import Header from './Header';
import IntroductionSection from './IntroductionSection';
import TTVSection from './TTVSection';
import Footer from './Footer';

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
      <IntroductionSection />
      <TTVSection onOpenSignIn={handleOpenSignIn} />
      <Footer onOpenTermsOfUse={handleOpenTermsOfUse} />
    </>
  );
}
