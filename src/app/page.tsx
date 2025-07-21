import { DynamicLucideIcon } from "@/components/layouts/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FeaturesItems, fqa } from "@/lib/Data";
import { Code, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <section
        id="HeroSection"
        className="py-32 flex flex-col items-center justify-center"
      >
        <div className="container flex flex-col items-center text-center">
          <h1 className="my-3 text-3xl font-bold text-pretty sm:text-4xl md:my-6 lg:text-6xl">
            Welcome to{" "}
            <span className="text-blue-500 font-extrabold">
              Zelt Code Editor
            </span>
          </h1>
          <p className="mb-6 max-w-xl text-muted-foreground lg:mb-12 lg:text-2xl">
            Zelt Code Editor is a fast, lightweight, and professional-grade
            environment for seamless coding, running, and debugging.
          </p>
          <div className="mb-6 flex gap-3 lg:mb-12">
            <Link href="/editor">
              <Button variant="default">
                <Code className="mr-2 h-4 w-4" />
                Open Editor
              </Button>
            </Link>
            <Link href="#AboutSection">
              <Button variant="outline">
                <UsersRound className="mr-2 h-4 w-4" />
                About Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="container w-full flex justify-center">
          <div className="aspect-video px-4">
            <Image
              src="/zelt-dark.png"
              alt="zelt-dark"
              width={1200} // Width for large screens
              height={675} // Height to maintain aspect ratio (16:9)
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw" // Adjust size for different screen widths
            />
          </div>
        </div>
      </section>

      <section
        id="Features"
        className="flex flex-col items-center justify-center p-3 lg:p-10"
      >
        <h1 className="text-2xl font-bold tracking-tight mb-6">Features</h1>
        <ul className="flex flex-col items-center justify-center space-y-4 md:space-y-6 lg:space-y-8">
          {FeaturesItems.map((item) => (
            <Card key={item.id} className="max-w-4xl">
              {item.imagePosition === "right" ? (
                <CardContent className="flex flex-col md:flex-row items-center">
                  <div className="max-w-3xs rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500} // Define the width
                      height={300} // Define the height
                      sizes="(max-width: 768px) 100vw, 50vw" // Optional responsive sizing
                    />
                  </div>
                  <div className="flex flex-col items-start md:ml-6 mt-4 md:mt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <DynamicLucideIcon
                        name={item.icon}
                        size={24}
                        color={item.iconColor}
                      />
                      <h2 className="text-xl font-bold">{item.title}</h2>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              ) : (
                <CardContent className="flex flex-col md:flex-row items-center">
                  <div className="md:hidden max-w-3xs rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500} // Define the width
                      height={300} // Define the height
                      sizes="(max-width: 768px) 100vw, 50vw" // Optional responsive sizing
                    />
                  </div>
                  <div className="flex flex-col items-start md:ml-6 mt-4 md:mt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <DynamicLucideIcon
                        name={item.icon}
                        size={24}
                        color={item.iconColor}
                      />
                      <h2 className="text-xl font-bold">{item.title}</h2>
                    </div>
                    <p className="text-muted-foreground px-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden md:block max-w-3xs rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500} // Define the width
                      height={300} // Define the height
                      sizes="(max-width: 768px) 100vw, 50vw" // Optional responsive sizing
                    />
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </ul>
      </section>

      <section
        className="pt-32 max-w-screen w-full justify-center items-center flex"
        id="fqa"
      >
        <div className="container max-w-3xl px-3">
          <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
            Frequently asked questions
          </h1>
          <Accordion type="single" collapsible>
            {fqa.map((item) => (
              <AccordionItem key={item.id} value={`${item.id}`}>
                <AccordionTrigger className="font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <footer className="p-4 text-center w-full" id="footer">
        <h1 className="text-3xl">Zelt - Code Editor</h1>
      </footer>
    </Suspense>
  );
};

export default Home;
