export function createModal() {
  const overlay = document.createElement("div");
  overlay.className = "modalOverlay active";

  const modal = document.createElement("div");
  modal.className = "modal";

  const header = document.createElement("div");
  header.className = "modalHeader";

  const title = document.createElement("h2");
  title.className = "modalTitle";
  title.textContent = "Realizar A Compra?";

  const content = document.createElement("div");
  content.className = "modalContent";

  const footer = document.createElement("div");
  footer.className = "modalFooter";

  const cancelButton = document.createElement("button");
  cancelButton.className = "modalBtn modalBtnDanger";
  cancelButton.textContent = "Cancelar";

  const saveButton = document.createElement("button");
  saveButton.className = "modalBtn modalBtnPrimary";
  saveButton.textContent = "Comprar";

  footer.append(cancelButton, saveButton);
  header.append(title);
  modal.append(header, content, footer);

  overlay.append(modal);
  document.body.append(overlay);

  function closeModal() {
    overlay.remove();
  }

  cancelButton.addEventListener("click", () => closeModal());

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  saveButton.addEventListener("click", () => {
    title.textContent = "Compra Confirmada 👌";
    footer.remove();
  });
}