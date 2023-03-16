import { Suspense } from "react";
import { Clock } from "./Clock.client";
import { Hello } from "./Hello.server";
import { SearchField } from "./SearchField.client";
import { UserList } from "./UserList.server";

export default function App({ selectedId, isEditing, searchText }) {
  return (
    <div className="main">
      <section className="col sidebar">
        <section className="sidebar-header">
          <strong>React + Prisma</strong>
        </section>

        <section className="sidebar-menu" role="menubar">
          <div>
            <SearchField />
            <Clock />
          </div>
        </section>

        <nav>
          <Suspense fallback={<div>Loading...</div>}>
            <UserList />
          </Suspense>
        </nav>
      </section>

      <section key={selectedId} className="col viewer">
        <Suspense fallback={<div>Loading...</div>}>
          <Hello searchText={searchText} />
        </Suspense>
      </section>
    </div>
  );
}
