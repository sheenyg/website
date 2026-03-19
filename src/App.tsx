function App() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-6">
            <a href="#about" className="text-foreground hover:text-primary">About</a>
            <a href="#projects" className="text-foreground hover:text-primary">Projects</a>
            <a href="#passions" className="text-foreground hover:text-primary">Passions</a>
            <a href="#books" className="text-foreground hover:text-primary">Books</a>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-2">Sheena Ganju</h1>
        </header>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Currently running product for Copilot Chat on github.com (<a href="https://github.com/copilot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/copilot</a>)
            </p>

            <div>
              <h3 className="text-xl font-medium mb-3">Some of our recent ships:</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <a href="https://github.blog/changelog/2026-03-11-explore-a-repository-using-copilot-on-the-web" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Explore a repository using Copilot on the web
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2026-02-25-improved-web-search-in-copilot-on-github-com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Improved web search in Copilot on GitHub.com
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2026-02-25-generate-pull-request-titles-with-copilot-on-the-web/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Generate pull request titles with Copilot on the web
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2026-02-04-showing-tool-calls-and-other-improvements-to-copilot-chat-on-the-web/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Showing tool calls and other improvements to Copilot Chat on the web
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2025-10-15-copilot-generated-commit-messages-on-github-com-are-generally-available/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Copilot-generated commit messages on GitHub.com are generally available
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              Previously, I worked in product at Venmo where I helped launch and grow Venmo Business Profiles and Venmo Charity Profiles.
            </p>
          </div>
        </section>

        <hr className="my-12 border-border" />

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div>
            <a href="https://sheenyg.github.io/wouldreads/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-lg font-medium">
              wouldreads
            </a>
            <p className="mt-2 text-muted-foreground">
              A news aggregator app that feeds articles from sites I visit frequently
            </p>
          </div>
        </section>

        <hr className="my-12 border-border" />

        <section id="passions" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Passions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Music</h3>
              <a href="https://bleedernyc.bandcamp.com/album/bleeder-ep" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Bleeder EP
              </a>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Radio</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <a href="https://www.gtalumni.org/news/2018/the-alternative-to-alternative-radio.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    The Alternative to Alternative Radio
                  </a>
                </li>
                <li>
                  <a href="https://daily.bandcamp.com/college-radio-station/better-know-a-college-radio-station-georgia-techs-wrek" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Better Know a College Radio Station: Georgia Tech's WREK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-12 border-border" />

        <section id="books" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Books</h2>
          <h3 className="text-xl font-medium mb-4">Top 5 Books I Read In...</h3>
          
          <div className="space-y-6">
            <details className="border-b border-border pb-4">
              <summary className="text-lg font-medium cursor-pointer hover:text-primary">2026 (so far...)</summary>
              <ol className="mt-4 space-y-1 list-decimal list-inside">
                <li>Stoner by John Williams</li>
                <li>Perfection by Vicenzo Latronico</li>
                <li>Hyperpolitics by Anton Jager</li>
                <li>The Perfect Nanny by Leila Slimani</li>
                <li>Withering Heights by Emily Bronte</li>
              </ol>
            </details>

            <details className="border-b border-border pb-4">
              <summary className="text-lg font-medium cursor-pointer hover:text-primary">2025</summary>
              <ol className="mt-4 space-y-1 list-decimal list-inside">
                <li>The Secret History by Donna Tartt</li>
                <li>The Crying of Lot 49 by Thomas Pynchon</li>
                <li>Pedro Paramo by Juan Rulfo</li>
                <li>I Who Have Never Known Men by Jacqueline Harpman</li>
                <li>American Bulk by Emily Mester</li>
              </ol>
            </details>

            <details className="border-b border-border pb-4">
              <summary className="text-lg font-medium cursor-pointer hover:text-primary">2024</summary>
              <ol className="mt-4 space-y-1 list-decimal list-inside">
                <li>Anna Karenina by Tolstoy</li>
                <li>Rejection by Tony Tulathimutte</li>
                <li>Zen and the Art of Motorcycle Maintenance by Robert Pirsig</li>
                <li>Seeing is the act of forgetting the name of the thing one sees - Robert Irwin</li>
                <li>AI Superpowers- China, Silicon Valley, and the New World Order - Kai Fu Lee</li>
              </ol>
            </details>
          </div>
        </section>

        <footer className="mt-24 pb-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sheena Ganju</p>
        </footer>
      </main>
    </div>
  )
}

export default App