import { To } from "react-router"
import DialogAnswer from "./DialogAnswer"

export default function DialogBack() {
  return <DialogAnswer href={-1 as To}>Nevermind, go back.</DialogAnswer>
}
