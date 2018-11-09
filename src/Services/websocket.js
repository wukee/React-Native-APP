let ws=null;
export function initWebsocket(){
    ws=new WebSocket("ws://192.168.2.107:8070//taskInfo/onChange");
ws.onopen=(Webhome)=>{

    console.log('success')
}
ws.onerror=(e)=>{
    console.log(e.message)
}
    ws.onclose=(e)=>{
        console.log(e.code,e.reason)
    }
ws.onmessage=(e)=>{
    console.log(e)
}
}