import Dialog from "@/components/Dialog"
import DialogBack from "@/components/DialogBack"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"
import InfoFrame, { InfoParagraph } from "@/components/InfoFrame"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  XIcon,
} from "lucide-react"

export default function Socials() {
  return (
    <Dialog>
      <DialogQuestion>These are my main social media accounts.</DialogQuestion>
      <DialogSeparator />
      <InfoFrame>
        <InfoParagraph>
          <FacebookIcon /> /igor.trujnara
        </InfoParagraph>
        <InfoParagraph>
          <XIcon />{" "}
          <>
            (<TwitterIcon />)
          </>{" "}
          @itrujnara
        </InfoParagraph>
        <InfoParagraph>
          <InstagramIcon /> @itrujnara
        </InfoParagraph>
        <InfoParagraph>
          <LinkedinIcon /> @igortrujnara
        </InfoParagraph>
        <InfoParagraph>
          <span>ORCID</span> <span>0000-0002-8735-5976</span>
        </InfoParagraph>
      </InfoFrame>
      <DialogBack />
    </Dialog>
  )
}
