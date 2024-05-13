import Dialog from "@/components/Dialog"
import DialogBack from "@/components/DialogBack"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"

export default function GenEmail() {
  return (
    <Dialog>
      <DialogQuestion>
        For game dev and general topics contact me on itrujnara (at) gmail.com
      </DialogQuestion>
      <DialogSeparator />
      <DialogBack />
    </Dialog>
  )
}
