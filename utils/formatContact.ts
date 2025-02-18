export function formatContact(value: string, name: string) {
  let formattedValue = value;

  // Format phone number as user types
  if (name === "phoneNumber") {
    formattedValue = value.replace(/\D/g, "").slice(0, 10);
    if (formattedValue.length >= 6) {
      formattedValue = `${formattedValue.slice(0, 3)}-${formattedValue.slice(
        3,
        6,
      )}-${formattedValue.slice(6)}`;
    } else if (formattedValue.length >= 3) {
      formattedValue = `${formattedValue.slice(0, 3)}-${formattedValue.slice(
        3,
      )}`;
    }
  }
}
