import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
            <a href="#passions" className="hover:opacity-60 transition-opacity">Passions</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <header id="about" className="mb-20">
          <h1 className="text-4xl mb-2">Sheena Ganju</h1>
        </header>

        <section className="mb-20">
          <div className="space-y-6">
            <p>
              New York-based AI product manager. I currently lead product for Copilot Chat on github.com (<a href="https://github.com/copilot" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">github.com/copilot</a>)
            </p>

            <div>
              <p className="mb-3">Some of our recent ships 🚢:</p>
              <ul className="space-y-2 pl-6 list-disc">
                <li>
                  <a href="https://github.blog/changelog/2026-03-11-explore-a-repository-using-copilot-on-the-web" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
                    Explore a repository using Copilot on the web
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2026-02-25-improved-web-search-in-copilot-on-github-com/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
                    Improved web search in Copilot on GitHub.com
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2026-02-25-generate-pull-request-titles-with-copilot-on-the-web/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
                    Generate pull request titles with Copilot on the web
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2026-02-04-showing-tool-calls-and-other-improvements-to-copilot-chat-on-the-web/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
                    Showing tool calls and other improvements to Copilot Chat on the web
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2025-10-15-copilot-generated-commit-messages-on-github-com-are-generally-available/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
                    Copilot-generated commit messages on GitHub.com are generally available
                  </a>
                </li>
              </ul>
            </div>

            <p>
              Previously, I worked in product at Venmo where I helped launch and grow <a href="https://venmo.com/business/profiles" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">Venmo Business Profiles</a> and <a href="https://techcrunch.com/2022/10/03/venmo-charity-profiles-raise-funds-directly-within-app/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">Venmo Charity Profiles</a>.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-2xl mb-8">Projects
          </h2>
          
          <div>
            <a href="https://sheenyg.github.io/wouldreads/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
              wouldreads
            </a>
            <p className="mt-2">A news aggregator app that feeds articles from sites I visit frequently</p>
          </div>
        </section>

        <section id="passions" className="mb-20">
          <h2 className="text-2xl mb-8">Passions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg mb-3">Music 🎵</h3>
              <ul className="space-y-2 pl-6 list-disc">
                <li>
                  <a href="https://bleedernyc.bandcamp.com/album/bleeder-ep" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
                    Bleeder EP
                  </a>
                </li>
                <li>
                  <a href="https://www.gtalumni.org/news/2018/the-alternative-to-alternative-radio.html" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
                    The Alternative to Alternative Radio
                  </a>
                </li>
                <li>
                  <a href="https://daily.bandcamp.com/college-radio-station/better-know-a-college-radio-station-georgia-techs-wrek" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60 transition-opacity">
                    Better Know a College Radio Station: Georgia Tech's WREK
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-3">Books 📖</h3>
              <p className="mb-4">Top 5 Books I Read In...</p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="2026" className="border-t border-border">
                  <AccordionTrigger className="text-base hover:no-underline py-4">2026 (so far...)</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ol className="space-y-1 list-decimal list-inside">
                      <li>Stoner by John Williams</li>
                      <li>Perfection by Vicenzo Latronico</li>
                      <li>Hyperpolitics by Anton Jager</li>
                      <li>The Perfect Nanny by Leila Slimani</li>
                      <li>Withering Heights by Emily Bronte</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="2025" className="border-t border-border">
                  <AccordionTrigger className="text-base hover:no-underline py-4">2025</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ol className="space-y-1 list-decimal list-inside">
                      <li>The Secret History by Donna Tartt</li>
                      <li>The Crying of Lot 49 by Thomas Pynchon</li>
                      <li>Pedro Paramo by Juan Rulfo</li>
                      <li>I Who Have Never Known Men by Jacqueline Harpman</li>
                      <li>American Bulk by Emily Mester</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="2024" className="border-t border-b border-border">
                  <AccordionTrigger className="text-base hover:no-underline py-4">2024</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ol className="space-y-1 list-decimal list-inside">
                      <li>Anna Karenina by Tolstoy</li>
                      <li>Rejection by Tony Tulathimutte</li>
                      <li>Zen and the Art of Motorcycle Maintenance by Robert Pirsig</li>
                      <li>Seeing is the act of forgetting the name of the thing one sees - Robert Irwin</li>
                      <li>AI Superpowers- China, Silicon Valley, and the New World Order - Kai Fu Lee</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-2xl mb-8">Contact</h2>
          
          <div className="space-y-3">
            <div>
              <a href="https://github.com/sheenyg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline hover:opacity-60 transition-opacity">
                <GithubLogo />
                GitHub
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/sheenaganju" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline hover:opacity-60 transition-opacity">
                <LinkedinLogo />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-32 pb-12 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sheena Ganju</p>
        </footer>
      </main>
    </div>
  )
}

export default App