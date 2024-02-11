import Dialog from "@/components/Dialog"
import DialogAnswer from "@/components/DialogAnswer"
import DialogBack from "@/components/DialogBack"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"

export default function AppDispatch() {
  return (
    <Dialog>
      <DialogQuestion>Which app do you want to use?</DialogQuestion>
      <DialogSeparator />
      <DialogAnswer href="https://itrujnara.github.io/arytmetyka">
        Arytmetyka
      </DialogAnswer>
      <DialogBack />
    </Dialog>
  )
}
