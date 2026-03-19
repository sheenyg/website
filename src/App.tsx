import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Link as LinkIcon } from "@phosphor-icons/react"

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-4">
          <div className="flex flex-wrap gap-6 text-sm md:text-base">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('passions')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Passions
            </button>
            <button 
              onClick={() => scrollToSection('books')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Books
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <header className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
            Sheena Ganju
          </h1>
        </header>

        <div className="space-y-16 md:space-y-24">
          <section id="about">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">About Me</h2>
            <Card className="p-6 md:p-8 space-y-6">
              <p className="text-lg leading-relaxed">
                Currently running product for Copilot Chat on github.com (
                <a 
                  href="https://github.com/copilot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  github.com/copilot
                  <LinkIcon size={16} weight="bold" />
                </a>
                )
              </p>

              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-4">Some of our recent ships:</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://github.blog/changelog/2026-03-11-explore-a-repository-using-copilot-on-the-web"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2 transition-colors group"
                    >
                      <span className="text-base">Explore a repository using Copilot on the web</span>
                      <LinkIcon size={16} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.blog/changelog/2026-02-25-improved-web-search-in-copilot-on-github-com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2 transition-colors group"
                    >
                      <span className="text-base">Improved web search in Copilot on GitHub.com</span>
                      <LinkIcon size={16} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.blog/changelog/2026-02-25-generate-pull-request-titles-with-copilot-on-the-web/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2 transition-colors group"
                    >
                      <span className="text-base">Generate pull request titles with Copilot on the web</span>
                      <LinkIcon size={16} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.blog/changelog/2026-02-04-showing-tool-calls-and-other-improvements-to-copilot-chat-on-the-web/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2 transition-colors group"
                    >
                      <span className="text-base">Showing tool calls and other improvements to Copilot Chat on the web</span>
                      <LinkIcon size={16} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.blog/changelog/2025-10-15-copilot-generated-commit-messages-on-github-com-are-generally-available/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2 transition-colors group"
                    >
                      <span className="text-base">Copilot-generated commit messages on GitHub.com are generally available</span>
                      <LinkIcon size={16} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                Previously, I worked in product at Venmo where I helped launch and grow Venmo Business Profiles and Venmo Charity Profiles.
              </p>
            </Card>
          </section>

          <Separator />

          <section id="projects">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">Projects</h2>
            <Card className="p-6 md:p-8">
              <a 
                href="https://sheenyg.github.io/wouldreads/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-2 text-lg transition-colors group"
              >
                <span className="font-medium">wouldreads</span>
                <LinkIcon size={18} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-base leading-relaxed mt-3 text-muted-foreground">
                A news aggregator app that feeds articles from sites I visit frequently
              </p>
            </Card>
          </section>

          <Separator />

          <section id="passions">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">Passions</h2>
            <Card className="p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-3">Music</h3>
                <a 
                  href="https://bleedernyc.bandcamp.com/album/bleeder-ep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-2 text-base transition-colors group"
                >
                  <span>Bleeder EP</span>
                  <LinkIcon size={16} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-3">Radio</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://www.gtalumni.org/news/2018/the-alternative-to-alternative-radio.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2 text-base transition-colors group"
                    >
                      <span>The Alternative to Alternative Radio</span>
                      <LinkIcon size={16} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://daily.bandcamp.com/college-radio-station/better-know-a-college-radio-station-georgia-techs-wrek"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2 text-base transition-colors group"
                    >
                      <span>Better Know a College Radio Station: Georgia Tech's WREK</span>
                      <LinkIcon size={16} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          <Separator />

          <section id="books">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={32} weight="bold" className="text-primary" />
              <h2 className="text-3xl md:text-4xl font-semibold">Books</h2>
            </div>
            <Card className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-medium mb-6">Top 5 Books I Read In...</h3>
              <Accordion type="multiple" className="space-y-4">
                <AccordionItem value="2026" className="border-b border-border">
                  <AccordionTrigger className="text-lg md:text-xl font-medium hover:text-primary transition-colors">
                    2026 (so far...)
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="space-y-2 mt-4 list-decimal list-inside">
                      <li className="text-base leading-relaxed">Stoner by John Williams</li>
                      <li className="text-base leading-relaxed">Perfection by Vicenzo Latronico</li>
                      <li className="text-base leading-relaxed">Hyperpolitics by Anton Jager</li>
                      <li className="text-base leading-relaxed">The Perfect Nanny by Leila Slimani</li>
                      <li className="text-base leading-relaxed">Withering Heights by Emily Bronte</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="2025" className="border-b border-border">
                  <AccordionTrigger className="text-lg md:text-xl font-medium hover:text-primary transition-colors">
                    2025
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="space-y-2 mt-4 list-decimal list-inside">
                      <li className="text-base leading-relaxed">The Secret History by Donna Tartt</li>
                      <li className="text-base leading-relaxed">The Crying of Lot 49 by Thomas Pynchon</li>
                      <li className="text-base leading-relaxed">Pedro Paramo by Juan Rulfo</li>
                      <li className="text-base leading-relaxed">I Who Have Never Known Men by Jacqueline Harpman</li>
                      <li className="text-base leading-relaxed">American Bulk by Emily Mester</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="2024" className="border-none">
                  <AccordionTrigger className="text-lg md:text-xl font-medium hover:text-primary transition-colors">
                    2024
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="space-y-2 mt-4 list-decimal list-inside">
                      <li className="text-base leading-relaxed">Anna Karenina by Tolstoy</li>
                      <li className="text-base leading-relaxed">Rejection by Tony Tulathimutte</li>
                      <li className="text-base leading-relaxed">Zen and the Art of Motorcycle Maintenance by Robert Pirsig</li>
                      <li className="text-base leading-relaxed">Seeing is the act of forgetting the name of the thing one sees - Robert Irwin</li>
                      <li className="text-base leading-relaxed">AI Superpowers- China, Silicon Valley, and the New World Order - Kai Fu Lee</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </section>
        </div>

        <footer className="mt-24 pb-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sheena Ganju</p>
        </footer>
      </main>
    </div>
  )
}

export default App