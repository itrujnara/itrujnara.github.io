import Dialog from "@/components/Dialog"
import DialogAnswer from "@/components/DialogAnswer"
import DialogBack from "@/components/DialogBack"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"

export default function Contact() {
  return (
    <Dialog>
      <DialogQuestion>How do you want to get in touch?</DialogQuestion>
      <DialogSeparator />
      <DialogAnswer href="/email">I want to send an email.</DialogAnswer>
      <DialogAnswer href="/phone">I want to make a phone call.</DialogAnswer>
      <DialogAnswer href="/socials">
        I want to see your social media.
      </DialogAnswer>
      <DialogBack />
    </Dialog>
  )
}
