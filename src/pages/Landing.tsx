import Dialog from "@/components/Dialog"
import DialogAnswer from "@/components/DialogAnswer"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"

export default function Landing() {
  return (
    <Dialog>
      <DialogQuestion>Hello there.</DialogQuestion>
      <DialogSeparator />
      <DialogAnswer href={"/dispatch"}>Who are you?</DialogAnswer>
    </Dialog>
  )
}
