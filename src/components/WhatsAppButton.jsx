 export const companyPhoneNumber = "+61478160445";
function WhatsAppButton() {
 
  return (
    <a
      className="whatsapp-button"
      rel="noopener noreferrer"
      target="_blank" // Added this so it opens in a new tab
      href={`https://wa.me/${companyPhoneNumber}`} //Added so it opens the company whats app chat
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.03 3.2A12.73 12.73 0 0 0 5.17 22.58L3.6 28.8l6.36-1.48A12.77 12.77 0 1 0 16.03 3.2Zm0 2.3a10.48 10.48 0 1 1-5.35 19.5l-.5-.3-3.22.75.8-3.14-.33-.52A10.44 10.44 0 0 1 16.03 5.5Zm-4.2 4.75c-.23 0-.6.08-.92.43-.32.35-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.38 3.82 5.86 5.2 2.9 1.15 3.49.92 4.12.86.63-.06 2.03-.83 2.32-1.63.29-.8.29-1.48.2-1.63-.08-.15-.31-.23-.65-.4-.34-.17-2.02-1-2.33-1.11-.31-.12-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.75-1.7-1.02-.91-1.7-2.03-1.9-2.37-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.76-1.85-1.05-2.53-.27-.65-.56-.66-.82-.67h-.66Z"
        />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
