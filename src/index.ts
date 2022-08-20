import "./index.css";

import { LemonConfig } from "./config";
import { LemonEditor } from "./editor";

/**
 * Attach a new lemon editor to a container.
 * 
 * @param {HTMLDivElement} container The container that the editor will attach to.
 * @returns The CodeMirror EditorView.
 */
export function attachLemon(config: LemonConfig): LemonEditor {
  return new LemonEditor(config);
}

export type { LemonEditor } from "./editor";