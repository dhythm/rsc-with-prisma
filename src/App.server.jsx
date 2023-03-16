import { Suspense } from "react";

export default function App({ selectedId, isEditing, searchText }) {
  return (
    <div className="main">
      <section className="col sidebar">
        <section className="sidebar-header">
          <strong>React + Prisma</strong>
        </section>

        <section className="sidebar-menu" role="menubar">
          <div>Sidebar Menu</div>
        </section>

        <nav>
          <Suspense fallback={<div>Loading...</div>}>Nav</Suspense>
        </nav>
      </section>

      <section key={selectedId} className="col viewer">
        <Suspense fallback={<div>Loading...</div>}>Viewer</Suspense>
      </section>
    </div>
  );
}
