import Dialog from "@/components/Dialog"
import DialogBack from "@/components/DialogBack"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"

export default function AutoEmail() {
  return (
    <Dialog>
      <DialogQuestion>
        Direct any automated communication and newsletters to itrujnara (at)
        wp.pl
      </DialogQuestion>
      <DialogSeparator />
      <DialogBack />
    </Dialog>
  )
}
