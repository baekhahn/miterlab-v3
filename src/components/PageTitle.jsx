// Shared page title. Single source of truth for title styling + 24px bottom gap.
// `actions` renders inline to the right of the title (e.g. the Archive view toggle).
export default function PageTitle({ children, actions }) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
      <h1 className="text-4xl font-medium tracking-tight desktop:text-6xl">{children}</h1>
      {actions}
    </div>
  )
}
