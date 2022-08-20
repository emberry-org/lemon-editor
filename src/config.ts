export interface LemonConfig {
  /** The container that the lemon editor will be placed inside of */
  container: HTMLDivElement;
  /** The initial content of the lemon editor */
  content: string;
  /** An event called when the user presses the Enter key */
  onSubmit: () => void;
}