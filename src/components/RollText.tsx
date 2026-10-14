/** Label that rolls up to a duplicate of itself when its link/button is hovered. */
export function RollText({ children }: { children: string }) {
  return (
    <span className="roll">
      <span className="roll__track">
        <span className="roll__line">{children}</span>
        <span className="roll__line" aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
  )
}
