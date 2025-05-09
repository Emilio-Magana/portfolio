import { Switch, Route } from "wouter";
import Header from "../components/Header";
import ParticleAnimation from "../animation/ParticleAnimation";
import Projects from "../pages/Projects";
import Hobbies from "../pages/Hobbies";
import _404 from "../pages/_404";
import Footer from "../components/Footer";
import Homepage from "../pages/Homepage";
import { DarkModeProvider } from "../context/DarkModeContext.tsx";
import { ChatProvider } from "../context/ChatContext.tsx";
import Chat from "../components/Chat/Chat.tsx";
import Privacy from "../pages/Privacy.tsx";

function App() {
  return (
    <DarkModeProvider>
      <ChatProvider>
        <ParticleAnimation />
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-backgroundFadeB to-backgroundFadeE to-5% text-secondary antialiased">
          <Header />
          <div className="mx-auto max-w-[674px] phone:px-2 ipad_mini:px-8">
            <Switch>
              <Route path="/">
                <Homepage />
              </Route>

              <Route path="/projects">
                <Projects />
              </Route>

              <Route path="/hobbies">
                <Hobbies />
              </Route>

              <Route path="/privacy">
                <Privacy />
              </Route>

              <Route>
                <_404 />
              </Route>
            </Switch>
          </div>
          {/* maybe place chat under footer not sure yet, can probalby adjust based on CSS */}
          <Chat />
          <Footer />
        </main>
      </ChatProvider>
    </DarkModeProvider>
  );
}

export default App;
