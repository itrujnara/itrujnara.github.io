import Dialog from "@/components/Dialog"
import DialogBack from "@/components/DialogBack"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"
import ExtLink from "@/components/ExtLink"

export default function AppDispatch() {
  return (
    <Dialog>
      <DialogQuestion>Which app do you want to use?</DialogQuestion>
      <DialogSeparator />
      <ExtLink href="https://itrujnara.github.io/arytmetyka">
        Arytmetyka
      </ExtLink>
      <DialogBack />
    </Dialog>
  )
}
