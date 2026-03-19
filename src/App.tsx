import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowSquareOut } from "@phosphor-icons/react"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-6">
            <Button variant="link" asChild className="p-0 h-auto">
              <a href="#about">About</a>
            </Button>
            <Button variant="link" asChild className="p-0 h-auto">
              <a href="#projects">Projects</a>
            </Button>
            <Button variant="link" asChild className="p-0 h-auto">
              <a href="#passions">Passions</a>
            </Button>
            <Button variant="link" asChild className="p-0 h-auto">
              <a href="#books">Books</a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-2">Sheena Ganju</h1>
        </header>

        <section id="about" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Currently running product for Copilot Chat on github.com (<a href="https://github.com/copilot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                  github.com/copilot
                  <ArrowSquareOut size={16} />
                </a>)
              </p>

              <div>
                <h3 className="text-xl font-medium mb-3">Some of our recent ships:</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://github.blog/changelog/2026-03-11-explore-a-repository-using-copilot-on-the-web" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      Explore a repository using Copilot on the web
                      <ArrowSquareOut size={16} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.blog/changelog/2026-02-25-improved-web-search-in-copilot-on-github-com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      Improved web search in Copilot on GitHub.com
                      <ArrowSquareOut size={16} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.blog/changelog/2026-02-25-generate-pull-request-titles-with-copilot-on-the-web/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      Generate pull request titles with Copilot on the web
                      <ArrowSquareOut size={16} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.blog/changelog/2026-02-04-showing-tool-calls-and-other-improvements-to-copilot-chat-on-the-web/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      Showing tool calls and other improvements to Copilot Chat on the web
                      <ArrowSquareOut size={16} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.blog/changelog/2025-10-15-copilot-generated-commit-messages-on-github-com-are-generally-available/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      Copilot-generated commit messages on GitHub.com are generally available
                      <ArrowSquareOut size={16} />
                    </a>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                Previously, I worked in product at Venmo where I helped launch and grow Venmo Business Profiles and Venmo Charity Profiles.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        <section id="projects" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="https://sheenyg.github.io/wouldreads/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-lg font-medium inline-flex items-center gap-1">
                wouldreads
                <ArrowSquareOut size={18} />
              </a>
              <CardDescription className="mt-2">
                A news aggregator app that feeds articles from sites I visit frequently
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        <section id="passions" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Passions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Music</h3>
                <a href="https://bleedernyc.bandcamp.com/album/bleeder-ep" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                  Bleeder EP
                  <ArrowSquareOut size={16} />
                </a>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Radio</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.gtalumni.org/news/2018/the-alternative-to-alternative-radio.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      The Alternative to Alternative Radio
                      <ArrowSquareOut size={16} />
                    </a>
                  </li>
                  <li>
                    <a href="https://daily.bandcamp.com/college-radio-station/better-know-a-college-radio-station-georgia-techs-wrek" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      Better Know a College Radio Station: Georgia Tech's WREK
                      <ArrowSquareOut size={16} />
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        <section id="books" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Books</CardTitle>
              <CardDescription>Top 5 Books I Read In...</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="2026">
                  <AccordionTrigger>2026 (so far...)</AccordionTrigger>
                  <AccordionContent>
                    <ol className="space-y-1 list-decimal list-inside">
                      <li>Stoner by John Williams</li>
                      <li>Perfection by Vicenzo Latronico</li>
                      <li>Hyperpolitics by Anton Jager</li>
                      <li>The Perfect Nanny by Leila Slimani</li>
                      <li>Withering Heights by Emily Bronte</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="2025">
                  <AccordionTrigger>2025</AccordionTrigger>
                  <AccordionContent>
                    <ol className="space-y-1 list-decimal list-inside">
                      <li>The Secret History by Donna Tartt</li>
                      <li>The Crying of Lot 49 by Thomas Pynchon</li>
                      <li>Pedro Paramo by Juan Rulfo</li>
                      <li>I Who Have Never Known Men by Jacqueline Harpman</li>
                      <li>American Bulk by Emily Mester</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="2024">
                  <AccordionTrigger>2024</AccordionTrigger>
                  <AccordionContent>
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
            </CardContent>
          </Card>
        </section>

        <footer className="mt-24 pb-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sheena Ganju</p>
        </footer>
      </main>
    </div>
  )
}

export default App