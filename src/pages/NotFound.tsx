import Dialog from "@/components/Dialog"
import DialogBack from "@/components/DialogBack"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"

export default function NotFound() {
  return (
    <Dialog>
      <DialogQuestion>
        I'm not ready to talk about this topic. Come back later if you want to
        discuss it.
      </DialogQuestion>
      <DialogSeparator />
      <DialogBack />
    </Dialog>
  )
}
