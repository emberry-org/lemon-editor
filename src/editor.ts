import { markdown } from "@codemirror/lang-markdown";
import { EditorState, Extension } from "@codemirror/state";
import { keymap } from "@codemirror/view";
import { EditorView, minimalSetup } from "codemirror";
import { LemonConfig } from "./config";


export class LemonEditor {

  private view: EditorView;
  private extensions: Extension | undefined;

  constructor(config: LemonConfig) {

    // Create a collection of all the extensions.
    this.extensions = [
      keymap.of([{ key: 'Enter', run: () => { config.onSubmit(); return true; } }]), 
      minimalSetup, 
      markdown()
    ];

    // Initialize the editor view.
    this.view = new EditorView({
      doc: config.content,
      extensions: this.extensions,
      parent: config.container,
    });
  }

  /** The current contents of the editor */
  get value(): string {
    return this.view.state.doc.toString();
  }

  /** Clear the contents of the editor */
  clear() {
    // Create a new state with an empty document.
    this.view.setState(EditorState.create({
      extensions: this.extensions,
    }));
  }
}