import NiceLink from "@/components/ui/nice_link"

export default function NotFound() {
  return (
    <div className="text-xl text-justify">
      Could not find this page. <NiceLink to="/">Return to homepage?</NiceLink>
    </div>
  )
}
