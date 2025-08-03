// Bridge for clipboard operations between iframe and extension
window.addEventListener('message', async (event) => {
  // Verify the origin for security
  if (event.origin !== 'https://stunning-conkies-439278.netlify.app') {
    return;
  }

  const { type, data } = event.data;

  try {
    switch (type) {
      case 'CLIPBOARD_READ':
        // Read from clipboard using extension API
        const text = await navigator.clipboard.readText();
        // Send response back to iframe
        event.source.postMessage({
          type: 'CLIPBOARD_READ_RESPONSE',
          success: true,
          data: text
        }, event.origin);
        break;

      case 'CLIPBOARD_WRITE':
        // Write to clipboard using extension API
        await navigator.clipboard.writeText(data);
        // Send success response back to iframe
        event.source.postMessage({
          type: 'CLIPBOARD_WRITE_RESPONSE',
          success: true
        }, event.origin);
        break;

      default:
        console.warn('Unknown message type:', type);
    }
  } catch (error) {
    console.error('Clipboard operation failed:', error);
    // Send error response back to iframe
    event.source.postMessage({
      type: type === 'CLIPBOARD_READ' ? 'CLIPBOARD_READ_RESPONSE' : 'CLIPBOARD_WRITE_RESPONSE',
      success: false,
      error: error.message
    }, event.origin);
  }
});

console.log('Clipboard bridge initialized for side panel');
