import IconLink from "@/components/ui/icon_link";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <div className="contact text-justify">
      <h1 className="text-center mb-4">Contact</h1>
      <p className="text-lg my-4">
        I am open to collaboration, job opportunities, and any inquiries you may
        have. Feel free to reach out to me through email or instant messaging.
      </p>

      <h2>Email</h2>
      <p className="">
        Scientific inquiries:
        <IconLink
          icon={faEnvelope}
          href="mailto:igor.trujnara@irbbarcelona.org"
        />
      </p>
      <p>
        General inquiries:
        <IconLink icon={faEnvelope} href="mailto:itrujnara@gmail.com" />
      </p>

      <h2>Social Media</h2>
      <p>Feel free to connect with me on social media:</p>
      <p>
        LinkedIn:{" "}
        <IconLink
          icon={faLinkedin}
          href="https://www.linkedin.com/in/itrujnara/"
        />
      </p>
      <p>I post about new publications and jobs. I rarely check messages.</p>
      <p>
        GitHub: <IconLink icon={faGithub} href="https://github.com/itrujnara" />
      </p>
      <p>
        I post my code and projects here. Feel free to open issues or pull
        requests!
      </p>
      <p>
        {" "}
        Facebook:
        <IconLink icon={faFacebook} href="https://www.facebook.com/itrujnara" />
      </p>
      <p>
        Use for messages only. I generally do not post or reply to feed posts.
      </p>
      <p>
        Instagram:{" "}
        <IconLink
          icon={faInstagram}
          href="https://www.instagram.com/itrujnara"
        />
      </p>
      <p>
        I post occasional life updates here. Feel free to follow, but don't
        expect science.
      </p>
    </div>
  );
}
