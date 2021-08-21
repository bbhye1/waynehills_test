import { useState } from 'react';

import Header from './Header';
import TTVSection from './TTVSection';
import Footer from './Footer';
import TermsOfUse from './TermsOfUse';

export default function HomePage() {
  const [termsOfUseOpen, setTermsOfUseOpen] = useState(false);

  const handleOpenModal = () => {
    setTermsOfUseOpen(true);
  };

  const handleCloseModal = () => {
    setTermsOfUseOpen(false);
  };

  return (
    <>
      <TermsOfUse
        open={termsOfUseOpen}
        onClickOutside={handleCloseModal}
      />
      <Header />
      <TTVSection />
      <Footer onOpenModal={handleOpenModal} />
    </>
  );
}
