import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './App.css';

function App() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '',
        // Caret sits in the document on open; no click needed to start typing.
        autofocus: 'end',
        editorProps: {
            attributes: {
                class: 'manuscript',
                spellcheck: 'true',
            },
        },
    });

    return (
        <div id="App" className="app-shell">
            <header className="title-bar">
                <input
                    className="doc-title"
                    placeholder="Untitled"
                    aria-label="Document title"
                    spellCheck={false}
                    autoComplete="off"
                />
            </header>
            <main className="editor-surface">
                <EditorContent editor={editor}/>
            </main>
        </div>
    );
}

export default App
