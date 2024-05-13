import Dialog from "@/components/Dialog"
import DialogAnswer from "@/components/DialogAnswer"
import DialogBack from "@/components/DialogBack"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"

export default function Phone() {
  return (
    <Dialog>
      <DialogQuestion>
        If you need to call me or message me on WhatsApp, send me an email and I
        will give you the number.
      </DialogQuestion>
      <DialogSeparator />
      <DialogAnswer href="/email">How do I send the email?</DialogAnswer>
      <DialogBack />
    </Dialog>
  )
}
