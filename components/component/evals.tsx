import Link from "next/link";
import Image from "next/image";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function Evals() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Image src="/nav_bar_logo_black.png" width={170} height={170} alt="Adalabs" />
          <span className="sr-only">Adalabs</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Meet Adalabs
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Adalabs Solutions
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Adalabs Insights
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact Adalabs
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="full-height-section">
          <div className="px-4 md:px-6 space-y-8 xl:space-y-12 pb-8">
            <div className="grid max-w-[1400px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 pt-8 md:pt-16 lg:pt-20 pb-8">
              <div>
                <img
                  className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-3/4 mb-4"
                  src="/1_(2).png"
                />
              </div>
              <div className="space-y-6">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-[4rem] 2xl:text-[4.30rem]">
                  Strategic Innovation.
                  <br />
                  Seamless AI.
                  <br />
                  Infinite Possibilities.
                </h1>
                <div className="border-b border-muted my-6" />
                <p className="mt-6 mb-8 text-lg md:text-xl lg:text-2xl">
                  Adalabs empowers businesses to seamlessly harness the transformative power of artificial intelligence.
                  We provide expert advice and tailored solutions across the AI spectrum – from machine learning and big
                  data to language models, generative AI and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="full-height-section w-full pt-8 md:pt-16 lg:pt-20 border-y pb-8">
          <div className="px-4 md:px-6 space-y-8 xl:space-y-12">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <img
                  src="/meet_adalabs.webp"
                  width="300"
                  height="169"
                  alt="Meet Adalabs"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="lg:leading-tighter text-xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-[3rem] 2xl:text-[3.25rem]">
                  Meet Adalabs
                </h2>
                <p className="text-base">
                  Seamlessly harness the transformative power of AI. Adalabs combines deep and longstanding
                  technological expertise with strategy, financial and operational acumen to elevate decision-making and
                  operational efficiency, unlocking insight and competitive advantages to drive growth. Founded by
                  C-Suite executives with decades of experience in technology, strategy, operations, and finance.
                </p>
              </div>
            </div>
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Nick Themelis</h3>
                <p>
                  30+ Year C-Suite Technology Leader, Consistently on the Cutting Edge
                  <br />
                  Co-Founder – Adalabs
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Nick Themelis has been an international technology business leader for over 30 years, including 26
                  years as a Chief Information Officer (CIO/CTO) driving innovation from product and data advances to
                  early adoption of machine learning and AI applications in financial technology. He has combined
                  strategic thinking, deep passion for team and clients with financial discipline to consistently
                  deliver best of breed technology and drive strong financial results.
                </p>
              </div>
            </div>
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Jennifer Drake</h3>
                <p>
                  Combining C-Suite Expertise in Strategy and Finance with Hands-On Operational Leadership.
                  <br />
                  Co-Founder – Adalabs
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Jennifer Drake is a dynamic and accomplished executive with an ability to drive expansion and
                  innovation, positioning companies for success in emerging sectors and growth areas. Jen’s combination
                  of deep financial expertise and hands-on operational leadership, analytical rigor and intellectual
                  curiosity, alongside her ability to build strong relationships and drive business development have
                  helped position for success across industries.
                </p>
              </div>
            </div>
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Ketul Polara</h3>
                <p>
                  Machine Learning Engineer.
                  <br />
                  Co-Founder – Adalabs
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="full-height-section w-full pt-4 md:pt-8 lg:pt-12 border-y pb-8">
          <div className="px-4 md:px-6 space-y-8 xl:space-y-12">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <img
                  src="/adalabs_solutions.webp"
                  width="300"
                  height="169"
                  alt="Adalabs Solutions"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="lg:leading-tighter text-xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-[3rem] 2xl:text-[3.25rem]">
                  Adalabs Solutions
                </h2>
                <h3 className="text-xl font-bold">
                  Maximize the AI opportunities of today. Prepare for the power of AI tomorrow.
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Collapsible className="rounded-lg border bg-background p-4 shadow-sm">
                    <CollapsibleTrigger className="flex items-center justify-between">
                      <div className="font-medium">Technology</div>
                      <div className="h-4 w-4 transition-transform duration-300 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="text-sm text-muted-foreground">
                        [TBD – Models, Developer Resources, Vendors, Expectations on the Horizon] outcomes.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible className="rounded-lg border bg-background p-4 shadow-sm">
                    <CollapsibleTrigger className="flex items-center justify-between">
                      <div className="font-medium">Data</div>
                      <div className="h-4 w-4 transition-transform duration-300 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="text-sm text-muted-foreground">
                        Foundational Core, Repeatable Processes, Optimized for AI Integration.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible className="rounded-lg border bg-background p-4 shadow-sm">
                    <CollapsibleTrigger className="flex items-center justify-between">
                      <div className="font-medium">People</div>
                      <div className="h-4 w-4 transition-transform duration-300 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="text-sm text-muted-foreground">
                        Encouraging Adoption – Technology not just Easy but Exciting to Use, Foster Understanding &amp;
                        Generate Grassroots Use Cases; Always Safe &amp; Compliant.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible className="rounded-lg border bg-background p-4 shadow-sm">
                    <CollapsibleTrigger className="flex items-center justify-between">
                      <div className="font-medium">Strategy</div>
                      <div className="h-4 w-4 transition-transform duration-300 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="text-sm text-muted-foreground">
                        [TBD – AI Strategy &amp; Roadmap, State of Peer &amp; Client AI Adoption, Expectations on the
                        Horizon].
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 md:px-6 space-y-8 xl:space-y-12">
            <div
              className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16"
              style={{ marginTop: "4rem" }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Every business is unique, with unique needs and opportunities.</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Collapsible className="rounded-lg border bg-background p-4 shadow-sm">
                    <CollapsibleTrigger className="flex items-center justify-between">
                      <div className="font-medium">Adalabs Evaluation</div>
                      <div className="h-4 w-4 transition-transform duration-300 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="text-sm text-muted-foreground">
                        [Data, Data Architecture, Processes, Team, Goals].
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible className="rounded-lg border bg-background p-4 shadow-sm">
                    <CollapsibleTrigger className="flex items-center justify-between">
                      <div className="font-medium">Adalabs Benchmarking</div>
                      <div className="h-4 w-4 transition-transform duration-300 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="text-sm text-muted-foreground">
                        [Positioning vs Peers ; Client Considerations – What do my stakeholders expect?].
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible className="rounded-lg border bg-background p-4 shadow-sm">
                    <CollapsibleTrigger className="flex items-center justify-between">
                      <div className="font-medium">Adalabs Adoption</div>
                      <div className="h-4 w-4 transition-transform duration-300 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="text-sm text-muted-foreground">
                        [Focus on the Human Element and Clear Business Cases = Key to Success]. innovation.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible className="rounded-lg border bg-background p-4 shadow-sm">
                    <CollapsibleTrigger className="flex items-center justify-between">
                      <div className="font-medium">Adalabs AI Strategy &amp; Roadmap</div>
                      <div className="h-4 w-4 transition-transform duration-300 data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="text-sm text-muted-foreground">
                        [Prepare your data, systems and processes; Prepare your teams; Unlock opportunities for value
                        creation; Identify workflow and data optimization; Mitigate risks].
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              <div>
                <img
                  src="/adalans_solutions_2.webp"
                  width="300"
                  height="169"
                  alt="Adalabs Solutions"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="full-height-section w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2 max-w-[1300px] mx-auto">
            <div className="flex items-center justify-center">
              <img
                src="/adalabs_insights.webp"
                alt="Adalabs Insights"
                width={600}
                height={400}
                className="aspect-video overflow-hidden rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Essential Insights</h2>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Adalabs Insights</div>
              </div>
              <div className="grid gap-4">
                <Link
                  href="#"
                  className="group grid grid-cols-[48px_1fr] items-start gap-4 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <div className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-m font-medium leading-none group-hover:underline">Insight 1</div>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                      <br />
                      <br />
                      Date posted: 01/01/2024
                      <br />
                      Estimated time: 2mins
                    </p>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid grid-cols-[48px_1fr] items-start gap-4 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <div className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-m font-medium leading-none group-hover:underline">Insight 2</div>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                      <br />
                      <br />
                      Date posted: 01/01/2024
                      <br />
                      Estimated time: 2mins
                    </p>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid grid-cols-[48px_1fr] items-start gap-4 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                  style={{ marginTop: "-1rem" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <div className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-m font-medium leading-none group-hover:underline">Insight 3</div>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                      <br />
                      <br />
                      Date posted: 01/01/2024
                      <br />
                      Estimated time: 2mins
                    </p>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid grid-cols-[48px_1fr] items-start gap-4 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <div className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-m font-medium leading-none group-hover:underline">Insight 4</div>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                      <br />
                      <br />
                      Date posted: 01/01/2024
                      <br />
                      Estimated time: 2mins
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Adalabs. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export { MountainIcon, XIcon };
