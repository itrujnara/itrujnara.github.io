import Dialog from "@/components/Dialog"
import DialogBack from "@/components/DialogBack"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"

export default function SciEmail() {
  return (
    <Dialog>
      <DialogQuestion>
        For scientific cooperation contact me on igor.trujnara (at) crg.eu
      </DialogQuestion>
      <DialogSeparator />
      <DialogBack />
    </Dialog>
  )
}
