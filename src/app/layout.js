import "./globals.css";

export const metadata = {
  title: "Truth or Dare Online | Free Fun Game for Friends & Couples",
  description:
    "Play Truth or Dare online with friends! Choose classic, funny, flirty, or extreme questions. Free, fun, and no login needed.",
  keywords: [
    "truth or dare",
    "online truth or dare",
    "truth questions",
    "dare challenges",
    "party game",
    "fun games for friends",
    "flirty dares",
    "kids truth or dare",
    "adult party game",
  ],
  openGraph: {
    title: "Truth or Dare Online | Free Fun Game for Friends & Couples",
    description:
      "The ultimate online Truth or Dare game. Choose categories like Kids, Teens, Couples, or Adults. Play instantly on mobile or desktop.",
    url: "https://yourdomain.com",
    siteName: "Truth or Dare Game",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Truth or Dare Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truth or Dare Online",
    description:
      "Play Truth or Dare online! Classic and crazy challenges for kids, friends, and couples.",
    images: ["https://yourdomain.com/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/face.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
