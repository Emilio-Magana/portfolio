import Link from "next/link";

const lastUpdated = "May 2025";

export default function Privacy() {
  return (
    <article className="mt-8 pb-16">
      <div className="space-y-4">
        <h1 className="title text-5xl">privacy policy.</h1>
        <p>Last Updated: {lastUpdated}</p>
      </div>
      <div className="space-y-4">
        <h2 className="title text-3xl">Hey, Welcome!</h2>
        <p>
          Thanks for stopping by! This <b>Privacy Policy</b> is just here to let
          the viewer know how information is collected. To Start off my website
          is mainly about showcasing my work, and some personal info. In no
          shape nor form will ones own data be sold, traded, nor shared on here.
          If you shared something sensitive by accident, feel free to reach out,
          and I&apos;ll help you remove it.
        </p>
        <h2 className="title">What Information I Collect (Hint: Not Much)</h2>
        <p>
          Honestly, this is just a static portfolio site, so I don&apos;t
          actively collect any personal information. There&apos;s no account
          creation, no tracking cookies, and definitely no sneaky data
          gathering.
        </p>
        <p>
          The only information is that which has been submitted to intereact
          with EmiBot (the Chatbot), therefore please avoid sharing any
          confidential info in the chat.
        </p>
        <h2 className="font-serif text-5xl tracking-wide">
          How I Use the Info
        </h2>
        <p>Here&apos;s what I might do with any information I collect:</p>
        <ul>
          <li>Make sure the site is running smoothly</li>
          <li>Improve the website based on feedback you might share</li>
          <li>Respond to your questions or feedback</li>
        </ul>
        <h2 className="font-serif text-5xl tracking-wide">
          Security (The Internet Isn&apos;t Perfect)
        </h2>
        <p>
          I&apos;ll do my best to keep any info you share safe, but let&apos;s
          be real—no system is foolproof. While I&apos;ll take reasonable steps
          to protect your info, I can&apos;t promise 100% security.
        </p>

        <h2 className="font-serif text-5xl tracking-wide">Got Questions?</h2>
        <p>
          If you have any questions, concerns, or just want to say hi, drop me
          an email at{" "}
          <Link href="mailto:magana.emil.a@gmail.com">
            magana.emil.a@gmail.com
          </Link>
          I&apos;d love to hear from you!
        </p>
        <p> This policy is current as of {lastUpdated} </p>
      </div>
    </article>
  );
}
