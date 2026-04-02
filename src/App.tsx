import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GithubLogo, LinkedinLogo, Books, Headphones, Boat } from "@phosphor-icons/react"

const fancyLink = "no-underline bg-gradient-to-r from-foreground to-foreground bg-[length:0_1px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_1px] transition-[background-size,opacity] opacity-90 hover:opacity-100"

function App() {
  return (
    <div className="min-h-screen bg-background bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(900px_circle_at_90%_0%,rgba(236,72,153,0.12),transparent_45%)]">
      <nav className="site-header sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/60 shadow-sm shadow-black/5 dark:shadow-black/20">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <div className="flex items-center gap-8 text-sm">
            <a href="#about" className="no-underline hover:opacity-60 transition-opacity">About</a>
            <a href="#projects" className="no-underline hover:opacity-60 transition-opacity">Projects</a>
            <a href="#passions" className="no-underline hover:opacity-60 transition-opacity">Passions</a>
            <a href="#contact" className="no-underline hover:opacity-60 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-14 text-[15.5px] leading-7">
        <header id="about" className="mb-8 scroll-mt-28">
          <h1 className="text-4xl mb-2 tracking-tight">Sheena Ganju</h1>
        </header>

        <section className="mb-10">
          <div className="space-y-6">
            <p>
              I'm a Product Manager based in New York City. I currently lead product for Copilot Chat on github.com (<a href="https://github.com/copilot" target="_blank" rel="noopener noreferrer" className={fancyLink}>github.com/copilot</a>)
            </p>

            <div>
              <p className="mb-3 flex items-center gap-1"> Some of our recent work:</p>
              <ul className="space-y-2 pl-6 list-disc">
                <li>
                  <a href="https://github.blog/changelog/2026-03-11-explore-a-repository-using-copilot-on-the-web" target="_blank" rel="noopener noreferrer" className={fancyLink}>
                    Explore a repository using Copilot on the web
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2026-02-25-improved-web-search-in-copilot-on-github-com/" target="_blank" rel="noopener noreferrer" className={fancyLink}>
                    Improved web search in Copilot on GitHub.com
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2026-02-25-generate-pull-request-titles-with-copilot-on-the-web/" target="_blank" rel="noopener noreferrer" className={fancyLink}>
                    Generate pull request titles with Copilot on the web
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2026-02-04-showing-tool-calls-and-other-improvements-to-copilot-chat-on-the-web/" target="_blank" rel="noopener noreferrer" className={fancyLink}>
                    Showing tool calls and other improvements to Copilot Chat on the web
                  </a>
                </li>
                <li>
                  <a href="https://github.blog/changelog/2025-10-15-copilot-generated-commit-messages-on-github-com-are-generally-available/" target="_blank" rel="noopener noreferrer" className={fancyLink}>
                    Copilot-generated commit messages on GitHub.com are generally available
                  </a>
                </li>
              </ul>
            </div>

            <p>
              Previously, I worked in product at Venmo, where I helped launch and grow <a href="https://venmo.com/business/profiles" target="_blank" rel="noopener noreferrer" className={fancyLink}>Venmo Business Profiles</a> and <a href="https://techcrunch.com/2022/10/03/venmo-charity-profiles-raise-funds-directly-within-app/" target="_blank" rel="noopener noreferrer" className={fancyLink}>Venmo Charity Profiles</a>.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-20 scroll-mt-28">
          <h2 className="text-2xl mb-8">Projects
          </h2>
          
          <div>
            <a href="https://sheenyg.github.io/wouldreads/" target="_blank" rel="noopener noreferrer" className={fancyLink}>
              wouldreads
            </a>
            <p className="mt-2">A news aggregator app that gathers articles from sites I visit frequently. Check it out! </p>
          </div>
        </section>

        <section id="passions" className="mb-20 scroll-mt-28">
          <h2 className="text-2xl mb-8">Passions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg mb-3 flex items-center gap-1"> Music </h3>
              <ul className="space-y-2 pl-6 list-disc">
                <li>
                  <a href="https://bleedernyc.bandcamp.com/album/bleeder-ep" target="_blank" rel="noopener noreferrer" className={fancyLink}>
                    Bleeder EP
                  </a>
                </li>
                <li>
                  <a href="https://www.gtalumni.org/news/2018/the-alternative-to-alternative-radio.html" target="_blank" rel="noopener noreferrer" className={fancyLink}>
                    The Alternative to Alternative Radio
                  </a>
                </li>
                <li>
                  <a href="https://daily.bandcamp.com/college-radio-station/better-know-a-college-radio-station-georgia-techs-wrek" target="_blank" rel="noopener noreferrer" className={fancyLink}>
                    Better Know a College Radio Station: Georgia Tech's WREK
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-3 flex items-center gap-1"> Books</h3>
              <p className="mb-4">My top 5 books of the last 3 years </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="2026" className="border-t border-border">
                  <AccordionTrigger className="text-base hover:no-underline py-4">2026 (so far...)</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ol className="space-y-1 list-decimal list-inside">
                      <li>Stoner by John Williams</li>
                      <li>Hyperpolitics by Anton Jager</li>
                      <li>The Perfect Nanny by Leila Slimani</li>
                      <li>Wuthering Heights by Emily Bronte</li>
                      <li>Perfection by Vicenzo Latronico</li>
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
                      <li>Seeing is the act of forgetting the name of the thing one sees by Robert Irwin</li>
                      <li>AI Superpowers - China, Silicon Valley, and the New World Order by Kai Fu Lee</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-20 scroll-mt-28">
          <h2 className="text-2xl mb-8">Contact me</h2>
          
          <div className="space-y-3">
            <div>
              <a href="https://github.com/sheenyg" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${fancyLink}`}>
                <GithubLogo />
                GitHub
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/sheenaganju" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${fancyLink}`}>
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
