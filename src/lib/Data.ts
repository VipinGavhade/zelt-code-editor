import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

interface FeaturesItemsItemType {
  id: number;
  title: string;
  description: string;
  iconColor: string;
  image: string;
  icon: IconName;
  imagePosition: "left" | "right";
}

export const FeaturesItems: FeaturesItemsItemType[] = [
  {
    id: 1,
    title: "Fast and Lightweight",
    description:
      "Experience a code editor that is optimized for speed and efficiency, ensuring a smooth coding experience without unnecessary bloat.",
    icon: "Gauge",
    iconColor: "red",
    image: "https://library.shadcnblocks.com/images/block/placeholder-1.svg",
    imagePosition: "right",
  },
  {
    id: 2,
    title: "Web Based Editor",
    description:
      "Access your code editor from anywhere with an internet connection. No installations required, just open your browser and start coding.",
    icon: "Globe",
    iconColor: "blue",
    image: "https://library.shadcnblocks.com/images/block/placeholder-2.svg",
    imagePosition: "left",
  },
  {
    id: 3,
    title: "Using Paston Compiler",
    description:
      "Built on the Paston compiler, Zelt Code Editor provides a robust and reliable coding environment with advanced features for modern development.",
    icon: "Code",
    iconColor: "green",
    image: "https://library.shadcnblocks.com/images/block/placeholder-3.svg",
    imagePosition: "right",
  },
];

export const languages = [
  {
    value: "javascript",
    label: "JavaScript",
    version: "18.15.0",
    snippets: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  },
  {
    value: "typescript",
    label: "TypeScript",
    version: "5.0.3",
    snippets: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  },
  {
    value: "python",
    label: "Python",
    version: "3.10.0",
    snippets: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  },
  {
    value: "csharp",
    label: "C#",
    version: "6.12.0",
    snippets:
      'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  },
];

export const fqa = [
  {
    id: 1,
    q: "What is Zelt?",
    a: "Zelt is a web-based fast code editor that you can use without any cost or installation.",
  },
  {
    id: 2,
    q: "Is Zelt free to use?",
    a: "Yes, Zelt is completely free to use. No subscription or payment is required.",
  },
  {
    id: 3,
    q: "Do I need to install anything to use Zelt?",
    a: "No, Zelt is fully web-based, so you can use it directly in your browser without any installation.",
  },
  {
    id: 4,
    q: "What programming languages are supported by Zelt?",
    a: "Zelt supports multiple programming languages including JavaScript, Python, HTML, CSS, and more.",
  },
  {
    id: 5,
    q: "Is Zelt suitable for beginners?",
    a: "Absolutely! Zelt’s intuitive interface makes it easy for beginners to start coding right away.",
  },
  {
    id: 6,
    q: "Can I save my work in Zelt?",
    a: "Yes, you can save your work either locally or to your cloud account for future access.",
  },
  {
    id: 7,
    q: "Does Zelt have more upcoming features?",
    a: "Yes, Zelt is constantly evolving, and there are several exciting features planned for the future.",
  },
  {
    id: 8,
    q: "Who created Zelt?",
    a: "Zelt was created by Mayur Gavhade, the founder behind the platform.",
  },
];
