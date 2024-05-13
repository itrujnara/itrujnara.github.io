import Dialog from "@/components/Dialog"
import DialogAnswer from "@/components/DialogAnswer"
import DialogBack from "@/components/DialogBack"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"

export default function Email() {
  return (
    <Dialog>
      <DialogQuestion>What is the subject of the email?</DialogQuestion>
      <DialogSeparator />
      <DialogAnswer href="/sciEmail">
        I want to ask questions or cooperate on scientific topics.
      </DialogAnswer>
      <DialogAnswer href="/genEmail">
        I want to talk about game dev or other topics.
      </DialogAnswer>
      <DialogAnswer href="/autoEmail">
        I want to add you to a newsletter or mailing list.
      </DialogAnswer>
      <DialogBack />
    </Dialog>
  )
}
