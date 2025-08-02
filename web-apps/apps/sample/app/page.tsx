import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          It's a Fresh Start!
        </h1>
        <p className="mt-2 text-lg text-zinc-400">
          Tailwind CSS should be working perfectly now.
        </p>
      </div>
      <Button appName="sample-web">Click Me</Button>
    </main>
  );
}
