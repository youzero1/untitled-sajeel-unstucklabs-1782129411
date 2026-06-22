import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className="flex min-h-screen items-center justify-center bg-orange-50 px-6 text-center">
              <div className="rounded-3xl bg-white p-10 shadow-xl shadow-orange-100">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Food delivery app preview</p>
                <h1 className="mt-4 text-4xl font-black text-stone-950">Fresh meals, delivered fast.</h1>
              </div>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
