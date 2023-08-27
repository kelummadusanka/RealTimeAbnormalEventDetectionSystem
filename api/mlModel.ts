
let setFps:Function;
let setEncryptedImageUrl:Function;
let setOriginalImageUrl:Function;

export const initSource = (setEncryptedImageUri:Function,setOriginalImageUri:Function)=>{
    setEncryptedImageUrl=setEncryptedImageUri;
    setOriginalImageUrl=setOriginalImageUri;
}

export const set_fps = (setfps:Function)=>{
    setFps=setfps
}

export const createCon = ()=>{
    const ws = new WebSocket("ws://localhost:8765");

    ws.onmessage = event => {
      const receivedData = JSON.parse(event.data);
      const iv = new Uint8Array(atob(receivedData.iv).split("").map(char => char.charCodeAt(0)));
      const encrypted_image = new Uint8Array(atob(receivedData.encrypted_image).split("").map(char => char.charCodeAt(0)));
      const original_image = new Uint8Array(atob(receivedData.original_image).split("").map(char => char.charCodeAt(0)));
      setFps( parseFloat(receivedData.fps));
    
      const blob_original = new Blob([original_image], { type: "image/jpeg" });
      const original = URL.createObjectURL(blob_original);
      setOriginalImageUrl(original)
    
      const blob_encrypted = new Blob([encrypted_image], { type: "image/jpeg" });
      const encrypted = URL.createObjectURL(blob_encrypted);
      setEncryptedImageUrl(encrypted)

      return ws
    };

}




