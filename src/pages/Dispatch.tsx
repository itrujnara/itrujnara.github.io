import Dialog from "@/components/Dialog"
import DialogAnswer from "@/components/DialogAnswer"
import DialogBack from "@/components/DialogBack"
import DialogQuestion from "@/components/DialogQuestion"
import DialogSeparator from "@/components/DialogSeparator"

export default function Dispatch() {
  return (
    <Dialog>
      <DialogQuestion>
        They call me Igor. Igor Trujnara. Although you might know me by
        different names. In any case, if you're here, you must have questions.
        What brings you here today?
      </DialogQuestion>
      <DialogSeparator />
      <DialogAnswer href="/resume">
        I want to talk about your work or hobbies.
      </DialogAnswer>
      <DialogAnswer href="/contact">I want to get in touch.</DialogAnswer>
      <DialogAnswer href="/appDispatch">
        I want to use your web apps.
      </DialogAnswer>
      <DialogBack />
    </Dialog>
  )
}
