import EditorUseClient from "./EditorUseClient";

export const dynamic = 'force-dynamic';

export default function Home() {
  console.log('EditorUseClient', EditorUseClient, typeof EditorUseClient, Object.keys(EditorUseClient));
  return (
    <main>
      <EditorUseClient />
    </main>
  );
}
