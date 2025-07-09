

import { Button } from "./components/ui/button"

// import React from 'react';
function App() {

  return (
    <>
     <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  )
}

export default App
