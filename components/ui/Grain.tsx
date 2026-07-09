/* Fixed film-grain overlay. Sits above content, ignores pointer events,
   and adds a faint physical texture so surfaces never read as sterile flat. */
export function Grain() {
  return <div className="grain-overlay" aria-hidden />;
}
